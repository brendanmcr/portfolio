// Single source of truth for site content.
// Plain JS module so it can be imported by both Next.js and node:test
// without a TS build step.

export const identity = {
  name: "Brendan",
  handle: "brendanmcr",
  location: "Kansas City",
  role: "Software developer",
  tagline: "I build working software across the stack — web, data, integrations, and the platforms underneath them.",
  github: "https://github.com/brendanmcr",
  email: "brendanmcr@protonmail.com",
};

export const stack = [
  { group: "Web", items: ["TypeScript", "Next.js", "React", "Tailwind", "daisyUI"] },
  { group: "Backend", items: ["Node.js", "Go", "Python", "Postgres"] },
  { group: "Platform", items: ["Kubernetes", "Docker", "GitHub Actions", "Helm"] },
  { group: "Elsewhere", items: ["React Native", "Rust", "C++ / JUCE", "DuckDB / dbt"] },
];

// status: "shipped" | "in-progress" | "planned"
// Every project links to its real repo — unshipped projects link to a
// visibly work-in-progress repo, never to something pretending to be done.
// Dates reflect the real build schedule.
export const projects = [
  {
    slug: "portfolio",
    name: "This site",
    status: "shipped",
    summary:
      "Next.js 16 static export with Tailwind 4 and daisyUI. Built and deployed from CI to GitHub Pages, with a content test suite.",
    tags: ["Next.js", "Tailwind", "GitHub Actions"],
    link: "https://github.com/brendanmcr/portfolio",
  },
  {
    slug: "signalboard",
    link: "https://github.com/brendanmcr/signalboard",
    name: "Signalboard",
    status: "in-progress",
    eta: "Fall 2026",
    summary:
      "Real-time status board: WebSockets, role-based access control, and a hash-chained tamper-evident audit log. Load-tested with k6 in CI.",
    tags: ["Node.js", "WebSockets", "Postgres"],
  },
  {
    slug: "geardesk",
    link: "https://github.com/brendanmcr/geardesk",
    name: "GearDesk",
    status: "in-progress",
    eta: "Fall 2026",
    summary:
      "Inventory management for small operations: CRUD on Postgres, CSV import/export, built as a case study in boring software done well.",
    tags: ["TypeScript", "Postgres"],
  },
  {
    slug: "pricesignal",
    link: "https://github.com/brendanmcr/pricesignal",
    name: "PriceSignal",
    status: "in-progress",
    eta: "Fall 2026",
    summary:
      "LLM-assisted pricing suggestions for secondhand gear listings, with a committed 50-listing eval set and a published error rate.",
    tags: ["Python", "LLM evals"],
  },
  {
    slug: "backbone-k8s",
    link: "https://github.com/brendanmcr/backbone-k8s",
    name: "Backbone",
    status: "planned",
    eta: "Winter 2026",
    summary:
      "A Kubernetes application scaffold: CloudNativePG, Falco, and centralized logging, with one-command local bring-up on k3d.",
    tags: ["Kubernetes", "Helm", "k3d"],
  },
  {
    slug: "fieldcheck",
    link: "https://github.com/brendanmcr/fieldcheck",
    name: "FieldCheck",
    status: "planned",
    eta: "Winter 2026",
    summary:
      "Offline-first mobile inspection checklists for trades and property work. React Native + Expo + SQLite, APK built in CI per release.",
    tags: ["React Native", "Expo", "SQLite"],
  },
];

export const about = [
  "I'm a developer in Kansas City. I like software that holds up: tested, observable, and honest about what it does.",
  "Away from the keyboard I'm a photographer and a David Bowie enthusiast — which is why there's exactly one flash of Ziggy red on this page.",
];
