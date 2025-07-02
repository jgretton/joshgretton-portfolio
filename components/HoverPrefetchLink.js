"use client";

import Link from "next/link";
import { useState } from "react";

export function HoverPrefetchLink({ href, children, className }) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
      className={className}
    >
      {children}
    </Link>
  );
}
