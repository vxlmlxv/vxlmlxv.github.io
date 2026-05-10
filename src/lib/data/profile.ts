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
    description?: string;
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
      role: "Frontend Developer & Product-Minded Builder",
      hello: "Hello, World.",
      name: "I'm Yeseul Lee.",
      description:
        "I build web products that make complex ideas easier to use. My work sits at the intersection of frontend engineering, UI/UX design, and product thinking, with hands-on experience in AI-powered tools, community platforms, and experimental services.",
    },
    about: {
      subtitle: "The Concept",
      titleLine1: "A website is not just a page.",
      titleLine2: "It is a system of ",
      titleHighlight: "decisions",
      text1:
        "I bridge product flow, UI design, and frontend implementation. I start by making the user journey clear, then build React and TypeScript interfaces that make complex systems feel understandable.",
      text2:
        "Most of my work centers on AI tools, workflow-heavy services, and community products where clear states and interaction details matter.",
    },
    stats: [
      {
        id: "stat_stack",
        value: "React / TS",
        label: "Frontend Core",
      },
      {
        id: "stat_focus",
        value: "Product UX",
        label: "Bridge Strength",
      },
    ],
    contact: {
      subtitle: "Connect",
      title: "Let's build",
      highlight: "something thoughtful.",
      description:
        "I am most interested in frontend roles and product teams where interface quality, user understanding, and collaboration matter.",
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
      hello: "Hello, World.",
      name: "이예슬입니다.",
      description:
        "복잡한 아이디어를 더 쉽게 사용할 수 있는 웹 제품으로 만듭니다. 프론트엔드 개발, UI/UX 디자인, 제품 사고가 만나는 지점에서 AI 기반 도구, 커뮤니티 플랫폼, 실험적인 서비스를 만들어 왔습니다.",
    },
    about: {
      subtitle: "컨셉",
      titleLine1: "웹사이트는 단순한 페이지가 아닙니다.",
      titleLine2: "결정들이 모인 ",
      titleHighlight: "시스템입니다",
      text1:
        "제품 흐름, UI 디자인, 프론트엔드 구현을 연결합니다. 먼저 사용자 여정을 명확히 정리하고, 복잡한 시스템을 이해하기 쉽게 느껴지도록 React와 TypeScript 인터페이스를 만듭니다.",
      text2:
        "AI 도구, 워크플로가 많은 서비스, 커뮤니티 제품처럼 상태와 상호작용의 명확성이 중요한 작업에 특히 관심이 있습니다.",
    },
    stats: [
      {
        id: "stat_stack",
        value: "React / TS",
        label: "프론트엔드 핵심",
      },
      {
        id: "stat_focus",
        value: "Product UX",
        label: "설계와 구현 연결",
      },
    ],
    contact: {
      subtitle: "연락하기",
      title: "새로운 '세상' 을",
      highlight: "함께 만들어요.",
      description:
        "인터페이스 품질, 사용자 이해, 협업을 중요하게 보는 프론트엔드 역할과 제품 팀에 관심이 있습니다.",
      links: contactLinks,
    },
    footer: footerContent,
  },
};
