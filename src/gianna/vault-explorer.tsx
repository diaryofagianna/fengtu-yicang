import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

type Bi = { vi: string; zh: string };
type SideId = "south" | "east" | "north" | "west";

const PUBLISHED = {
  length: "9,81–12,63 m",
  width: "3,72–4,2 m",
  height: "2,41–2,85 m",
  volume: "193,5–253,8 m³",
  tons: 90,
  columns: 108,
  city: "133 × 83 m",
};

const SIDES: {
  id: SideId;
  count: number;
  name: Bi;
  look: Bi;
}[] = [
  {
    id: "south",
    count: 12,
    name: { vi: "Mặt nam", zh: "南列" },
    look: {
      vi: "Tường nam mở hai cửa kho, Đông và Tây, với bích chiếu khắc “丰图义仓” nằm giữa. Gian mặt này nhìn vào sân phơi qua hồi lang.",
      zh: "南垣洞开东、西二仓门，门间照壁嵌“丰图义仓”石额。此列廒门朝向晾晒院心，门前即环廊。",
    },
  },
  {
    id: "east",
    count: 14,
    name: { vi: "Mặt đông", zh: "东列" },
    look: {
      vi: "Dãy đông dựa vào tường thành phía vách đất. Mỗi gian vẫn là một vòm gạch riêng, ngăn lửa và ẩm với gian bên cạnh.",
      zh: "东列廒依城墙而筑，外侧即台塬崖壁。各孔仍为独立砖券，厚墙隔火、隔潮。",
    },
  },
  {
    id: "north",
    count: 18,
    name: { vi: "Mặt bắc", zh: "北列" },
    look: {
      vi: "Phía trên mặt thành bắc là từ đường Chu Hy và hai chữ “龙”“虎”. Gian mặt bắc nằm dưới đúng đoạn thành ấy.",
      zh: "北城顶中部为紫阳仓祖朱文公祠，两侧嵌“龙”“虎”刻石。北列仓廒即在这段城墙之下。",
    },
  },
  {
    id: "west",
    count: 14,
    name: { vi: "Mặt tây", zh: "西列" },
    look: {
      vi: "Mặt tây khép vòng kho. Góc tây nam có bậc lên mặt thành — mốc cuối của sơ đồ dẫn đường đặt ngay trước bậc đó.",
      zh: "西列收束仓环。仓院西南角有台阶可登城顶，导览末号即标在该台阶旁。",
    },
  },
];

