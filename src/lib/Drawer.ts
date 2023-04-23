export default class Drawer {
  public readonly ctx: CanvasRenderingContext2D;

  private time: number;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;

    this.time = 0;
  }

  clear() {
    const { ctx } = this;

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.time = 0;
  }

  render(spirograph: Spirograph) {
    const { ctx, time } = this;

    ctx.fillStyle = "red";

    const center = {
      x: ctx.canvas.width / 2,
      y: ctx.canvas.height / 2
    };

    const { x, y } = spirograph.evaluate(time, center);

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fill();

    this.time += 1 / 60;
  }
}
