import type { Language } from "../types";

interface ProfileLink {
  id: string;
  href: string;
  text: string;
}

interface ProfileStat {
  id: string;
  value: string;
  label: string;
}

interface ProfileContent {
  navigation: {
    brand: string;
  };
  hero: {
    role: string;
    hello: string;
    name: string;
    description: string;
  };
  about: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    text1: string;
    text2: string;
  };
  stats: ProfileStat[];
  contact: {
    subtitle: string;
    title: string;
    highlight: string;
    links: ProfileLink[];
  };
  footer: {
    copyright: string;
    timeLabel: string;
  };
}

const navigationBrand = "Yeseul Lee";

const contactLinks: ProfileLink[] = [
  {
    id: "email",
    href: "mailto:vxlmlxv@gmail.com",
    text: "vxlmlxv@gmail.com",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/ye-seul-lee-b62298295",
    text: "LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/vxlmlxv",
    text: "GitHub",
  },
];

const footerContent = {
  copyright: "© 2026 Hello World",
  timeLabel: "Local Time",
};

// Centralized profile content so personal details are managed in one place.
export const profileData: Record<Language, ProfileContent> = {
  en: {
    navigation: {
      brand: navigationBrand,
    },
    hero: {
      role: "Front-End Developer & Product-Minded Builder",
      hello: "Hello, World!",
      name: "It's Yeseul Lee.",
      description:
        "Exploration of digital biomes. <br>Merging code, aesthetics, and interaction.",
    },
    about: {
      subtitle: "The Concept",
      titleLine1: "A website is not just a page.",
      titleLine2: "It is a ",
      titleHighlight: "world",
      text1:
        "Just as the earth is composed of vast oceans, towering mountains, and complex cities, my skillset spans the depths of backend logic, the heights of creative design, and the structural integrity of clean architecture.",
      text2: "Select a <strong>Biome</strong> below to explore my projects.",
    },
    stats: [
      {
        id: "stat_projects",
        value: "8+",
        label: "Team Projects",
      },
      {
        id: "stat_frameworks",
        value: "React, Typescript, Figma",
        label: "Frameworks & Tools",
      },
    ],
    contact: {
      subtitle: "Initiate Sequence",
      title: "Ready to build",
      highlight: "the next world?",
      links: contactLinks,
    },
    footer: footerContent,
  },
  ko: {
    navigation: {
      brand: navigationBrand,
    },
    hero: {
      role: "프론트엔드 개발자 & 제품 중심 빌더",
      hello: "Hello, World!",
      name: "이예슬입니다.",
      description:
        "디지털 생태계의 탐험. <br>코드와 미학, 그리고 상호작용의 결합.",
    },
    about: {
      subtitle: "컨셉",
      titleLine1: "웹사이트는 단순한 페이지가 아닙니다.",
      titleLine2: "그것은 하나의 ",
      titleHighlight: "세상입니다",
      text1:
        "지구가 깊은 바다, 솟아오른 산, 복잡한 도시들로 이루어져 있듯, 저의 기술은 백엔드 로직의 깊이와 크리에이티브 디자인의 높이, 그리고 클린 아키텍처의 구조적 견고함을 아우릅니다.",
      text2:
        "아래 <strong>바이옴(영역)</strong>을 선택하여 프로젝트를 확인하세요.",
    },
    stats: [
      {
        id: "stat_projects",
        value: "8+",
        label: "개의 팀 프로젝트",
      },
      {
        id: "stat_frameworks",
        value: "React, Typescript, Figma",
        label: "Frameworks & Tools",
      },
    ],
    contact: {
      subtitle: "시퀀스 시작",
      title: "새로운 세상을",
      highlight: "만들 준비 되셨나요?",
      links: contactLinks,
    },
    footer: footerContent,
  },
};
