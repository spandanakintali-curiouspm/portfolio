import Image from "next/image";
import { profile } from "@/lib/data";
import HighlightText from "./HighlightText";

export default function ProfileIntro() {
  return (
    <section className="relative flex flex-col gap-8">
      <div
        aria-hidden
        className="absolute inset-0 w-[90vw] max-w-full glow-soft h-[120%] mx-auto left-1/2 -translate-x-1/2 pointer-events-none"
      />

      <div className="size-16 md:size-[120px] rounded-lg overflow-hidden z-10 relative">
        <Image
          src="/avatar.jpg"
          alt={profile.name}
          fill
          sizes="120px"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-4 z-10 relative">
        <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
          <div className="font-semibold space-y-2">
            <h1 className="text-[28px] text-neutral-50 leading-none">{profile.name}</h1>
            <h2 className="uppercase text-[#E8B04B] font-mono text-base">{profile.role}</h2>
          </div>

          <div className="flex gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid place-items-center size-10 rounded-[8px] border border-white/15 bg-neutral-800 text-[#4C93E0] hover:bg-white/5 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid place-items-center size-10 rounded-[8px] border border-white/15 bg-neutral-800 text-neutral-200 hover:bg-white/5 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-4 py-2 rounded-[8px] text-sm font-medium text-neutral-900 bg-gradient-to-b from-neutral-50 to-neutral-300 border border-white/15 hover:opacity-95 transition"
            >
              Let&apos;s Chat
            </a>
          </div>
        </div>

        <p className="tracking-tight text-neutral-200 md:text-base max-w-2xl">
          <HighlightText
            text={profile.summary}
            highlights={["enterprise products", "product life-cycle"]}
          />
        </p>

        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6F8CCA]" />
          {profile.status}
        </span>
      </div>
    </section>
  );
}
