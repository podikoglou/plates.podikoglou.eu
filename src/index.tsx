import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import type { Context } from "./context";
import { IndexPage } from "./pages/index";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
	const context: Context = { userId: "mock" };

	return c.html(<IndexPage context={context} />);
});

export default app;
