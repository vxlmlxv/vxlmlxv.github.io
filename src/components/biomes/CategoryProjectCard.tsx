import {
  getProjectDescription,
  getProjectRole,
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
  return (
    <div className="category-project-card hoverable rounded border border-white/10 p-8">
      <div className="mb-4 flex items-start justify-between">
        <span className="font-mono text-xs text-purple-300">{project.year}</span>
        <span className="rounded-full border border-white/20 px-2 py-1 text-xs">
          {getProjectRole(project, language)}
        </span>
      </div>
      <h3 className="font-serif mb-2 text-2xl">
        {getProjectTitle(project, language)}
      </h3>
      <p className="mb-4 text-sm text-gray-400">
        {getProjectDescription(project, language)}
      </p>
      <div className="font-mono text-xs uppercase tracking-widest text-gray-500">
        {project.tech}
      </div>
    </div>
  );
}
