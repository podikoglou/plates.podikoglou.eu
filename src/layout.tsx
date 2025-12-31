import type { FC } from "hono/jsx";

export const Layout: FC = (props) => {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="/static/style.css" />
				<link rel="stylesheet" href="/static/recursive.css" />
			</head>
			<body>{props.children}</body>
		</html>
	);
};
