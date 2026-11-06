# Contributing

You can contribute without installing anything. [Suggest a project or correction](https://github.com/killedbytesla/killedbytesla.github.io/issues/new/choose), or edit a YAML file in `src/content/projects/` using GitHub’s pencil button and propose a pull request.

Copy an existing entry into a new file with a unique lowercase, hyphenated filename. The filename becomes its permanent URL; avoid renaming published records. Change all fields and sources. Start and ending evidence are both required; the same source may support both if it explicitly covers both events.

```yaml
name: Project name
category: Vehicles
status: Discontinued
start: "2012-06"
end: "2026-05"
description: A brief, factual description of the project.
details: Explain what ended and what continues, with no speculation.
dateNote: State what the dates represent and any uncertainty.
lastVerified: "2026-11-06"
sources:
  - title: A source establishing the start
    url: https://example.org/start
    supports: start
  - title: A source establishing the ending
    url: https://example.org/end
    supports: ending
```

Use categories `Vehicles`, `Energy`, `Infrastructure`, `Accessories`, or `Businesses`. Use statuses `Discontinued`, `Cancelled`, `Announced wind-down`, or `Absorbed brand`.

For announced wind-downs add `announcementDate: "YYYY-MM-DD"` and optionally `endLabel: "Mid-2027 (planned)"`. Store the underlying end as `"2027"` if no precise month is known. Do not convert a scheduled ending to completed just because time has passed; review evidence first.

Dates must be quoted strings: `"YYYY"`, `"YYYY-MM"`, or `"YYYY-MM-DD"`. Never invent a month or day. `lastVerified` is always a full date. Start with customer availability for released projects, announcement for cancelled projects, and foundation for acquired businesses. Explain exceptions in `dateNote`.

Prefer company statements and regulatory filings, then reputable reporting. Link directly to evidence, not search results. Explain regional limits, production vs. sales, uncertainty, and ongoing operations. Ordinary model-year changes, poor sales, and delays alone do not establish an ending. SolarCity was acquired, not founded by Tesla; it is historical context and excluded from the ended total.

Keep descriptions neutral and original. Adding an issue does not automatically publish it; maintainers review contributions. Your original text/data contributions are licensed CC BY 4.0; code contributions MIT.

For code changes: Node 24+, `npm ci`, `npm run dev`. Before a pull request run `npm test`, `npm run check`, and `npm run build`.
