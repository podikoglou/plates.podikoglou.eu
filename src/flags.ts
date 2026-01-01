export const plateCountryToCountryCode: Record<string, string> = {
	D: "DE",
	NMK: "MK",
	NL: "NL",
	SRB: "RS",
	CH: "CH",
	EST: "EE",
	UK: "GB",
	H: "HU",
	GB: "GB",
	A: "AT",
	PL: "PL",
	TR: "TR",
	RO: "RO",
	F: "FR",
	I: "IT",
	AL: "AL",
	BG: "BG",
	// SL: "",
	MD: "MD",
	B: "BE",
	BY: "BY",
	US: "US",
	GR: "GR",
	UA: "UA",
	MO: "MO",
	DK: "DK",
	CZ: "CX",
	L: "LU",
	S: "SE",
	// GE: "",
	// DE: "",
	CY: "CY",
	// GT: "",
	BIH: "BA",
	N: "NO",
	FI: "FI",
};

export const plateCountryToFlagUrl = (
	plateCountry: string,
): string | undefined => {
	const countryCode = plateCountryToCountryCode[plateCountry];

	return countryCode
		? `https://flagsapi.com/${countryCode}/flat/24.png`
		: undefined;
};
