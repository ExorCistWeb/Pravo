let header = document.querySelector("header");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    header.style.boxShadow = "0px 0px 10px #888888";
    header.style.transition = "box-shadow 0.5s ease-in-out";
  } else {
    header.style.boxShadow = "none";
    header.style.transition = "box-shadow 0.5s ease-in-out";
  }
};

document.querySelector(".buyer-changer").onclick = (e) => {
  console.log(e.target.classList);

  if (e.target.classList.contains("buyer")) {
    e.target.classList.add("owner");
    e.target.classList.remove("buyer");
  } else {
    e.target.classList.add("buyer");
    e.target.classList.remove("owner");
  }
};

const swiper = new Swiper(".slider-head", {
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".head-button-next",
    prevEl: ".head-button-prev",
  },
});
const swiper2 = new Swiper(".slider-body", {
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".body-button-next",
    prevEl: ".body-button-prev",
  },
});
