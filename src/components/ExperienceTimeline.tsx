import { experience, type ExperienceRole } from "@/lib/data";

interface DisplayBullet {
  bold?: string;
  text: string;
}

interface CompanyGroup {
  company: string;
  roles: ExperienceRole[];
}

function displayBullets(role: ExperienceRole): DisplayBullet[] {
  const items: DisplayBullet[] = [];
  role.subBullets?.forEach((sb) => {
    items.push({ bold: sb.heading, text: sb.points.join(" ") });
  });
  role.bullets?.forEach((b) => items.push({ text: b }));
  return items;
}

function groupByCompany(roles: ExperienceRole[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  roles.forEach((role) => {
    const last = groups[groups.length - 1];
    if (last && last.company === role.company) {
      last.roles.push(role);
    } else {
      groups.push({ company: role.company, roles: [role] });
    }
  });
  return groups;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseDateRange(dates: string) {
  const [rangePart] = dates.split("·");
  const [startLabel, endLabel] = rangePart.split("–").map((s) => s.trim());
  return { startLabel, endLabel };
}

function monthIndex(label: string) {
  const [month, year] = label.split(" ");
  return parseInt(year, 10) * 12 + MONTHS.indexOf(month);
}

function formatDuration(months: number) {
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts: string[] = [];
  if (yrs) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos) parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function groupDateRange(group: CompanyGroup) {
  const latestRole = parseDateRange(group.roles[0].dates);
  const earliestRole = parseDateRange(group.roles[group.roles.length - 1].dates);
  const totalMonths = monthIndex(latestRole.endLabel) - monthIndex(earliestRole.startLabel) + 1;
  return `${earliestRole.startLabel} – ${latestRole.endLabel} · ${formatDuration(totalMonths)}`;
}

function DiamondBullet() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="#d0d0d0" className="mx-auto shrink-0">
      <path d="M12 2 22 12 12 22 2 12z" />
    </svg>
  );
}

function Chevron() {
  return (
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
  );
}

function RoleBody({ role }: { role: ExperienceRole }) {
  const bullets = displayBullets(role);
  return (
    <>
      {role.summary && (
        <p className="text-neutral-300 text-sm leading-relaxed tracking-tight">{role.summary}</p>
      )}
      <div className="space-y-2">
        {bullets.map((b, idx) => (
          <div key={idx} className="grid grid-cols-[22px_1fr]">
            <div className="pt-1.5">
              <DiamondBullet />
            </div>
            <div className="text-neutral-300 text-sm leading-relaxed tracking-tight">
              {b.bold && <span className="font-semibold">{b.bold}. </span>}
              {b.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ExperienceTimeline() {
  const groups = groupByCompany(experience);

  return (
    <section className="relative flex flex-col gap-8">
      <div className="relative z-10 space-y-2">
        <h3 className="eyebrow text-sm text-neutral-50">
          Experience
        </h3>
        <p className="text-neutral-300 text-base tracking-tight">
          From enterprise AI governance to HR platforms — the roles along the way.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1">
        {groups.map((group, gi) => {
          const isLastGroup = gi === groups.length - 1;
          const isGrouped = group.roles.length > 1;
          const dateLabel = isGrouped ? groupDateRange(group) : group.roles[0].dates;

          return (
            <div
              key={`${group.company}-${gi}`}
              className="flex md:flex-row flex-col gap-3 items-start relative md:pl-0 pl-6"
            >
              <span className="md:py-4 pt-4 font-mono text-xs uppercase tracking-wide text-neutral-300 md:w-40 lg:w-44 shrink-0">
                {dateLabel}
              </span>

              <div className="md:relative absolute left-0 flex flex-col h-full items-center md:pt-6 pt-4">
                {!isLastGroup && (
                  <div className="absolute left-1/2 -translate-x-1/2 bg-[#6F8CCA] w-0.5 h-full top-6" />
                )}
                <div
                  className={`relative z-10 size-3.5 rounded-full border-2 ${
                    gi === 0
                      ? "bg-[#6F8CCA] border-white/75 scale-110"
                      : "bg-neutral-900 border-[#6F8CCA]"
                  }`}
                />
              </div>

              <div className="flex-1 relative w-full p-1">
                {isGrouped ? (
                  <div className="rounded-xl border border-white/10 bg-neutral-800 shadow-[0_1px_12px_0_rgba(0,0,0,0.4)] overflow-hidden transition duration-200 hover:border-[#6F8CCA]/40">
                    <div className="px-4 py-3 border-b border-white/10">
                      <h4 className="font-semibold text-base text-neutral-50">{group.company}</h4>
                    </div>
                    <div className="divide-y divide-white/10">
                      {group.roles.map((role, ri) => (
                        <details className="acc" open={gi === 0 && ri === 0} key={ri}>
                          <summary className="flex items-center justify-between gap-5 px-4 py-3 text-neutral-50 font-medium text-sm transition duration-200 hover:bg-white/5">
                            <div className="flex flex-col gap-1">
                              <div className="flex md:flex-row flex-col md:gap-3 gap-1 md:items-center items-start">
                                <span>{role.title}</span>
                                <span className="font-mono text-xs font-normal text-neutral-400">
                                  {role.dates}
                                </span>
                              </div>
                              <p className="text-xs font-mono font-normal uppercase tracking-wide text-neutral-500">
                                {role.location}
                              </p>
                            </div>
                            <Chevron />
                          </summary>
                          <div className="px-4 pb-4 space-y-3">
                            <RoleBody role={role} />
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ) : (
                  <details className="acc" open={gi === 0}>
                    <summary className="flex items-center justify-between gap-5 border border-white/10 rounded-xl px-4 py-3 bg-neutral-800 text-neutral-50 font-semibold text-base shadow-[0_1px_12px_0_rgba(0,0,0,0.4)] transition duration-200 hover:border-[#6F8CCA]/40">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex md:flex-row flex-col md:gap-5 gap-2 md:items-center items-start">
                          {group.roles[0].title}
                          <span className="text-sm font-medium text-neutral-200 px-2 border border-[#6F8CCA]/25 rounded-full flex gap-2 items-center bg-gradient-to-r from-[#6F8CCA]/15 to-transparent">
                            {group.company}
                          </span>
                        </div>
                        <p className="text-xs font-mono font-normal uppercase tracking-wide text-neutral-400">
                          {group.roles[0].location}
                        </p>
                      </div>
                      <Chevron />
                    </summary>

                    <div className="mt-2 px-6 py-4 bg-neutral-800 rounded-2xl border border-[#6F8CCA]/25 shadow-[0_1px_12px_0_rgba(0,0,0,0.4)] space-y-3">
                      <RoleBody role={group.roles[0]} />
                    </div>
                  </details>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
