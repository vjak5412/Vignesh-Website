document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
  });

  document.getElementById("themeToggle").addEventListener("click", function () {
    const html = document.documentElement;
    const label = document.getElementById("themeLabel");
    const isLight = html.getAttribute("data-theme") === "light";
    html.setAttribute("data-theme", isLight ? "dark" : "light");
    label.textContent = isLight ? "Switch to light mode" : "Switch to dark mode";
  });

  ScrollReveal().reveal("section", {
    duration: 1000,
    distance: "50px",
    origin: "bottom",
    reset: true
  });

  window.addEventListener("scroll", () => {
    const btn = document.getElementById("backToTop");
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
