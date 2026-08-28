import { profile } from "@/lib/data";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: MailIcon, external: false },
  {
    label: profile.linkedin.replace("https://www.", ""),
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  { label: profile.github.replace("https://", ""), href: profile.github, icon: GitHubIcon, external: true },
];

export default function Quote() {
  return (
    <section className="py-4 grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight tracking-tight text-neutral-50 max-w-2xl">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
          Open to leadership roles across India and globally — product management, AI transformation and platform delivery.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {links.map(({ label, href, icon: Icon, external }) => (
          <a
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-neutral-700 bg-neutral-800 text-neutral-100 text-sm transition duration-200 hover:border-[#00c8c0]/50 hover:-translate-y-0.5"
          >
            <span className="text-[#00c8c0] shrink-0">
              <Icon />
            </span>
            <span className="truncate">{label}</span>
          </a>
        ))}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#00c8c0]/15 bg-neutral-800 text-neutral-100 text-sm">
          <span className="text-[#00c8c0] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span className="truncate">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
