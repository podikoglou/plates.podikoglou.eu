import { desc, eq, sql } from "drizzle-orm";
import { db } from "../db";
import { entriesTable } from "../db/schema";

const entryQuery = db
	.select()
	.from(entriesTable)
	.where(eq(entriesTable.id, sql.placeholder("id")))
	.limit(1)
	.prepare();

const recentEntriesQuery = db
	.select()
	.from(entriesTable)
	.orderBy(desc(entriesTable.spottedOn))
	.limit(20)
	.prepare();

export const findEntry = async (
	id: number,
): Promise<typeof entriesTable.$inferSelect | undefined> => {
	const results = await entryQuery.execute({ id });

	return results[0];
};

export const findRecentEntries = async (): Promise<
	(typeof entriesTable.$inferSelect)[]
> => {
	return recentEntriesQuery.execute();
};

export const insertEntry = async (data: typeof entriesTable.$inferInsert) => {
	return db.insert(entriesTable).values(data).execute();
};
