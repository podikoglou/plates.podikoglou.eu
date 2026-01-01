import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { plateCountryToFlagUrl } from "../flags";

export const Country: FC<{ plateCountryCode: string }> = ({
	plateCountryCode,
}) => {
	const flagUrl = plateCountryToFlagUrl(plateCountryCode);

	const spanClass = css`
    display: flex;
    column-gap: 10px;
    align-items: center;
  `;

	return (
		<span class={spanClass}>
			{flagUrl ? <img src={flagUrl} alt="flag" /> : null}

			{plateCountryCode}
		</span>
	);
};
