import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-surface px-8 py-12 text-center sm:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight">
          Let&apos;s talk product.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Open to conversations on product strategy, opportunities, or just a
          good chat about building great user experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-muted"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
