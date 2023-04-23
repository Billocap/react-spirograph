export default class Renderer {
  private enabled: boolean;

  constructor() {
    this.enabled = true;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  render(callback: (...args: any[]) => void) {
    callback();

    if (this.enabled) {
      requestAnimationFrame(() => this.render(callback));
    }
  }
}
