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

var MenuItems = document.getElementById("nav-bar");
var TogglerBtn = document.getElementById("toggler");
var NavMenu = document.getElementById("nav-menu");

MenuItems.style.height = "4rem";

TogglerBtn.addEventListener("click", () => {
  MenuItems.style.height == "4rem"
    ? (MenuItems.style.height = "316px") && (NavMenu.style.display = "block")
    : (MenuItems.style.height = "4rem") && (NavMenu.style.display = "none");
});

NavMenu.addEventListener("click", () => {
  MenuItems.style.height = "4rem";
  NavMenu.style.display = "none";
});

let scrolltop = document.getElementById("#scroll");
scrolltop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
