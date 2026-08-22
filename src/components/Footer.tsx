import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-3 px-4 py-8 text-sm text-neutral-400 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 transition"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-neutral-700 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
