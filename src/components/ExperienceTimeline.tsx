import { experience, type ExperienceRole } from "@/lib/data";

interface DisplayBullet {
  bold?: string;
  text: string;
}

function displayBullets(role: ExperienceRole): DisplayBullet[] {
  const items: DisplayBullet[] = [];
  role.subBullets?.forEach((sb) => {
    items.push({ bold: sb.heading, text: sb.points.join(" ") });
  });
  role.bullets?.forEach((b) => items.push({ text: b }));
  return items;
}

function DiamondBullet() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="#484848" className="mx-auto shrink-0">
      <path d="M12 2 22 12 12 22 2 12z" />
    </svg>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="relative flex flex-col gap-8">
      <div className="relative z-10 space-y-2">
        <h3 className="eyebrow text-sm text-neutral-900">
          Experience
        </h3>
        <p className="text-neutral-700 text-base tracking-tight">
          From enterprise AI governance to HR platforms — the roles along the way.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1">
        {experience.map((role, i) => {
          const bullets = displayBullets(role);
          const isLast = i === experience.length - 1;
          return (
            <div
              key={`${role.company}-${role.title}-${i}`}
              className="flex md:flex-row flex-col gap-3 items-start relative md:pl-0 pl-6"
            >
              <span className="md:py-4 pt-4 font-mono text-xs uppercase tracking-wide text-neutral-300 md:w-40 lg:w-44 shrink-0">
                {role.dates}
              </span>

              <div className="md:relative absolute left-0 flex flex-col h-full items-center md:pt-6 pt-4">
                {!isLast && (
                  <div className="absolute left-1/2 -translate-x-1/2 bg-[#6F8CCA] w-0.5 h-full top-6" />
                )}
                <div
                  className={`relative z-10 size-3.5 rounded-full border-2 ${
                    i === 0
                      ? "bg-[#6F8CCA] border-white/75 scale-110"
                      : "bg-white border-[#6F8CCA]"
                  }`}
                />
              </div>

              <div className="flex-1 relative w-full p-1">
                <details className="acc" open={i === 0}>
                  <summary className="flex items-center justify-between gap-5 border border-black/10 rounded-xl px-4 py-3 bg-white text-neutral-900 font-semibold text-base transition">
                    <div className="flex md:flex-row flex-col md:gap-5 gap-2 md:items-center items-start">
                      {role.title}
                      <span className="text-sm font-medium text-black/70 px-2 border border-[#6F8CCA]/25 rounded-full flex gap-2 items-center bg-gradient-to-r from-[#6F8CCA]/10 to-white">
                        {role.company}
                      </span>
                    </div>
                    <svg
                      className="chev transition-transform shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#989898"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>

                  <div className="mt-2 px-6 py-4 bg-white rounded-2xl border border-[#6F8CCA]/25 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wide text-neutral-400">
                      {role.location}
                    </p>
                    {role.summary && (
                      <p className="text-neutral-700 text-sm leading-relaxed tracking-tight">
                        {role.summary}
                      </p>
                    )}
                    <div className="space-y-2">
                      {bullets.map((b, idx) => (
                        <div key={idx} className="grid grid-cols-[22px_1fr]">
                          <div className="pt-1.5">
                            <DiamondBullet />
                          </div>
                          <div className="text-neutral-700 text-sm leading-relaxed tracking-tight">
                            {b.bold && <span className="font-semibold">{b.bold}. </span>}
                            {b.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
