import { translations } from "../lib/data/translations";
import type { Language } from "../lib/types";

interface ContactSectionProps {
  language: Language;
  clock: string;
}

export default function ContactSection({
  language,
  clock,
}: ContactSectionProps) {
  const copy = translations[language];

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
          {copy.contact_subtitle}
        </p>
        <h2 className="font-serif mb-12 text-6xl md:text-8xl">
          <span data-i18n="contact_title">{copy.contact_title}</span> <br />
          <span
            className="hoverable cursor-pointer text-gray-500 italic transition-colors duration-500 hover:text-white"
            data-i18n="contact_link"
          >
            {copy.contact_link}
          </span>
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <a
            href="mailto:hello@world.com"
            className="hoverable border-b border-white/30 pb-2 text-lg transition-colors hover:border-white"
          >
            hello@world.dev
          </a>
          <a
            href="#"
            className="hoverable border-b border-white/30 pb-2 text-lg transition-colors hover:border-white"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hoverable border-b border-white/30 pb-2 text-lg transition-colors hover:border-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="absolute right-6 bottom-8 left-6 flex justify-between text-xs uppercase tracking-widest text-gray-600 md:right-24 md:left-24">
        <div>© 2024 Hello World</div>
        <div>
          Local Time: <span id="clock">{clock}</span>
        </div>
      </footer>
    </section>
  );
}
