// select ul with id "drop"
const get_main_nav = document.querySelector("#js-menu");
const nav_toggle = document.querySelector("#js-navbar-toggle");

// when clicking logo drop down should appear
nav_toggle.addEventListener("click", () => {
    get_main_nav.classList.toggle("active");
});