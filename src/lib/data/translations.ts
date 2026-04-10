import type { Language } from "../types";

export const translations = {
  en: {
    nav_manifesto: "Manifesto",
    nav_biomes: "Biomes",
    nav_connect: "Connect",
    hero_role: "Front-End Developer & Technologist",
    hero_hello: "Hello, World!",
    hero_name: "It's Yeseul Lee.",
    hero_desc:
      "Exploration of digital biomes. <br>Merging code, aesthetics, and interaction.",
    about_subtitle: "The Concept",
    about_title1: "A website is not just a page.",
    about_title2: "It is a ",
    about_title3: "world",
    about_text1:
      "Just as the earth is composed of vast oceans, towering mountains, and complex cities, my skillset spans the depths of backend logic, the heights of creative design, and the structural integrity of clean architecture.",
    about_text2:
      "Select a <strong>Biome</strong> below to explore my projects.",
    stat_exp: "Years Experience",
    stat_awards: "Awards Won",
    biomes_title: "Select Biome",
    contact_subtitle: "Initiate Sequence",
    contact_title: "Ready to build",
    contact_link: "the next world?",
    system_return: "System Return",
  },
  ko: {
    nav_manifesto: "매니페스토",
    nav_biomes: "바이옴",
    nav_connect: "연락하기",
    hero_role: "프론트엔드 개발자 & 테크놀로지스트",
    hero_hello: "Hello, World!",
    hero_name: "이예슬입니다.",
    hero_desc: "디지털 생태계의 탐험. <br>코드와 미학, 그리고 상호작용의 결합.",
    about_subtitle: "컨셉",
    about_title1: "웹사이트는 단순한 페이지가 아닙니다.",
    about_title2: "그것은 하나의 ",
    about_title3: "세상입니다",
    about_text1:
      "지구가 깊은 바다, 솟아오른 산, 복잡한 도시들로 이루어져 있듯, 저의 기술은 백엔드 로직의 깊이와 크리에이티브 디자인의 높이, 그리고 클린 아키텍처의 구조적 견고함을 아우릅니다.",
    about_text2:
      "아래 <strong>바이옴(영역)</strong>을 선택하여 프로젝트를 확인하세요.",
    stat_exp: "년의 경력",
    stat_awards: "수상 경력",
    biomes_title: "바이옴 선택",
    contact_subtitle: "시퀀스 시작",
    contact_title: "새로운 세상을",
    contact_link: "만들 준비 되셨나요?",
    system_return: "시스템 복귀",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getTranslation(language: Language, key: TranslationKey): string {
  return translations[language][key];
}
