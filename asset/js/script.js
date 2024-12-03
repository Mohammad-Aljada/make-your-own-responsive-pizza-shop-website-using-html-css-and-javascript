// Generate the navigation menu first
document.addEventListener("DOMContentLoaded", () => {
  const navbarList = document.querySelector(".navbar");
  if (navbarList) {
    let navHTML = "";
    const sections = document.querySelectorAll(".daynimc");

    sections.forEach((section) => {
      const sectionID = section.id;
      const sectionName =
        section.querySelector(".heading span")?.innerText || "Unnamed Section";
      navHTML += `<li><a href="#${sectionID}">${sectionName}</a></li>`;
    });
    navHTML += '<li><div class="bx bx-moon" id="darkmode"></div></li>';
    navbarList.innerHTML = navHTML;

    // Add click event listeners to the generated links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Highlight active navigation link based on section visibility
    const navLinks = document.querySelectorAll(".navbar li a");
    window.addEventListener("scroll", () => {
      let activeLinkFound = false;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.3) {
          if (!activeLinkFound) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href").substring(1) === section.id) {
                link.classList.add("active");
              }
            });
            activeLinkFound = true;
          }
        }
      });
      if (!activeLinkFound) {
        navLinks.forEach((link) => link.classList.remove("active"));
      }
    });
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
      homeLink.classList.add("active");
    }
  }

  // Dark mode toggle
  const darkModeToggle = document.querySelector("#darkmode");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      if (darkModeToggle.classList.contains("bx-moon")) {
        darkModeToggle.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
      } else {
        darkModeToggle.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
      }
    });
  }
  let menu = document.querySelector("#menu-icon");

  menu.onclick = () => {
    navbarList.classList.toggle("active");
  };

  window.onscroll = () => {
    navbarList.classList.remove("active");
  };
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`,
  {
    interval: 200,
  }
);
