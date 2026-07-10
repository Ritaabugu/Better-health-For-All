import Image from "next/image";
import PostThumb from "./PostThumb";
import type { Category } from "@/lib/categories";

export default function FeaturedImage({
  src,
  alt,
  category,
  size = "md",
}: {
  src?: string;
  alt: string;
  category: Category;
  size?: "md" | "lg";
}) {
  if (!src) {
    return <PostThumb category={category} size={size} />;
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-paper-dim">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
