// ********** nav toggle ************
// select button and links

// ********** navbar fixed ************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// ********** smooth scroll ************
// select links

var MenuItems = document.getElementById("nav-menu");
var TogglerBtn = document.getElementById("toggler");

MenuItems.style.height = "0px";

TogglerBtn.addEventListener("click", () => {
  MenuItems.style.height == "0px"
    ? (MenuItems.style.height = "270px")
    : (MenuItems.style.height = "0px");
});
