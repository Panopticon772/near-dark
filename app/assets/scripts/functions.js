// select ul with id "drop"
const get_main_nav = document.querySelector("#js-menu");
const nav_toggle = document.querySelector("#js-navbar-toggle");

// get footer button
const getFooterBtn = document.querySelector("#footer-btn");

// // when clicking logo drop down should appear
nav_toggle.addEventListener("click", () => {
    get_main_nav.classList.toggle("active");
});

const back_to_top = () => {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox, IE
}

getFooterBtn.addEventListener("click", () => {
    back_to_top();
});