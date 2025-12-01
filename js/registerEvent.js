document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  //        LOAD SELECTED EVENT FROM STORAGE
  // ============================================
  const selectedEvent = JSON.parse(localStorage.getItem("selectedEvent"));

  if (!selectedEvent) {
    console.log("No event selected!");
  } else {
    const { img, title, dateText } = selectedEvent;

    // Update event card image
    const imgEl = document.querySelector(".event-cards img");
    if (imgEl) imgEl.src = img;

    // Update date (use dateText)
    // Update date (cut before <br>)
    const dateEl = document.querySelector(".event-details h6");
    if (dateEl) {
      const cleanDate = dateText.split("<br>")[0];
      dateEl.textContent = cleanDate.trim();
    }

    // Update title
    const titleEl = document.querySelector(".event-details h5");
    if (titleEl) titleEl.textContent = title;
  }

  // ============================================
  //              FORM VALIDATION + SAVE
  // ============================================
  const form = document.querySelector("form");

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");

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

    if (successMsg) successMsg.textContent = "";

    // --- Full name validation ---
    if (fullName.value.trim() === "") {
      setError(fullName, "Full name is required");
      valid = false;
    }

    // --- Email validation ---
    if (email.value.trim() === "") {
      setError(email, "Email is required");
      valid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      setError(email, "Enter a valid email");
      valid = false;
    }

    // --- Contact validation ---
    if (contact.value.trim() === "") {
      setError(contact, "Contact number is required");
      valid = false;
    } else if (isNaN(contact.value.trim()) || contact.value.trim().length < 9) {
      setError(contact, "Enter a valid contact number");
      valid = false;
    }

    if (!valid) return;

    // ============================================
    //     SAVE REGISTRATION WITH dateText
    // ============================================
    const registration = {
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      contact: contact.value.trim(),
      eventTitle: selectedEvent ? selectedEvent.title : "Unknown Event",
      eventDateText: selectedEvent ? selectedEvent.dateText : "",
      eventImg: selectedEvent ? selectedEvent.img : "",
      dateRegistered: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("eventRegistrations")) || [];

    existing.push(registration);

    localStorage.setItem("eventRegistrations", JSON.stringify(existing));

    // Clear inputs
    fullName.value = "";
    email.value = "";
    contact.value = "";

    // Success message
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
