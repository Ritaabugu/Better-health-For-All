import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import AffiliateNote from "./AffiliateNote";

export const mdxComponents: MDXComponents = {
  AffiliateNote,
  a: ({ href = "", children, ...props }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};
