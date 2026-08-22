import { languages, skills } from "@/lib/data";

const tiles = [...skills, ...languages.map((l) => l.name)];

function Tile({ label }: { label: string }) {
  return (
    <span
      className="h-16 min-w-28 px-3 rounded-[8px] border bg-neutral-800 grid place-items-center text-center font-mono text-xs font-semibold text-neutral-300 shadow-[0_1px_12px_0_rgba(0,0,0,0.4)] shrink-0"
      style={{ borderColor: "#6F8CCA40" }}
    >
      {label}
    </span>
  );
}

export default function Stack() {
  return (
    <section className="relative flex flex-col gap-6 overflow-hidden">
      <div className="relative z-10 space-y-2">
        <h3 className="eyebrow text-sm text-neutral-50">
          Stack
        </h3>
        <p className="text-neutral-300 text-base tracking-tight">
          The skills and languages I bring to product work.
        </p>
      </div>

      <div className="group relative z-10 flex gap-6 overflow-hidden fade-mask p-2">
        <div className="animate-marquee pause-on-hover flex shrink-0 gap-6">
          {tiles.map((label) => (
            <Tile key={label} label={label} />
          ))}
        </div>
        <div className="animate-marquee pause-on-hover flex shrink-0 gap-6" aria-hidden="true">
          {tiles.map((label) => (
            <Tile key={`dup-${label}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
