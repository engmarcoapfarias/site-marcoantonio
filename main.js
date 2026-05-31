// main.js

// Ano automático no rodapé
document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Scroll suave para botões com data-scroll-target
  var scrollButtons = document.querySelectorAll("[data-scroll-target]");
  scrollButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetSelector = btn.getAttribute("data-scroll-target");
      var targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        var headerOffset = 70;
        var elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});