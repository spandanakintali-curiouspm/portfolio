import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="relative flex flex-col gap-8">
      <div className="relative z-10 space-y-2">
        <h3 className="eyebrow text-sm text-neutral-900">
          Education
        </h3>
        <p className="text-neutral-700 text-base tracking-tight">
          Where the strategy-and-systems foundation was built.
        </p>
      </div>

      <div className="relative z-10 grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_12px_0_#00000014]"
          >
            <h4 className="text-lg font-semibold text-neutral-900">{edu.school}</h4>
            <p className="mt-1 text-sm text-neutral-700">{edu.degree}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wide text-neutral-400">
              {edu.dates}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
