import Link from "next/link";
import CategoryIcon from "./CategoryIcon";
import { categoryStyles } from "@/lib/categoryStyles";
import type { Category } from "@/lib/categories";

export default function CategoryBadge({
  category,
  size = "sm",
}: {
  category: Category;
  size?: "sm" | "md";
}) {
  const styles = categoryStyles[category.color];
  const padding = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm";
  return (
    <Link
      href={`/${category.slug}`}
      className={`inline-flex items-center gap-1.5 rounded-full font-body font-semibold tracking-wide ${padding} ${styles.badgeBg} ${styles.badgeText} hover:opacity-80 transition-opacity`}
    >
      <CategoryIcon icon={category.icon} className="w-3.5 h-3.5" />
      {category.shortName}
    </Link>
  );
}
