// script to handle navigation highlighting
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
