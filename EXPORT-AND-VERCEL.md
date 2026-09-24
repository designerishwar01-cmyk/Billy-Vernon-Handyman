# Heritage Gardens & Arboriculture — exact source export

This archive contains every tracked file, byte-for-byte, from published version 2,
commit 9915f7772486e7e46a0da52c2ffe94940dbb4840. This document is the only added file.
The live website has not been changed or redeployed.

## Included

All application pages, components, CSS, responsive rules, animations, configuration,
scripts, public images, hero video, favicon, package.json and pnpm-lock.yaml.
Dependencies are declared and locked; node_modules is intentionally not bundled.
Git history, machine caches, build output and credentials are not included.
The site uses system fonts; there are no separate font binaries to download.

## GitHub and Vercel

Extract this ZIP and upload the extracted files (including dotfiles) to a GitHub repository.
Do not upload only the ZIP. Import the repository into Vercel.

The original scripts build a Vinext/Cloudflare application, not a native Vercel build.
To try the unchanged application with its declared Next.js dependency, set these
overrides in Vercel Project Settings:

- Framework preset: Next.js
- Node.js: 22.x
- Install command: pnpm install --frozen-lockfile
- Build command: pnpm exec next build
- Output directory: leave the Next.js default
- Root directory: the folder containing package.json

Vercel supports build-command overrides:
https://vercel.com/docs/builds/configure-a-build

These are deployment instructions, not a verified Vercel migration. No Vercel
deployment or native Next.js production build has been performed for this export.
The original pinned dependency versions must be available from the public package
registry, and native Next.js may expose compatibility/type-check issues that the
original Vinext build does not. If a dependency or build fails, retain the log;
do not treat this export as a guarantee of zero-change Vercel compatibility.
The original package scripts and all configuration remain unchanged as requested.

## Existing behaviour preserved

- The enquiry form is a demo: it validates but does not send or save enquiries.
- Phone links remain functional tel: links.
- The countdown retains its existing fixed expiry: 2026-09-28T15:40:35Z.
  Exporting or redeploying does not reset it.
- Illustrative imagery, placeholder reviews and noindex metadata remain unchanged.
- The unused ChatGPT authentication helper depends on Sites-specific infrastructure;
  it is included faithfully but is not used by the current public page.
- The .openai/hosting.json file identifies the original Site. It is preserved for
  completeness, but must not be used to publish external edits back to that Site.
