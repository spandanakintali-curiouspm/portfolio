import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--accent-soft) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-20 pt-20 sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.location}
        </span>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>

        <p className="max-w-2xl text-lg text-muted">{profile.tagline}</p>

        <p className="max-w-2xl rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
          {profile.status}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Say hello
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-muted"
          >
            View LinkedIn
          </a>
          <a
            href="#experience"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            See experience ↓
          </a>
        </div>
      </div>
    </section>
  );
}
