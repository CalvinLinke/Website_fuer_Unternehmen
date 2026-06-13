'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'de' | 'en';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx>({ lang: 'de', setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('de');

  useEffect(() => {
    const stored = localStorage.getItem('wfu-lang') as Lang | null;
    if (stored === 'en') setLangState('en');
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('wfu-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
