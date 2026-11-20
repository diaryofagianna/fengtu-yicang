import { layers, stops, type LayerId } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useMuseum } from "@/lib/museum-store";
import { Check, MapPin, Volume2, VolumeX } from "lucide-react";
import { useMemo, useState } from "react";
import { T } from "./text";

export function SiteMap() {
  const { visited, toggleVisited, speaking, speak, stopSpeak, lang } = useMuseum();
  const [activeLayers, setActiveLayers] = useState<LayerId[]>(layers.map((layer) => layer.id));
  const [selected, setSelected] = useState(stops[0].id);
  const stop = stops.find((item) => item.id === selected) ?? stops[0];
  const layer = layers.find((item) => item.id === stop.layerId);

  const visible = useMemo(
    () => stops.filter((item) => activeLayers.includes(item.layerId)),
    [activeLayers],
  );

  const toggleLayer = (id: LayerId) => {
    setActiveLayers((prev) => {
      if (prev.includes(id) && prev.length === 1) return prev;
      return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
    });
  };

  return (
    <section id="di-tich" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">01 · 全景探索</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Bản đồ di tích tương tác" zh="全景探索" block />
      </h2>
      <p className="mt-3 max-w-3xl text-ink/80">
        <T
          vi="Sáu lớp cấu trúc và tám điểm dừng. Đây là sơ đồ minh họa định hướng, chưa thay bản vẽ đo đạc chính thức."
          zh="六层结构与八个停留点。此为空间导览示意图，非正式测绘总图。"
          block
        />
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-11 rounded-full border border-ink/20 px-3 text-sm"
          onClick={() => setActiveLayers(layers.map((item) => item.id))}
        >
          <T vi="Hiện tất cả" zh="全部显示" />
        </button>
        {layers.map((item) => {
          const on = activeLayers.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggleLayer(item.id)}
              className={cn(
                "min-h-11 rounded-full border px-3 text-sm",
                on ? "border-cinnabar bg-cinnabar/10 text-ink" : "border-line/50 text-ink/55",
              )}
            >
              <span className="font-mono text-xs">{item.code}</span>{" "}
              <T vi={item.name.vi} zh={item.name.zh} />
            </button>
          );
        })}
      </div>
      <p className="mt-2 font-mono text-xs text-ink/60">
        {activeLayers.length}/6 <T vi="lớp đang hiển thị" zh="层显示中" />
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line/50 bg-paper-alt sm:aspect-[16/11]"
            role="group"
            aria-label={lang === "zh" ? "仓城平面示意" : "Sơ đồ mặt bằng minh họa"}
          >
            <p className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-xs text-celadon">
              <T vi="Bắc · cao nguyên hoàng thổ" zh="北 / 黄土高塬" />
            </p>
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-xs text-cinnabar">
              <T vi="Nam · Chu Tước Môn" zh="南 / 朱雀正门" />
            </p>
            {activeLayers.includes("moat") && (
              <div className="absolute inset-4 rounded-[2rem] border-2 border-dashed border-celadon/70" />
            )}
            {activeLayers.includes("outer-fortress") && (
              <div className="absolute inset-[9%] rounded-xl border-2 border-gold/70" />
            )}
            {activeLayers.includes("inner-wall") && (
              <div className="absolute inset-[18%] border-4 border-ink/70 bg-paper" />
            )}
            {activeLayers.includes("vaults") && (
              <>
                <div className="absolute top-[22%] right-[22%] left-[22%] h-3 bg-cinnabar/25" />
                <div className="absolute right-[22%] bottom-[22%] left-[22%] h-3 bg-cinnabar/25" />
                <div className="absolute top-[22%] bottom-[22%] left-[18%] w-3 bg-cinnabar/25" />
                <div className="absolute top-[22%] right-[18%] bottom-[22%] w-3 bg-cinnabar/25" />
              </>
            )}
            {activeLayers.includes("courtyard") && (
              <div className="absolute inset-[36%] border border-celadon bg-celadon/10" />
            )}
            {activeLayers.includes("drainage") && (
              <div className="absolute top-1/2 left-[20%] h-px w-[60%] bg-celadon" />
            )}
            {visible.map((item) => {
              const on = item.id === stop.id;
              const seen = visited.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item.id)}
                  className={cn(
                    "absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 font-mono text-xs",
                    on ? "z-10 border-paper bg-cinnabar text-paper" : "border-ink/30 bg-paper text-ink",
                  )}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  aria-pressed={on}
                  aria-label={`${item.code} ${lang === "zh" ? item.name.zh : item.name.vi}`}
                >
                  {seen ? <Check className="size-4" /> : item.code}
                </button>
              );
            })}
          </div>
        </div>

        <article className="rounded-2xl border border-line/50 bg-paper-alt/60 p-4 sm:p-6">
          <p className="font-mono text-xs text-celadon">
            <T vi={`Điểm ${stop.code}`} zh={`点 ${stop.code}`} /> · {layer?.code}
          </p>
          <h3 className="mt-1 font-display text-2xl">
            <T vi={stop.name.vi} zh={stop.name.zh} block />
          </h3>
          <p className="mt-1 text-sm text-cinnabar">
            <T vi={stop.subtitle.vi} zh={stop.subtitle.zh} block />
          </p>
          <p className="mt-4">
            <T vi={stop.summary.vi} zh={stop.summary.zh} block />
          </p>
          <p className="mt-3 text-ink/80">
            <T vi={stop.detail.vi} zh={stop.detail.zh} block />
          </p>
          {layer?.note && (
            <p className="mt-3 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm">
              <T vi={layer.note.vi} zh={layer.note.zh} block />
            </p>
          )}
          <p className="mt-3 font-mono text-xs text-ink/60">
            <MapPin className="mr-1 inline size-3" />
            <T vi={stop.look.vi} zh={stop.look.zh} />
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm text-paper"
              onClick={() => (speaking ? stopSpeak() : speak(stop.audio.vi, stop.audio.zh))}
            >
              {speaking ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              <T vi={speaking ? "Dừng đọc" : "Nghe thuyết minh"} zh={speaking ? "停止" : "听讲解"} />
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cinnabar/50 px-4 text-sm"
              onClick={() => toggleVisited(stop.id)}
              aria-pressed={visited.includes(stop.id)}
            >
              <Check className="size-4" />
              <T
                vi={visited.includes(stop.id) ? "Đã ghé thăm" : "Đánh dấu đã thăm"}
                zh={visited.includes(stop.id) ? "已参观" : "标记已参观"}
              />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
