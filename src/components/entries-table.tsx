import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { RecentEntriesPage } from "../pages/recent-entries";

export const EntriesTable: FC = async () => {
	const thClass = css`
    font-weight: normal;
    /*border-bottom: 1px solid #ddd;*/
    padding-left: 15px;
    padding-right: 15px;
  `;

	const tableClass = css`
    /*border-spacing: 5px;*/
  `;

	return (
		<table class={tableClass} id="recent-entries-table">
			<thead>
				<tr>
					<th class={thClass}>ID</th>
					<th class={thClass}>Country</th>
					<th class={thClass}>License Plate</th>
					<th class={thClass}>Spotted On</th>
				</tr>
			</thead>

			<tbody>
				<RecentEntriesPage page={0} />
			</tbody>
		</table>
	);
};
