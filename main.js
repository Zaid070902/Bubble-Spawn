let body = document.querySelector("body");

let sizes = ["30px", "50px", "80px", "100px", "150px"];

let colors = [
  "rgba(225, 225, 225, 0.3)",
  "rgba(225, 225, 225, 0.2)",
  "rgba(225, 225, 225, 0.1)",
];

let color = colors[randomColor()];

function randomColor(event) {
  let ranColor = Math.random() * colors.length;
  return Math.floor(ranColor);
}

function randomPlace(event) {
  let ranPlaceLeft = Math.random() * 90;
  let ranPlaceRight = Math.random() * 90;

  return Math.floor(ranPlaceLeft, ranPlaceRight);
}

let randomSize = sizes[bubbleSize()];

function bubbleSize(event) {
  let ran = Math.random() * sizes.length;
  return Math.floor(ran);
}

let speed = [5, 6, 7, 8, 9, 10];

function randomSpeed(event) {
  let ranSpeed = Math.random() * speed.length;
  return Math.floor(ranSpeed);
}

setInterval(function spawn(event) {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");

  body.appendChild(bubble);

  let bubbles = document.querySelectorAll(".bubble");
  console.log(randomPlace());

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.top = `${randomPlace()}%`;
    bubbles[i].style.right = `${randomPlace()}%`;
    bubbles[i].style.transform = `translate(${randomPlace()},${randomPlace()})`;
    bubbles[i].style.transition = `${speed[randomSpeed()]}s`;
    bubbles[i].style.padding = sizes[bubbleSize()];
    bubbles[i].style.backgroundColor = colors[randomColor()];
  }
  console.log(speed[randomSpeed()]);
}, 5000);