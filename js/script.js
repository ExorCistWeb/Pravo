let header = document.querySelector("header");

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        header.style.boxShadow = "0px 0px 10px #888888";
        header.style.transition = "box-shadow 0.5s ease-in-out";
    } else {
        header.style.boxShadow = "none";
        header.style.transition = "box-shadow 0.5s ease-in-out";
    }
};