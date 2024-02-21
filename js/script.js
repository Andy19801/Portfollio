const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("strick", window.scrollY >120);
});