import Image from "next/image";
import { profile } from "@/lib/data";
import HighlightText from "./HighlightText";

export default function ProfileIntro() {
  return (
    <section className="relative flex sm:flex-row flex-col-reverse sm:items-start justify-between gap-6">
      <div className="flex flex-col gap-10 z-10 relative">
        <div
          style={{ "--delay": "0.08s" } as React.CSSProperties}
          className="animate-fade-in-up font-semibold space-y-8"
        >
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[2.625rem] text-neutral-50 leading-none tracking-tight">{profile.name}</h1>
          <p className="uppercase text-[#00c8c0] font-mono text-base">{profile.role}</p>
        </div>

        <div
          style={{ "--delay": "0.16s" } as React.CSSProperties}
          className="animate-fade-in-up flex flex-wrap items-center gap-2"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[#00c8c0] bg-neutral-800 px-4 py-2 font-display text-sm font-semibold tracking-tight text-[#00c8c0] transition duration-200 hover:bg-[#00c8c0]/10 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            My Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="grid place-items-center size-10 rounded-[8px] border border-[#00c8c0]/15 bg-neutral-800 text-[#00c8c0] transition duration-200 hover:bg-[#00c8c0]/10 hover:border-[#00c8c0]/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid place-items-center size-10 rounded-[8px] border border-[#00c8c0]/15 bg-neutral-800 text-neutral-200 transition duration-200 hover:bg-[#00c8c0]/10 hover:border-[#00c8c0]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.041 21.785h-.038c-1.876-.001-3.716-.501-5.316-1.446l-.381-.226-3.958 1.037 1.058-3.86-.249-.394c-1.037-1.647-1.582-3.55-1.581-5.5.003-5.696 4.637-10.331 10.336-10.331 2.76.001 5.354 1.077 7.304 3.029 1.95 1.951 3.024 4.545 3.023 7.312-.003 5.696-4.637 10.379-10.198 10.379zm8.413-18.412c-2.247-2.247-5.234-3.485-8.415-3.486-6.556 0-11.892 5.335-11.895 11.893-.001 2.096.547 4.142 1.588 5.945l-1.688 6.165 6.31-1.654c1.737.947 3.692 1.447 5.683 1.448h.005c6.554 0 11.891-5.336 11.894-11.893.001-3.179-1.236-6.169-3.482-8.418z" />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid place-items-center size-10 rounded-[8px] border border-[#00c8c0]/15 bg-neutral-800 text-neutral-200 transition duration-200 hover:bg-[#00c8c0]/10 hover:border-[#00c8c0]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <p
          style={{ "--delay": "0.24s" } as React.CSSProperties}
          className="animate-fade-in-up tracking-tight text-neutral-200 md:text-base max-w-2xl"
        >
          <HighlightText
            text={profile.summary}
            highlights={["enterprise products", "product life-cycle"]}
          />
        </p>

        <span
          style={{ "--delay": "0.32s" } as React.CSSProperties}
          className="animate-fade-in-up inline-flex w-fit items-center gap-2 rounded-full border border-[#00c8c0]/15 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00c8c0] animate-pulse" />
          {profile.status}
        </span>
      </div>

      <div
        style={{ "--delay": "0s" } as React.CSSProperties}
        className="animate-fade-in-up size-32 md:size-[256px] rounded-lg overflow-hidden z-10 relative transition-transform duration-300 hover:scale-105 shrink-0"
      >
        <Image
          src="/avatar.jpg"
          alt={profile.name}
          fill
          sizes="256px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
