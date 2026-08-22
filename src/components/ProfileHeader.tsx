"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export default function ProfileHeader() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex items-center justify-between">
      <div className="flex sm:flex-row flex-col sm:items-center sm:gap-2.5 gap-1 text-neutral-300 font-mono text-sm font-semibold uppercase">
        <span suppressHydrationWarning>{time ?? "--:--:--"}</span>
        <span>{profile.location}</span>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 rounded-[8px] text-sm font-medium px-4 py-2 border border-white/15 bg-neutral-800 text-neutral-100 hover:bg-white/5 transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Email
      </a>
    </section>
  );
}
