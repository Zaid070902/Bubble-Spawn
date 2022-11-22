let body = document.querySelector("body");

let sizes = ["30px", "50px", "80px", "100px", "150px"];

let speed = [5, 6, 7, 8, 9, 10];

let randomSize = sizes[bubbleSize()];

function randomPlace(event) {
  let ranPlaceLeft = Math.random() * 90;
  let ranPlaceRight = Math.random() * 90;

  return Math.floor(ranPlaceLeft, ranPlaceRight);
}

function bubbleSize(event) {
  let ran = Math.random() * sizes.length;
  return Math.floor(ran);
}

function randomSpeed(event) {
  let ranSpeed = Math.random() * speed.length;
  return Math.floor(ranSpeed);
}

setInterval(function spawn(event) {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.setAttribute("onclick", "event");
  bubble.addEventListener("pointerdown", despawn);

  body.appendChild(bubble);

  let audio = document.querySelector("audio");
  function despawn(event) {
    bubble.remove();
  }

  let bubbles = document.querySelectorAll(".bubble");
  console.log(randomPlace());

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.top = `${randomPlace()}%`;
    bubbles[i].style.right = `${randomPlace()}%`;
    bubbles[i].style.transform = `translate(${randomPlace()},${randomPlace()})`;
    bubbles[i].style.transition = `${speed[randomSpeed()]}s`;
    bubbles[i].style.padding = sizes[bubbleSize()];
    bubbles[i].style.backgroundColor = "rgba(0, 200, 200, 0.1)";
    bubbles[i].style.boxShadow = "cyan 1px 0px 10px inset";
  }
  console.log(speed[randomSpeed()]);
}, 1500);
