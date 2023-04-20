import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { GearsProvider } from "@contexts/useGears";
import App from "@pages/App";
import Renderer from "@lib/Renderer";
import SpirographModel from "@model/SpirographModel";

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

ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const spirograph = new SpirographModel();

function render(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "red";

  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };

  const { x, y } = spirograph.evaluate(i, center);

  ctx.beginPath();
  ctx.arc(x, y, 1, 0, 2 * Math.PI);
  ctx.fill();

  i += 1 / 60;
}

let n: Renderer | null = null;

ReactDOM.createRoot(ui).render(
  <GearsProvider>
    <App
      onHide={(gears) => {
        if (n) n.disable();

        spirograph.gears = gears;

        n = new Renderer();

        n.render(() => render(ctx));
      }}
    />
  </GearsProvider>
);
