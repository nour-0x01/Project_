// Search box

let search = document.querySelector("header ul li .search");
let searchBox = document.querySelector("header .search-box");
let searchInput = document.querySelector("header .search-box input");
let exit = document.querySelector("header .exit");

search.addEventListener("click", function (e) {
  e.preventDefault();

  searchBox.style.cssText = "height: calc(100vh + 68px);";
  searchInput.style.cssText = "display: block;";
  exit.style.cssText = "display: flex; justify-content: center; align-items: center;";
});

exit.addEventListener("click", function () {
  searchBox.style.cssText = "height: 0;";
  searchInput.style.cssText = "display: none;";
  exit.style.cssText = "display: none;";
});

// Nav Bar 2

let navBar = document.querySelector(".nav");
let navBarLinks = document.querySelectorAll(".nav a");
let navLinks = document.querySelectorAll("header .nav-bar a");
let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition < lastScrollPosition) {
    // console.log("Scrolling up!");
    navBar.style.cssText = "";
    navLinks.forEach(l => l.style.cssText = "");
    // navBar.style.cssText = "position: sticky;";
  } else {
    // console.log("Scrolling down or staying still.");
    navBar.style.cssText = "transform: translateY(-100%);";
    navLinks.forEach(l => l.style.cssText = "transform: translateY(-100%);");
    // navBar.style.cssText = "top: -68px";
  }

  lastScrollPosition = currentScrollPosition;
});
