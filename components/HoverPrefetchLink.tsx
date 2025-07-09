"use client";

import { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function HoverPrefetchLink({
  href,
  children,
  className,
  target,
  onClick,
}: {
  href: Route | string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
}) {
  const router = useRouter();

  const handleMouseHover = () => {
    router.prefetch(href as string);
  };

  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={handleMouseHover}
      className={className}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
