import { languages, skills } from "@/lib/data";

function SkillTile({ label }: { label: string }) {
  return (
    <span
      className="h-16 min-w-28 px-4 rounded-[8px] border bg-[#00c8c0]/10 grid place-items-center text-center font-display font-semibold text-sm text-neutral-50 shadow-[0_1px_12px_0_rgba(2,5,12,0.5)] transition duration-200 hover:border-[#00c8c0] hover:bg-[#00c8c0]/15 hover:-translate-y-0.5"
      style={{ borderColor: "#00c8c070" }}
    >
      {label}
    </span>
  );
}

function LanguageTile({ label }: { label: string }) {
  return (
    <span
      className="h-16 min-w-28 px-4 rounded-[8px] border bg-[#6F8CCA]/10 grid place-items-center text-center font-display font-semibold text-sm text-neutral-50 shadow-[0_1px_12px_0_rgba(2,5,12,0.5)] transition duration-200 hover:border-[#6F8CCA] hover:bg-[#6F8CCA]/15 hover:-translate-y-0.5"
      style={{ borderColor: "#6F8CCA70" }}
    >
      {label}
    </span>
  );
}

export default function Stack() {
  return (
    <section className="relative flex flex-col gap-8">
      <div className="relative z-10 space-y-2">
        <h2 className="eyebrow text-sm text-neutral-50">
          Stack
        </h2>
        <p className="text-neutral-300 text-base tracking-tight">
          The skills and languages I bring to product work.
        </p>
      </div>

      <div className="relative z-10 space-y-3">
        <h3 className="text-sm font-semibold text-neutral-200">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((label) => (
            <SkillTile key={label} label={label} />
          ))}
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        <h3 className="text-sm font-semibold text-neutral-200">Languages</h3>
        <div className="flex flex-wrap gap-4">
          {languages.map((l) => (
            <LanguageTile key={l.name} label={l.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
