import { DESIGN_TONS, RECORDED_2021, VAULTS } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { T } from "./text";

export function Explorer() {
  const [vault, setVault] = useState(1);
  const [count, setCount] = useState(1);
  const share = useMemo(() => Math.round((DESIGN_TONS / VAULTS) * count), [count]);

  return (
    <section id="gian-kho" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">04 · 五十八孔仓窑</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Khám phá 58 gian kho" zh="五十八孔仓廒" block />
      </h2>
      <p className="mt-3 max-w-3xl text-ink/75">
        <T
          vi="Chọn số 01–58 chỉ để minh họa thao tác. Trang không gán số đo riêng cho từng gian."
          zh="选择01–58仅演示检索动作，不为单廒编造实测。"
          block
        />
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-10" role="listbox" aria-label="Chọn gian kho 01 đến 58">
            {Array.from({ length: VAULTS }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                role="option"
                aria-selected={n === vault}
                onClick={() => setVault(n)}
                className={cn(
                  "min-h-11 rounded-lg border font-mono text-xs",
                  n === vault ? "border-cinnabar bg-cinnabar text-paper" : "border-line/40 bg-paper",
                )}
              >
                {String(n).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
        <article className="rounded-2xl border border-line/50 p-5">
          <p className="font-mono text-xs text-gold">
            <T vi="Dữ liệu xác minh toàn khu" zh="全区核证数据" />
          </p>
          <h3 className="mt-1 font-display text-3xl tabular-nums">
            {String(vault).padStart(2, "0")}
            <span className="text-lg text-ink/60"> / {VAULTS}</span>
          </h3>
          <p className="mt-3 text-sm">
            <T
              vi={`Ghi chú xác thực: số ${vault}/58 chỉ minh họa thao tác chọn; không suy diễn kích thước hay tình trạng riêng ngoài thực địa.`}
              zh={`真实性说明：${vault}/58号仅演示选择，不推断单廒尺寸或现场状况。`}
              block
            />
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex justify-between gap-3 border-b border-line/30 py-2">
              <T vi="Sức chứa thiết kế toàn khu" zh="全区设计储量" />
              <span className="font-mono">~{DESIGN_TONS.toLocaleString("vi-VN")} t</span>
            </li>
            <li className="flex justify-between gap-3 border-b border-line/30 py-2">
              <T vi="Ghi nhận 2021" zh="2021年在储" />
              <span className="font-mono">{RECORDED_2021.toLocaleString("vi-VN")} t</span>
            </li>
            <li className="flex justify-between gap-3 border-b border-line/30 py-2">
              <T vi="Trung bình thiết kế / gian" zh="设计均值 / 廒" />
              <span className="font-mono">~{Math.round(DESIGN_TONS / VAULTS)} t</span>
            </li>
            <li className="flex justify-between gap-3 py-2">
              <T vi="Từ 2023" zh="2023年起" />
              <span className="text-right">
                <T vi="Ngừng dự trữ trung ương" zh="退出央储" />
              </span>
            </li>
          </ul>
          <label className="mt-4 block text-sm">
            <T vi="Số gian để minh họa tỷ lệ sức chứa" zh="用于示意储量占比的廒数" /> · {count}
            <input
              className="mt-2 w-full accent-cinnabar"
              type="range"
              min={1}
              max={VAULTS}
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
            />
          </label>
          <p className="mt-2 font-mono text-sm">
            {count}/{VAULTS} · ~{share.toLocaleString("vi-VN")} t
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper-alt">
            <div className="h-full bg-celadon" style={{ width: `${(count / VAULTS) * 100}%` }} />
          </div>
          <p className="mt-2 text-xs text-ink/60">
            <T
              vi="Ước tính theo trung bình thiết kế (~5.220 tấn / 58 kho), không phải số đo từng hầm."
              zh="按设计总量均值估算（约5220吨 / 58廒），并非单廒实测。"
            />
          </p>
        </article>
      </div>
    </section>
  );
}
