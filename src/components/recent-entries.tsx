import type { FC } from "hono/jsx";
import { db } from "../db";
import { entriesTable } from "../db/schema";
import { EntriesTable } from "./entries-table";

export const RecentEntries: FC = async () => {
	const entries = await db
		.select()
		.from(entriesTable)
		.orderBy(entriesTable.createdAt)
		.limit(20)
		.execute();

	return <EntriesTable entries={entries} />;
};
