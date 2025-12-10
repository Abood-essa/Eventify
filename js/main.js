// // Example: highlight the active page link

// // ===== Dummy data =====
// document.addEventListener("DOMContentLoaded", () => {
//   // ========= Dummy Data ========= //

//   // Categories
//   const categories = [
//     { name: "Sports", img: "../images/Sports.png" },
//     { name: "Technology", img: "../images/Technology.png" },
//     { name: "Food & Drink", img: "../images/Food&Drinks.png" },
//     { name: "Business", img: "../images/Business.png" },
//     {
//       name: "Music",
//       img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
//     },
//     {
//       name: "Education",
//       img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
//     },
//     {
//       name: "Gaming",
//       img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
//     },
//     {
//       name: "Art",
//       img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
//     },
//   ];

//   // ✅ Events with "Free" / "Paid" badges
//   const events = [
//     {
//       title: "Tech Innovation Summit 2025",
//       date: "Mon, Nov 10 • 5:00 PM GMT+3",
//       organizer: "Organized by HU Innovation Lab",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
//       pill: "Paid",
//     },
//     {
//       title: "Food Festival: Taste of Jordan",
//       date: "Wed, Nov 12 • 2:00 PM",
//       organizer: "Hosted by Culinary Students Club",
//       img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400",
//       pill: "Free",
//     },
//     {
//       title: "Startup Growth Conference",
//       date: "Fri, Nov 14 • 6:00 PM",
//       organizer: "Presented by Eventify Business Hub",
//       img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
//       pill: "Paid",
//     },
//     {
//       title: "Cultural Night Celebration",
//       date: "Sat, Nov 15 • 8:00 PM",
//       organizer: "Hosted by Arts & Music Society",
//       img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400",
//       pill: "Free",
//     },
//     {
//       title: "Women in Tech Meetup",
//       date: "Tue, Nov 18 • 3:00 PM",
//       organizer: "Powered by Tech Queens",
//       img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400",
//       pill: "Free",
//     },
//     {
//       title: "Sports Gala Championship",
//       date: "Thu, Nov 20 • 7:00 PM",
//       organizer: "Sports Federation Jordan",
//       img: "https://images.unsplash.com/photo-1503424886308-418b744b62a0?w=400",
//       pill: "Paid",
//     },
//     {
//       title: "AI Workshop for Beginners",
//       date: "Sun, Nov 23 • 4:00 PM",
//       organizer: "TechWorld Academy",
//       img: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=400",
//       pill: "Free",
//     },
//     {
//       title: "Design & UX Masterclass",
//       date: "Tue, Nov 25 • 10:00 AM",
//       organizer: "HU Design Department",
//       img: "https://images.unsplash.com/photo-1518977956815-dee006ba5934?w=400",
//       pill: "Paid",
//     },
//     {
//       title: "Music Festival Night",
//       date: "Fri, Nov 28 • 9:00 PM",
//       organizer: "Amman Music Foundation",
//       img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400",
//       pill: "Paid",
//     },
//   ];

//   // Videos
//   const videos = Array.from({ length: 9 }, (_, i) => ({
//     title: `Featured Video ${i + 1}`,
//     img: [
//       "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=400",
//       "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
//       "https://images.unsplash.com/photo-1490100667990-4fced8021649?w=400",
//       "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400",
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
//       "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=400",
//       "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
//     ][i],
//   }));

//   // ========= Pagination Logic ========= //
//   function setupPagination(section, data, renderFn, perPage = 3) {
//     const container = document.querySelector(section);
//     if (!container) return;

//     const row = container.querySelector(".row");
//     const pagination = container.querySelector(".pagination");

//     // ✅ CASE 1: no pagination element (like events.html)
//     if (!pagination) {
//       row.innerHTML = data.map(renderFn).join("");

//       // 🟢 ADDED THIS SECTION:
//       // This makes the events clickable even when pagination doesn't exist (like on events.html)
//       const eventCards = row.querySelectorAll(".event-card");
//       eventCards.forEach((card) => {
//         card.style.cursor = "pointer";
//         card.addEventListener("click", () => {
//           const img = card.querySelector("img")?.src || "";
//           const title =
//             card.querySelector(".card-title")?.textContent.trim() || "";
//           const dateText = card.querySelector(".card-text")?.innerHTML || "";
//           const pill =
//             card.querySelector(".event-pill")?.textContent.trim() || "";
//           const eventData = { img, title, dateText, pill };
//           localStorage.setItem("selectedEvent", JSON.stringify(eventData));
//           window.location.href = "eventPage.html";
//         });
//       });

