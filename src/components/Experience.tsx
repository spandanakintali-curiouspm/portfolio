import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Experience
      </h2>

      <ol className="mt-8 space-y-10 border-l border-border pl-8">
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.title}-${i}`} className="relative">
            <span className="absolute -left-[2.31rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {role.title} <span className="text-muted">· {role.company}</span>
              </h3>
              <span className="text-sm text-muted">{role.dates}</span>
            </div>
            <p className="text-sm text-muted">{role.location}</p>

            {role.summary && (
              <p className="mt-3 text-sm italic leading-relaxed text-foreground/80">
                {role.summary}
              </p>
            )}

            {role.subBullets && (
              <div className="mt-3 space-y-4">
                {role.subBullets.map((sb, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-medium text-foreground/90">
                      {sb.heading}
                    </p>
                    <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85">
                      {sb.points.map((p, pIdx) => (
                        <li key={pIdx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {role.bullets && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85">
                {role.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
