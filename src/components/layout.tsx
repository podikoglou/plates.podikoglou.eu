import { Style } from "hono/css";
import type { FC } from "hono/jsx";

export const Layout: FC = (props) => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" href="/static/style.css" />
				<link rel="stylesheet" href="/static/recursive.css" />
				<script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"></script>
				<Style />
			</head>
			<body>{props.children}</body>
		</html>
	);
};
