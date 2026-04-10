import type { Biome, BiomeKey, BiomeProject, Language } from "../types";

export const BIOME_ORDER: BiomeKey[] = ["frontend", "fullstack", "design", "pm"];

export const biomeData: Record<BiomeKey, Biome> = {
  frontend: {
    title_en: "The Deep Ocean",
    title_ko: "깊은 바다",
    role_en: "Frontend Dev",
    role_ko: "프론트엔드",
    desc_en:
      "Immersive frontend experiences with fluid animations and responsive architectures.",
    desc_ko: "유려한 애니메이션과 반응형 아키텍처를 갖춘 몰입형 프론트엔드 경험.",
    color: "#1e3a8a",
    previewImage: "/assets/biomes/frontend-ocean.jpg",
    projects: [
      {
        title: "Liquid Finance",
        title_ko: "리퀴드 파이낸스",
        role: "Frontend Lead",
        role_ko: "프론트엔드 리드",
        tech: "React, Three.js, Tailwind",
        desc_en: "A 3D interactive dashboard for a fintech unicorn.",
        desc_ko: "핀테크 유니콘을 위한 3D 인터랙티브 대시보드.",
        year: "2024",
      },
      {
        title: "Velvet E-Comm",
        title_ko: "벨벳 이커머스",
        role: "Creative Dev",
        role_ko: "크리에이티브 데브",
        tech: "Vue, GSAP, Shopify",
        desc_en: "Award-winning scrolling experience for luxury fashion.",
        desc_ko: "럭셔리 패션을 위한 수상 경력의 스크롤 경험.",
        year: "2023",
      },
      {
        title: "Neon Portfolio",
        title_ko: "네온 포트폴리오",
        role: "Developer",
        role_ko: "개발자",
        tech: "Next.js, WebGL",
        desc_en: "Experimental personal site for a digital artist.",
        desc_ko: "디지털 아티스트를 위한 실험적 개인 사이트.",
        year: "2023",
      },
      {
        title: "Wave UI Kit",
        title_ko: "웨이브 UI 킷",
        role: "Maintainer",
        role_ko: "메인테이너",
        tech: "Typescript, Storybook",
        desc_en: "Open source component library for water-themed apps.",
        desc_ko: "물을 테마로 한 앱을 위한 오픈소스 컴포넌트 라이브러리.",
        year: "2022",
      },
    ],
  },
  fullstack: {
    title_en: "Concrete City",
    title_ko: "콘크리트 도시",
    role_en: "Fullstack Eng",
    role_ko: "풀스택 엔지니어",
    desc_en: "Robust, scalable architectures built on solid foundations.",
    desc_ko: "견고한 기초 위에 구축된 확장 가능한 아키텍처.",
    color: "#581c87",
    previewImage: "/assets/biomes/fullstack-city.jpg",
    projects: [
      {
        title: "Urban API",
        title_ko: "어반 API",
        role: "Backend Eng",
        role_ko: "백엔드 엔지니어",
        tech: "Node.js, PostgreSQL, Redis",
        desc_en: "High-throughput API serving 1M+ users daily.",
        desc_ko: "일일 100만 명 이상의 사용자를 처리하는 고성능 API.",
        year: "2024",
      },
      {
        title: "Structure SaaS",
        title_ko: "스트럭처 SaaS",
        role: "Fullstack",
        role_ko: "풀스택",
        tech: "Laravel, Vue, AWS",
        desc_en: "Enterprise resource planning tool for construction firms.",
        desc_ko: "건설 회사를 위한 전사적 자원 관리(ERP) 도구.",
        year: "2023",
      },
      {
        title: "Metro Realtime",
        title_ko: "메트로 실시간",
        role: "Lead Eng",
        role_ko: "리드 엔지니어",
        tech: "Go, WebSockets",
        desc_en: "Real-time tracking system for metropolitan transit.",
        desc_ko: "대도시 교통을 위한 실시간 추적 시스템.",
        year: "2023",
      },
    ],
  },
  design: {
    title_en: "Silent Mountain",
    title_ko: "고요한 산",
    role_en: "UI/UX Design",
    role_ko: "UI/UX 디자인",
    desc_en:
      "Minimalist UI/UX design focused on clarity, elevation, and user peace.",
    desc_ko:
      "명확성, 고양감, 그리고 사용자의 평온함에 초점을 맞춘 미니멀리스트 디자인.",
    color: "#064e3b",
    previewImage: "/assets/biomes/design-mountain.jpg",
    projects: [
      {
        title: "Peak Wellness",
        title_ko: "피크 웰니스",
        role: "Product Designer",
        role_ko: "프로덕트 디자이너",
        tech: "Figma, Principle",
        desc_en: "Meditation app interface redesign focused on accessibility.",
        desc_ko: "접근성에 중점을 둔 명상 앱 인터페이스 리디자인.",
        year: "2024",
      },
      {
        title: "Alpine Identity",
        title_ko: "알파인 아이덴티티",
        role: "Brand Lead",
        role_ko: "브랜드 리드",
        tech: "Illustrator, Blender",
        desc_en: "Complete rebrand for an eco-tourism startup.",
        desc_ko: "에코 투어리즘 스타트업을 위한 전체 리브랜딩.",
        year: "2023",
      },
    ],
  },
  pm: {
    title_en: "Nebula Core",
    title_ko: "네뷸라 코어",
    role_en: "Project Mgmt",
    role_ko: "프로젝트 관리",
    desc_en:
      "Orchestrating complex systems and teams across the digital universe.",
    desc_ko: "디지털 우주 전반에 걸친 복잡한 시스템과 팀의 조율.",
    color: "#be123c",
    previewImage: "/assets/biomes/pm-nebula.jpg",
    projects: [
      {
        title: "Project Starship",
        title_ko: "프로젝트 스타쉽",
        role: "Product Manager",
        role_ko: "프로덕트 매니저",
        tech: "Jira, Agile",
        desc_en: "Led a team of 15 devs to launch a flagship crypto product.",
        desc_ko: "15명의 개발팀을 이끌고 주력 암호화폐 제품 출시.",
        year: "2024",
      },
      {
        title: "Galaxy Roadmap",
        title_ko: "갤럭시 로드맵",
        role: "Scrum Master",
        role_ko: "스크럼 마스터",
        tech: "Notion, Linear",
        desc_en: "Optimized sprint velocity by 40% for a remote team.",
        desc_ko: "원격 팀의 스프린트 속도를 40% 최적화.",
        year: "2023",
      },
    ],
  },
};

export function getBiomeTitle(biome: Biome, language: Language): string {
  return language === "en" ? biome.title_en : biome.title_ko;
}

export function getBiomeRole(biome: Biome, language: Language): string {
  return language === "en" ? biome.role_en : biome.role_ko;
}

export function getBiomeDescription(biome: Biome, language: Language): string {
  return language === "en" ? biome.desc_en : biome.desc_ko;
}

export function getProjectTitle(project: BiomeProject, language: Language): string {
  return language === "en" ? project.title : project.title_ko;
}

export function getProjectRole(project: BiomeProject, language: Language): string {
  return language === "en" ? project.role : project.role_ko;
}

export function getProjectDescription(
  project: BiomeProject,
  language: Language,
): string {
  return language === "en" ? project.desc_en : project.desc_ko;
}
