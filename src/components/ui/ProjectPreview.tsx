import { biomeData } from "../../lib/data/biomes";
import type { BiomeKey } from "../../lib/types";

interface ProjectPreviewProps {
  hoveredBiome: BiomeKey | null;
}

export default function ProjectPreview({
  hoveredBiome,
}: ProjectPreviewProps) {
  const previewImage = hoveredBiome
    ? biomeData[hoveredBiome].previewImage
    : undefined;

  return (
    <div
      id="project-preview"
      className="project-preview"
      style={{
        backgroundImage: previewImage ? `url(${previewImage})` : undefined,
        opacity: hoveredBiome ? 0.6 : 0,
        transform: hoveredBiome
          ? "translate(-50%, -50%) scale(1)"
          : "translate(-50%, -50%) scale(0.8)",
      }}
    />
  );
}
