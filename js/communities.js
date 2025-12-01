document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".communities-container");
  if (!container) return;

  function renderCommunities() {
    container.innerHTML = "";

    communities.forEach((c) => {
      container.innerHTML += `
        <div class="col-lg-3 col-md-6">
          <div class="card community-card" data-id="${c.id}">
            <img src="${c.image}" alt="${c.name}" />
            <div class="card-body">
              <h6>${c.name}</h6>
              <p class="text-muted">${c.location}</p>
            </div>
          </div>
        </div>
      `;
    });

    document.querySelectorAll(".community-card").forEach((card) => {
      card.addEventListener("click", () => {
        localStorage.setItem("selectedCommunityId", card.dataset.id);
        window.location.href = "communityProfile.html";
      });
    });
  }

  renderCommunities();
});
