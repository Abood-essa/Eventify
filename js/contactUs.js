document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const inputs = {
    name: document.getElementById("nameInput"),
    phone: document.getElementById("phoneInput"),
    email: document.getElementById("emailInput"),
    message: document.getElementById("messageInput"),
  };

  // Show error under .mb-3
  function showError(input, message) {
    const container = input.closest(".mb-3");
    let error = container.querySelector(".error-message");

    if (!error) {
      error = document.createElement("small");
      error.classList.add("error-message");
      container.appendChild(error);
    }

    error.textContent = message;
  }

  // Remove error when typing
  function clearError(input) {
    const container = input.closest(".mb-3");
    const error = container.querySelector(".error-message");
    if (error) error.remove();
  }

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Remove old errors
    form.querySelectorAll(".error-message").forEach((e) => e.remove());

    // ===== VALIDATION =====

    // Name
    if (inputs.name.value.trim().length < 3) {
      showError(inputs.name, "Please enter your full name.");
      valid = false;
    }

    // Phone number (Jordan)
    const phoneRegex = /^(07)[0-9]{8}$/;
    if (!phoneRegex.test(inputs.phone.value.trim())) {
      showError(inputs.phone, "Phone must start with 07 and be 10 digits.");
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email.value.trim())) {
      showError(inputs.email, "Enter a valid email address.");
      valid = false;
    }

    // Message
    if (inputs.message.value.trim().length < 10) {
      showError(inputs.message, "Message must be at least 10 characters.");
      valid = false;
    }

    // Stop if invalid
    if (!valid) return;

    // ===== TEMPORARY SUCCESS (NO BACKEND YET) =====

    const msg = document.createElement("p");
    msg.textContent = "Your message has been sent! We will contact you soon.";
    msg.style.marginTop = "10px";
    msg.style.color = "green";
    msg.style.fontWeight = "600";
    form.appendChild(msg);

    console.log("Message submitted:", {
      name: inputs.name.value,
      phone: inputs.phone.value,
      email: inputs.email.value,
      message: inputs.message.value,
    });

    form.reset();
  });

  // Clear error on input
  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => clearError(field));
  });
});
