document.addEventListener("DOMContentLoaded", () => {
  const id = localStorage.getItem("selectedCommunity");
  if (!id) return;

  const community = communities.find((c) => c.id == id);
  if (!community) return;

  document.querySelector(".community-name").textContent = community.name;
  document.querySelector(
    ".community-catrgory"
  ).textContent = `${community.location}`;
  document.querySelector(".community-bio").textContent = community.description;

  const img = document.querySelector(".community-img");
  if (img) img.src = community.image;

  const eventsRow = document.querySelector(".my-events .row");
  if (eventsRow) {
    if (community.events.length === 0) {
      eventsRow.innerHTML = `<p class="text-muted">No events for this community yet.</p>`;
    } else {
      eventsRow.innerHTML = community.events
        .map(
          (ev) => `
        <div class="col-lg-4 col-md-6">
      <div class="card event-card">
        <img src="${ev.img}" alt="${ev.title}" />
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="card-title mb-0">${ev.title}</h5>
            <span class="event-pill ${ev.pill.toLowerCase()}">${ev.pill}</span>
          </div>
          <p class="card-text">${ev.date}<br>${ev.organizer}</p>
        </div>
      </div>
    </div>
      `
        )
        .join("");
    }
  }
});
