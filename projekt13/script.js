let divisor = document.querySelector(".divisor");
let slider = document.getElementById("slider-range");

function divisorChange() {
    divisor.style.width = slider.value + "%";
}