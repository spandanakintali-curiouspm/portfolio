import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#00c8c0]/15">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-3 px-5 md:px-8 py-8 pb-14 text-sm text-neutral-300 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="hover:text-neutral-100 transition">
          Back to top
        </a>
      </div>
    </footer>
  );
}
