import { BIOME_ORDER } from "../../lib/data/biomes";
import { translations } from "../../lib/data/translations";
import type { BiomeKey, Language } from "../../lib/types";
import BiomeItem from "./BiomeItem";

interface BiomeListSectionProps {
  language: Language;
  onHoverBiome: (key: BiomeKey) => void;
  onLeaveBiome: () => void;
  onOpenCategory: (key: BiomeKey) => void;
}

export default function BiomeListSection({
  language,
  onHoverBiome,
  onLeaveBiome,
  onOpenCategory,
}: BiomeListSectionProps) {
  const copy = translations[language];

  return (
    <section id="biomes" className="relative z-20 px-6 py-24 md:px-24">
      <div className="mb-16">
        <h2
          className="font-serif mb-4 text-5xl md:text-7xl"
          data-i18n="biomes_title"
        >
          {copy.biomes_title}
        </h2>
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="biome-list flex flex-col">
        {BIOME_ORDER.map((biomeKey, index) => (
          <BiomeItem
            key={biomeKey}
            biomeKey={biomeKey}
            index={index}
            language={language}
            onMouseEnter={onHoverBiome}
            onMouseLeave={onLeaveBiome}
            onOpenCategory={onOpenCategory}
          />
        ))}
      </div>
    </section>
  );
}
