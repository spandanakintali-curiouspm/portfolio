interface HighlightTextProps {
  text: string;
  highlights: string[];
  className?: string;
}

export default function HighlightText({ text, highlights, className }: HighlightTextProps) {
  if (highlights.length === 0) return <span className={className}>{text}</span>;

  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="font-semibold">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  );
}
