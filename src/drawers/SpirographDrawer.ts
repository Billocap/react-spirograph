export default class SpirographDrawer {
  public readonly spirograph: Spirograph;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(spirograph: Spirograph, ctx: CanvasRenderingContext2D) {
    this.spirograph = spirograph;
    this.ctx = ctx;
  }

  setup(gears: Gear[]) {
    const { ctx, spirograph } = this;

    spirograph.gears = gears;

    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  draw(time: number) {
    const { ctx, spirograph } = this;

    ctx.strokeStyle = "red";

    const center = {
      x: ctx.canvas.width / 2,
      y: ctx.canvas.height / 2
    };

    const from = spirograph.evaluate(time, center);
    const to = spirograph.evaluate(time + 1 / 60, center);

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }
}
