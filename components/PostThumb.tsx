import CategoryIcon from "./CategoryIcon";
import type { Category } from "@/lib/categories";

const bg: Record<Category["color"], string> = {
  sage: "bg-sage-tint",
  gold: "bg-gold-tint",
  berry: "bg-berry-tint",
  teal: "bg-teal-tint",
  clay: "bg-clay-tint",
};

const fg: Record<Category["color"], string> = {
  sage: "text-sage",
  gold: "text-gold",
  berry: "text-berry",
  teal: "text-teal",
  clay: "text-clay",
};

export default function PostThumb({
  category,
  size = "md",
}: {
  category: Category;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg ${bg[category.color]}`}
    >
      <div className={`absolute -bottom-6 -right-6 opacity-25 ${fg[category.color]}`}>
        <CategoryIcon icon={category.icon} className={size === "lg" ? "h-40 w-40" : "h-28 w-28"} />
      </div>
      <div className={`absolute -left-8 -top-8 opacity-10 ${fg[category.color]}`}>
        <CategoryIcon icon={category.icon} className={size === "lg" ? "h-28 w-28" : "h-20 w-20"} />
      </div>
      <CategoryIcon
        icon={category.icon}
        className={`${fg[category.color]} relative ${size === "lg" ? "h-16 w-16" : "h-11 w-11"}`}
      />
    </div>
  );
}