type Cell = {
  n: number;
  side: SideId;
  indexOnSide: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

function spread(count: number, start: number, span: number, size: number) {
  const gap = (span - size * count) / (count + 1);
  return Array.from({ length: count }, (_, i) => start + gap * (i + 1) + size * i);
}

function buildCells(): Cell[] {
  const ox = 78;
  const oy = 52;
  const iw = 484;
  const ih = 300;
  const t = 16;
  const cells: Cell[] = [];
  const push = (side: SideId, xs: number[], ys: number[], w: number, h: number) => {
    xs.forEach((x, i) => {
      cells.push({
        n: cells.length + 1,
        side,
        indexOnSide: i + 1,
        x,
        y: ys[i] ?? ys[0],
        w,
        h,
      });
    });
  };
  const southX = spread(12, ox + t, iw - t * 2, 22);
  push(
    "south",
    southX,
    southX.map(() => oy + ih - t),
    22,
    t,
  );
  const eastY = spread(14, oy + t, ih - t * 2, 14).reverse();
  push(
    "east",
    eastY.map(() => ox + iw - t),
    eastY,
    t,
    14,
  );
  const northX = spread(18, ox + t, iw - t * 2, 16).reverse();
  push(
    "north",
    northX,
    northX.map(() => oy),
    16,
    t,
  );
  const westY = spread(14, oy + t, ih - t * 2, 14);
  push(
    "west",
    westY.map(() => ox),
    westY,
    t,
    14,
  );
  return cells;
}

const CELLS = buildCells();

function sideOf(n: number) {
  const cell = CELLS.find((c) => c.n === n) ?? CELLS[0];
  const side = SIDES.find((s) => s.id === cell.side) ?? SIDES[0];
  return { cell, side };
}

function line(lang: string, text: Bi, className = "") {
  if (lang === "zh") return <span lang="zh-Hans" className={className}>{text.zh}</span>;
  if (lang === "vi") return <span className={className}>{text.vi}</span>;
  return (
    <span className={className}>
      <span className="block">{text.vi}</span>
      <span lang="zh-Hans" className="mt-1 block text-[0.92em] text-ink/70">{text.zh}</span>
    </span>
  );
}

export function VaultExplorer({ lang }: { lang: string }) {
  const [n, setN] = useState(58);
  const [tab, setTab] = useState<"shell" | "measure" | "look">("shell");
  const gridRef = useRef<HTMLDivElement>(null);
  const zh = lang === "zh";
  const { cell, side } = sideOf(n);
  const code = String(n).padStart(2, "0");
  const specs = useMemo(
    () => [
      { k: { vi: "Sâu", zh: "进深" }, v: PUBLISHED.length },
      { k: { vi: "Rộng", zh: "面阔" }, v: PUBLISHED.width },
      { k: { vi: "Cao", zh: "净高" }, v: PUBLISHED.height },
      { k: { vi: "Thể tích", zh: "容积" }, v: PUBLISHED.volume },
    ],
    [],
  );

  useEffect(() => {
    const root = gridRef.current;
    const el = root?.querySelector<HTMLElement>("[aria-pressed='true']");
    if (!root || !el) return;
    const er = el.getBoundingClientRect();
    const rr = root.getBoundingClientRect();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.scrollTo({
      top: root.scrollTop + er.top - rr.top - root.clientHeight / 2 + er.height / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [n]);

  const tabs: { id: typeof tab; label: Bi }[] = [
    { id: "shell", label: { vi: "Vòm", zh: "券体" } },
    { id: "measure", label: { vi: "Dải số", zh: "尺度" } },
    { id: "look", label: { vi: "Đứng đây", zh: "当场" } },
  ];

  const handleMapCellKeyDown = (event: ReactKeyboardEvent<SVGGElement>, current: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setN(current);
      return;
    }

    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = current === CELLS.length ? 1 : current + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = current === 1 ? CELLS.length : current - 1;
    } else if (event.key === "Home") {
      next = 1;
    } else if (event.key === "End") {
      next = CELLS.length;
    } else {
      return;
    }

    event.preventDefault();
    setN(next);
    window.requestAnimationFrame(() => {
      document.getElementById(`vault-map-cell-${next}`)?.focus();
    });
  };

  const handleTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, current: typeof tab) => {
    const currentIndex = tabs.findIndex((item) => item.id === current);
    let nextIndex: number;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    setTab(nextTab.id);
    window.requestAnimationFrame(() => {
      document.getElementById(`vault-tab-${nextTab.id}`)?.focus();
    });
  };

  return (
    <section id="granaries" className="scroll-mt-24 border-b border-line/27 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-widest text-cinnabar uppercase">
              {zh ? "04 · 五十八孔仓廒详档" : "04. Hồ sơ 58 gian kho · 五十八孔"}
            </p>
            <h2 className="mt-1.5 text-3xl font-bold text-ink sm:text-4xl">
              {zh ? "逐廒导览 · 从 01 走到 58" : "Đi hết vòng kho · từ 01 đến 58"}
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-ink/70">
            {line(lang, {
              vi: "Số trên sơ đồ là thứ tự dẫn đường theo chiều kim đồng hồ, bắt đầu từ mặt nam. Không phải biển số khảo sát treo tại cửa.",
              zh: "图上编号为顺时针导览序号，自南列起算，并非现场门额上的测绘编号。",
            })}
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {SIDES.map((s) => {
            const on = s.id === side.id;
            const from = CELLS.find((c) => c.side === s.id)?.n ?? 1;
            const to = from + s.count - 1;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                onClick={() => setN(from)}
                className={`min-h-11 border px-3 py-2 text-left text-xs ${on ? "border-cinnabar bg-cinnabar font-semibold text-paper" : "border-line/36 bg-paper text-ink/80"}`}
              >
                <span className="block font-mono text-[10px] opacity-75">
                  {String(from).padStart(2, "0")}–{String(to).padStart(2, "0")}
                </span>
                <span className="block">{zh ? s.name.zh : s.name.vi}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="order-2 border border-line/36 bg-paper-alt/40 p-4 sm:p-5 lg:order-1">
            <div className="mb-3 flex items-center justify-between gap-2 text-xs text-ink/70">
              <span>{zh ? "内城平面 · 仓廒环列" : "Mặt bằng thành trong · vòng 58 gian"}</span>
              <span className="font-mono text-cinnabar tabular-nums">{PUBLISHED.city}</span>
            </div>
            <svg viewBox="0 0 640 420" className="w-full border border-line/36 bg-paper text-ink" role="group" aria-label={zh ? "五十八廒环状导览图，可用方向键选择" : "Sơ đồ vòng 58 gian kho; dùng phím mũi tên để chọn"}>
              <rect x="78" y="52" width="484" height="300" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="10" />
              <rect x="108" y="86" width="424" height="232" fill="color-mix(in srgb, var(--theme-celadon) 8%, transparent)" stroke="currentColor" strokeOpacity="0.2" />
              <circle cx="320" cy="202" r="7" fill="none" stroke="var(--theme-celadon)" strokeWidth="1.5" />
              <text x="332" y="206" className="fill-current font-mono text-[10px]">{zh ? "井" : "Giếng"}</text>
              <text x="250" y="44" className="fill-current font-mono text-[10px]">{zh ? "北 · 朱文公祠 / 龙虎" : "Bắc · từ đường & Long Hổ"}</text>
              <path d="M250 348 v18 h28" fill="none" stroke="var(--theme-cinnabar)" strokeWidth="1.5" />
              <text x="168" y="366" className="fill-current font-mono text-[10px]">{zh ? "西仓门" : "Cửa Tây"}</text>
              <path d="M390 348 v18 h28" fill="none" stroke="var(--theme-cinnabar)" strokeWidth="1.5" />
              <text x="422" y="366" className="fill-current font-mono text-[10px]">{zh ? "东仓门" : "Cửa Đông"}</text>
              <text x="248" y="392" className="fill-current font-mono text-[10px]">{zh ? "照壁 · 丰图义仓" : "Bích chiếu · 丰图义仓"}</text>
              <text x="8" y="400" className="fill-current font-mono text-[10px]">{zh ? "西南台阶" : "Bậc tây nam"}</text>
              {CELLS.map((c) => {
                const on = c.n === n;
                return (
                  <g
                    key={c.n}
                    id={`vault-map-cell-${c.n}`}
                    className="vault-map-cell cursor-pointer"
                    role="button"
                    tabIndex={on ? 0 : -1}
                    aria-pressed={on}
                    aria-label={zh ? `第 ${String(c.n).padStart(2, "0")} 号仓廒` : `Gian kho ${String(c.n).padStart(2, "0")}`}
                    onClick={() => setN(c.n)}
                    onKeyDown={(event) => handleMapCellKeyDown(event, c.n)}
                  >
                    <rect
                      x={c.x}
                      y={c.y}
                      width={c.w}
                      height={c.h}
                      rx="1"
                      fill={on ? "var(--theme-cinnabar)" : "var(--theme-paper)"}
                      stroke={on ? "var(--theme-cinnabar)" : "currentColor"}
                      strokeOpacity={on ? 1 : 0.45}
                    />
                  </g>
                );
              })}
            </svg>
            <div ref={gridRef} className="rail mt-4 max-h-40 overflow-y-auto pr-1 sm:max-h-48">
              <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-10" role="group" aria-label={zh ? "选择仓廒" : "Chọn gian kho"}>
              {CELLS.map((c) => {
                const on = c.n === n;
                return (
                  <button
                    key={c.n}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setN(c.n)}
                    className={`vault-grid-cell min-h-11 border font-mono text-xs tabular-nums ${on ? "border-cinnabar bg-cinnabar font-bold text-paper" : "border-line/36 bg-paper text-ink/80"}`}
                    aria-label={zh ? `第 ${String(c.n).padStart(2, "0")} 号仓廒` : `Gian kho ${String(c.n).padStart(2, "0")}`}
                  >
                    {String(c.n).padStart(2, "0")}
                  </button>
                );
              })}
              </div>
            </div>
          </div>

          <article id="vault-dossier" className="order-1 border border-line/36 bg-paper p-5 sm:p-6 lg:order-2">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line/27 pb-3">
              <div>
                <p className="font-mono text-xs tracking-wider text-ink/60 uppercase">
                  {zh ? `${side.name.zh} · 第 ${cell.indexOnSide} / ${side.count} 孔` : `${side.name.vi} · ô ${cell.indexOnSide} / ${side.count}`}
                </p>
                <h3 className="mt-1 font-mono text-4xl font-bold text-cinnabar tabular-nums">{code}</h3>
              </div>
              <div className="flex gap-2">
                <button type="button" className="min-h-11 border border-line/45 px-3 text-xs" onClick={() => setN(n === 1 ? 58 : n - 1)}>
                  {zh ? "上一孔" : "Gian trước"}
                </button>
                <button type="button" className="min-h-11 border border-cinnabar px-3 text-xs text-cinnabar" onClick={() => setN(n === 58 ? 1 : n + 1)}>
                  {zh ? "下一孔" : "Gian sau"}
                </button>
              </div>
            </div>

            <div className="mt-4 flex border border-line/36 bg-paper-alt/60 p-0.5" role="tablist" aria-label={zh ? "仓廒档案标签" : "Thẻ thông tin gian kho"}>
              {tabs.map((item) => {
                const on = tab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    id={`vault-tab-${item.id}`}
                    role="tab"
                    aria-selected={on}
                    aria-controls="vault-tab-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setTab(item.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, item.id)}
                    className={`min-h-11 flex-1 px-2 text-xs ${on ? "bg-ink text-paper" : "text-ink/75"}`}
                  >
                    {zh ? item.label.zh : item.label.vi}
                  </button>
                );
              })}
            </div>

            <div className="mt-4" id="vault-tab-panel" role="tabpanel" aria-labelledby={`vault-tab-${tab}`} tabIndex={0}>
              {tab === "shell" && (
                <div className="space-y-3">
                  <img src="/figures/storage.jpg" alt={zh ? "仓廒内部：架空木地板与高侧气窗，非某一编号的专属照片" : "Bên trong một gian vòm: sàn gỗ kê cao và cửa gió trên cao. Ảnh kiểu gian, không phải ảnh riêng của số đang chọn."} className="aspect-[3/2] w-full object-cover" decoding="async" loading="lazy" />
                  <p className="text-sm leading-relaxed text-ink/85">
                    {line(lang, {
                      vi: "Mỗi ô là một hang gạch độc lập: tường ngăn dày, cửa gỗ hai cánh, sàn kê cao và cửa gió phía trên hồi lang. Cùng một kiểu cho cả 58 gian.",
                      zh: "每孔皆为独立砖券窑廒：厚隔墙、双扇木门、架空地板，高窗开向回廊。五十八孔同一构造。",
                    })}
                  </p>
                </div>
              )}
              {tab === "measure" && (
                <div>
                  <p className="text-xs leading-relaxed text-ink/65">
                    {line(lang, {
                      vi: "Dải số dưới đây là thước công bố cho loại gian, không phải số đo riêng của gian " + code + ".",
                      zh: "下列为仓廒类型的公开尺度区间，不是 " + code + " 号孔的单独测绘。",
                    })}
                  </p>
                  <dl className="mt-3 grid grid-cols-2 gap-2">
                    {specs.map((row) => (
                      <div key={row.v} className="border border-line/27 bg-paper-alt/40 p-3">
                        <dt className="font-mono text-[10px] tracking-wider text-celadon uppercase">{zh ? row.k.zh : row.k.vi}</dt>
                        <dd className="mt-1 font-mono text-sm font-semibold text-ink tabular-nums">{row.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-sm text-ink/85">
                    {line(lang, {
                      vi: `Sức chứa thiết kế thường được ghi khoảng ${PUBLISHED.tons} tấn mỗi gian, cộng lại khoảng 5.200–5.220 tấn cho cả vòng. Năm 2021 cả kho từng giữ 5.229 tấn lương dự trữ trung ương — đó là số của toàn khu, không chia đều thành tồn kho của gian ${code}.`,
                      zh: `设计储量多见每廒约 ${PUBLISHED.tons} 吨、全环约 5200–5220 吨。2021 年全区曾储央储粮 5229 吨，此为全仓记录，不能均摊为 ${code} 号的在库数。`,
                    })}
                  </p>
                </div>
              )}
              {tab === "look" && (
                <div className="space-y-3 text-sm leading-relaxed text-ink/85">
                  <p>{line(lang, side.look)}</p>
                  {n === 58 && (
                    <p className="border border-cinnabar/40 bg-cinnabar/5 p-3">
                      {line(lang, {
                        vi: "Gian 58 khép vòng dẫn đường: đứng ở đây là đã đi hết bốn mặt. Bậc tây nam lên mặt thành nằm sát ô này trên sơ đồ — dùng để kết thúc một vòng, rồi lên thành nhìn Hoàng Hà.",
                        zh: "58 号是导览环的收束：走到这里，四列已尽。图上把它放在西南登城台阶旁，便于结束一周后登城远望。",
                      })}
                    </p>
                  )}
                  <p className="text-xs text-ink/65">
                    {line(lang, {
                      vi: `Hồi lang chung có ${PUBLISHED.columns} cột lộ. Từ năm 2023, 58 gian không còn nhiệm vụ dự trữ trung ương; một số gian chuyển thành chỗ trưng bày, số còn lại vẫn được thông gió và tuần kiểm.`,
                      zh: `环廊共立明柱 ${PUBLISHED.columns} 根。2023 年起五十八廒退出央储，部分改为展陈，其余仍通风巡检。`,
                    })}
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
