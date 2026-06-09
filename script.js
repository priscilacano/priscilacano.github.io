const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("[data-page]");
const menu = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-button");

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  if (menu) {
    menu.classList.remove("open");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    const pageId = link.dataset.page;
    if (!pageId) return;
    event.preventDefault();
    showPage(pageId);
  });
});

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
