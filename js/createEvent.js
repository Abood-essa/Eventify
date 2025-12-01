document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const inputs = {
    name: document.getElementById("nameInput"),
    eventName: document.getElementById("eventNameInput"),
    category: document.getElementById("categoryInput"),
    email: document.getElementById("emailInput"),
    phone: document.getElementById("phoneInput"),
    capacity: document.getElementById("capacityInput"),
    price: document.getElementById("priceInput"),
    location: document.getElementById("locationInput"),
    date: document.getElementById("dateInput"),
    description: document.getElementById("descriptionInput"),
    image: document.getElementById("imageInput"),
  };

  // Insert error under .mb-3
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

  function clearError(input) {
    const container = input.closest(".mb-3");
    const error = container.querySelector(".error-message");
    if (error) error.remove();
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let valid = true;

    // REMOVE previous error messages
    form.querySelectorAll(".error-message").forEach((e) => e.remove());

    // VALIDATIONS
    if (inputs.name.value.trim() === "") {
      showError(inputs.name, "Name is required.");
      valid = false;
    }

    if (inputs.eventName.value.trim() === "") {
      showError(inputs.eventName, "Event name is required.");
      valid = false;
    }

    if (inputs.category.value === "Select Category") {
      showError(inputs.category, "Select a category.");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email.value)) {
      showError(inputs.email, "Enter a valid email.");
      valid = false;
    }

    const phoneRegex = /^(07)[0-9]{8}$/;
    if (!phoneRegex.test(inputs.phone.value)) {
      showError(inputs.phone, "Phone must be 10 digits and start with 07.");
      valid = false;
    }

    if (inputs.capacity.value <= 0) {
      showError(inputs.capacity, "Capacity must be positive.");
      valid = false;
    }

    if (inputs.price.value.trim() === "" || isNaN(inputs.price.value)) {
      showError(inputs.price, "Price must be a number.");
      valid = false;
    }

    if (inputs.location.value === "Select Location") {
      showError(inputs.location, "Select a location.");
      valid = false;
    }

    if (inputs.date.value === "") {
      showError(inputs.date, "Select a date and time.");
      valid = false;
    } else {
      const selected = new Date(inputs.date.value);
      if (selected <= new Date()) {
        showError(inputs.date, "Date must be in the future.");
        valid = false;
      }
    }

    if (inputs.description.value.trim().length < 10) {
      showError(
        inputs.description,
        "Description must be at least 10 characters."
      );
      valid = false;
    }

    if (inputs.image.files.length === 0) {
      showError(inputs.image, "Please upload an event image.");
      valid = false;
    }

    // STOP if invalid
    if (!valid) return;

    // SEND DATA
    const formData = new FormData();
    for (let key in inputs) {
      if (key === "image") {
        formData.append("ImageFile", inputs.image.files[0]);
      } else {
        formData.append(
          key.charAt(0).toUpperCase() + key.slice(1),
          inputs[key].value
        );
      }
    }

    console.log("Form submitted successfully!");
    console.log("Data sent:", Object.fromEntries(formData));

    // Replace with your real backend URL
    // const response = await fetch("https://your-backend-url/api/events/create", {
    //   method: "POST",
    //   body: formData,
    // });

    // const msg = document.createElement("p");
    // msg.style.marginTop = "10px";

    // if (response.ok) {
    //   msg.textContent = "Event created successfully!";
    //   msg.style.color = "green";
    //   form.appendChild(msg);
    //   form.reset();
    // } else {
    //   msg.textContent = "Failed to create event.";
    //   msg.style.color = "red";
    //   form.appendChild(msg);
    // }
  });

  // Clear error when typing
  form.querySelectorAll("input, textarea, select").forEach((field) => {
    field.addEventListener("input", () => clearError(field));
  });
});
