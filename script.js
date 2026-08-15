document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current automatically.
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // ---- Command palette: cycling query text ----
  const paletteQueries = [
    "search skills, projects, experience",
    "react native",
    "dashboards",
    "full-stack",
  ];
  let queryIndex = 0;
  const queryEl = document.getElementById("palette-query");
  if (queryEl) {
    setInterval(() => {
      queryIndex = (queryIndex + 1) % paletteQueries.length;
      queryEl.textContent = paletteQueries[queryIndex];
    }, 2600);
  }

  // ---- Command palette: cycling active row ----
  const resultRows = document.querySelectorAll("#palette-results .presult");
  let paletteIndex = 0;
  function updatePalette() {
    resultRows.forEach((r, i) => r.classList.toggle("active", i === paletteIndex));
    paletteIndex = (paletteIndex + 1) % resultRows.length;
  }
  if (resultRows.length) {
    updatePalette();
    setInterval(updatePalette, 1400);
  }

  // Clicking a result scrolls to the relevant section.
  resultRows.forEach((row) => {
    row.addEventListener("click", () => {
      const target = row.getAttribute("data-target");
      if (target) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// ---- Copy email to clipboard ----
function copyEmail(button) {
  const email = "namit.jaitly.nj@gmail.com";
  const hint = document.getElementById("copy-hint");
  const finish = (message) => {
    if (hint) {
      hint.textContent = message;
      setTimeout(() => {
        hint.textContent = "Click to copy the address";
      }, 2000);
    }
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(email)
      .then(() => finish("Copied to clipboard!"))
      .catch(() => finish("Couldn't copy — email is above"));
  } else {
    finish("Couldn't copy — email is above");
  }
}

openSlider = () => {
  let slider = document.getElementById("contacts-slider");
  slider.classList.toggle("opened");
};
openMobileNav = () => {
  let mobileNav = document.getElementById("mobile-menu");
  mobileNav.classList.toggle("opened");
};
