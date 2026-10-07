import { caseStudies, type CaseStudy } from "@/lib/data";

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-wide uppercase text-[#00c8c0]">
      {children}
    </p>
  );
}

function CaseStudyBody({ study }: { study: CaseStudy }) {
  return (
    <div className="px-6 pb-6 space-y-5">
      <div className="space-y-1.5">
        <SectionLabel>The problem</SectionLabel>
        <p className="text-neutral-300 text-sm leading-relaxed tracking-tight">{study.problem}</p>
      </div>

      <div className="space-y-1.5">
        <SectionLabel>My role</SectionLabel>
        <p className="text-neutral-300 text-sm leading-relaxed tracking-tight">{study.role}</p>
      </div>

      {study.insight && (
        <div className="space-y-2">
          <SectionLabel>The insight</SectionLabel>
          <p className="text-neutral-300 text-sm leading-relaxed tracking-tight">{study.insight.heading}</p>
          <div className="space-y-1.5 pl-[22px]">
            {study.insight.examples.map((ex, idx) => (
              <div key={idx} className="grid grid-cols-[18px_1fr]">
                <div className="pt-1.5">
                  <span className="block mx-auto size-1 rounded-full bg-neutral-300" />
                </div>
                <div className="text-neutral-300 text-sm leading-relaxed tracking-tight">
                  <span className="font-medium text-neutral-200">{ex.label}:</span> {ex.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <SectionLabel>Decisions I made</SectionLabel>
        <div className="space-y-1.5">
          {study.decisions.map((d, idx) => (
            <div key={idx} className="grid grid-cols-[22px_1fr]">
              <div className="pt-1.5">
                <span className="block mx-auto size-1.5 rounded-full bg-[#00c8c0]" />
              </div>
              <div className="text-neutral-300 text-sm leading-relaxed tracking-tight">
                <span className="font-medium text-neutral-200">{d.label}</span> {d.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <SectionLabel>Outcome</SectionLabel>
        <p className="text-neutral-300 text-sm leading-relaxed tracking-tight">{study.outcome}</p>
      </div>

      {study.nextSteps && (
        <div className="space-y-1.5">
          <SectionLabel>What I&apos;d do next</SectionLabel>
          <p className="text-neutral-300 text-sm leading-relaxed tracking-tight">{study.nextSteps}</p>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="relative flex flex-col gap-8">
      <div className="relative z-10 space-y-2">
        <h2 className="eyebrow text-sm text-neutral-50">Case Studies</h2>
        <p className="text-neutral-300 text-base tracking-tight">
          A closer look at how I approach ambiguous product problems, end to end.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-neutral-700 bg-neutral-800 transition-all duration-150 hover:border-[#00c8c0]/50"
          >
            <details className="acc" open={idx === 0}>
              <summary className="flex items-start justify-between gap-5 px-6 py-4 transition duration-200 hover:bg-[#00c8c0]/10">
                <h3 className="font-sans font-bold text-xl text-neutral-50 tracking-tight leading-snug">
                  {study.title}
                </h3>
                <Chevron />
              </summary>
              <CaseStudyBody study={study} />
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
