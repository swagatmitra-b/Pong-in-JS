class Bat {
  constructor(width, height, color, canvasHeight, offset) {
    this.width = width;
    this.height = height;
    this.color = color;

    this.speed = 6;
    this.velocity = 0;

    this.coordinate = {
      x: offset,
      y: canvasHeight / 2 - this.height / 2,
    };
  }

  moveUp() {
    this.velocity = -this.speed
  }

  moveDown() {
    this.velocity = this.speed
  }

  stop() {
    this.velocity = 0
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.coordinate.x, this.coordinate.y, this.width, this.height);
  }

  update(canvasHeight) {
    this.coordinate.y += this.velocity

    if (this.coordinate.y < 0) this.coordinate.y = 0 // this.velocity *= -1 (for bouncing)
    else if ( this.coordinate.y + this.height > canvasHeight) this.coordinate.y = canvasHeight - this.height
  }
}

export default Bat;
