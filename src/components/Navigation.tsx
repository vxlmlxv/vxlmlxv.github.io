import { translations } from "../lib/data/translations";
import type { Language } from "../lib/types";
import LanguageToggle from "./ui/LanguageToggle";

interface NavigationProps {
  language: Language;
  onBackToHome: () => void;
  onNavigate: (id: "about" | "biomes" | "contact") => void;
  onToggleLanguage: () => void;
}

export default function Navigation({
  language,
  onBackToHome,
  onNavigate,
  onToggleLanguage,
}: NavigationProps) {
  const copy = translations[language];

  return (
    <nav className="fixed top-0 z-[200] flex w-full items-center justify-between p-8 text-white mix-blend-difference">
      <div className="flex items-center gap-6">
        <div
          className="hoverable cursor-pointer text-sm font-bold uppercase tracking-widest"
          onClick={onBackToHome}
        >
          Dev.Portfolio
        </div>
        <LanguageToggle
          language={language}
          onToggleLanguage={onToggleLanguage}
        />
      </div>

      <div className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("about");
          }}
          className="hoverable transition-colors hover:text-purple-300"
          data-i18n="nav_manifesto"
        >
          {copy.nav_manifesto}
        </a>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("biomes");
          }}
          className="hoverable transition-colors hover:text-purple-300"
          data-i18n="nav_biomes"
        >
          {copy.nav_biomes}
        </a>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("contact");
          }}
          className="hoverable transition-colors hover:text-purple-300"
          data-i18n="nav_connect"
        >
          {copy.nav_connect}
        </a>
      </div>

      <div className="hoverable text-2xl md:hidden">☰</div>
    </nav>
  );
}
