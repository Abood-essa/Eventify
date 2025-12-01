document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const inputs = {
    name: document.getElementById("communityNameInput"),
    category: document.getElementById("categoryInput"),
    privacy: document.getElementById("privacyInput"),
    description: document.getElementById("descriptionInput"),
    image: document.getElementById("imageInput"),
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

  // Remove error
  function clearError(input) {
    const container = input.closest(".mb-3");
    const error = container.querySelector(".error-message");
    if (error) error.remove();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous error messages
    form.querySelectorAll(".error-message").forEach((e) => e.remove());

    // ========== VALIDATIONS ========== //

    // Community Name
    if (inputs.name.value.trim() === "") {
      showError(inputs.name, "Community name is required.");
      valid = false;
    }

    // Category
    if (inputs.category.value === "Select Category") {
      showError(inputs.category, "Please select a category.");
      valid = false;
    }

    // Privacy Type
    if (inputs.privacy.value === "Select Privacy Type") {
      showError(inputs.privacy, "Please choose a privacy type.");
      valid = false;
    }

    // Description
    if (inputs.description.value.trim().length < 10) {
      showError(
        inputs.description,
        "Description must be at least 10 characters."
      );
      valid = false;
    }

    // Image
    if (inputs.image.files.length === 0) {
      showError(inputs.image, "Please upload a community image.");
      valid = false;
    }

    // Stop if invalid
    if (!valid) return;

    // ========== DATA (TEMPORARY) ========== //
    const formData = new FormData();
    formData.append("CommunityName", inputs.name.value);
    formData.append("Category", inputs.category.value);
    formData.append("Privacy", inputs.privacy.value);
    formData.append("Description", inputs.description.value);
    formData.append("ImageFile", inputs.image.files[0]);

    console.log("Community Created Successfully!");
    console.log("Data Sent:", Object.fromEntries(formData));

    // Show success message (temporary)
    const msg = document.createElement("p");
    msg.textContent = "Community submitted for approval.";
    msg.style.color = "green";
    msg.style.marginTop = "10px";
    form.appendChild(msg);

    form.reset();
  });

  // Clear error on typing
  form.querySelectorAll("input, textarea, select").forEach((field) => {
    field.addEventListener("input", () => clearError(field));
  });
});
