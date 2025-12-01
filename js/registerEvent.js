document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");

  // Success message element (we will insert it once)
  let successMsg = null;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Reset errors
    document.querySelectorAll(".error-message").forEach((msg) => {
      msg.textContent = "";
    });

    document.querySelectorAll(".form-control").forEach((inp) => {
      inp.classList.remove("is-invalid");
    });

    // Remove previous success message
    if (successMsg) successMsg.textContent = "";

    // --- Validation ---
    if (fullName.value.trim() === "") {
      setError(fullName, "Full name is required");
      valid = false;
    }

    if (email.value.trim() === "") {
      setError(email, "Email is required");
      valid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      setError(email, "Enter a valid email");
      valid = false;
    }

    if (contact.value.trim() === "") {
      setError(contact, "Contact number is required");
      valid = false;
    } else if (isNaN(contact.value.trim()) || contact.value.trim().length < 9) {
      setError(contact, "Enter a valid contact number");
      valid = false;
    }

    if (!valid) return;

    // ============================
    //   SAVE REGISTRATION LOCALLY
    // ============================

    const registration = {
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      contact: contact.value.trim(),
      eventId: 7, // later dynamic
      date: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("eventRegistrations")) || [];

    existing.push(registration);

    localStorage.setItem("eventRegistrations", JSON.stringify(existing));

    // ============================
    //   CLEAR INPUT FIELDS
    // ============================
    fullName.value = "";
    email.value = "";
    contact.value = "";

    // ============================
    //   SHOW SUCCESS MESSAGE
    // ============================

    if (!successMsg) {
      successMsg = document.createElement("p");
      successMsg.style.color = "#2ecc71";
      successMsg.style.fontSize = "0.9rem";
      successMsg.style.marginTop = "8px";
      form.appendChild(successMsg);
    }

    successMsg.textContent = "✔ Registered successfully!";
  });

  function setError(input, message) {
    const small = input.parentElement.querySelector(".error-message");
    small.textContent = message;
    input.classList.add("is-invalid");
  }
});
