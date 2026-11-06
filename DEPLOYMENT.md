# GitHub Pages and killedbytesla.com

1. Configure the public organization repository `killedbytesla/killedbytesla.github.io` to use GitHub Actions in Settings → Pages. Push `main` and confirm the workflow succeeds.
2. Verify domain ownership in organization Settings → Pages. GitHub supplies a TXT record at `_github-pages-challenge-killedbytesla.killedbytesla.com`; use its generated value (it cannot be predicted). Keep this verification record.
3. Set the repository Pages custom domain to `killedbytesla.com`. `public/CNAME` and the Astro canonical URL already match it; the CNAME file alone does not configure Actions-based Pages.
4. Apply these DNS records at the registrar/DNS provider. Remove only conflicting website records; preserve mail and unrelated records. Use DNS-only mode while GitHub validates and provisions HTTPS.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | killedbytesla.github.io |

Do not point the apex CNAME at the domain itself. Remove conflicting apex AAAA records unless intentionally configuring GitHub’s documented IPv6 addresses. Use your provider’s default TTL.

5. Wait for the Pages DNS check and TLS certificate, then enable **Enforce HTTPS** in Pages settings. Check both `https://killedbytesla.com` and `https://www.killedbytesla.com`; the latter should redirect to the apex. Test a project deep link.

GitHub Pages can be checked at `https://killedbytesla.github.io/` before the custom domain is configured. After configuration it redirects to the custom domain, so apply DNS promptly.

Sources: [GitHub custom-domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).
