const carouselItemsEl = document.querySelectorAll(".carousel-image");
let currentCarouselItem = 0;

const carouselSlide = () => {
    carouselItemsEl[currentCarouselItem].classList.remove("active");

    if (currentCarouselItem < carouselItemsEl.length - 1) {
        currentCarouselItem += 1;
    } else {
        currentCarouselItem = 0;
    }

    carouselItemsEl[currentCarouselItem].classList.add("active")
}

const interval = setInterval(() => {

    carouselSlide();

}, 2000);

document.getElementById("carousel").addEventListener("click", carouselSlide);