// Navbar Js
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

// Navbar Responsiveness
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// Work & Testimoney Preview Section 
const windowObject = window;
windowObject.addEventListener("scroll", function () {
    const scrollY = windowObject.scrollY;
    const horizontalScrollElement = this.document.getElementById("workPreview");
    const horizontalScrollElement2 = this.document.getElementById("testimonyPreview");

    horizontalScrollElement.scrollLeft = scrollY * 0.2;
    horizontalScrollElement2.scrollLeft = scrollY * 0.2;

});
