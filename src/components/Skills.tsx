import { honors, languages, skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Skills &amp; Languages
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-muted">Top Skills</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted">Languages</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline justify-between gap-4">
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted">Honors &amp; Awards</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {honors.map((honor, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span aria-hidden className="text-accent">
                  ★
                </span>
                {honor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
