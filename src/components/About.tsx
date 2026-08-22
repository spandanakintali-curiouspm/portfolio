import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        About
      </h2>
      <p className="mt-4 max-w-3xl text-xl leading-relaxed text-foreground/90">
        {profile.summary}
      </p>
    </section>
  );
}
