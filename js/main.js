var open = document.getElementById("hamburger");
var changeIcon = true;

open.addEventListener("click", function () {
  var overlay = document.querySelector(".overlay");
  var nav = document.querySelector("nav");
  var icon = document.querySelector(".menu-toggle i");

  overlay.classList.toggle("menu-open");
  nav.classList.toggle("menu-open");

  if (changeIcon) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");

    changeIcon = false;
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    changeIcon = true;
  }
});
// body disarppear

// end
const loader = document.querySelector(".loader");
window.onload = function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1500);
};
// Can also be used with $(document).ready()
