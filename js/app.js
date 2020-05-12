let ham = document.querySelector(".ham");
let nav = document.querySelector(".ulnav");
let slide = document.querySelector(".slide");
let slides = document.querySelectorAll(".bgcg")
let circles = document.querySelectorAll(".circle");
circles = Array.from(circles);
slides = Array.from(slides);

const toogleHam = () => {
    if (nav.classList.contains("animation1")) {
        ham.src = "./images/icon-hamburger.svg";
        nav.classList.remove("animation1");
        nav.classList.add("animation2");

    } else {
        ham.src = "./images/icon-close.svg";
        nav.classList.remove("animation2");
        nav.classList.add("animation1");
    }

}

const scroll = () => {
    slides.map((item, index) => {
        if (item.getBoundingClientRect().x >= 40.59375 && item.getBoundingClientRect().x < 414.296875) {
            circles.map((item) => {
                item.classList.remove("circlefull");
            })
            circles[index].classList.add("circlefull");
        }

    })
}


ham.addEventListener("click", toogleHam);
slide.addEventListener("scroll", scroll)