//       // 🟢 keep this return
//       return;
//     }

//     // ✅ CASE 2: pagination exists (like home/index.html)
//     const prev = pagination.querySelector(".prev");
//     const next = pagination.querySelector(".next");

//     let currentPage = 1;
//     const totalPages = Math.ceil(data.length / perPage);

//     // ✅ Build pagination numbers dynamically
//     pagination
//       .querySelectorAll("li:not(:first-child):not(:last-child)")
//       .forEach((li) => li.remove());

//     for (let i = 1; i <= totalPages; i++) {
//       const li = document.createElement("li");
//       const a = document.createElement("a");
//       a.href = "#";
//       a.textContent = i;
//       if (i === 1) a.classList.add("active");
//       li.appendChild(a);
//       next.parentElement.before(li);
//     }

//     const pageLinks = pagination.querySelectorAll(
//       "li:not(:first-child):not(:last-child) a"
//     );

//     function animateTransition() {
//       row.style.opacity = "0";
//       row.style.transform = "translateY(15px)";
//       setTimeout(() => {
//         row.style.opacity = "1";
//         row.style.transform = "translateY(0)";
//         row.style.transition = "all 0.4s ease";
//       }, 100);
//     }

//     function render() {
//       const start = (currentPage - 1) * perPage;
//       const end = start + perPage;
//       const items = data.slice(start, end);
//       row.innerHTML = items.map(renderFn).join("");
//       animateTransition();

//       pageLinks.forEach((a, idx) => {
//         a.classList.toggle("active", idx + 1 === currentPage);
//       });

//       prev.parentElement.classList.toggle("disabled", currentPage === 1);
//       next.parentElement.classList.toggle(
//         "disabled",
//         currentPage === totalPages
//       );

//       // ✅ Add click listeners for event cards
//       const eventCards = row.querySelectorAll(".event-card");
//       eventCards.forEach((card) => {
//         card.style.cursor = "pointer";
//         card.addEventListener("click", () => {
//           const img = card.querySelector("img")?.src || "";
//           const title =
//             card.querySelector(".card-title")?.textContent.trim() || "";
//           const dateText = card.querySelector(".card-text")?.innerHTML || "";
//           const pill =
//             card.querySelector(".event-pill")?.textContent.trim() || "";
//           const eventData = { img, title, dateText, pill };
//           localStorage.setItem("selectedEvent", JSON.stringify(eventData));
//           window.location.href = "eventPage.html";
//         });
//       });

//       // ✅ Add click listeners for category cards
//       const categoryCards = row.querySelectorAll(".category-card");
//       categoryCards.forEach((card) => {
//         card.style.cursor = "pointer";

//         const catName = card
//           .querySelector(".category-overlay h5")
//           ?.textContent.trim();

//         card.addEventListener("click", () => {
//           // Save selected category
//           localStorage.setItem("selectedCategory", catName);

//           // Go to category results page
//           window.location.href = "events.html";
//         });
//       });
//     }

//     pageLinks.forEach((a, i) => {
//       a.addEventListener("click", (e) => {
//         e.preventDefault();
//         currentPage = i + 1;
//         render();
//       });
//     });

//     prev.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (currentPage > 1) {
//         currentPage--;
//         render();
//       }
//     });

//     next.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (currentPage < totalPages) {
//         currentPage++;
//         render();
//       }
//     });

//     render();
//   }

//   // ===== Render Methods (faithful to your HTML) =====
//   const renderCategory = (cat) => `
//     <div class="col-lg-3 col-md-6 mb-4">
//       <div class="category-card">
//         <img src="${cat.img}" alt="${cat.name}" />
//         <div class="category-overlay"><h5>${cat.name}</h5></div>
//       </div>
//     </div>`;

//   // ✅ Render Event (with Free/Paid badge + exact same structure as your HTML)
//   const renderEvent = (ev) => `
//     <div class="col-lg-4 col-md-6">
//       <div class="card event-card">
//         <img src="${ev.img}" alt="${ev.title}" />
//         <div class="card-body">
//           <div class="d-flex justify-content-between align-items-center mb-2">
//             <h5 class="card-title mb-0">${ev.title}</h5>
//             <span class="event-pill ${ev.pill.toLowerCase()}">${ev.pill}</span>
//           </div>
//           <p class="card-text">${ev.date}<br>${ev.organizer}</p>
//         </div>
//       </div>
//     </div>`;

