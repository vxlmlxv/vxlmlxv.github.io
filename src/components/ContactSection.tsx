import { profileData } from "../lib/data/profile";
import type { Language } from "../lib/types";

interface ContactSectionProps {
  language: Language;
  clock: string;
}

export default function ContactSection({
  language,
  clock,
}: ContactSectionProps) {
  const profile = profileData[language];

  return (
    <section
      id="contact"
      className="relative z-20 flex min-h-screen flex-col justify-center px-6 md:px-24"
    >
      <div className="max-w-4xl">
        <p
          className="mb-8 uppercase tracking-widest text-[var(--theme-accent)]"
          data-i18n="contact_subtitle"
        >
          {profile.contact.subtitle}
        </p>
        <h2 className="font-serif mb-12 text-6xl md:text-8xl">
          <span data-i18n="contact_title">{profile.contact.title}</span> <br />
          <span
            className="hoverable cursor-pointer text-gray-500 italic transition-colors duration-500 hover:text-white"
            data-i18n="contact_link"
          >
            {profile.contact.highlight}
          </span>
        </h2>
        {profile.contact.description ? (
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            {profile.contact.description}
          </p>
        ) : null}
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {profile.contact.links.map((link) => (
            <a
              key={`${link.href}-${link.text}`}
              href={link.href}
              className="hoverable border-b border-white/30 pb-2 text-lg transition-colors hover:border-white"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <footer className="absolute right-6 bottom-8 left-6 flex justify-between text-xs uppercase tracking-widest text-gray-600 md:right-24 md:left-24">
        <div>{profile.footer.copyright}</div>
        <div>
          {profile.footer.timeLabel}: <span id="clock">{clock}</span>
        </div>
      </footer>
    </section>
  );
}
