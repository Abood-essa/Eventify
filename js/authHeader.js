document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");

  const guestHeader = document.getElementById("guestHeader");
  const userHeader = document.getElementById("userHeader");

  if (user) {
    // User logged in → show user header
    guestHeader.classList.add("d-none");
    userHeader.classList.remove("d-none");

    // Show username
    const nameSpan = userHeader.querySelector(".user-name-span");
    nameSpan.textContent = "Hi, " + user.split("@")[0];
  } else {
    // not logged in → show guest header
    userHeader.classList.add("d-none");
    guestHeader.classList.remove("d-none");
  }

  // Logout logic
  const logoutBtn = document.querySelector(".btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.reload();
    });
  }
});
