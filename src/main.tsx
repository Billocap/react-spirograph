import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { GearsProvider } from "./contexts/useGears";
import App from "./components/App";
import Gear from "./lib/Gear";

import "./index.css";

const ui = document.getElementById("ui") as HTMLElement;

const canvas = document.getElementById("target") as HTMLCanvasElement;

const ctx = canvas.getContext("2d");

if (!ctx) throw new Error("Unable to use canvas.");

canvas.setAttribute("width", window.innerWidth.toString());
canvas.setAttribute("height", window.innerHeight.toString());

window.onresize = function () {
  canvas.setAttribute("width", window.innerWidth.toString());
  canvas.setAttribute("height", window.innerHeight.toString());
};

let i: number = 0;

function render(ctx: CanvasRenderingContext2D, gears: Gear[]) {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "red";

  let _x = 0;
  let _y = 0;

  for (const gear of gears) {
    const { x, y } = gear.evaluate(i);

    ctx.beginPath();
    ctx.arc(
      canvas.width / 2 + _x,
      canvas.height / 2 + _y,
      gear.radius,
      0,
      2 * Math.PI
    );
    ctx.stroke();

    _x += x;
    _y += y;
  }

  i += 1 / 60;

  requestAnimationFrame(() => render(ctx, gears));
}

ReactDOM.createRoot(ui).render(
  <GearsProvider>
    <App
      onHide={(gears) => {
        render(ctx, gears);
      }}
    />
  </GearsProvider>
);
