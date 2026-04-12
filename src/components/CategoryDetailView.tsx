import { forwardRef } from "react";

import {
  biomeData,
  getBiomeDescription,
  getBiomeTitle,
} from "../lib/data/biomes";
import { translations } from "../lib/data/translations";
import type { BiomeKey, Language } from "../lib/types";
import CategoryProjectCard from "./biomes/CategoryProjectCard";

interface CategoryDetailViewProps {
  categoryKey: BiomeKey | null;
  language: Language;
  onBackToHome: () => void;
}

const CategoryDetailView = forwardRef<HTMLDivElement, CategoryDetailViewProps>(
  ({ categoryKey, language, onBackToHome }, ref) => {
    const copy = translations[language];
    const biome = categoryKey ? biomeData[categoryKey] : null;

    return (
      <div id="view-category" ref={ref}>
        <div className="min-h-screen px-6 pt-32 pb-20 md:px-24">
          <button
            type="button"
            onClick={onBackToHome}
            className="hoverable mb-12 flex items-center gap-2 text-sm uppercase tracking-widest transition-colors hover:text-[var(--theme-accent)]"
          >
            <span>←</span> <span data-i18n="system_return">{copy.system_return}</span>
          </button>

          <div className="mb-20">
            <h1
              id="cat-title"
              className="font-serif mb-4 text-5xl text-white md:text-8xl"
            >
              {biome ? getBiomeTitle(biome, language) : "Category Title"}
            </h1>
            <p
              id="cat-desc"
              className="max-w-2xl text-lg font-light text-[var(--theme-accent-soft)] md:text-xl"
            >
              {biome
                ? getBiomeDescription(biome, language)
                : "Description goes here."}
            </p>
          </div>

          <div id="cat-projects" className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {biome?.projects.map((project) => (
              <CategoryProjectCard
                key={`${project.title}-${project.year}`}
                project={project}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
);

CategoryDetailView.displayName = "CategoryDetailView";

export default CategoryDetailView;
