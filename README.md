# Killed by Tesla

An independent, open-source archive of Tesla’s discontinued projects, cancellations, absorbed businesses, and announced wind-downs. Inspired by [Killed by Google](https://killedbygoogle.com/).

Built with Astro, YAML content collections, self-hosted Barlow and IBM Plex Mono, and a small progressive-enhancement search script. No backend, tracking, or external font requests. All records remain readable without JavaScript.

## Development

Requires Node.js 24+.

```sh
npm ci
npm run dev
npm test
npm run check
npm run build
npm run preview
```

Data lives in `src/content/projects/`, one YAML file per record. See [CONTRIBUTING.md](CONTRIBUTING.md) for no-install contributions and [the methodology](https://killedbytesla.com/about/) for inclusion rules. The archive is not exhaustive; status changes require reviewed evidence.

## Publishing

Repository: `killedbytesla/killedbytesla.github.io`. In Settings → Pages select **GitHub Actions**. Pushes to `main` validate, build, upload `dist/`, and deploy. Pull requests validate without deploying. No deployment secrets are needed. See [DEPLOYMENT.md](DEPLOYMENT.md) for DNS and HTTPS setup.

## Licenses

Code: [MIT](LICENSE). Original archive text and data: [CC BY 4.0](LICENSE-DATA.md), attributed to Killed by Tesla contributors with a link to this repository and indication of changes. Third-party fonts retain the SIL Open Font License provided in their npm packages. Linked source material is not relicensed.

Not affiliated with Tesla, Inc.
