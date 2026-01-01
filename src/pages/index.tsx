import type { FC } from "hono/jsx";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";
import { RecentEntries } from "../components/recent-entries";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<Navbar />

			<h1>Alex's License Plates Database</h1>
			<p>
				Here you can find a database of all the license plates I've spotted over
				the past few years.
			</p>

			<RecentEntries />
		</Layout>
	);
};
