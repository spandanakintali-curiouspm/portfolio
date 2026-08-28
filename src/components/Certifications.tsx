import { honors } from "@/lib/data";

function MedalIcon() {
  return (
    <svg className="size-6 shrink-0 text-neutral-300" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m8.5 13.5-2 8 5.5-3 5.5 3-2-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg className="size-6 shrink-0 text-neutral-300" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11.75v4.25c0 1.38 2.462 2.5 5.5 2.5s5.5-1.12 5.5-2.5v-4.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 9.5v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function honorIcon(title: string) {
  return title.toLowerCase().includes("topper") ? <GraduationCapIcon /> : <MedalIcon />;
}

export default function Certifications() {
  return (
    <section className="relative flex flex-col gap-4">
      <div className="relative z-10 space-y-2">
        <h2 className="eyebrow text-sm text-neutral-50">
          Honors &amp; Awards
        </h2>
      </div>

      <div className="relative z-10 flex md:flex-row flex-col flex-wrap gap-4">
        {honors.map((honor, idx) => (
          <div
            key={idx}
            className="md:flex-1 flex items-center gap-4 justify-start px-6 py-4 rounded-2xl border border-neutral-700 bg-neutral-800 transition duration-200 hover:border-[#00c8c0]/50 hover:-translate-y-0.5"
          >
            {honorIcon(honor.title)}
            <div className="text-left min-w-0">
              <p className="font-display font-semibold text-base leading-none text-neutral-50 truncate">
                {honor.title}
              </p>
              <p className="text-sm text-neutral-300 leading-none mt-1 truncate">{honor.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
