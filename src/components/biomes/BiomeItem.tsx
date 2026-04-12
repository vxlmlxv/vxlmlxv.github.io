import { biomeData, getBiomeRole, getBiomeTitle } from "../../lib/data/biomes";
import type { BiomeKey, Language } from "../../lib/types";

interface BiomeItemProps {
  biomeKey: BiomeKey;
  index: number;
  language: Language;
  onMouseEnter: (key: BiomeKey) => void;
  onMouseLeave: () => void;
  onOpenCategory: (key: BiomeKey) => void;
}

function getTitleClassName(biomeKey: BiomeKey): string {
  switch (biomeKey) {
    case "frontend":
      return "font-serif italic group-hover:text-blue-200";
    case "fullstack":
      return "font-serif group-hover:text-purple-200";
    case "design":
      return "font-serif italic group-hover:text-emerald-200";
    case "pm":
      return "font-serif group-hover:text-rose-200";
  }
}

export default function BiomeItem({
  biomeKey,
  index,
  language,
  onMouseEnter,
  onMouseLeave,
  onOpenCategory,
}: BiomeItemProps) {
  const biome = biomeData[biomeKey];

  return (
    <div
      className="biome-item hoverable group flex cursor-none items-center justify-between py-12"
      onClick={() => onOpenCategory(biomeKey)}
      onMouseEnter={() => onMouseEnter(biomeKey)}
      onMouseLeave={onMouseLeave}
      data-image={biome.previewImage}
      data-color={biome.color}
    >
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-xs text-[var(--theme-accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className={`text-4xl transition-colors md:text-6xl ${getTitleClassName(biomeKey)}`}
          data-biome={biomeKey}
        >
          {getBiomeTitle(biome, language)}
        </h3>
      </div>
      <span
        className="text-sm uppercase tracking-widest text-gray-500 group-hover:text-white"
        data-biome-role={biomeKey}
      >
        {getBiomeRole(biome, language)}
      </span>
    </div>
  );
}
