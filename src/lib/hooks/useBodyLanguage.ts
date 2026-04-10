import { useEffect } from "react";

import type { Language } from "../types";

export function useBodyLanguage(language: Language): void {
  useEffect(() => {
    document.body.classList.remove("lang-en", "lang-ko");
    document.body.classList.add(`lang-${language}`);
  }, [language]);
}
