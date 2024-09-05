import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (c) => {
  return c.json({ data: "Hello, world!" });
});

// my solution
// app.get("/", (c) => {
//   return c.json({ data: "backend/data/weather.json"});
// });

const port = 3999;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
