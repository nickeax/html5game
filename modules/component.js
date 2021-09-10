export class Component {
  constructor(width, height, x, y, color, ga) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.context = ga.canvas.getContext('2d')
    this.color = color

    console.log(this.context);

    this.newPos = _ => {
      this.x += this.speedX;
      this.Y += this.speedY;
    };
    this.update = function () {
      this.context.fillStyle = this.color;
      this.context.fillRect(this.x, this.y, this.height, this.width);
    };

  }
}
