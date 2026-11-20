import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "both" | "vi" | "zh";

type State = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dark: boolean;
  toggleDark: () => void;
  visited: string[];
  toggleVisited: (id: string) => void;
  resetVisited: () => void;
  speaking: boolean;
  speak: (vi: string, zh: string) => void;
  stopSpeak: () => void;
};

const Ctx = createContext<State | null>(null);
const VISIT_KEY = "fengtu-visited";
const LANG_KEY = "fengtu-lang";
const THEME_KEY = "fengtu-theme";

export function MuseumProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("both");
  const [dark, setDark] = useState(false);
  const [visited, setVisited] = useState<string[]>([]);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    try {
      const storedLang = localStorage.getItem(LANG_KEY);
      if (storedLang === "vi" || storedLang === "zh" || storedLang === "both") setLangState(storedLang);
      const storedTheme = localStorage.getItem(THEME_KEY);
      const isDark = storedTheme === "dark";
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
      const raw = localStorage.getItem(VISIT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) setVisited(parsed.filter((x) => typeof x === "string"));
      }
    } catch {
      /* ignore private mode */
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(LANG_KEY, next);
  };

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
      return next;
    });
  };

  const toggleVisited = (id: string) => {
    setVisited((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(VISIT_KEY, JSON.stringify(next));
      return next;
    });
  };

  const resetVisited = () => {
    setVisited([]);
    localStorage.removeItem(VISIT_KEY);
  };

  const stopSpeak = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  const speak = (vi: string, zh: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const useZh = lang === "zh";
    const utter = new SpeechSynthesisUtterance(useZh ? zh : vi);
    utter.lang = useZh ? "zh-CN" : "vi-VN";
    utter.rate = 0.96;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, dark, toggleDark, visited, toggleVisited, resetVisited, speaking, speak, stopSpeak }}>
      {children}
    </Ctx.Provider>
  );
}

export function useMuseum() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMuseum outside provider");
  return ctx;
}
