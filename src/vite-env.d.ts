/// <reference types="vite/client" />
interface Point {
  x: number;
  y: number;
}

interface Gear {
  speed: number;
  shift: number;
  radius: number;
  displacement: number;

  evaluate(phase: number): Point;
}

interface Spirograph {
  gears: Gear[];

  evaluate(phase: number, center?: Point): Point;
}
