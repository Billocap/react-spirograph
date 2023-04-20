class SpirographModel implements Spirograph {
  public gears: Gear[];

  constructor() {
    this.gears = [];
  }

  evaluate(phase: number, center?: Point): Point {
    const { gears } = this;

    const result = {
      x: center?.x ?? 0,
      y: center?.y ?? 0
    };

    for (const gear of gears) {
      const { x, y } = gear.evaluate(phase);

      result.x += x;
      result.y += y;
    }

    return result;
  }
}

export default SpirographModel;
