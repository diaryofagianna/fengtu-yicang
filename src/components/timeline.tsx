import { eraFilters, timeline, type Era } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useMuseum } from "@/lib/museum-store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { T } from "./text";

export function Timeline() {
  const { lang } = useMuseum();
  const [era, setEra] = useState<Era>("all");
  const items = useMemo(() => timeline.filter((item) => era === "all" || item.era === era), [era]);
  const [index, setIndex] = useState(0);
  const safe = Math.min(index, Math.max(items.length - 1, 0));
  const event = items[safe];

  const chooseEra = (next: Era) => {
    setEra(next);
    setIndex(0);
  };

  return (
    <section id="lich-su" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">02 · 历史长卷</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Dòng thời gian 1817–2026" zh="历史长卷" block />
      </h2>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {eraFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={era === item.id}
            onClick={() => chooseEra(item.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-3 text-sm",
              era === item.id ? "border-cinnabar bg-cinnabar text-paper" : "border-line/50",
            )}
          >
            {lang === "zh" ? item.zh : item.vi}
          </button>
        ))}
      </div>

      {event && (
        <div className="mt-6 grid gap-6 lg:grid-cols-[16rem_1fr]">
          <ol className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {items.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === safe}
                  className={cn(
                    "min-h-11 w-full rounded-xl border px-3 py-2 text-left",
                    i === safe ? "border-cinnabar bg-cinnabar/10" : "border-line/40",
                  )}
                >
                  <span className="font-mono text-xs text-cinnabar">{item.year}</span>
                  <span className="mt-0.5 block text-sm">
                    <T vi={item.title.vi} zh={item.title.zh} />
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <article className="rounded-2xl border border-line/50 bg-paper-alt/50 p-5 sm:p-7">
            <p className="font-mono text-xs tracking-widest text-celadon uppercase">{event.year}</p>
            <h3 className="mt-2 font-display text-3xl">
              <T vi={event.title.vi} zh={event.title.zh} block />
            </h3>
            <p className="mt-4">
              <T vi={event.summary.vi} zh={event.summary.zh} block />
            </p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line/40 p-3">
                <dt className="font-mono text-xs text-ink/55">
                  <T vi="Nhân vật & cộng đồng" zh="人物与社区" />
                </dt>
                <dd className="mt-1">
                  <T vi={event.people.vi} zh={event.people.zh} block />
                </dd>
              </div>
              <div className="rounded-xl border border-line/40 p-3">
                <dt className="font-mono text-xs text-ink/55">
                  <T vi="Ý nghĩa với nghĩa thương" zh="对义仓功能的意义" />
                </dt>
                <dd className="mt-1">
                  <T vi={event.meaning.vi} zh={event.meaning.zh} block />
                </dd>
              </div>
            </dl>
            <p className="mt-4 font-mono text-xs text-ink/60">
              <T vi="Nguồn kiểm chứng" zh="核证来源" />: {event.source}
            </p>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                disabled={safe === 0}
                onClick={() => setIndex((n) => Math.max(0, n - 1))}
                className="inline-flex min-h-11 items-center gap-1 rounded-full border border-line/60 px-4 disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
                <T vi="Sự kiện trước" zh="上一事件" />
              </button>
              <button
                type="button"
                disabled={safe >= items.length - 1}
                onClick={() => setIndex((n) => Math.min(items.length - 1, n + 1))}
                className="inline-flex min-h-11 items-center gap-1 rounded-full border border-line/60 px-4 disabled:opacity-40"
              >
                <T vi="Sự kiện tiếp" zh="下一事件" />
                <ChevronRight className="size-4" />
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
