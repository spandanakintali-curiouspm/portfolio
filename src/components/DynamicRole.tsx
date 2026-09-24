"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 1800;
const PAUSE_MS = 400;

export default function DynamicRole() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing");

  useEffect(() => {
    const current = profile.titles[titleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_MS);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_MS);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("pausing"), PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    if (phase === "pausing") {
      setTitleIndex((i) => (i + 1) % profile.titles.length);
      setPhase("typing");
    }
  }, [phase, text, titleIndex]);

  return (
    <p className="text-[#60a5fa] font-mono text-base">
      <span>{text}</span>
      <span className="caret" />
    </p>
  );
}
