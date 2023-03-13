import Bat from "./bat.js";
import Pong from "./pong.js";
import Control from "./controls.js";

let control = document.getElementById("controls");

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 670;

let runState = false;

let batLeft = new Bat(22, 100, "blue", canvas.height, 7);
let batRight = new Bat(22, 100, "red", canvas.height, 671);

let ball = new Pong(
  15,
  "green",
  canvas.width,
  canvas.height,
  batLeft,
  batRight
);

let controls = new Control(batLeft, batRight);

batLeft.render(ctx);
batRight.render(ctx);

ball.render(ctx);

function gameLoop() {
  if (runState) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    batLeft.update(canvas.height);
    batLeft.render(ctx);
    batRight.update(canvas.height);
    batRight.render(ctx);

    ball.update(canvas.width, canvas.height);
    ball.render(ctx);

    requestAnimationFrame(gameLoop);
  }
}

let animate = requestAnimationFrame(gameLoop);

function run() {
  document.addEventListener("keypress", (e) => {
    if (e.key == "p") {
      runState = !runState;
      requestAnimationFrame(gameLoop);
    }
    if (e.key == "r") {
      requestAnimationFrame(gameLoop);
    }
    if (e.key == " ") {
      location.reload();
    }
  });

  control.addEventListener("click", () => {
    if (runState) {
      runState = !runState;
    }
  });
}

run();
