const triangle = document.querySelector(".triangle");
const input = speedInput;

input.addEventListener("change", changeSpeed);
triangle.style.animationDuration = `${20 / input.value}s`;

function changeSpeed() {
    speed = 20 / input.value;
    triangle.style.animationDuration = `${speed}s`;
}