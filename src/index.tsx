import { zValidator } from "@hono/zod-validator";
import { parse } from "date-fns";
import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { serveStatic } from "hono/bun";
import z from "zod";
import { db } from "./db";
import { entriesTable } from "./db/schema";
import { EntryPage } from "./pages/entry";
import { ErrorPage } from "./pages/error";
import { IndexPage } from "./pages/index";
import { SubmitPage } from "./pages/submit";
import { insertEntry } from "./service/entry";

const app = new Hono();

const auth = basicAuth({
	username: process.env.APP_USERNAME!,
	password: process.env.APP_PASSWORD!,
});

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
	return c.html(<IndexPage />);
});

app.get(
	"/entry/:id",
	zValidator(
		"param",
		z.object({
			id: z.string().transform((id) =>
				/* this sucks really bad.
           it can parse strings like 3489afhsdoiu as 3489 */
				parseInt(id),
			),
		}),
	),
	(c) => {
		const id = c.req.valid("param").id;

		return c.html(<EntryPage entryId={id} />);
	},
);

app.get("/submit", auth, (c) => {
	return c.html(<SubmitPage />);
});

app.post(
	"/submit",
	auth,
	zValidator(
		"form",
		z.object({
			countryCode: z.string(),
			eu: z.stringbool({ truthy: ["on"] }).default(false),
			text: z.string(),
			date: z
				.string()
				.transform((value) => parse(value, "yyyy-MM-dd'T'HH:mm", new Date())),
			notes: z.string().optional(),
		}),
	),
	async (c) => {
		const form = c.req.valid("form");

		await insertEntry(form);

		// TODO: redirect to individual entry page

		return c.html(<SubmitPage />);
	},
);

app.all("*", (c) => {
	return c.html(<ErrorPage error="Invalid Page" />);
});

export default app;
