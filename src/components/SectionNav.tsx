const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#honors", label: "Honors" },
  { href: "#education", label: "Education" },
  { href: "#reach-out", label: "Reach Out" },
];

export default function SectionNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-neutral-700 bg-neutral-900/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="shrink-0 rounded-full px-3 py-1.5 font-sans text-sm text-neutral-300 transition duration-200 hover:bg-[#00c8c0]/10 hover:text-[#00c8c0]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
