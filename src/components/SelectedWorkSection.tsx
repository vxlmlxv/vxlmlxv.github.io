import {
  BIOME_ORDER,
  biomeData,
  getBiomeRole,
  getProjectDescription,
  getProjectHighlights,
  getProjectRole,
  getProjectSubtitle,
  getProjectTitle,
} from "../lib/data/biomes";
import type { Language } from "../lib/types";

interface SelectedWorkSectionProps {
  language: Language;
}

const selectedWorkCopy = {
  en: {
    eyebrow: "Role Fit",
    title: "Strongest Signals",
    description:
      "Four quick reads for frontend hiring: a shared React codebase, an AI editing interface, a multi-service feedback flow, and an accessibility-focused AI companion.",
  },
  ko: {
    eyebrow: "역량 요약",
    title: "핵심 프로젝트",
    description:
      "프론트엔드 역할에 맞는 네 가지 근거입니다. React 협업 코드베이스, AI 편집 UI, 멀티 서비스 피드백 흐름, 접근성을 고려한 AI 서비스입니다.",
  },
} as const;

export default function SelectedWorkSection({
  language,
}: SelectedWorkSectionProps) {
  const copy = selectedWorkCopy[language];
  const selectedProjects = BIOME_ORDER.flatMap((biomeKey) => {
    const biome = biomeData[biomeKey];

    return biome.projects
      .filter((project) => typeof project.featuredRank === "number")
      .map((project) => ({ biome, biomeKey, project }));
  }).sort(
    (first, second) =>
      (first.project.featuredRank ?? 0) - (second.project.featuredRank ?? 0),
  );

  return (
    <section id="selected-work" className="relative z-20 px-6 py-24 md:px-24">
      <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.28fr)] md:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--theme-accent)]">
            {copy.eyebrow}
          </p>
          <h2 className="font-serif text-5xl leading-none md:text-7xl">
            {copy.title}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
          {copy.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {selectedProjects.map(({ biome, biomeKey, project }) => {
          const highlights = getProjectHighlights(project, language).slice(0, 2);
          const subtitle = getProjectSubtitle(project, language);

          return (
            <article
              key={`${biomeKey}-${project.title}`}
              className="hoverable group flex min-h-[23rem] flex-col rounded border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055]"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-[var(--theme-accent)]">
                  {String(project.featuredRank).padStart(2, "0")}
                </span>
                <span className="text-right text-xs uppercase tracking-[0.18em] text-gray-500 transition-colors group-hover:text-gray-300">
                  {getBiomeRole(biome, language)}
                </span>
              </div>

              <div className="mb-5">
                <h3 className="font-serif mb-2 text-3xl leading-tight">
                  {getProjectTitle(project, language)}
                </h3>
                <p className="text-sm text-[var(--theme-accent-soft)]">
                  {subtitle}
                </p>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-gray-400">
                {getProjectDescription(project, language)}
              </p>

              <ul className="mb-6 grid gap-2 text-sm leading-relaxed text-gray-300">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--theme-accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto border-t border-white/10 pt-4 font-mono text-[0.68rem] uppercase leading-relaxed tracking-widest text-gray-600">
                {getProjectRole(project, language)} / {project.year}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
