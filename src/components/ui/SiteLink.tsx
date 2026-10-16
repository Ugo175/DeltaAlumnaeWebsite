import Link from "next/link";
import type { ComponentProps } from "react";

// Keep the new chapter site available while pages are hosted elsewhere.
export function SiteLink({ href, children, ...props }: ComponentProps<"a"> & { href: string }) {
  const external = /^https?:\/\//.test(href);
  const label = props["aria-label"];
  return <Link href={href} {...props} aria-label={external && label ? `${label} (opens in a new tab)` : label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
    {children}{external && <span className="sr-only"> (opens in a new tab)</span>}
  </Link>;
}
