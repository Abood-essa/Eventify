document.addEventListener("DOMContentLoaded", () => {
  const eventData = JSON.parse(localStorage.getItem("selectedEvent"));
  if (!eventData) return;

  const { img, title, dateText, pill } = eventData;

  // ✅ Banner
  const bannerImg = document.querySelector(".event-banner img");
  if (bannerImg) {
    bannerImg.src = img;
    bannerImg.alt = title;
  }

  // ✅ Top Date (under banner)
  const dateEl = document.querySelector(".text-muted.fw-bold.mb-1");
  if (dateEl) {
    const cleanDate = dateText.split("<br>")[0] || dateText;
    dateEl.textContent = cleanDate.replace("•", "–").trim();
  }

  // ✅ Title
  const titleEl = document.querySelector("h2.fw-bold");
  if (titleEl) titleEl.textContent = title;

  // ✅ Organizer name
  const organizerEl = document.querySelector(".author p.fw-bold");
  if (organizerEl) {
    const org = dateText.split("<br>")[1] || "Eventify Organizer";
    organizerEl.textContent = `By ${org}`;
  }

  // ✅ Date and time section
  const dateAndTimeEl = document.querySelector(".event-info p:nth-of-type(1)");
  if (dateAndTimeEl) {
    const cleanDate = dateText.split("<br>")[0] || dateText;
    dateAndTimeEl.innerHTML = `<strong>Date and time</strong><br>${cleanDate}`;
  }

  // ✅ Price (right side)
  const priceEl = document.querySelector(".col-lg-4 h4.fw-bold");
  if (priceEl) {
    priceEl.textContent = pill === "Paid" ? "$50.00" : "Free";
  }

  // ✅ Remove the "Event lasts 7 hours 30 minutes" list if it exists
  const durationList = document.querySelector(".event-info ul");
  if (durationList) durationList.remove();

  const locationStrong = Array.from(
    document.querySelectorAll(".event-info strong")
  ).find((el) => el.textContent.includes("Location"));
  if (locationStrong) {
    const locationParagraph = locationStrong.parentElement;
    if (locationParagraph) {
      locationParagraph.innerHTML = `
          <strong>Location</strong><br>
          Amman, Jordan<br>
          <a href="#" class="text-danger fw-semibold">Show on map</a>
        `;
    }
  }

  // ✅ About section — select the paragraph that actually holds the long text
  const aboutParagraphs = document.querySelectorAll(".event-info p");
  const aboutEl = Array.from(aboutParagraphs).find((p) =>
    p.textContent.includes("Welcome to")
  );

  if (aboutEl) {
    const cleanDate = dateText.split("<br>")[0] || dateText;
    aboutEl.innerHTML = `
      Welcome to the <a href="#" class="text-danger fw-semibold">${title}</a>!<br><br>
      This ${
        pill === "Paid" ? "exclusive" : "free"
      } event brings together amazing people and fresh ideas.<br>
      Happening on <b>${cleanDate}</b>. We’re thrilled to have you join us!
    `;
  }

  // ==============================
  //  GET TICKETS → redirect
  // ==============================
  const getTicketBtn = document.querySelector(".get-tickect");

  if (getTicketBtn) {
    getTicketBtn.addEventListener("click", () => {
      window.location.href = "registerEvent.html";
    });
  }
});
