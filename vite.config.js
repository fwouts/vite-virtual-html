import path from "path";
import { defineConfig } from "vite";
import virtual from "vite-plugin-virtual";

export default defineConfig({
  plugins: [
    virtual.default({
      [path.join(__dirname, "index.html")]: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite App</title>
          </head>
          <body>
            <div id="app"></div>
            <script type="module" src="/main.js"></script>
          </body>
        </html>`,
    }),
  ],
});
