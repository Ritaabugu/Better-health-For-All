import type { Category } from "./categories";

type ColorKey = Category["color"];

interface StyleSet {
  badgeBg: string;
  badgeText: string;
  iconText: string;
  border: string;
  ring: string;
  solidBg: string;
  hoverText: string;
}

export const categoryStyles: Record<ColorKey, StyleSet> = {
  sage: {
    badgeBg: "bg-sage-tint",
    badgeText: "text-sage-dark",
    iconText: "text-sage",
    border: "border-sage/30",
    ring: "focus-visible:outline-sage",
    solidBg: "bg-sage",
    hoverText: "group-hover:text-sage-dark",
  },
  gold: {
    badgeBg: "bg-gold-tint",
    badgeText: "text-gold-dark",
    iconText: "text-gold",
    border: "border-gold/30",
    ring: "focus-visible:outline-gold",
    solidBg: "bg-gold",
    hoverText: "group-hover:text-gold-dark",
  },
  berry: {
    badgeBg: "bg-berry-tint",
    badgeText: "text-berry-dark",
    iconText: "text-berry",
    border: "border-berry/30",
    ring: "focus-visible:outline-berry",
    solidBg: "bg-berry",
    hoverText: "group-hover:text-berry-dark",
  },
  teal: {
    badgeBg: "bg-teal-tint",
    badgeText: "text-teal-dark",
    iconText: "text-teal",
    border: "border-teal/30",
    ring: "focus-visible:outline-teal",
    solidBg: "bg-teal",
    hoverText: "group-hover:text-teal-dark",
  },
  clay: {
    badgeBg: "bg-clay-tint",
    badgeText: "text-clay-dark",
    iconText: "text-clay",
    border: "border-clay/30",
    ring: "focus-visible:outline-clay",
    solidBg: "bg-clay",
    hoverText: "group-hover:text-clay-dark",
  },
};
