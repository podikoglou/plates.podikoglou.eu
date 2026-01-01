import type { FC } from "hono/jsx";
import { EntriesTable } from "../components/entries-table";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<Navbar />

			<h1>Alex's License Plates Database</h1>
			<p>
				Here you can find a database of all the license plates I've spotted over
				the past few years.
			</p>

			<h2>Recent Entries</h2>

			<EntriesTable />
		</Layout>
	);
};
