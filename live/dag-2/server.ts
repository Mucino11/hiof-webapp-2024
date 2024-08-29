import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

const app = new Hono();

app.use("/*", cors());
app.use("/statics/*", serveStatic({ root: "./" }));

app.get("/json", async (c) => {
  try {
    // Read the file with UTF-8 encoding to get a string
    const data = await readFile("./data.json", "utf-8");
    return c.json(JSON.parse(data)); // Parse JSON and return response
  } catch (error) {
    console.error("Error reading data.json:", error);
    return c.json({ error: "Failed to read the data file." }, 500); // Return error response
  }
});

const port = 3999;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
