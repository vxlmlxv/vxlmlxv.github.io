import { translations } from "../../lib/data/translations";
import type { Language } from "../../lib/types";

interface HeroSectionProps {
  language: Language;
  onScrollToAbout: () => void;
}

export default function HeroSection({
  language,
  onScrollToAbout,
}: HeroSectionProps) {
  const copy = translations[language];

  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-24">
      <div className="hero-content">
        <p
          className="fade-in-up ml-1 mb-4 text-sm uppercase tracking-[0.3em] text-purple-300 opacity-0 md:text-base"
          data-i18n="hero_role"
        >
          {copy.hero_role}
        </p>
        <h1 className="font-serif text-6xl leading-[0.9] text-[#e8e6d9] md:text-9xl">
          <span className="hero-line">
            <span data-i18n="hero_hello">{copy.hero_hello}</span>
          </span>
          <span className="hero-line">
            <span
              className="font-serif italic text-purple-200"
              data-i18n="hero_name"
            >
              {copy.hero_name}
            </span>
          </span>
        </h1>
        <div className="fade-in-up delay-300 mt-12 flex flex-col gap-8 opacity-0 md:flex-row md:items-end">
          <div
            className="max-w-md text-sm leading-relaxed font-light text-gray-400 md:text-lg"
            data-i18n="hero_desc"
            dangerouslySetInnerHTML={{ __html: copy.hero_desc }}
          />
          <div
            className="hoverable group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20"
            onClick={onScrollToAbout}
          >
            <span className="transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
