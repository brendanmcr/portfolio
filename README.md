# portfolio

Personal portfolio site for [@brendanmcr](https://github.com/brendanmcr) — Kansas City.

**Live:** https://brendanmcr.github.io/portfolio/

![CI](https://github.com/brendanmcr/portfolio/actions/workflows/ci.yml/badge.svg) · 8 content tests · static export

## Stack

- Next.js 16, static export (`output: "export"`)
- Tailwind CSS 4 + daisyUI 5 (custom `paper` theme)
- Content lives in one testable module: [`lib/content.mjs`](lib/content.mjs)
- Tests: Node's built-in `node:test` runner — including a rule that unshipped projects can never carry a link (no vaporware)
- CI + GitHub Pages deploy via Actions

## Run it

```sh
npm ci
npm test
npm run dev      # local dev
npm run build    # static export to out/
```

## License

MIT
