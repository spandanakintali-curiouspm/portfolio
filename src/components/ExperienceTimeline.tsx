import { experience, profile, type ExperienceRole } from "@/lib/data";

type DisplayBullet =
  | { type: "plain"; text: string }
  | { type: "group"; heading: string; points: string[] };

interface CompanyGroup {
  company: string;
  roles: ExperienceRole[];
}

function displayBullets(role: ExperienceRole): DisplayBullet[] {
  const items: DisplayBullet[] = [];
  role.subBullets?.forEach((sb) => {
    items.push({ type: "group", heading: sb.heading, points: sb.points });
  });
  role.bullets?.forEach((b) => items.push({ type: "plain", text: b }));
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
  if (yrs) parts.push(`${yrs} year${yrs > 1 ? "s" : ""}`);
  if (mos) parts.push(`${mos} month${mos > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function groupDuration(group: CompanyGroup) {
  const latestRole = parseDateRange(group.roles[0].dates);
  const earliestRole = parseDateRange(group.roles[group.roles.length - 1].dates);
  const totalMonths = monthIndex(latestRole.endLabel) - monthIndex(earliestRole.startLabel) + 1;
  return formatDuration(totalMonths);
}

function roleDuration(dates: string) {
  const { startLabel, endLabel } = parseDateRange(dates);
  return formatDuration(monthIndex(endLabel) - monthIndex(startLabel) + 1);
}

function roleDateRange(dates: string) {
  const { startLabel, endLabel } = parseDateRange(dates);
  return `${startLabel} – ${endLabel}`;
}

function DotBullet() {
  return <span className="block mx-auto size-1.5 rounded-full bg-[#00c8c0]" />;
}

function Chevron() {
  return (
    <svg
      className="chev transition-transform shrink-0"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9aa7b0"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function RoleHeader({ role }: { role: ExperienceRole }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-normal tracking-normal text-[#00c8c0]">
        {roleDateRange(role.dates)}
      </p>
      <span className="text-sm font-normal text-neutral-300">{role.title}</span>
      <p className="text-xs font-normal tracking-normal text-neutral-300">
        {role.location}
      </p>
    </div>
  );
}

function RoleBody({ role }: { role: ExperienceRole }) {
  const bullets = displayBullets(role);
  return (
    <>
      {role.summary && (
        <p className="text-neutral-300 text-sm font-display font-medium leading-relaxed tracking-tight">{role.summary}</p>
      )}
      <div className="space-y-3">
        {bullets.map((b, idx) =>
          b.type === "plain" ? (
            <div key={idx} className="grid grid-cols-[22px_1fr]">
              <div className="pt-1.5">
                <DotBullet />
              </div>
              <div className="text-neutral-300 text-sm leading-relaxed tracking-tight">{b.text}</div>
            </div>
          ) : (
            <div key={idx} className="space-y-1.5">
              <div className="grid grid-cols-[22px_1fr]">
                <div className="pt-1.5">
                  <DotBullet />
                </div>
                <div className="text-neutral-200 text-sm font-medium leading-relaxed tracking-tight">
                  {b.heading}
                </div>
              </div>
              <div className="space-y-1.5 pl-[22px]">
                {b.points.map((point, pIdx) => (
                  <div key={pIdx} className="grid grid-cols-[18px_1fr]">
                    <div className="pt-1.5">
                      <span className="block mx-auto size-1 rounded-full bg-neutral-300" />
                    </div>
                    <div className="text-neutral-300 text-sm leading-relaxed tracking-tight">{point}</div>
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default function ExperienceTimeline() {
  const groups = groupByCompany(experience);

  return (
    <section className="relative flex flex-col gap-8">
      <div className="relative z-10 space-y-2">
        <h2 className="eyebrow text-sm text-neutral-50">
          Experience
        </h2>
        <p className="text-neutral-300 text-base tracking-tight">
          {profile.experienceYears} — from enterprise AI governance to HR platforms, the roles along the way.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1">
        {groups.map((group, gi) => {
          const isLastGroup = gi === groups.length - 1;
          const isGrouped = group.roles.length > 1;
          const durationLabel = isGrouped ? groupDuration(group) : roleDuration(group.roles[0].dates);

          return (
            <div
              key={`${group.company}-${gi}`}
              className="flex md:flex-row flex-col gap-3 items-start relative md:pl-0 pl-6"
            >
              <span className="md:pt-6 pt-4 font-mono text-xs font-semibold tracking-wide text-[#00c8c0] md:w-24 lg:w-28 md:text-right shrink-0">
                {durationLabel}
              </span>

              <div className="md:relative absolute left-0 flex flex-col h-full items-center md:pt-6 pt-4">
                {!isLastGroup && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full top-6 bg-neutral-700" />
                )}
                <div className="relative z-10 size-3.5 rounded-full border-2 bg-neutral-800 border-[#00c8c0]" />
              </div>

              <div className="flex-1 relative w-full max-w-3xl p-1">
                <div className="rounded-2xl border border-neutral-700 bg-neutral-800 transition-all duration-150 hover:border-[#00c8c0]/50">
                  <div className="px-6 py-4 border-b border-neutral-700">
                    <h3 className="font-display font-semibold text-lg text-neutral-50 tracking-tight">{group.company}</h3>
                  </div>
                  <div className="divide-y divide-neutral-700">
                    {group.roles.map((role, ri) => (
                      <details className="acc" open={gi === 0 && ri === 0} key={ri}>
                        <summary className="flex items-start justify-between gap-5 px-6 py-4 transition duration-200 hover:bg-[#00c8c0]/10">
                          <RoleHeader role={role} />
                          <Chevron />
                        </summary>
                        <div className="px-6 pb-6 space-y-3">
                          <RoleBody role={role} />
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
