import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { lstatSync, readdirSync } from "fs";

const source = path.resolve(__dirname, "src");

const children = readdirSync(source);

const shortcuts = children
  .filter((child) => {
    const childPath = path.resolve(source, child);

    const stat = lstatSync(childPath);

    return stat.isDirectory();
  })
  .map((child) => ({
    find: `@${child}`,
    replacement: path.resolve(source, child)
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      },
      ...shortcuts
    ]
  }
});
