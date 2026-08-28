import { profile } from "@/lib/data";

export default function ProfileHeader() {
  return (
    <section className="animate-fade-in-up relative flex items-center">
      <span className="-ml-1 inline-flex items-center rounded-full border border-[#00c8c0]/15 bg-neutral-800 px-3 py-1.5 text-neutral-300 font-mono text-sm font-semibold">
        {profile.location}
      </span>
    </section>
  );
}
