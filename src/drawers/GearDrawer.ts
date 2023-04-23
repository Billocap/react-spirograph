export default class GearDrawer {
  public readonly gear: Gear;
  public readonly ctx: CanvasRenderingContext2D;

  constructor(gear: Gear, ctx: CanvasRenderingContext2D) {
    this.gear = gear;
    this.ctx = ctx;
  }

  draw(time: number, center: Point) {
    const { ctx, gear } = this;

    ctx.strokeStyle = "navy";

    ctx.beginPath();
    ctx.arc(center.x, center.y, gear.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
