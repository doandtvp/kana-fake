// Grab HTML Elements
window.addEventListener("DOMContentLoaded", (event) => {
  // Grab HTML Elements
  // if (window.innerWidth > 1024) {
  const link = document.querySelectorAll(".header-link");
  const navLink = document.querySelectorAll(".nav-link");
  const btn = document.querySelectorAll(".btn");
  // Add Event Listeners
  [...navLink].map((item, index) => {
    if (item.href === window.location.href) {
      [...link][index].classList.add("active-link");
    }
  });
  [...btn].forEach((item, index) => {
    item.addEventListener("click", (e) => {
      item.classList.toggle("active-btn");
    });
  });
});
const dropdown = document.querySelector(".links-dropdown");
const body = document.querySelector("body");

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});
window.addEventListener("DOMContentLoaded", (event) => {
  // Grab HTML Elements
  const bars = document.querySelector(".links-bar");
  const closeBtn = document.querySelector(".close");
  // Add Event Listeners
  bars.addEventListener("click", () => {
    dropdown.classList.add("show");
    body.style.position = "fixed";
  });
  closeBtn.addEventListener("click", () => {
    dropdown.classList.remove("show");
    body.style.position = "unset";
  });
});
