import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Education
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="text-lg font-semibold">{edu.school}</h3>
            <p className="mt-1 text-sm text-foreground/85">{edu.degree}</p>
            <p className="mt-2 text-sm text-muted">{edu.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
