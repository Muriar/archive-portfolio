"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { useTransitionRouter } from "@/app/providers";

type CinematicLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function CinematicLink({
  href,
  children,
  className,
  onClick
}: CinematicLinkProps) {
  const { navigasiKe } = useTransitionRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    navigasiKe(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
