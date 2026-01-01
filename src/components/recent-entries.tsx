import type { FC } from "hono/jsx";
import { findRecentEntries } from "../services/entry";
import { EntriesTable } from "./entries-table";

export const RecentEntries: FC<{ page: number }> = async ({ page }) => {
	const entries = await findRecentEntries(page);

	return <EntriesTable entries={entries} />;
};
