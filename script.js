document.addEventListener("DOMContentLoaded", () => {
  const rotatingContent = document.querySelector(".rotating-content");
  const bannerRotatingItems = document.querySelectorAll(".inner-rotate p");
  const animatedTxt = document.querySelectorAll(".section-heading span");
  const moreSection = document.querySelector(".more-section");
  // Personal projects — listed twice back-to-back so the horizontal
  // gallery-animation scroll (0% -> -100%) loops seamlessly.
  const personalProjects = [
    {
      name: "zyra",
      displayName: "Zyra",
      tagline: "Habit-building app for children",
      tech: ["React Native", "Expo", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      name: "rackTrack",
      displayName: "RackTrack",
      tagline: "POS & inventory management app",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      name: "myRoots",
      displayName: "My Roots",
      tagline: "Family journal web app",
      tech: ["JavaScript", "HTML5", "SCSS", "Tailwind", "Firebase"],
    },
    {
      name: "zyra-2",
      displayName: "Zyra",
      tagline: "Habit-building app for children",
      tech: ["React Native", "Expo", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      name: "rackTrack-2",
      displayName: "RackTrack",
      tagline: "POS & inventory management app",
      tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
    },
    {
      name: "myRoots-2",
      displayName: "My Roots",
      tagline: "Family journal web app",
      tech: ["JavaScript", "HTML5", "SCSS", "Tailwind", "Firebase"],
    },
  ];

  const list = document.getElementById("gallery");

  if (rotatingContent) {
    rotatingContent.addEventListener("animationend", () => {
      rotatingContent.classList.add("repeating-animation");
    });
  }

  const observerOptions = {
    root: document.querySelector(".outer-wrapper"),
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add bold class from top banner scroll
        entry.target.classList.add("visible");
      } else {
        // Remove bold class from top banner scroll
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  bannerRotatingItems.forEach((item) => {
    observer.observe(item);
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top < viewportHeight * 0.8 && // element distance from top
      rect.bottom >= viewportHeight * 0.2 // element distance from bottom
    );
  }

  if (moreSection) {
    window.addEventListener("scroll", () => {
      if (isElementInViewport(moreSection)) {
        const scrollY = window.scrollY;
        const newHeight = 1 + scrollY / 3; // Height based upon the scroll position

        // Styles to be updated
        moreSection.style.height = `${newHeight}px`;
        moreSection.style.transition = "200ms";
        if (moreSection.style.height >= "200px") {
          moreSection.style.padding = "30px";
        }
      } else {
      }
    });
  } else {
    console.log("Element not found");
  }

  if (list) {
    personalProjects.forEach((project) => {
      const listItem = document.createElement("div");
      listItem.classList.add("gallery-item");

      const titleItem = document.createElement("h3");
      titleItem.textContent = project.displayName;
      listItem.appendChild(titleItem);

      const taglineItem = document.createElement("p");
      taglineItem.classList.add("gallery-item-tagline");
      taglineItem.textContent = project.tagline;
      listItem.appendChild(taglineItem);

      const tagsWrapper = document.createElement("div");
      tagsWrapper.classList.add("gallery-item-tags");
      project.tech.forEach((techName) => {
        const tag = document.createElement("span");
        tag.textContent = techName;
        tagsWrapper.appendChild(tag);
      });
      listItem.appendChild(tagsWrapper);

      list.appendChild(listItem);
    });
  }

  // Keep the copyright year current automatically.
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});

openSlider = () => {
  let slider = document.getElementById("contacts-slider");
  slider.classList.toggle("opened");
};
openMobileNav = () => {
  let mobileNav = document.getElementById("mobile-menu");
  mobileNav.classList.toggle("opened");
};
