import { honors } from "@/lib/data";

function TrophyIcon() {
  return (
    <svg className="size-6 shrink-0 text-neutral-300" viewBox="0 0 24 25" fill="none">
      <path
        d="M18.5 18.338C19.5305 18.1867 20.2627 17.8941 20.8284 17.3284C22 16.1569 22 14.2712 22 10.5C22 6.72876 22 4.84315 20.8284 3.67157C19.6569 2.5 17.7712 2.5 14 2.5H10C6.22876 2.5 4.34315 2.5 3.17157 3.67157C2 4.84315 2 6.72876 2 10.5C2 14.2712 2 16.1569 3.17157 17.3284C3.97975 18.1366 5.1277 18.3873 7 18.465"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M17 7.5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.5 15c0 4.066 1.722 6.371 2.5 7.5l1.5-3 1.75 1 1.75 1c-.735-.711-1.494-2.953-1.494-2.953"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section className="relative flex flex-col gap-4">
      <div className="relative z-10 space-y-2">
        <h3 className="eyebrow text-sm text-neutral-50">
          Honors &amp; Awards
        </h3>
      </div>

      <div className="relative z-10 flex md:flex-row flex-col flex-wrap gap-4">
        {honors.map((honor, idx) => (
          <div
            key={idx}
            className="md:flex-1 flex items-center gap-4 justify-start px-6 py-4 rounded-xl border border-white/15 bg-neutral-800 shadow-[0_1px_12px_0_rgba(0,0,0,0.4)] transition duration-200 hover:border-[#6F8CCA]/40 hover:-translate-y-0.5"
          >
            <TrophyIcon />
            <div className="text-left min-w-0">
              <p className="font-semibold text-base leading-none text-neutral-50 truncate">
                {honor.title}
              </p>
              <p className="text-sm text-neutral-400 leading-none mt-1 truncate">{honor.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
