import type { Biome, BiomeKey, BiomeProject, Language } from "../types";

export const BIOME_ORDER: BiomeKey[] = ["frontend", "fullstack", "design", "pm"];

export const biomeData: Record<BiomeKey, Biome> = {
  frontend: {
    title_en: "The Deep Ocean",
    title_ko: "깊은 바다",
    role_en: "Frontend Development",
    role_ko: "프론트엔드 개발",
    desc_en:
      "I build interfaces that handle real product states well, not just ideal screens. I focus on component structure, responsive layouts, loading and error flows, and the small interaction decisions that make a service feel stable and understandable.",
    desc_ko:
      "이상적인 화면만이 아니라 실제 제품 상태를 견디는 인터페이스를 만듭니다. 컴포넌트 구조, 반응형 레이아웃, 로딩과 오류 흐름, 서비스가 안정적으로 느껴지게 하는 작은 상호작용에 집중합니다.",
    color: "#1e3a8a",
    previewImage: "/assets/biomes/frontend-ocean.jpg",
    projects: [
      {
        title: "KLUB",
        title_ko: "KLUB",
        subtitle_en: "Frontend development for a university club platform",
        subtitle_ko: "대학 동아리 플랫폼 프론트엔드 개발",
        role: "Frontend Developer",
        role_ko: "프론트엔드 개발자",
        tech: "React, TypeScript, React Query, Recoil, Material UI",
        desc_en:
          "A platform for discovering, reviewing, recruiting for, and managing clubs at Korea University.",
        desc_ko:
          "고려대학교 동아리를 탐색하고 리뷰하며 모집과 운영까지 지원하는 플랫폼입니다.",
        highlights_en: [
          "Added keyword-based review functionality and review visibility controls",
          "Worked inside a structured frontend codebase rather than a one-off prototype",
          "Improved feature quality while respecting existing patterns and team workflow",
        ],
        highlights_ko: [
          "키워드 기반 리뷰 기능과 리뷰 공개 여부 관리 기능을 추가했습니다",
          "일회성 프로토타입이 아닌 기존 프론트엔드 코드베이스 안에서 작업했습니다",
          "기존 패턴과 팀 워크플로를 지키며 기능 품질을 개선했습니다",
        ],
        outcome_en:
          "Joined an existing service and shipped review-related features with the team.",
        outcome_ko:
          "운영 중인 서비스에 합류해 리뷰 관련 기능을 팀과 함께 구현했습니다.",
        year: "2026-Present",
        featuredRank: 1,
      },
      {
        title: "Creazy",
        title_ko: "Creazy",
        subtitle_en: "AI-powered promotion page generator",
        subtitle_ko: "AI 기반 홍보 페이지 생성 서비스",
        role: "Frontend Developer",
        role_ko: "프론트엔드 개발자",
        tech: "Next.js, TypeScript, Tailwind CSS, HTML/CSS, Supabase, Claude API",
        desc_en:
          "An award-winning project that generates promotion pages from user input, templates, and AI-assisted editing.",
        desc_ko:
          "사용자 입력, 템플릿, AI 편집 보조를 바탕으로 홍보 페이지를 생성하는 수상 프로젝트입니다.",
        highlights_en: [
          "Built the design editing panel for AI-generated promotion pages",
          "Contributed reusable templates for generated page layouts",
          "Helped ship an award-winning hackathon product under tight deadlines",
        ],
        highlights_ko: [
          "AI가 생성한 홍보 페이지를 조정하는 디자인 편집 패널을 구현했습니다",
          "생성 페이지에 활용되는 재사용 가능한 HTML/CSS 템플릿을 제작했습니다",
          "짧은 일정 안에서 수상한 해커톤 제품을 함께 출시했습니다",
        ],
        outcome_en: "Award-winning Uni-con 2025 hackathon project.",
        outcome_ko: "Uni-con 2025에서 수상한 해커톤 프로젝트입니다.",
        year: "2025",
        featuredRank: 2,
      },
      {
        title: "Personal Portfolio",
        title_ko: "개인 포트폴리오",
        subtitle_en: "Immersive digital-biome portfolio experience",
        subtitle_ko: "디지털 바이옴 콘셉트의 몰입형 포트폴리오",
        role: "Frontend Developer",
        role_ko: "프론트엔드 개발자",
        tech: "Astro, React, TypeScript, GSAP, Three.js, Tailwind CSS",
        desc_en:
          "Designed and built an immersive portfolio experience focused on motion, interaction, and personal branding.",
        desc_ko:
          "모션, 인터랙션, 개인 브랜딩에 초점을 맞춘 몰입형 포트폴리오 경험을 설계하고 구현했습니다.",
        highlights_en: [
          "Built a single-page Astro and React experience with animated view transitions",
          "Used Three.js, GSAP, and Lenis to create a cinematic interaction layer",
          "Structured portfolio content around four skill-based biomes",
        ],
        highlights_ko: [
          "Astro와 React 기반의 단일 페이지 경험과 전환 애니메이션을 구현했습니다",
          "Three.js, GSAP, Lenis로 시네마틱한 인터랙션 레이어를 만들었습니다",
          "네 가지 역량 기반 바이옴으로 포트폴리오 내용을 구성했습니다",
        ],
        outcome_en:
          "Created the current portfolio as a product-like frontend artifact.",
        outcome_ko:
          "현재 포트폴리오를 제품처럼 경험할 수 있는 프론트엔드 결과물로 만들었습니다.",
        year: "2026",
      },
    ],
  },
  fullstack: {
    title_en: "Concrete City",
    title_ko: "콘크리트 도시",
    role_en: "Full-Stack Engineering",
    role_ko: "풀스택 엔지니어링",
    desc_en:
      "When a product needs it, I work across the frontend and backend boundary. My project work includes API integration, cloud deployment, database-backed services, and connecting AI workflows to user-facing products.",
    desc_ko:
      "제품에 필요하다면 프론트엔드와 백엔드의 경계를 오가며 작업합니다. API 연동, 클라우드 배포, 데이터베이스 기반 서비스, AI 워크플로를 사용자 제품으로 연결한 경험이 있습니다.",
    color: "#581c87",
    previewImage: "/assets/biomes/fullstack-city.jpg",
    projects: [
      {
        title: "Preffy",
        title_ko: "Preffy",
        subtitle_en: "AI presentation feedback platform",
        subtitle_ko: "AI 발표 피드백 플랫폼",
        role: "Frontend / Full-Stack Developer",
        role_ko: "프론트엔드 / 풀스택 개발자",
        tech: "React, TypeScript, Spring Boot, FastAPI, Firebase, Google Cloud",
        desc_en:
          "A web service that analyzes presentation videos and returns feedback on scripts, posture, and delivery.",
        desc_ko:
          "발표 영상을 분석해 대본, 자세, 전달 방식에 대한 피드백을 제공하는 웹 서비스입니다.",
        highlights_en: [
          "Designed and built the user-facing presentation feedback experience",
          "Worked on cloud-backed upload and integration flows across multiple services",
          "Focused on making a complex AI workflow feel understandable to end users",
        ],
        highlights_ko: [
          "사용자가 보는 발표 피드백 경험을 설계하고 구현했습니다",
          "여러 서비스에 걸친 클라우드 기반 업로드와 연동 흐름을 작업했습니다",
          "복잡한 AI 워크플로가 사용자에게 이해 가능하게 느껴지도록 구성했습니다",
        ],
        outcome_en:
          "Delivered a working platform foundation for video upload, project management, and AI-connected feedback presentation.",
        outcome_ko:
          "영상 업로드, 프로젝트 관리, AI 연동 피드백 표시를 위한 작동 가능한 플랫폼 기반을 만들었습니다.",
        year: "2025",
        featuredRank: 3,
      },
      {
        title: "Hyosimi",
        title_ko: "효심이",
        subtitle_en: "AI wellness companion for seniors and guardians",
        subtitle_ko: "시니어와 보호자를 위한 AI 웰니스 동반자",
        role: "Full-Stack Developer",
        role_ko: "풀스택 개발자",
        tech: "Flutter, Firebase, Firestore, Google Cloud Run, Docker, Clova APIs",
        desc_en:
          "An AI-driven service designed to support seniors through proactive check-in calls, cognitive activities, and guardian-facing reports.",
        desc_ko:
          "능동적인 안부 전화, 인지 활동, 보호자용 리포트를 통해 시니어를 지원하는 AI 기반 서비스입니다.",
        highlights_en: [
          "Built user flows for both seniors and guardians",
          "Integrated STT, TTS, and AI analysis services into one product flow",
          "Worked on a service where usability and clarity mattered more than visual novelty",
        ],
        highlights_ko: [
          "시니어와 보호자라는 두 사용자 그룹의 흐름을 구현했습니다",
          "STT, TTS, AI 분석 서비스를 하나의 제품 흐름으로 연결했습니다",
          "시각적 새로움보다 사용성과 명확성이 중요한 서비스를 작업했습니다",
        ],
        outcome_en:
          "Delivered a functional product concept combining accessibility, AI integration, and role-based product design.",
        outcome_ko:
          "접근성, AI 연동, 역할 기반 제품 설계를 결합한 기능성 제품 콘셉트를 완성했습니다.",
        year: "2025",
        featuredRank: 4,
      },
      {
        title: "claude-code-meter",
        title_ko: "claude-code-meter",
        subtitle_en: "Local telemetry dashboard for Claude Code usage",
        subtitle_ko: "Claude Code 사용량을 위한 로컬 텔레메트리 대시보드",
        role: "Developer",
        role_ko: "개발자",
        tech: "TypeScript, Node.js, OpenTelemetry, SQLite",
        desc_en:
          "Built a local CLI dashboard that captures Claude Code telemetry and visualizes token usage and cost in real time.",
        desc_ko:
          "Claude Code 텔레메트리를 수집하고 토큰 사용량과 비용을 실시간으로 시각화하는 로컬 CLI 대시보드를 만들었습니다.",
        highlights_en: [
          "Captured local telemetry events with OpenTelemetry",
          "Stored usage data in SQLite for repeatable analysis",
          "Presented token and cost data in a real-time CLI dashboard",
        ],
        highlights_ko: [
          "OpenTelemetry로 로컬 텔레메트리 이벤트를 수집했습니다",
          "반복 분석을 위해 사용량 데이터를 SQLite에 저장했습니다",
          "토큰과 비용 데이터를 실시간 CLI 대시보드로 표시했습니다",
        ],
        outcome_en:
          "Created a focused developer tool for understanding AI coding-tool usage.",
        outcome_ko:
          "AI 코딩 도구 사용량을 이해하기 위한 개발자 도구를 만들었습니다.",
        year: "2026",
      },
    ],
  },
  design: {
    title_en: "Silent Mountain",
    title_ko: "고요한 산",
    role_en: "UI/UX Design",
    role_ko: "UI/UX 디자인",
    desc_en:
      "I design with implementation in mind. My UI work starts from user flow, information hierarchy, and realistic interaction patterns, so the final design is not only visually coherent but also practical to build.",
    desc_ko:
      "구현 가능성을 생각하며 디자인합니다. 사용자 흐름, 정보 구조, 현실적인 상호작용 패턴에서 출발해 시각적으로 일관될 뿐 아니라 실제로 만들기 좋은 UI를 설계합니다.",
    color: "#064e3b",
    previewImage: "/assets/biomes/design-mountain.jpg",
    projects: [
      {
        title: "TRIZolve",
        title_ko: "TRIZolve",
        subtitle_en: "Patent-based idea search service",
        subtitle_ko: "특허 기반 아이디어 탐색 서비스",
        role: "Frontend Developer / UI Designer",
        role_ko: "프론트엔드 개발자 / UI 디자이너",
        tech: "Figma, React, Patent Data APIs",
        desc_en:
          "A web product that helps users discover solution ideas by surfacing relevant patents across different domains.",
        desc_ko:
          "다른 분야의 관련 특허를 찾아 사용자가 해결 아이디어를 발견하도록 돕는 웹 제품입니다.",
        highlights_en: [
          "Designed and built the frontend for a patent-based idea search workflow",
          "Helped translate dense technical information into a usable interface",
          "Marked the point where frontend became my main technical interest",
        ],
        highlights_ko: [
          "특허 기반 아이디어 탐색 흐름의 프론트엔드를 설계하고 구현했습니다",
          "밀도 높은 기술 정보를 사용 가능한 인터페이스로 풀어냈습니다",
          "프론트엔드가 주요 기술 관심사가 되는 계기가 된 프로젝트입니다",
        ],
        outcome_en:
          "Turned complex patent search results into a clearer comparison and ideation flow.",
        outcome_ko:
          "복잡한 특허 검색 결과를 더 명확한 비교와 아이디어 탐색 흐름으로 구성했습니다.",
        year: "2024",
      },
      {
        title: "LMS Admin UX/UI Improvement",
        title_ko: "LMS 관리자 UX/UI 개선",
        subtitle_en: "Course-creation workflow redesign",
        subtitle_ko: "강의 생성 워크플로 개선",
        role: "PM / UX Designer",
        role_ko: "PM / UX 디자이너",
        tech: "Figma, Lovable",
        desc_en:
          "Redesigned the course-creation flow for an LMS admin interface by adding a visible progress bar, recent-course tracking, and clearer task visibility.",
        desc_ko:
          "진행률 표시, 최근 강의 추적, 더 명확한 작업 상태 노출을 추가해 LMS 관리자 강의 생성 흐름을 개선했습니다.",
        highlights_en: [
          "Identified the core workflow problem in course creation",
          "Designed progress tracking and unfinished-task guidance",
          "Used Lovable to prototype the improved experience",
        ],
        highlights_ko: [
          "강의 생성 과정의 핵심 워크플로 문제를 정의했습니다",
          "진행률 추적과 미완료 작업 안내를 설계했습니다",
          "Lovable로 개선된 경험을 프로토타이핑했습니다",
        ],
        outcome_en: "Received 80% positive feedback from actual users.",
        outcome_ko: "실제 사용자로부터 80%의 긍정 피드백을 받았습니다.",
        year: "2025",
      },
      {
        title: "Family Communication App",
        title_ko: "가족 소통 앱",
        subtitle_en: "Low-friction check-in app concept",
        subtitle_ko: "부담 없는 가족 체크인 앱 콘셉트",
        role: "PM / UI Designer",
        role_ko: "PM / UI 디자이너",
        tech: "Figma",
        desc_en:
          "Designed a family communication app inspired by lightweight social interactions and low-pressure status sharing.",
        desc_ko:
          "가벼운 소셜 상호작용과 부담 없는 상태 공유에서 영감을 받아 가족 소통 앱을 설계했습니다.",
        highlights_en: [
          "Focused on small, low-pressure ways for family members to stay connected",
          "Designed around check-ins rather than long conversations",
          "Explored product planning and UI direction from the concept stage",
        ],
        highlights_ko: [
          "가족이 부담 없이 연결될 수 있는 작은 상호작용에 집중했습니다",
          "긴 대화보다 짧은 체크인을 중심으로 설계했습니다",
          "콘셉트 단계부터 제품 기획과 UI 방향을 탐색했습니다",
        ],
        outcome_en:
          "Created a lightweight communication concept focused on frequent, gentle interaction.",
        outcome_ko:
          "자주, 부드럽게 이어지는 상호작용에 초점을 둔 소통 콘셉트를 만들었습니다.",
        year: "2023",
      },
    ],
  },
  pm: {
    title_en: "Nebula Core",
    title_ko: "네뷸라 코어",
    role_en: "Project Management",
    role_ko: "프로젝트 관리",
    desc_en:
      "I often help turn vague ideas into executable plans. That means clarifying goals, writing specifications, breaking work into smaller tasks, leading meetings, and keeping collaboration organized across design and development.",
    desc_ko:
      "모호한 아이디어를 실행 가능한 계획으로 바꾸는 일을 자주 맡습니다. 목표를 명확히 하고, 명세를 작성하고, 일을 작은 단위로 나누며, 회의를 이끌고 디자인과 개발 사이의 협업을 정리합니다.",
    color: "#be123c",
    previewImage: "/assets/biomes/pm-nebula.jpg",
    projects: [
      {
        title: "NE:XT Contest Project Management App",
        title_ko: "NE:XT 공모전 프로젝트 관리 앱",
        subtitle_en: "Gamified project-management app",
        subtitle_ko: "게이미피케이션 프로젝트 관리 앱",
        role: "Project Manager & UI/UX Designer",
        role_ko: "프로젝트 매니저 & UI/UX 디자이너",
        tech: "Figma, Blender, Functional Specifications, Change Requests",
        desc_en:
          "Led a 5-member team as PM and designer for a gamified project management app that breaks large goals into smaller tasks and rewards completion with character customization.",
        desc_ko:
          "큰 목표를 작은 작업으로 나누고 완료 보상을 캐릭터 커스터마이징으로 연결하는 프로젝트 관리 앱을 5인 팀의 PM이자 디자이너로 이끌었습니다.",
        highlights_en: [
          "Clarified product goals and wrote functional specifications",
          "Managed change requests and team coordination",
          "Designed a gamified flow that connects tasks, progress, and rewards",
        ],
        highlights_ko: [
          "제품 목표를 명확히 하고 기능 명세를 작성했습니다",
          "변경 요청과 팀 협업 흐름을 관리했습니다",
          "작업, 진행 상황, 보상이 연결되는 게이미피케이션 흐름을 설계했습니다",
        ],
        outcome_en: "Led the team to 3rd place in the NE:XT contest.",
        outcome_ko: "NE:XT 공모전에서 팀의 3위 수상을 이끌었습니다.",
        year: "2025",
      },
      {
        title: "GDSC KU",
        title_ko: "GDSC KU",
        subtitle_en: "Developer community operations and project support",
        subtitle_ko: "개발자 커뮤니티 운영과 프로젝트 지원",
        role: "DevRel, Frontend Crew, Club Accountant",
        role_ko: "DevRel, 프론트엔드 크루, 회계",
        tech: "Community Planning, Budget Management, Event Coordination",
        desc_en:
          "Planned club activities, managed budgets, and supported developer community programs while building project experience.",
        desc_ko:
          "프로젝트 경험을 쌓으며 동아리 활동을 기획하고 예산을 관리하며 개발자 커뮤니티 프로그램을 지원했습니다.",
        highlights_en: [
          "Supported event planning and community programs",
          "Managed club budget responsibilities",
          "Collaborated across development, operations, and member engagement",
        ],
        highlights_ko: [
          "행사 기획과 커뮤니티 프로그램 운영을 지원했습니다",
          "동아리 예산 관리 업무를 맡았습니다",
          "개발, 운영, 멤버 참여 활동을 오가며 협업했습니다",
        ],
        outcome_en:
          "Built collaboration experience across community operations and development projects.",
        outcome_ko:
          "커뮤니티 운영과 개발 프로젝트를 오가며 협업 경험을 쌓았습니다.",
        year: "2022-2024",
      },
      {
        title: "Student Council, College of Informatics",
        title_ko: "정보대학 학생회",
        subtitle_en: "Accounting, event planning, and content operations",
        subtitle_ko: "회계, 행사 기획, 콘텐츠 운영",
        role: "Accountant & Project Planner",
        role_ko: "회계 & 프로젝트 기획",
        tech: "Budgeting, Event Planning, Social Content Operations",
        desc_en:
          "Managed departmental accounting and organized student engagement campaigns, including monthly event-calendar content.",
        desc_ko:
          "학과 회계를 관리하고 월간 행사 캘린더 콘텐츠를 포함한 학생 참여 캠페인을 운영했습니다.",
        highlights_en: [
          "Handled accounting for student council operations",
          "Planned student engagement events and campaigns",
          "Operated recurring social content for monthly event visibility",
        ],
        highlights_ko: [
          "학생회 운영을 위한 회계 업무를 담당했습니다",
          "학생 참여 행사와 캠페인을 기획했습니다",
          "월간 행사 노출을 위한 정기 소셜 콘텐츠를 운영했습니다",
        ],
        outcome_en:
          "Strengthened planning and accountability habits before moving deeper into product work.",
        outcome_ko:
          "제품 작업으로 깊이 들어가기 전 기획과 책임감의 기본기를 쌓았습니다.",
        year: "2021",
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

export function getProjectSubtitle(
  project: BiomeProject,
  language: Language,
): string | undefined {
  return language === "en" ? project.subtitle_en : project.subtitle_ko;
}

export function getProjectHighlights(
  project: BiomeProject,
  language: Language,
): string[] {
  return language === "en"
    ? (project.highlights_en ?? [])
    : (project.highlights_ko ?? []);
}

export function getProjectOutcome(
  project: BiomeProject,
  language: Language,
): string | undefined {
  return language === "en" ? project.outcome_en : project.outcome_ko;
}
