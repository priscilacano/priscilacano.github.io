const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const clickableItems = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll(".page-section");
const menu = document.querySelector(".tabs");
const toggle = document.querySelector(".menu-toggle");

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.toggle("active", section.id === sectionId);
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.section === sectionId);
  });

  if (menu) menu.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

clickableItems.forEach(item => {
  item.addEventListener("click", event => {
    const sectionId = item.dataset.section;
    if (!sectionId) return;
    event.preventDefault();
    showSection(sectionId);
  });
});

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
