const slides = document.querySelectorAll(".testimonial-slide");
const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        counter++;
        moveSlide();
    })
})

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        counter--;
        moveSlide();
    })
})

function moveSlide() {
    if(counter === slides.length) {
        counter = 0;
    }

    if(counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}