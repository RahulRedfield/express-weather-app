const menuToggleEl = document.getElementById("menu-toggle");
const navListEl = document.getElementById("nav-list");
const navLinksEl = document.querySelectorAll(".nav--link");

const toggle = () => {
    menuToggleEl.classList.toggle("show");
    navListEl.classList.toggle("show-menu");
}

menuToggleEl.addEventListener("click", toggle);

navLinksEl.forEach((navLinkEl) => {
    navLinkEl.addEventListener("click", toggle)
})