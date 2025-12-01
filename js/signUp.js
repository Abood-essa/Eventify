document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const nameInput = document.getElementById("signupName");
  const emailInput = document.getElementById("signupEmail");
  const passInput = document.getElementById("signupPassword");
  const termsInput = document.getElementById("terms");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();
    let valid = true;

    // NAME
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required");
      valid = false;
    }

    // EMAIL
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required");
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Invalid email format");
      valid = false;
    }

    // PASSWORD
    if (passInput.value.trim() === "") {
      showError(passInput, "Password is required");
      valid = false;
    }

    // TERMS
    if (!termsInput.checked) {
      showError(termsInput, "You must agree to the terms");
      valid = false;
    }

    if (!valid) return;

    // ⭐ Here you will call the backend later.
    // For now just simulate success + redirect to login
    console.log("Form is valid, sending to backend later...");
    window.location.href = "logIn.html";
  });

  function showError(input, message) {
    // go to the parent .mb-3 / .form-check and find its .error-message
    const group = input.closest(".mb-3, .form-check");
    if (!group) return;
    const small = group.querySelector(".error-message");
    if (!small) return;
    small.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
    });
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
});
