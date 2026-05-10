import {
  getProjectDescription,
  getProjectHighlights,
  getProjectOutcome,
  getProjectRole,
  getProjectSubtitle,
  getProjectTitle,
} from "../../lib/data/biomes";
import type { BiomeProject, Language } from "../../lib/types";

interface CategoryProjectCardProps {
  project: BiomeProject;
  language: Language;
}

export default function CategoryProjectCard({
  project,
  language,
}: CategoryProjectCardProps) {
  const subtitle = getProjectSubtitle(project, language);
  const highlights = getProjectHighlights(project, language).slice(0, 3);
  const outcome = getProjectOutcome(project, language);

  return (
    <div className="category-project-card hoverable rounded border border-white/10 p-6 md:p-8">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <span className="font-mono text-xs text-[var(--theme-accent)]">
          {project.year}
        </span>
        <span className="rounded-full border border-white/20 px-2 py-1 text-xs">
          {getProjectRole(project, language)}
        </span>
      </div>
      <h3 className="font-serif mb-2 text-2xl">
        {getProjectTitle(project, language)}
      </h3>
      {subtitle ? (
        <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--theme-accent-soft)]">
          {subtitle}
        </p>
      ) : null}
      <p className="mb-5 text-sm leading-relaxed text-gray-400">
        {getProjectDescription(project, language)}
      </p>
      {highlights.length > 0 ? (
        <ul className="mb-5 grid gap-2 text-sm leading-relaxed text-gray-300">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--theme-accent)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {outcome ? (
        <p className="mb-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-[var(--theme-accent-soft)]">
          {outcome}
        </p>
      ) : null}
      <div className="font-mono text-xs uppercase tracking-widest text-gray-500">
        {project.tech}
      </div>
    </div>
  );
}
