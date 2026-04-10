export type Language = "en" | "ko";

export type BiomeKey = "frontend" | "fullstack" | "design" | "pm";

export interface BiomeProject {
  title: string;
  title_ko: string;
  role: string;
  role_ko: string;
  tech: string;
  desc_en: string;
  desc_ko: string;
  year: string;
}

export interface Biome {
  title_en: string;
  title_ko: string;
  role_en: string;
  role_ko: string;
  desc_en: string;
  desc_ko: string;
  color: string;
  previewImage: string;
  projects: BiomeProject[];
}
