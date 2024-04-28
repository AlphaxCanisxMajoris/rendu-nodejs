console.log("hello world");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
//dark mode

document
  .getElementById("bouton-dark")
  .addEventListener("click", toggleDarkMode);

type =
  "text/javascript" >
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
//animation nav barre

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}); //swiper https://codesandbox.io/p/sandbox/x6fsff?file=%2Findex.html%3A73%2C5-79%2C8, appuyer et glisser pour swiper
