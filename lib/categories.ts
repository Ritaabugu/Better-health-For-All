export type CategorySlug =
  | "weight-loss"
  | "weight-gain"
  | "nutrition"
  | "healthy-habits"
  | "recipes-meal-plans";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  color: "sage" | "gold" | "berry" | "teal" | "clay";
  icon: "leaf" | "flame" | "plate" | "moon" | "bowl";
}

export const categories: Category[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss",
    shortName: "Weight Loss",
    tagline: "Sustainable fat loss, not fast fixes",
    description:
      "Fat-loss strategies that hold up after the first two weeks. Myth-busting, training tips, and the mistakes that quietly stall progress.",
    color: "sage",
    icon: "leaf",
  },
  {
    slug: "weight-gain",
    name: "Weight Gain",
    shortName: "Weight Gain",
    tagline: "Healthy bulking with real numbers",
    description:
      "Calorie-dense nutrition and muscle-building basics for hardgainers and anyone rebuilding strength on purpose.",
    color: "gold",
    icon: "flame",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    shortName: "Nutrition",
    tagline: "Macros, micros, and food that works",
    description:
      "Plain-spoken breakdowns of macros, micros, and supplements. No jargon without an explanation attached to it.",
    color: "berry",
    icon: "plate",
  },
  {
    slug: "healthy-habits",
    name: "Healthy Habits",
    shortName: "Habits",
    tagline: "Sleep, stress, and everyday routines",
    description:
      "Sleep, hydration, stress management, and the small routines that hold a healthy life together on ordinary days.",
    color: "teal",
    icon: "moon",
  },
  {
    slug: "recipes-meal-plans",
    name: "Recipes & Meal Plans",
    shortName: "Recipes",
    tagline: "Simple food, real prep times",
    description:
      "Simple, healthy recipes and downloadable meal plans built around how long you actually have to cook.",
    color: "clay",
    icon: "bowl",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
