import type { Language } from "../types";

export const translations = {
  en: {
    nav_manifesto: "Manifesto",
    nav_biomes: "Biomes",
    nav_connect: "Connect",
    biomes_title: "Select Biome",
    system_return: "System Return",
  },
  ko: {
    nav_manifesto: "매니페스토",
    nav_biomes: "바이옴",
    nav_connect: "연락하기",
    biomes_title: "바이옴 선택",
    system_return: "시스템 복귀",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getTranslation(
  language: Language,
  key: TranslationKey,
): string {
  return translations[language][key];
}
