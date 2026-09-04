import { identity, projects, stack, about } from "../lib/content.mjs";

function StatusBadge({
  status,
  eta,
}: {
  status: string;
  eta?: string;
}) {
  if (status === "shipped") {
    return (
      <span className="badge badge-sm border-success/40 bg-success/10 text-success">
        shipped
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span className="badge badge-sm border-cobalt/40 bg-cobalt/10 text-cobalt">
        in progress{eta ? ` · ${eta}` : ""}
      </span>
    );
  }
  return (
    <span className="badge badge-sm border-mist/40 bg-transparent text-mist">
      planned{eta ? ` · ${eta}` : ""}
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24">
      {/* Hero */}
      <header className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <p className="text-mist">
          {identity.name} · {identity.location}
        </p>
        <h1 className="font-display mt-4 max-w-[16ch] text-5xl font-semibold leading-[1.06] sm:text-7xl">
          Software that holds
          <span aria-hidden="true" className="text-flash">
            /
          </span>
          up.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-base-content/80">
          {identity.tagline}
        </p>
        <nav aria-label="Primary" className="mt-8 flex gap-3">
          <a href="#work" className="btn btn-primary btn-sm sm:btn-md">
            See the work
          </a>
          <a
            href={identity.github}
            className="btn btn-outline btn-sm sm:btn-md"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Work */}
      <section id="work" aria-labelledby="work-heading" className="py-10">
        <h2
          id="work-heading"
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          Work
        </h2>
        <p className="mt-2 max-w-[56ch] text-base-content/70">
          A breadth-first roster, shipping one project at a time. Statuses are
          real — nothing here pretends to exist before it does.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col rounded-box border border-base-300 bg-base-100 p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">
                  {p.link ? (
                    <a href={p.link} className="link-hover text-cobalt">
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <StatusBadge status={p.status} eta={p.eta} />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-base-content/80">
                {p.summary}
              </p>
              <p className="mt-4 text-xs text-mist">{p.tags.join(" / ")}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Stack */}
      <section aria-labelledby="stack-heading" className="py-10">
        <h2
          id="stack-heading"
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          Stack
        </h2>
        <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {stack.map((s) => (
            <div key={s.group} className="border-l-2 border-base-300 pl-4">
              <dt className="font-medium">{s.group}</dt>
              <dd className="mt-1 text-sm text-base-content/70">
                {s.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="py-10">
        <h2
          id="about-heading"
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          About
        </h2>
        <div className="mt-4 max-w-[58ch] space-y-4 leading-relaxed text-base-content/80">
          {about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="mt-10 border-t border-base-300 pt-8">
        <p className="text-base-content/80">
          Say hello:{" "}
          <a href={`mailto:${identity.email}`} className="link text-cobalt">
            {identity.email}
          </a>{" "}
          or{" "}
          <a href={identity.github} className="link text-cobalt">
            @{identity.handle}
          </a>{" "}
          on GitHub.
        </p>
        <p className="mt-2 text-sm text-mist">
          Built with Next.js, Tailwind, and daisyUI. Deployed from CI.
        </p>
      </footer>
    </main>
  );
}
