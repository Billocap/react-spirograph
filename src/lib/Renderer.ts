export default class Renderer {
  private frameID: number;
  private time: number;

  constructor() {
    this.frameID = -1;
    this.time = 0;
  }

  play(callback: (time: number) => void) {
    callback(this.time);

    this.time += 1 / 60;

    this.frameID = requestAnimationFrame(() => this.play(callback));
  }

  stop() {
    const { frameID } = this;

    if (frameID > 0) cancelAnimationFrame(frameID);

    this.frameID = -1;
    this.time = 0;
  }
}
