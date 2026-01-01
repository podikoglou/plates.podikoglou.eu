import { format } from "date-fns";
import type { FC } from "hono/jsx";
import type { entriesTable } from "../db/schema";

export const EntriesTable: FC<{
	entries: (typeof entriesTable.$inferSelect)[];
}> = async ({ entries }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Spotted On</th>
					<th>Submitted At</th>
					<th>Country Code</th>
					<th>License Plate</th>
				</tr>
			</thead>

			<tbody>
				{entries.map((entry) => (
					<tr>
						<td>{entry.id}</td>
						<td>{entry.spottedOn ? format(entry.spottedOn, "MM yyyy") : ""}</td>
						<td>{entry.createdAt ? format(entry.createdAt, "MM yyyy") : ""}</td>
						<td>{entry.countryCode}</td>
						<td>{entry.text}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
