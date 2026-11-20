import { chapters } from "@/data/museum";
import { cn } from "@/lib/cn";
import { MuseumProvider, useMuseum, type Lang } from "@/lib/museum-store";
import { BookOpen, Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { T } from "./text";

const langs: { id: Lang; label: string }[] = [
  { id: "both", label: "越·中" },
  { id: "vi", label: "Việt" },
  { id: "zh", label: "中文" },
];

function Chrome({ children }: { children: ReactNode }) {
  const { lang, setLang, dark, toggleDark, visited } = useMuseum();
  return (
    <div className="sheet-outer">
      <div className="production-sheet">
        <div className="grain" aria-hidden />
        <header className="sticky top-0 z-30 border-b border-line/40 bg-paper/95 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <a href="#gioi-thieu" className="min-w-0">
              <p className="font-mono text-xs tracking-widest text-celadon uppercase">The Living Heritage of Grain</p>
              <p className="truncate font-display text-xl leading-none text-ink sm:text-2xl">丰图义仓</p>
            </a>
            <div className="flex shrink-0 items-center gap-2">
              <p className="hidden font-mono text-xs text-ink/70 sm:block">
                {visited.length}/8
              </p>
              <div className="flex rounded-full border border-line/60 p-0.5" role="group" aria-label={lang === "zh" ? "语言" : "Chế độ ngôn ngữ"}>
                {langs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLang(item.id)}
                    className={cn(
                      "min-h-11 rounded-full px-2.5 text-sm",
                      lang === item.id ? "bg-cinnabar text-paper" : "text-ink/80",
                    )}
                    aria-pressed={lang === item.id}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleDark}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line/60"
                aria-label={dark ? "Chuyển sang giao diện giấy sáng" : "Chuyển sang giao diện mực đêm"}
              >
                {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
            </div>
          </div>
          <nav aria-label="Điều hướng chính" className="flex gap-1 overflow-x-auto px-3 pb-2 sm:px-5">
            {chapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="shrink-0 rounded-full border border-transparent px-2.5 py-2 font-mono text-xs tracking-wide text-ink/80 hover:border-cinnabar/50 hover:text-ink"
              >
                <span className="text-cinnabar">{chapter.no}</span> {lang === "zh" ? chapter.zh : chapter.vi}
              </a>
            ))}
          </nav>
        </header>
        <main className="relative z-10">{children}</main>
        <footer className="relative z-10 border-t border-line/40 px-4 py-8 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-2xl">丰图义仓</p>
              <p className="mt-1 max-w-xl text-ink/75">
                <T
                  vi="Khởi dựng 1882 · bảo tàng di sản sống (cập nhật 2023–2026) · biên soạn theo chuẩn UNESCO & ICOMOS."
                  zh="始建于1882 · 活态遗产博物馆（2023–2026年更新）· 依UNESCO与ICOMOS准则编纂。"
                />
              </p>
            </div>
            <a href="#gioi-thieu" className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-cinnabar">
              <BookOpen className="size-4" />
              <T vi="Về đầu trang" zh="返回页首" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <MuseumProvider>
      <Chrome>{children}</Chrome>
    </MuseumProvider>
  );
}
