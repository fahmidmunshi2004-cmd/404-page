const faceSvg = document.querySelector(".number-wrapper svg");
const pupilLeft = document.getElementById("pupil-left");
const pupilRight = document.getElementById("pupil-right");
const eyebrowLeft = document.getElementById("eyebrow-left");
const eyebrowRight = document.getElementById("eyebrow-right");
const eyebrows = [eyebrowLeft, eyebrowRight];

function triggerEyebrowLift() {
  eyebrows.forEach((eyebrow) => {
    eyebrow.classList.remove("is-lifting");
    void eyebrow.getBoundingClientRect();
    eyebrow.classList.add("is-lifting");
  });
}

eyebrows.forEach((eyebrow) => {
  eyebrow.addEventListener("animationend", () => {
    eyebrow.classList.remove("is-lifting");
  });
});

window.addEventListener("mousemove", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const maxMove = 35;
  const moveX = ((event.clientX - centerX) / centerX) * maxMove;
  const moveY = ((event.clientY - centerY) / centerY) * maxMove;

  pupilLeft.style.transform = `translate(${moveX}px, ${moveY}px)`;
  pupilRight.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

faceSvg.addEventListener("click", triggerEyebrowLift);
faceSvg.addEventListener("mouseenter", triggerEyebrowLift);

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
