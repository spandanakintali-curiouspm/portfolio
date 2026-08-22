import { profile } from "@/lib/data";

const pullQuote = profile.summary.split(". ")[0] + ".";

export default function Quote() {
  return (
    <section className="py-4 text-center">
      <p className="mx-auto max-w-2xl text-2xl md:text-4xl leading-snug tracking-tight text-neutral-400">
        {pullQuote}
      </p>
    </section>
  );
}
