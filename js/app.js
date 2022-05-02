//slider
const swiper = new Swiper('.swiper');

swiper.on('slideChange', function () {
    document.querySelector(".navItem.active").classList.remove("active");
    (document.querySelectorAll(".navItem")[swiper.activeIndex]).classList.add("active");
    document.querySelector("#header>div").textContent = document.querySelector(".navItem.active").getAttribute("title");
});

document.querySelectorAll(".navItem").forEach(function (element) {
    element.addEventListener("click", function () {
        document.querySelector(".navItem.active").classList.remove("active");
        this.classList.add("active");
        swiper.slideTo(this.getAttribute("slide"));
    });
});