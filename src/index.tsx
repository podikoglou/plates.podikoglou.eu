import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { serveStatic } from "hono/bun";
import { IndexPage } from "./pages/index";
import { SubmitPage } from "./pages/submit";

const app = new Hono();

const auth = basicAuth({
	username: process.env.USERNAME!,
	password: process.env.PASSWORD!,
});

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
	return c.html(<IndexPage />);
});

app.get("/submit", auth, (c) => {
	return c.html(<SubmitPage />);
});

export default app;
