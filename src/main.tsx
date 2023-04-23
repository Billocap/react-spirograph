import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { GearsProvider } from "@contexts/useGears";
import App from "@pages/App";
import Renderer from "@lib/Renderer";
import Drawer from "@lib/Drawer";
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

const drawer = new Drawer(ctx);

const spirograph = new SpirographModel();

let n: Renderer | null = null;

drawer.clear();

ReactDOM.createRoot(ui).render(
  <GearsProvider>
    <App
      onHide={(gears) => {
        if (n) n.disable();

        spirograph.gears = gears;

        n = new Renderer();

        drawer.clear();

        n.render(() => drawer.render(spirograph));
      }}
    />
  </GearsProvider>
);
