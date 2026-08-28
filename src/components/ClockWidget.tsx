"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export default function ClockWidget() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime(new Date()));
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      suppressHydrationWarning
      className="fixed bottom-4 right-4 z-40 inline-flex items-center rounded-full border border-[#00c8c0]/15 bg-neutral-800 px-3 py-1.5 font-mono text-xs font-semibold text-neutral-300 shadow-[0_1px_12px_0_rgba(2,5,12,0.5)]"
    >
      {time ?? "--:--:--"}
    </span>
  );
}