//   const renderVideo = (vid) => `
//     <div class="col-lg-4 col-md-6">
//       <div class="video-card">
//         <div class="video-image">
//           <img src="${vid.img}" alt="${vid.title}" />
//           <div class="play-btn"><i class="fa-solid fa-play"></i></div>
//         </div>
//         <div class="video-body">
//           <h5>${vid.title}</h5>
//           <a href="#" class="read-more">Read More</a>
//         </div>
//       </div>
//     </div>`;

//   // ===== Apply Pagination =====
//   if (document.querySelector(".container.category"))
//     setupPagination(".container.category", categories, renderCategory, 4);

//   if (document.querySelector(".container.events"))
//     setupPagination(".container.events", events, renderEvent, 3);

//   if (document.querySelector(".container.featured-videos"))
//     setupPagination(".container.featured-videos", videos, renderVideo, 3);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const userImage = document.querySelector(".profile-info img");
//   const userName = document.querySelector(".profile-info span");

//   [userImage, userName].forEach((el) => {
//     el.addEventListener("click", () => {
//       window.location.href = "profile.html";
//     });
//   });
// });

// ===============================
// Eventify Main Script
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // ====== ALL COMMUNITIES USED ACROSS YOUR WEBSITE ======

  const communities = [
    {
      id: 1,
      name: "HU-IT Community",
      image: "images/HU-community.png",
      location: "Amman, Jordan",
      description:
        "A community for Hashemite University IT students passionate about development, UI/UX, cybersecurity, and tech events.",
      events: [
        {
          title: "Cybersecurity Basics",
          date: "Jan 15",
          type: "Free",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
        },
        {
          title: "Frontend Bootcamp",
          date: "Feb 10",
          type: "Paid",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
        },
      ],
    },

    {
      id: 2,
      name: "Med Students Community",
      image: "images/HU-community.png",
      location: "Zarqa, Jordan",
      description:
        "A medical community for students to learn, share resources, and explore health events.",
      events: [],
    },

    {
      id: 3,
      name: "Amman Football Community",
      image: "images/Football-community.png",
      location: "Amman, Jordan",
      description:
        "A community for football players, fans, and sports enthusiasts in Amman.",
      events: [],
    },

    {
      id: 4,
      name: "Arts Community",
      image: "images/Arts-community.png",
      location: "Amman, Jordan",
      description: "A creative community for artists, designers, and creators.",
      events: [],
    },

    // Communities Page (Row 1)
    {
      id: 5,
      name: "Music Lovers Community",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
      location: "Jordan",
      description:
        "A community for music enthusiasts who enjoy sharing playlists and attending events.",
      events: [],
    },

    {
      id: 6,
      name: "Entrepreneurs Community",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=400",
      location: "Amman",
      description:
        "A business and entrepreneurship community supporting new startups and founders.",
      events: [],
    },

    {
      id: 7,
      name: "Developers Community",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      location: "Jordan",
      description:
        "A community of developers exploring coding, AI, and software engineering.",
      events: [],
    },

    {
      id: 8,
      name: "Designers Community",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
      location: "Amman",
      description:
        "A space for graphic designers, UI/UX designers, and creatives.",
      events: [],
    },

    // Row 2
    {
      id: 9,
      name: "Fitness Community",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      location: "Amman",
      description:
        "A fitness community hosting gym sessions, challenges, and events.",
      events: [],
    },

    {
      id: 10,
      name: "Photography Community",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
      location: "Jordan",
      description:
        "A community for photographers who love capturing and sharing moments.",
      events: [],
    },

    {
      id: 11,
      name: "Cooking Enthusiasts",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400",
      location: "Jordan",
      description:
        "A cooking community sharing recipes, hosting food events and tastings.",
      events: [],
    },

    {
      id: 12,
      name: "Students Network",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
      location: "Jordan",
      description:
        "A student-focused community for events, study groups, and social connections.",
      events: [],
    },

    // Row 3
    {
      id: 13,
      name: "Gaming Community",
      image: "https://images.unsplash.com/photo-1555529771-35a38faafc57?w=400",
      location: "Amman",
      description:
        "A gaming community hosting tournaments, LAN parties, and meetups.",
      events: [],
    },

    {
      id: 14,
      name: "Fashion & Style",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
      location: "Jordan",
      description:
        "A fashion community that explores style trends and hosts fashion events.",
      events: [],
    },

    {
      id: 15,
      name: "Travel & Adventures",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400",
      location: "Jordan",
      description:
        "A community for travelers who love exploring new destinations.",
      events: [],
    },

    {
      id: 16,
      name: "Volunteering Group",
      image:
        "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=400",
      location: "Jordan",
      description: "A community focused on volunteering and helping society.",
      events: [],
    },
  ];

  // ========= Categories ========= //
  const categories = [
    { name: "Sports", img: "../images/Sports.png" },
    { name: "Technology", img: "../images/Technology.png" },
    { name: "Food & Drink", img: "../images/Food&Drinks.png" },
    { name: "Business", img: "../images/Business.png" },
    {
      name: "Music",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    },
    {
      name: "Education",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    },
    {
      name: "Gaming",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    },
    {
      name: "Art",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    },
  ];

  // ========= Events (now with categories & location) ========= //
  const events = [
    {
      title: "Tech Innovation Summit 2025",
      date: "Mon, Nov 10 • 5:00 PM GMT+3",
      organizer: "Organized by HU Innovation Lab",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
      pill: "Paid",
      category: "Technology",
      location: "Amman",
    },
    {
      title: "Food Festival: Taste of Jordan",
      date: "Wed, Nov 12 • 2:00 PM",
      organizer: "Hosted by Culinary Students Club",
      img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400",
      pill: "Free",
      category: "Food & Drink",
      location: "Amman",
    },
    {
      title: "Startup Growth Conference",
      date: "Fri, Nov 14 • 6:00 PM",
      organizer: "Presented by Eventify Business Hub",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      pill: "Paid",
      category: "Business",
      location: "Amman",
    },
    {
      title: "Cultural Night Celebration",
      date: "Sat, Nov 15 • 8:00 PM",
      organizer: "Hosted by Arts & Music Society",
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400",
      pill: "Free",
      category: "Art",
      location: "Amman",
    },
    {
      title: "Women in Tech Meetup",
      date: "Tue, Nov 18 • 3:00 PM",
      organizer: "Powered by Tech Queens",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400",
      pill: "Free",
      category: "Technology",
      location: "Amman",
    },
    {
      title: "Sports Gala Championship",
      date: "Thu, Nov 20 • 7:00 PM",
      organizer: "Sports Federation Jordan",
      img: "https://images.unsplash.com/photo-1503424886308-418b744b62a0?w=400",
      pill: "Paid",
      category: "Sports",
      location: "Amman",
    },
    {
      title: "AI Workshop for Beginners",
      date: "Sun, Nov 23 • 4:00 PM",
      organizer: "TechWorld Academy",
      img: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=400",
      pill: "Free",
      category: "Technology",
      location: "Amman",
    },
    {
      title: "Design & UX Masterclass",
      date: "Tue, Nov 25 • 10:00 AM",
      organizer: "HU Design Department",
      img: "https://images.unsplash.com/photo-1518977956815-dee006ba5934?w=400",
      pill: "Paid",
      category: "Education",
      location: "Amman",
    },
    {
      title: "Music Festival Night",
      date: "Fri, Nov 28 • 9:00 PM",
      organizer: "Amman Music Foundation",
      img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400",
      pill: "Paid",
      category: "Music",
      location: "Amman",
    },
  ];

  // ========= Videos ========= //
  const videos = Array.from({ length: 9 }, (_, i) => ({
    title: `Featured Video ${i + 1}`,
    img: [
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=400",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
      "https://images.unsplash.com/photo-1490100667990-4fced8021649?w=400",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=400",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
    ][i],
  }));

  // ========= Pagination System ========= //
  function setupPagination(section, data, renderFn, perPage = 3) {
    const container = document.querySelector(section);
    if (!container) return;

    const row = container.querySelector(".row");
    const pagination = container.querySelector(".pagination");

    // CASE 1 — No pagination (like events.html)
    if (!pagination) {
      if (data.length === 0) {
        // Special nice message for events page when no matches
        if (section === ".container.events") {
          row.innerHTML = `
        <div class="col-12">
          <div class="alert alert-warning text-center no-events-message">
            No events match your filters.
          </div>
        </div>
      `;
        } else {
          row.innerHTML = "";
        }
        return;
      }

      row.innerHTML = data.map(renderFn).join("");
      attachEventCardClicks(row);
      return;
    }

    // CASE 2 — With pagination (homepage)
    const prev = pagination.querySelector(".prev");
    const next = pagination.querySelector(".next");

    let currentPage = 1;
    const totalPages = Math.ceil(data.length / perPage);

    // Reset pagination numbers
    pagination
      .querySelectorAll("li:not(:first-child):not(:last-child)")
      .forEach((li) => li.remove());

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = i;
      if (i === 1) a.classList.add("active");
      li.appendChild(a);
      next.parentElement.before(li);
    }

    const pageLinks = pagination.querySelectorAll(
      "li:not(:first-child):not(:last-child) a"
    );

    function animateTransition() {
      row.style.opacity = "0";
      row.style.transform = "translateY(15px)";
      setTimeout(() => {
        row.style.opacity = "1";
        row.style.transform = "translateY(0)";
        row.style.transition = "all 0.4s ease";
      }, 100);
    }

    function render() {
      const start = (currentPage - 1) * perPage;
      const end = start + perPage;
      const items = data.slice(start, end);

      row.innerHTML = items.map(renderFn).join("");

      animateTransition();
      attachEventCardClicks(row);
      attachCategoryClicks(row); // safe on rows that have category cards

      pageLinks.forEach((a, idx) => {
        a.classList.toggle("active", idx + 1 === currentPage);
      });

      prev.parentElement.classList.toggle("disabled", currentPage === 1);
      next.parentElement.classList.toggle(
        "disabled",
        currentPage === totalPages
      );
    }

    // Pagination Events
    pageLinks.forEach((a, i) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i + 1;
        render();
      });
    });

    prev.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        render();
      }
    });

    next.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        render();
      }
    });

    render();
  }

  const renderCommunity = (c) => `
  <div class="col-lg-3 col-md-6">
    <div class="card community-card" data-id="${c.id}">
      <img src="${c.image}" alt="${c.name}" />
      <div class="card-body">
        <h6>${c.name}</h6>
      </div>
    </div>
  </div>`;

  // ========= Render Communities (Home & Communities Page) ========= //
  if (document.querySelector(".container.communities")) {
    const container = document.querySelector(".container.communities .row");
    container.innerHTML = "";

    const isCommunitiesPage =
      window.location.pathname.includes("communites.html");

    if (isCommunitiesPage) {
      // Render ALL communities
      container.innerHTML = communities.map(renderCommunity).join("");
    } else {
      // Home page → render only first 4
      container.innerHTML = communities
        .slice(0, 4)
        .map(renderCommunity)
        .join("");
    }

    attachCommunityClicks(container);
  }

  // ========= Render Templates ========= //
  const renderCategory = (cat) => `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="category-card">
        <img src="${cat.img}" alt="${cat.name}" />
        <div class="category-overlay"><h5>${cat.name}</h5></div>
      </div>
    </div>`;

  const renderEvent = (ev) => `
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
  </div>`;

  const renderVideo = (vid) => `
    <div class="col-lg-4 col-md-6">
      <div class="video-card">
        <div class="video-image">
          <img src="${vid.img}" alt="${vid.title}" />
          <div class="play-btn"><i class="fa-solid fa-play"></i></div>
        </div>
        <div class="video-body">
          <h5>${vid.title}</h5>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>
    </div>`;

  // ========= Attach Click Listeners ========= //
  function attachEventCardClicks(row) {
    row.querySelectorAll(".event-card").forEach((card) => {
      card.style.cursor = "pointer";

      card.addEventListener("click", () => {
        const img = card.querySelector("img")?.src || "";
        const title =
          card.querySelector(".card-title")?.textContent.trim() || "";
        const dateText = card.querySelector(".card-text")?.innerHTML || "";
        const pill =
          card.querySelector(".event-pill")?.textContent.trim() || "";

        const eventData = { img, title, dateText, pill };
        localStorage.setItem("selectedEvent", JSON.stringify(eventData));

        window.location.href = "eventPage.html";
      });
    });
  }

  function attachCommunityClicks(row) {
    row.querySelectorAll(".community-card").forEach((card) => {
      card.style.cursor = "pointer";

      card.addEventListener("click", () => {
        const id = card.dataset.id;
        localStorage.setItem("selectedCommunity", id);
        window.location.href = "communityProfile.html";
      });
    });
  }

  function attachCategoryClicks(row) {
    row.querySelectorAll(".category-card").forEach((card) => {
      const catName = card.querySelector("h5")?.textContent.trim();
      card.style.cursor = "pointer";

      card.addEventListener("click", () => {
        // clicked category card → store selectedCategory and clear search filters
        localStorage.setItem("selectedCategory", catName);
        localStorage.removeItem("searchCategory");
        localStorage.removeItem("searchLocation");

        window.location.href = "events.html";
      });
    });
  }

  // ========= Apply Pagination ========= //
  if (document.querySelector(".container.category"))
    setupPagination(".container.category", categories, renderCategory, 4);

  if (
    document.querySelector(".container.events") &&
    !window.location.pathname.includes("profile.html")
  ) {
    const isEventsPage = window.location.pathname.includes("events.html");

    const searchCategory = localStorage.getItem("searchCategory");
    const searchLocation = localStorage.getItem("searchLocation");
    const selectedCategoryFromCard = localStorage.getItem("selectedCategory");

    // Prefer searchCategory from search box, fallback to clicked category
    const effectiveCategory = searchCategory || selectedCategoryFromCard;

    let dataToRender = events;

    if (isEventsPage && (effectiveCategory || searchLocation)) {
      dataToRender = events.filter((ev) => {
        // Category filter
        if (
          effectiveCategory &&
          (!ev.category ||
            ev.category.toLowerCase() !== effectiveCategory.toLowerCase())
        ) {
          return false;
        }

        // Location filter
        if (
          searchLocation &&
          (!ev.location ||
            ev.location.toLowerCase() !== searchLocation.toLowerCase())
        ) {
          return false;
        }

        return true;
      });
    }

    // index.html OR events.html with no filters → show all events
    setupPagination(".container.events", dataToRender, renderEvent, 3);
  }

  if (document.querySelector(".container.featured-videos"))
    setupPagination(".container.featured-videos", videos, renderVideo, 3);

  // ========= Auto-fill search inputs on events.html =========
  if (window.location.pathname.includes("events.html")) {
    const searchCategoryVal = localStorage.getItem("searchCategory");
    const searchLocationVal = localStorage.getItem("searchLocation");
    const selectedCategoryFromCard = localStorage.getItem("selectedCategory");

    const categorySelect = document.getElementById("searchCategory");
    const locationSelect = document.getElementById("searchLocation");

    function setSelectValue(selectEl, value) {
      // if element is missing or no value => do nothing
      if (!selectEl || !value) return;
      if (!selectEl.options || !selectEl.options.length) return;

      for (let i = 0; i < selectEl.options.length; i++) {
        const opt = selectEl.options[i];
        if (opt.value.toLowerCase() === value.toLowerCase()) {
          selectEl.selectedIndex = i;
          break;
        }
      }
    }

    // prefer searchCategory, fallback to clicked category
    setSelectValue(
      categorySelect,
      searchCategoryVal || selectedCategoryFromCard
    );
    setSelectValue(locationSelect, searchLocationVal);
  }

  // ========= Profile Navigation ========= //
  const userImage = document.querySelector(".profile-info img");
  const userName = document.querySelector(".profile-info span");

  const myEventsRow = document.querySelector(".my-events .row");
  if (myEventsRow && typeof attachEventCardClicks === "function") {
    attachEventCardClicks(myEventsRow);
  }

  [userImage, userName].forEach((el) => {
    if (el) {
      el.addEventListener("click", () => {
        window.location.href = "profile.html";
      });
    }
  });

  // ========= Search (Home + Events) → save filters and go to events.html ========= //
  const searchBtn = document.getElementById("searchBtn");
  const searchCategorySelect = document.getElementById("searchCategory");
  const searchLocationSelect = document.getElementById("searchLocation");

  if (searchBtn && searchCategorySelect && searchLocationSelect) {
    searchBtn.addEventListener("click", () => {
      const categoryVal = searchCategorySelect.value;
      const locationVal = searchLocationSelect.value;

      // This is a search → clear clicked category
      localStorage.removeItem("selectedCategory");

      if (categoryVal && categoryVal !== "Select Category") {
        localStorage.setItem("searchCategory", categoryVal);
      } else {
        localStorage.removeItem("searchCategory");
      }

      if (locationVal && locationVal !== "Select Location") {
        localStorage.setItem("searchLocation", locationVal);
      } else {
        localStorage.removeItem("searchLocation");
      }

      window.location.href = "events.html";
    });
  }
});
