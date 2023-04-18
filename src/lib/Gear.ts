class Gear {
  public readonly key: number;

  public speed: number;
  public shift: number;
  public radius: number;
  public displace: number;

  constructor(
    speed?: number,
    shift?: number,
    radius?: number,
    displace?: number
  ) {
    this.speed = speed ?? 1;
    this.shift = shift ?? 0;
    this.radius = radius ?? 1;
    this.displace = displace ?? 0;

    this.key = new Date().getTime() + Math.random();
  }

  evaluate(phase: number) {
    const { speed, shift, radius, displace } = this;
    const { cos, sin } = Math;

    const x = (displace + radius) * cos(phase * speed + shift);
    const y = (displace + radius) * sin(phase * speed + shift);

    return { x, y };
  }
}

export default Gear;
