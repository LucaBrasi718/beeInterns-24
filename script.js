const triangle = document.querySelector(".triangle");

speedInput.addEventListener("change", changeSpeed);
triangle.style.animationDuration = `${20 / speedInput.value}s`;

function changeSpeed() {
    speed = 20 / speedInput.value;
    triangle.style.animationDuration = `${speed}s`;
}