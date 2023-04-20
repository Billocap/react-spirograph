class GearModel implements Gear {
  public readonly key: number;

  public speed: number;
  public shift: number;
  public radius: number;
  public displacement: number;

  constructor(
    speed?: number,
    shift?: number,
    radius?: number,
    displacement?: number
  ) {
    this.speed = speed ?? 1;
    this.shift = shift ?? 0;
    this.radius = radius ?? 1;
    this.displacement = displacement ?? 0;

    this.key = new Date().getTime() + Math.random();
  }

  evaluate(phase: number): Point {
    const { speed, shift, radius, displacement } = this;
    const { cos, sin } = Math;

    const x = (displacement + radius) * cos(phase * speed + shift);
    const y = (displacement + radius) * sin(phase * speed + shift);

    return { x, y };
  }
}

export default GearModel;
