import { profileData } from "../lib/data/profile";
import type { Language } from "../lib/types";

interface ManifestoSectionProps {
  language: Language;
}

export default function ManifestoSection({
  language,
}: ManifestoSectionProps) {
  const profile = profileData[language];

  return (
    <section
      id="about"
      className="relative z-20 flex min-h-[80vh] items-center px-6 py-20 md:px-24"
    >
      <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2">
        <div className="glass-panel rounded-lg p-8 md:p-12">
          <h2
            className="mb-6 text-xs uppercase tracking-widest text-[var(--theme-accent)]"
            data-i18n="about_subtitle"
          >
            {profile.about.subtitle}
          </h2>
          <h3 className="font-serif mb-6 text-3xl leading-tight md:text-4xl">
            <span data-i18n="about_title1">{profile.about.titleLine1}</span>
            <br />
            <span data-i18n="about_title2">{profile.about.titleLine2}</span>
            <span
              className="font-serif italic text-[var(--theme-accent-soft)]"
              data-i18n="about_title3"
            >
              {profile.about.titleHighlight}
            </span>
            .
          </h3>
          <p
            className="mb-6 leading-relaxed font-light text-gray-400"
            data-i18n="about_text1"
          >
            {profile.about.text1}
          </p>
          <p
            className="leading-relaxed font-light text-gray-400"
            data-i18n="about_text2"
            dangerouslySetInnerHTML={{ __html: profile.about.text2 }}
          />
        </div>
        <div className="flex flex-col justify-center text-right">
          {profile.stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-item mb-12 opacity-50 transition-opacity hover:opacity-100"
            >
              <span className="font-serif mb-2 block text-5xl md:text-6xl">
                {stat.value}
              </span>
              <span
                className="text-sm uppercase tracking-widest"
                data-i18n={stat.id}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
