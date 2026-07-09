import type { Category } from "@/lib/categories";

const paths: Record<Category["icon"], React.ReactNode> = {
  leaf: (
    <path d="M6 18C6 10 11 5 19 4c0 8-5 13-13 14Zm0 0c2-3.5 4.7-6 8.5-7.8" />
  ),
  flame: (
    <path d="M12 3c1 2.5-.8 3.7-1.6 5.3C9.3 10 9 11.4 9 12.7A3 3 0 0 0 12 15.7a3 3 0 0 0 3-3c0-1-.4-1.7-1-2.4 1.7.9 3 2.7 3 4.9a5 5 0 0 1-10 0c0-3.4 2-5 3.3-7.1C10.9 6.4 11.6 5 12 3Z" />
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />,
  bowl: (
    <>
      <path d="M4 12h16a8 8 0 0 1-16 0Z" />
      <path d="M8 12c0-2.5 1-4.5 2-6" />
      <path d="M12 12c.4-2.6 1.4-4.6 2.4-6.2" />
    </>
  ),
};

export default function CategoryIcon({
  icon,
  className = "w-5 h-5",
}: {
  icon: Category["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
