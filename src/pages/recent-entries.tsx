import { format } from "date-fns";
import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { Country } from "../components/country";
import { findRecentEntries } from "../services/entry";

export const RecentEntriesPage: FC<{ page: number }> = async ({ page }) => {
	const entries = await findRecentEntries(page);

	const thClass = css`
    font-weight: normal;
    /*border-bottom: 1px solid #ddd;*/
    padding-left: 15px;
    padding-right: 15px;
  `;

	return (
		<>
			{entries.map((entry, idx) => {
				const props =
					idx === 19
						? {
								"hx-get": `/recent-entries/${page + 1}`,
								"hx-trigger": "revealed",
								"hx-swap": "afterend",
							}
						: {};

				return (
					<tr {...props}>
						<td class={thClass}>
							<a href={`/entry/${entry.id}`}>#{entry.id}</a>
						</td>

						<td class={thClass}>
							{entry.countryCode ? (
								<Country plateCountryCode={entry.countryCode} />
							) : null}
						</td>

						<td class={thClass}>{entry.text ?? "-"}</td>

						<td class={thClass}>
							{entry.spottedOn ? format(entry.spottedOn, "MMM yyyy") : ""}
						</td>
					</tr>
				);
			})}
		</>
	);
};
