import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { GearsProvider } from "@contexts/useGears";
import App from "@pages/App";
import Renderer from "@lib/Renderer";
import SpirographDrawer from "@drawers/SpirographDrawer";
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

const drawer = new SpirographDrawer(new SpirographModel(), ctx);

const renderer = new Renderer();

ReactDOM.createRoot(ui).render(
  <GearsProvider>
    <App
      onHide={(gears) => {
        renderer.stop();

        drawer.setup(gears);

        renderer.play((time) => drawer.draw(time));
      }}
    />
  </GearsProvider>
);
