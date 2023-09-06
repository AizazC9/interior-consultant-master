var btn = document.querySelector(".nav-btn");
var nav = document.querySelector(".navbar");

btn.addEventListener("click", function () {
    console.log("click")
  nav.classList.toggle("nav-open")
});
