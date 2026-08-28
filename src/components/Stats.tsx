import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-5">
        <h2 className="eyebrow text-sm text-neutral-50">
          Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-3xl md:text-4xl text-[#00c8c0] tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-neutral-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
