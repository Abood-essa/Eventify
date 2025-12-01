document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const terms = document.getElementById("terms");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Reset previous errors
    document.querySelectorAll(".error-message").forEach((msg) => {
      msg.textContent = "";
    });

    document.querySelectorAll(".form-control").forEach((inp) => {
      inp.classList.remove("is-invalid");
    });

    // --- Email validation ---
    if (email.value.trim() === "") {
      setError(email, "Email is required");
      valid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      setError(email, "Enter a valid email");
      valid = false;
    }

    // --- Password validation ---
    if (password.value.trim() === "") {
      setError(password, "Password is required");
      valid = false;
    } else if (password.value.length < 6) {
      setError(password, "Minimum 6 characters required");
      valid = false;
    }

    // --- Terms validation ---
    if (!terms.checked) {
      const small = terms
        .closest(".form-check")
        .querySelector(".error-message");
      small.textContent = "You must accept the terms";
      valid = false;
    }

    if (!valid) return;

    // ========================
    //   NO ALERTS — JUST LOGIN
    // ========================

    // Simulate login success (for now)
    // Later you replace this with backend API

    // Save basic user info so navbar shows “Hi, Abood”
    localStorage.setItem("loggedInUser", email.value);

    // Redirect without any popup
    window.location.href = "index.html";
  });

  function setError(input, message) {
    const small = input.parentElement.querySelector(".error-message");
    small.textContent = message;
    input.classList.add("is-invalid");
  }
});
