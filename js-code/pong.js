class Pong {
  constructor(radius, color, canvasWidth, canvasHeight, batLeft, batRight) {
    this.coordinate = {
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    };

    this.direction = [1, -1];

    this.velocity = {
      x:
        Math.floor(Math.random() * 5 + 2) *
        this.direction[Math.floor(Math.random() * this.direction.length)],
      y:
        Math.floor(Math.random() * 3 + 2) *
        this.direction[Math.floor(Math.random() * this.direction.length)],
    };

    this.radius = radius;
    this.color = color;
    this.batLeft = batLeft;
    this.batRight = batRight;
    this.leftOutbound = this.coordinate.x + this.radius < 0;
    this.rightOutbound = this.coordinate.x - this.radius > canvasWidth;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.coordinate.x, this.coordinate.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(canvasWidth, canvasHeight) {
    this.coordinate.x += this.velocity.x;
    this.coordinate.y += this.velocity.y;

    const leftParallel = this.batLeft.coordinate.x + this.batLeft.width + 30;
    const rightParallel = this.batRight.coordinate.x;

    const leftOutbound = this.coordinate.x + this.radius < 0;
    const rightOutbound = this.coordinate.x - this.radius > canvasWidth;

    if (
      this.coordinate.y + this.radius > canvasHeight ||
      this.coordinate.y - this.radius < 0
    ) {
      this.velocity.y *= -1;
    }

    if (this.velocity.x > 0) {
      if (
        this.coordinate.x + this.radius > rightParallel &&
        this.coordinate.y >= this.batRight.coordinate.y && // upper
        this.coordinate.y <=
          this.batRight.coordinate.y + this.batRight.height /* lower */
      ) {
        if (rightOutbound) {
          this.velocity == this.velocity;
        } else {
          this.velocity.x *= -1;
        }
      }
    }

    if (this.velocity.x < 0) {
      if (
        this.coordinate.x + this.radius < leftParallel &&
        this.coordinate.y >= this.batLeft.coordinate.y &&
        this.coordinate.y <= this.batLeft.coordinate.y + this.batLeft.height
      ) {
        if (leftOutbound) {
          this.velocity == this.velocity;
        } else {
          this.velocity.x *= -1;
        }
      }
    }


    function scoreboard() {
      if (rightOutbound) {
        let playerA = document.getElementById("A");
        playerA.style.fontSize = "1.7rem";
        playerA.innerText = "WINS!";
      } else if (leftOutbound) {
        let playerB = document.getElementById("B");
        playerB.style.fontSize = "1.7rem";
        playerB.innerText = "WINS!";
      }
    }
    scoreboard.bind(this)();
  }
}

export default Pong;
