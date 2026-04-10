import type { Language } from "../../lib/types";

interface LanguageToggleProps {
  language: Language;
  onToggleLanguage: () => void;
}

export default function LanguageToggle({
  language,
  onToggleLanguage,
}: LanguageToggleProps) {
  return (
    <button
      id="lang-toggle"
      type="button"
      onClick={onToggleLanguage}
      className="hoverable rounded-full border border-white/30 px-3 py-1 text-xs transition-all hover:bg-white hover:text-black"
    >
      {language === "en" ? "EN" : "KO"}
    </button>
  );
}
