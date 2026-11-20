import { cutLayers, pillars } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { T } from "./text";

const presets = [
  { id: "dry", vi: "Mùa khô Quan Trung", zh: "关中干季", rh: 38, rain: 0 },
  { id: "july", vi: "Mưa dầm tháng 7", zh: "七月连阴雨", rh: 78, rain: 18 },
  { id: "storm", vi: "Mưa bão vùng sông", zh: "沿河暴雨", rh: 92, rain: 60 },
] as const;

export function Architecture() {
  const [on, setOn] = useState<string[]>(cutLayers.map((layer) => layer.id));
  const [preset, setPreset] = useState<string>("july");
  const [rh, setRh] = useState(78);
  const [rain, setRain] = useState(18);

  const apply = (id: (typeof presets)[number]["id"]) => {
    const found = presets.find((item) => item.id === id);
    if (!found) return;
    setPreset(id);
    setRh(found.rh);
    setRain(found.rain);
  };

  const model = useMemo(() => {
    const roof = on.includes("roof") ? 0.82 : 1;
    const wall = on.includes("wall") ? 0.88 : 1;
    const floor = on.includes("floor") ? 0.8 : 1;
    const drain = on.includes("drain") ? 1 : 1 + rain * 0.004;
    const indoor = Math.min(98, Math.round(rh * roof * wall * floor * drain));
    const drop = Math.max(0, rh - indoor);
    const buffer = (on.includes("wall") ? 4 : 1) + (on.includes("roof") ? 3 : 0) + (on.includes("floor") ? 2 : 0);
    const label =
      indoor < 60
        ? { vi: "Khô ráo tối ưu (mô hình)", zh: "尚属干爽（示意模型）" }
        : indoor < 75
          ? { vi: "Ổn định (mô hình)", zh: "尚属平稳（示意模型）" }
          : { vi: "Độ ẩm cao (mô hình)", zh: "潮气偏高（示意模型）" };
    return { indoor, drop, buffer, label };
  }, [on, rh, rain]);

  const chart = [
    { name: "Ngoài", value: rh },
    { name: "Trong", value: model.indoor },
  ];

  return (
    <section id="kien-truc" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">03 · 建筑智慧</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Năm trụ cột kỹ thuật" zh="五项营造智慧" block />
      </h2>
      <p className="mt-3 max-w-3xl text-ink/75">
        <T
          vi="Tổng hợp năm chủ đề kỹ thuật đời Thanh. Bộ mô phỏng bên dưới là mô hình giáo dục, không phải đo đạc trực tiếp."
          zh="综合清代五项营造主题。下方气候模拟为教学示意，并非现场实测。"
          block
        />
      </p>
      <ol className="mt-6 grid gap-3 md:grid-cols-2">
        {pillars.map((item) => (
          <li key={item.code} className="rounded-2xl border border-line/45 p-4">
            <p className="font-mono text-xs text-cinnabar">{item.code}</p>
            <h3 className="mt-1 font-display text-xl">
              <T vi={item.title.vi} zh={item.title.zh} block />
            </h3>
            <p className="mt-2 text-ink/85">
              <T vi={item.body.vi} zh={item.body.zh} block />
            </p>
            <p className="mt-2 font-mono text-xs text-ink/50">{item.source}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs text-celadon">
            <T vi="Mặt cắt minh họa · nhấn lớp để bật/tắt" zh="剖面示意 · 点选图层" />
          </p>
          <div className="mt-3 space-y-2" aria-label="Sơ đồ mặt cắt bốn lớp chống ẩm">
            {cutLayers.map((layer) => {
              const active = on.includes(layer.id);
              return (
                <button
                  key={layer.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setOn((prev) => (prev.includes(layer.id) ? prev.filter((id) => id !== layer.id) : [...prev, layer.id]))
                  }
                  className={cn(
                    "flex min-h-11 w-full items-center justify-between rounded-xl border px-3 text-left",
                    active ? "border-celadon bg-celadon/10" : "border-line/30 opacity-50",
                    layer.id === "roof" && active && "h-14",
                    layer.id === "wall" && active && "h-16 bg-ink/10",
                    layer.id === "floor" && active && "border-gold",
                    layer.id === "drain" && active && "border-dashed",
                  )}
                >
                  <T vi={layer.vi} zh={layer.zh} />
                  <span className="font-mono text-xs">{active ? "ON" : "OFF"}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 font-mono text-xs text-ink/55">
            {on.length}/4 <T vi="lớp đang bật" zh="层开启" />
          </p>
        </div>

        <div className="rounded-2xl border border-cinnabar/30 bg-paper-alt/40 p-4 sm:p-5">
          <p className="font-mono text-xs tracking-wide text-cinnabar uppercase">
            <T vi="Mô hình giáo dục · không phải đo đạc" zh="教学示意 · 非直接测量" />
          </p>
          <h3 className="mt-1 font-display text-2xl">
            <T vi="Mô phỏng vi khí hậu trong kho" zh="仓内微气候示意" block />
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {presets.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => apply(item.id)}
                className={cn(
                  "min-h-11 rounded-full border px-3 text-sm",
                  preset === item.id ? "border-ink bg-ink text-paper" : "border-line/50",
                )}
              >
                <T vi={item.vi} zh={item.zh} />
              </button>
            ))}
          </div>
          <label className="mt-4 block text-sm">
            <T vi="Độ ẩm không khí ngoài trời (giả định)" zh="室外空气湿度（假设）" /> · {rh}%
            <input
              className="mt-2 w-full accent-cinnabar"
              type="range"
              min={20}
              max={98}
              value={rh}
              onChange={(event) => {
                setPreset("custom");
                setRh(Number(event.target.value));
              }}
            />
          </label>
          <label className="mt-3 block text-sm">
            <T vi="Lượng mưa ngày (mm giả định)" zh="日降雨（假设毫米）" /> · {rain}
            <input
              className="mt-2 w-full accent-celadon"
              type="range"
              min={0}
              max={80}
              value={rain}
              onChange={(event) => {
                setPreset("custom");
                setRain(Number(event.target.value));
              }}
            />
          </label>
          <div className="mt-4 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chart}>
                <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
                <YAxis domain={[0, 100]} stroke="currentColor" fontSize={12} />
                <Bar dataKey="value" fill="var(--theme-celadon)" radius={6} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <dl className="mt-2 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-paper p-2">
              <dt className="font-mono text-xs text-ink/55">
                <T vi="Ẩm mô phỏng" zh="示意湿度" />
              </dt>
              <dd className="font-display text-2xl">{model.indoor}%</dd>
            </div>
            <div className="rounded-xl bg-paper p-2">
              <dt className="font-mono text-xs text-ink/55">
                <T vi="Mức giảm" zh="相对降幅" />
              </dt>
              <dd className="font-display text-2xl">{model.drop}</dd>
            </div>
            <div className="rounded-xl bg-paper p-2">
              <dt className="font-mono text-xs text-ink/55">
                <T vi="Đệm nhiệt" zh="热缓冲" />
              </dt>
              <dd className="font-display text-2xl">{model.buffer}</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm">
            <T vi={model.label.vi} zh={model.label.zh} />
            {" · "}
            <T vi="Ngưỡng giữ thóc lý thuyết dưới 65% ẩm tương đối." zh="理论储粮阈值为相对湿度65%以下。" />
          </p>
        </div>
      </div>
    </section>
  );
}
