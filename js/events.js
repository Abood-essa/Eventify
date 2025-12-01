// document.addEventListener("DOMContentLoaded", () => {
//   const eventCards = document.querySelectorAll(".event-card");
//   if (!eventCards.length) return;

//   eventCards.forEach((card) => {
//     card.style.cursor = "pointer";
//     card.addEventListener("click", () => {
//       const img = card.querySelector("img")?.src || "";
//       const title = card.querySelector(".card-title")?.textContent.trim() || "";
//       const dateText = card.querySelector(".card-text")?.innerHTML || "";
//       const pill = card.querySelector(".event-pill")?.textContent.trim() || "";
//       const eventData = { img, title, dateText, pill };
//       localStorage.setItem("selectedEvent", JSON.stringify(eventData));
//       window.location.href = "eventPage.html";
//     });
//   });
// });

// console.log("✅ events.js loaded");
