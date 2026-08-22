"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const TAGLINES = [
  profile.role,
  "ISB PGP · Strategy & Leadership",
  "Ex-ServiceNow · OpenText · Oracle",
  "On a career break, by choice",
];

export default function DynamicTagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % TAGLINES.length);
        setVisible(true);
      }, 200);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-6 text-center">
      <div className="flex flex-col gap-5">
        <h3 className="eyebrow text-sm text-neutral-50">
          In short
        </h3>
        <div className="relative h-12 grid place-items-center">
          <p
            className={`absolute w-full text-3xl md:text-4xl tracking-tight text-neutral-200 transition-all duration-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
            }`}
          >
            {TAGLINES[index]}
          </p>
        </div>
      </div>
    </section>
  );
}
