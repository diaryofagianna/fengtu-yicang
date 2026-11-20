import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowDownRight, C as CircleCheck, D as Check, E as ChevronLeft, O as Calendar, S as CircleX, T as ChevronRight, _ as Info, a as Sun, b as ExternalLink, c as ShieldCheck, d as RotateCcw, f as Moon, g as Landmark, h as Layers, i as TriangleAlert, k as ArrowUpRight, l as Search, m as LoaderCircle, n as VolumeX, o as Square, p as MapPin, r as Volume2, s as SquareCheckBig, t as X, u as Route, v as Globe, w as CircleAlert, x as Compass, y as FileSearch } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SAbC4tnE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PUBLISHED = {
	length: "9,81–12,63 m",
	width: "3,72–4,2 m",
	height: "2,41–2,85 m",
	volume: "193,5–253,8 m³",
	tons: 90,
	columns: 108,
	city: "133 × 83 m"
};
var SIDES = [
	{
		id: "south",
		count: 12,
		name: {
			vi: "Mặt nam",
			zh: "南列"
		},
		look: {
			vi: "Tường nam mở hai cửa kho, Đông và Tây, với bích chiếu khắc “丰图义仓” nằm giữa. Gian mặt này nhìn vào sân phơi qua hồi lang.",
			zh: "南垣洞开东、西二仓门，门间照壁嵌“丰图义仓”石额。此列廒门朝向晾晒院心，门前即环廊。"
		}
	},
	{
		id: "east",
		count: 14,
		name: {
			vi: "Mặt đông",
			zh: "东列"
		},
		look: {
			vi: "Dãy đông dựa vào tường thành phía vách đất. Mỗi gian vẫn là một vòm gạch riêng, ngăn lửa và ẩm với gian bên cạnh.",
			zh: "东列廒依城墙而筑，外侧即台塬崖壁。各孔仍为独立砖券，厚墙隔火、隔潮。"
		}
	},
	{
		id: "north",
		count: 18,
		name: {
			vi: "Mặt bắc",
			zh: "北列"
		},
		look: {
			vi: "Phía trên mặt thành bắc là từ đường Chu Hy và hai chữ “龙”“虎”. Gian mặt bắc nằm dưới đúng đoạn thành ấy.",
			zh: "北城顶中部为紫阳仓祖朱文公祠，两侧嵌“龙”“虎”刻石。北列仓廒即在这段城墙之下。"
		}
	},
	{
		id: "west",
		count: 14,
		name: {
			vi: "Mặt tây",
			zh: "西列"
		},
		look: {
			vi: "Mặt tây khép vòng kho. Góc tây nam có bậc lên mặt thành — mốc cuối của sơ đồ dẫn đường đặt ngay trước bậc đó.",
			zh: "西列收束仓环。仓院西南角有台阶可登城顶，导览末号即标在该台阶旁。"
		}
	}
];
function spread(count, start, span, size) {
	const gap = (span - size * count) / (count + 1);
	return Array.from({ length: count }, (_, i) => start + gap * (i + 1) + size * i);
}
function buildCells() {
	const ox = 78;
	const oy = 52;
	const t = 16;
	const cells = [];
	const push = (side, xs, ys, w, h) => {
		xs.forEach((x, i) => {
			cells.push({
				n: cells.length + 1,
				side,
				indexOnSide: i + 1,
				x,
				y: ys[i] ?? ys[0],
				w,
				h
			});
		});
	};
	const southX = spread(12, 94, 452, 22);
	push("south", southX, southX.map(() => 336), 22, t);
	const eastY = spread(14, 68, 268, 14).reverse();
	push("east", eastY.map(() => 546), eastY, t, 14);
	const northX = spread(18, 94, 452, 16).reverse();
	push("north", northX, northX.map(() => oy), 16, t);
	const westY = spread(14, 68, 268, 14);
	push("west", westY.map(() => ox), westY, t, 14);
	return cells;
}
var CELLS = buildCells();
function sideOf(n) {
	const cell = CELLS.find((c) => c.n === n) ?? CELLS[0];
	return {
		cell,
		side: SIDES.find((s) => s.id === cell.side) ?? SIDES[0]
	};
}
function line(lang, text, className = "") {
	if (lang === "zh") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		lang: "zh-Hans",
		className,
		children: text.zh
	});
	if (lang === "vi") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: text.vi
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block",
			children: text.vi
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			lang: "zh-Hans",
			className: "mt-1 block text-[0.92em] text-ink/70",
			children: text.zh
		})]
	});
}
function VaultExplorer({ lang }) {
	const [n, setN] = (0, import_react.useState)(58);
	const [tab, setTab] = (0, import_react.useState)("shell");
	const gridRef = (0, import_react.useRef)(null);
	const zh = lang === "zh";
	const { cell, side } = sideOf(n);
	const code = String(n).padStart(2, "0");
	const specs = (0, import_react.useMemo)(() => [
		{
			k: {
				vi: "Sâu",
				zh: "进深"
			},
			v: PUBLISHED.length
		},
		{
			k: {
				vi: "Rộng",
				zh: "面阔"
			},
			v: PUBLISHED.width
		},
		{
			k: {
				vi: "Cao",
				zh: "净高"
			},
			v: PUBLISHED.height
		},
		{
			k: {
				vi: "Thể tích",
				zh: "容积"
			},
			v: PUBLISHED.volume
		}
	], []);
	(0, import_react.useEffect)(() => {
		const root = gridRef.current;
		const el = root?.querySelector("[aria-pressed='true']");
		if (!root || !el) return;
		const er = el.getBoundingClientRect();
		const rr = root.getBoundingClientRect();
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		root.scrollTo({
			top: root.scrollTop + er.top - rr.top - root.clientHeight / 2 + er.height / 2,
			behavior: reduce ? "auto" : "smooth"
		});
	}, [n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "granaries",
		className: "scroll-mt-24 border-b border-line/27 py-14 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-cinnabar uppercase",
						children: zh ? "04 · 五十八孔仓廒详档" : "04. Hồ sơ 58 gian kho · 五十八孔"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1.5 text-3xl font-bold text-ink sm:text-4xl",
						children: zh ? "逐廒导览 · 从 01 走到 58" : "Đi hết vòng kho · từ 01 đến 58"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-xs leading-relaxed text-ink/70",
						children: line(lang, {
							vi: "Số trên sơ đồ là thứ tự dẫn đường theo chiều kim đồng hồ, bắt đầu từ mặt nam. Không phải biển số khảo sát treo tại cửa.",
							zh: "图上编号为顺时针导览序号，自南列起算，并非现场门额上的测绘编号。"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex flex-wrap gap-2",
					children: SIDES.map((s) => {
						const on = s.id === side.id;
						const from = CELLS.find((c) => c.side === s.id)?.n ?? 1;
						const to = from + s.count - 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setN(from),
							className: `min-h-11 border px-3 py-2 text-left text-xs ${on ? "border-cinnabar bg-cinnabar font-semibold text-paper" : "border-line/36 bg-paper text-ink/80"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block font-mono text-[10px] opacity-75",
								children: [
									String(from).padStart(2, "0"),
									"–",
									String(to).padStart(2, "0")
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: zh ? s.name.zh : s.name.vi
							})]
						}, s.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-2 border border-line/36 bg-paper-alt/40 p-4 sm:p-5 lg:order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between gap-2 text-xs text-ink/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: zh ? "内城平面 · 仓廒环列" : "Mặt bằng thành trong · vòng 58 gian" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-cinnabar tabular-nums",
									children: PUBLISHED.city
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 640 420",
								className: "w-full border border-line/36 bg-paper text-ink",
								role: "img",
								"aria-label": zh ? "五十八廒环状导览图" : "Sơ đồ vòng 58 gian kho",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "78",
										y: "52",
										width: "484",
										height: "300",
										fill: "none",
										stroke: "currentColor",
										strokeOpacity: "0.35",
										strokeWidth: "10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "108",
										y: "86",
										width: "424",
										height: "232",
										fill: "color-mix(in srgb, var(--theme-celadon) 8%, transparent)",
										stroke: "currentColor",
										strokeOpacity: "0.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "320",
										cy: "202",
										r: "7",
										fill: "none",
										stroke: "var(--theme-celadon)",
										strokeWidth: "1.5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "332",
										y: "206",
										className: "fill-current font-mono text-[10px]",
										children: zh ? "井" : "Giếng"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "250",
										y: "44",
										className: "fill-current font-mono text-[10px]",
										children: zh ? "北 · 朱文公祠 / 龙虎" : "Bắc · từ đường & Long Hổ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M250 348 v18 h28",
										fill: "none",
										stroke: "var(--theme-cinnabar)",
										strokeWidth: "1.5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "168",
										y: "366",
										className: "fill-current font-mono text-[10px]",
										children: zh ? "西仓门" : "Cửa Tây"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M390 348 v18 h28",
										fill: "none",
										stroke: "var(--theme-cinnabar)",
										strokeWidth: "1.5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "422",
										y: "366",
										className: "fill-current font-mono text-[10px]",
										children: zh ? "东仓门" : "Cửa Đông"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "248",
										y: "392",
										className: "fill-current font-mono text-[10px]",
										children: zh ? "照壁 · 丰图义仓" : "Bích chiếu · 丰图义仓"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "8",
										y: "400",
										className: "fill-current font-mono text-[10px]",
										children: zh ? "西南台阶" : "Bậc tây nam"
									}),
									CELLS.map((c) => {
										const on = c.n === n;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
											onClick: () => setN(c.n),
											className: "cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
												x: c.x,
												y: c.y,
												width: c.w,
												height: c.h,
												rx: "1",
												fill: on ? "var(--theme-cinnabar)" : "var(--theme-paper)",
												stroke: on ? "var(--theme-cinnabar)" : "currentColor",
												strokeOpacity: on ? 1 : .45
											})
										}, c.n);
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: gridRef,
								className: "rail mt-4 max-h-40 overflow-y-auto pr-1 sm:max-h-48",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-6 gap-1.5 sm:grid-cols-10",
									role: "group",
									"aria-label": zh ? "选择仓廒" : "Chọn gian kho",
									children: CELLS.map((c) => {
										const on = c.n === n;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": on,
											onClick: () => setN(c.n),
											className: `min-h-10 border font-mono text-xs tabular-nums ${on ? "border-cinnabar bg-cinnabar font-bold text-paper" : "border-line/36 bg-paper text-ink/80"}`,
											children: String(c.n).padStart(2, "0")
										}, c.n);
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: "vault-dossier",
						className: "order-1 border border-line/36 bg-paper p-5 sm:p-6 lg:order-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-3 border-b border-line/27 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-wider text-ink/60 uppercase",
									children: zh ? `${side.name.zh} · 第 ${cell.indexOnSide} / ${side.count} 孔` : `${side.name.vi} · ô ${cell.indexOnSide} / ${side.count}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-mono text-4xl font-bold text-cinnabar tabular-nums",
									children: code
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 border border-line/45 px-3 text-xs",
										onClick: () => setN(n === 1 ? 58 : n - 1),
										children: zh ? "上一孔" : "Gian trước"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 border border-cinnabar px-3 text-xs text-cinnabar",
										onClick: () => setN(n === 58 ? 1 : n + 1),
										children: zh ? "下一孔" : "Gian sau"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex border border-line/36 bg-paper-alt/60 p-0.5",
								role: "tablist",
								children: [
									{
										id: "shell",
										label: {
											vi: "Vòm",
											zh: "券体"
										}
									},
									{
										id: "measure",
										label: {
											vi: "Dải số",
											zh: "尺度"
										}
									},
									{
										id: "look",
										label: {
											vi: "Đứng đây",
											zh: "当场"
										}
									}
								].map((item) => {
									const on = tab === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										"aria-selected": on,
										onClick: () => setTab(item.id),
										className: `min-h-11 flex-1 px-2 text-xs ${on ? "bg-ink text-paper" : "text-ink/75"}`,
										children: zh ? item.label.zh : item.label.vi
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								role: "tabpanel",
								children: [
									tab === "shell" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/figures/storage.jpg",
											alt: zh ? "仓廒内部：架空木地板与高侧气窗，非某一编号的专属照片" : "Bên trong một gian vòm: sàn gỗ kê cao và cửa gió trên cao. Ảnh kiểu gian, không phải ảnh riêng của số đang chọn.",
											className: "aspect-[3/2] w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-ink/85",
											children: line(lang, {
												vi: "Mỗi ô là một hang gạch độc lập: tường ngăn dày, cửa gỗ hai cánh, sàn kê cao và cửa gió phía trên hồi lang. Cùng một kiểu cho cả 58 gian.",
												zh: "每孔皆为独立砖券窑廒：厚隔墙、双扇木门、架空地板，高窗开向回廊。五十八孔同一构造。"
											})
										})]
									}),
									tab === "measure" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs leading-relaxed text-ink/65",
											children: line(lang, {
												vi: "Dải số dưới đây là thước công bố cho loại gian, không phải số đo riêng của gian " + code + ".",
												zh: "下列为仓廒类型的公开尺度区间，不是 " + code + " 号孔的单独测绘。"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
											className: "mt-3 grid grid-cols-2 gap-2",
											children: specs.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "border border-line/27 bg-paper-alt/40 p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "font-mono text-[10px] tracking-wider text-celadon uppercase",
													children: zh ? row.k.zh : row.k.vi
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "mt-1 font-mono text-sm font-semibold text-ink tabular-nums",
													children: row.v
												})]
											}, row.v))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm text-ink/85",
											children: line(lang, {
												vi: `Sức chứa thiết kế thường được ghi khoảng ${PUBLISHED.tons} tấn mỗi gian, cộng lại khoảng 5.200–5.220 tấn cho cả vòng. Năm 2021 cả kho từng giữ 5.229 tấn lương dự trữ trung ương — đó là số của toàn khu, không chia đều thành tồn kho của gian ${code}.`,
												zh: `设计储量多见每廒约 ${PUBLISHED.tons} 吨、全环约 5200–5220 吨。2021 年全区曾储央储粮 5229 吨，此为全仓记录，不能均摊为 ${code} 号的在库数。`
											})
										})
									] }),
									tab === "look" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 text-sm leading-relaxed text-ink/85",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line(lang, side.look) }),
											n === 58 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "border border-cinnabar/40 bg-cinnabar/5 p-3",
												children: line(lang, {
													vi: "Gian 58 khép vòng dẫn đường: đứng ở đây là đã đi hết bốn mặt. Bậc tây nam lên mặt thành nằm sát ô này trên sơ đồ — dùng để kết thúc một vòng, rồi lên thành nhìn Hoàng Hà.",
													zh: "58 号是导览环的收束：走到这里，四列已尽。图上把它放在西南登城台阶旁，便于结束一周后登城远望。"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-ink/65",
												children: line(lang, {
													vi: `Hồi lang chung có ${PUBLISHED.columns} cột lộ. Từ năm 2023, 58 gian không còn nhiệm vụ dự trữ trung ương; một số gian chuyển thành chỗ trưng bày, số còn lại vẫn được thông gió và tuần kiểm.`,
													zh: `环廊共立明柱 ${PUBLISHED.columns} 根。2023 年起五十八廒退出央储，部分改为展陈，其余仍通风巡检。`
												})
											})
										]
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
var h = import_react.default;
var A = {
	jsx: import_jsx_runtime.jsx,
	jsxs: import_jsx_runtime.jsxs,
	Fragment: import_jsx_runtime.Fragment
};
var Ce = {
	hero: "/figures/hero.jpg",
	courtyard: "/figures/courtyard.jpg",
	gate: "/figures/gate.jpg",
	storage: "/figures/storage.jpg",
	museum: "/figures/museum.jpg",
	stele: "/figures/stele.jpg",
	pagoda: "/figures/pagoda.jpg"
};
var we = [
	{
		id: `moat`,
		code: `L1`,
		name: {
			vi: `Hào thành ngoài`,
			zh: `护城壕`
		},
		explanation: {
			vi: `Vành đai hào bao ngoài giúp phòng thủ và thu thoát nước mưa xuống triền đất hoàng thổ, giữ nền móng luôn khô ráo.`,
			zh: `外围护城壕兼顾防卫与高塬排水导流，阻截暴雨汇水渗透仓基。`
		}
	},
	{
		id: `outer-fortress`,
		code: `L2`,
		name: {
			vi: `Thành trại ngoại vi`,
			zh: `寨城外郭`
		},
		explanation: {
			vi: `Tường đất nện kết hợp lối tuần tra và công sự bảo vệ bên ngoài khu kho gạch.`,
			zh: `夯土外寨墙体与巡防通道，构成仓城外层防卫屏护。`
		},
		epistemicNote: {
			vi: `Một nghiên cứu năm 2021 ghi nhận thành trại xây năm 1891 như lớp phòng thủ ngoài; cần đối chiếu thêm với bản vẽ đo đạc chính thức.`,
			zh: `2021年部分研究述及1891年增筑外寨墙，仍待与官方测绘及保护规划图纸核对。`
		}
	},
	{
		id: `inner-wall`,
		code: `L3`,
		name: {
			vi: `Thành trong bọc gạch`,
			zh: `砖砌内城`
		},
		explanation: {
			vi: `Khối tường gạch xanh bọc đất nện kiên cố bao quanh toàn bộ 58 gian kho, tạo mô hình “thành trong thành”.`,
			zh: `青砖包芯夯土内城合围五十八廒，形成严密的“城中城”空间格局。`
		}
	},
	{
		id: `vaults`,
		code: `L4`,
		name: {
			vi: `58 Gian hầm vòm gạch`,
			zh: `五十八孔仓廒`
		},
		explanation: {
			vi: `Hệ thống 58 gian kho độc lập bố trí khép kín dọc bốn cạnh sân, tổng sức chứa thiết kế khoảng 5.220 tấn.`,
			zh: `五十八间独立砖券窑廒沿四隅连廊排布，设计总储粮能力约五千二百二十吨。`
		}
	},
	{
		id: `courtyard`,
		code: `L5`,
		name: {
			vi: `Sân trong & Hồi lang`,
			zh: `院落与回廊`
		},
		explanation: {
			vi: `Sân lát gạch đá rộng rãi làm nơi phơi sấy lúa mì, kiểm đong lương thực và nối thông hành lang gỗ bốn mặt.`,
			zh: `宽敞内庭院用于晾晒麦粟、过秤盘粮，四面木构回廊遮雨避晒。`
		}
	},
	{
		id: `drainage`,
		code: `L6`,
		name: {
			vi: `Hệ thống thoát nước`,
			zh: `坡面与暗沟排水`
		},
		explanation: {
			vi: `Mái ngói dốc, máng thu nước và mặt sân nghiêng dẫn nước mưa ra cống ngầm thoát khỏi khu thành cổ.`,
			zh: `屋面排水檐沟配合院落微坡与砖砌暗涵，迅速将雨水排出城外。`
		}
	}
];
var E = [
	{
		id: `chu-tuoc-mon`,
		code: `01`,
		layerId: `inner-wall`,
		name: {
			vi: `Chu Tước Môn & Tường thành ngoài`,
			zh: `朱雀门与外城墙`
		},
		subtitle: {
			vi: `Lối vào chính hướng Nam · Phân biệt danh hiệu và bia đề`,
			zh: `南向正门 · 城墙防卫与匾额源流`
		},
		summary: {
			vi: `Cổng vòm gạch xanh hướng Nam trên triền cao Triều Ấp, gắn danh hiệu “Thiên hạ đệ nhất thương” gắn với sự biểu dương của Từ Hi Thái Hậu dành cho Diêm Kính Minh.`,
			zh: `南向青砖拱券门洞立于朝邑高台塬畔，门额“丰图义仓”与“天下第一仓”匾额名扬关中。`
		},
		detail: {
			vi: `Khối tường thành dày tạo vùng đệm nhiệt và ngăn trộm cướp, lũ lụt vùng hạ du Hoàng Hà. Trong diễn giải di sản, cần phân biệt danh hiệu “Thiên hạ đệ nhất thương” với hai chữ “Long Hổ” được đề tặng riêng và di dời khi tu sửa năm 1976–1977.`,
			zh: `高厚砖土城墙兼顾防匪、防洪与隔热缓冲。历史研究特别区分“天下第一仓”御封名号与另行题赠阎敬铭的“龙虎”二字石刻（1976–1977年修缮时曾迁置保护）。`
		},
		dimensions: `Thành trong thành · Cổng Nam · Minh họa định hướng`,
		audioScript: {
			vi: `Đứng trước cổng Nam, hãy quan sát độ cao triền đất hoàng thổ so với vùng đồng bằng Hoàng Hà phía xa — chính địa thế cao ráo này là tuyến phòng thủ đầu tiên chống ngập úng.`,
			zh: `立于南门之外，请远望仓城与周边河滩的高差——高爽的黄土台塬地势，正是义仓防潮防涝的第一道屏障。`
		},
		mapX: 50,
		mapY: 85,
		image: Ce.gate,
		imageCaption: {
			vi: `Fig. 2 — Cổng gạch xanh và hoành phi đá tại lối vào Nam thành.`,
			zh: `图二 — 仓城南门青砖拱券与石刻门额。`
		}
	},
	{
		id: `cong-dong`,
		code: `02`,
		layerId: `outer-fortress`,
		name: {
			vi: `Cổng Đông · Tuyến Nhập Lương`,
			zh: `东门 · 进粮通道`
		},
		subtitle: {
			vi: `Luồng xe đẩy thóc vụ thu hoạch · Kiểm đong trước khi nhập kho`,
			zh: `秋收运粮入仓动线 · 过斗检验节点`
		},
		summary: {
			vi: `Hướng Đông đón các đoàn xe nông sản từ cánh đồng Triều Ấp và bãi bồi Hoàng Hà đưa thóc vào sân cân đong, phơi khô.`,
			zh: `东侧通道昔日承接朝邑及渭洛平原乡民送来的秋收小麦与粟谷，经检验晾晒后分廒入储。`
		},
		detail: {
			vi: `Tổ chức phân luồng nhập (Đông) và xuất (Tây) giúp quá trình thu mua, vay trả lương thực theo lệ “xuân tá thu hoàn” không bị ùn tắc trong mùa vụ.`,
			zh: `东西分门的设计令“春借秋还”放赈与收储作业秩序井然，避免人畜车辆在门洞内拥堵。`
		},
		dimensions: `Trục Đông–Tây · Phân luồng vận chuyển`,
		audioScript: {
			vi: `Vào mùa thu hoạch, thóc được chở qua cổng Đông, kiểm tra độ khô bằng phương pháp truyền thống trước khi phân vào từng gian hầm.`,
			zh: `每逢秋收入库，乡民运粮多由东路进仓，经专人验看干湿度与成色后方准入廒。`
		},
		mapX: 86,
		mapY: 50
	},
	{
		id: `cong-tay`,
		code: `03`,
		layerId: `outer-fortress`,
		name: {
			vi: `Cổng Tây · Tuyến Xuất Kho Cứu Trợ`,
			zh: `西门 · 出粮赈济通道`
		},
		subtitle: {
			vi: `Đường phát chẩn mùa giáp hạt & những năm đại hạn 1900, 1929`,
			zh: `荒年放赈出粮通道 · 1900与1929年赈灾记忆`
		},
		summary: {
			vi: `Lối xuất lương phục vụ việc cho vay không lãi mùa giáp hạt và mở kho cứu đói quy mô lớn vào năm 1900 và 1929.`,
			zh: `主要承担青黄不接时出仓放粮与灾荒赈济职责，见证光绪二十六年及民国十八年开仓济民。`
		},
		detail: {
			vi: `Mỗi đợt xuất kho đều phải có sự chứng kiến của người giữ kho và đại diện hương thân địa phương, đối chiếu sổ sách và dụng cụ đong chuẩn.`,
			zh: `每次出粮均须仓管与地方乡绅共同验封核账，以公斗量粮，确保赈灾粮食公平发放到户。`
		},
		dimensions: `Cửa Tây · Xuất kho & Đối chiếu sổ sách`,
		audioScript: {
			vi: `Nếu cổng Đông gắn với niềm vui được mùa, cổng Tây là nơi lưu giữ ký ức sinh tồn của hàng nghìn gia đình qua hai trận hạn hán năm 1900 và 1929.`,
			zh: `若说东路承载丰收喜悦，西侧通道则铭刻着1900与1929年关中大荒中乡民领粮度日的集体记忆。`
		},
		mapX: 14,
		mapY: 50
	},
	{
		id: `58-ao-luong`,
		code: `04`,
		layerId: `vaults`,
		name: {
			vi: `58 Gian Kho Vòm Gạch (Ngũ Thập Bát Ngao)`,
			zh: `五十八孔砖券仓廒`
		},
		subtitle: {
			vi: `Sức chứa thiết kế ~5.220 tấn · Chuyển sang bảo tồn từ 2023`,
			zh: `设计储量约5220吨 · 2023年后转向活态保护`
		},
		summary: {
			vi: `58 gian kho độc lập bao quanh sân trong; năm 2021 ghi nhận 5.229 tấn lương dự trữ trung ương, từ năm 2023 ngừng trữ dự trữ trung ương và tiếp tục được bảo dưỡng.`,
			zh: `五十八间砖券窑廒环列内城。2021年曾储中央储备粮5229吨；2023年起不再承担央储任务，仍由专人检修维护以延续可用状态。`
		},
		detail: {
			vi: `Mỗi gian kho có kết cấu vòm gạch độc lập giúp cách ly rủi ro hỏa hoạn và ẩm mốc. Hiện nay nhiều gian trở thành không gian trưng bày lịch sử lương thực và bảo tồn kiến trúc.`,
			zh: `独立砖券结构既防火防鼠又减少连片受潮风险。如今部分廒房已转为粮食文化展厅，其余仍按规范定期巡检保养。`
		},
		dimensions: `58 gian vòm gạch · Sức chứa thiết kế ~5.220 tấn`,
		audioScript: {
			vi: `Từ năm 2023, 58 gian kho không còn giữ nhiệm vụ dự trữ trung ương, nhưng vẫn được kiểm tra, thông gió định kỳ để giữ nguyên khả năng vận hành của một công trình lịch sử.`,
			zh: `自2023年起，丰图义仓虽已退出中央储备粮储存序列，但工作人员仍按时开窗通风、巡检仓房，守护这座百年粮仓的生命力。`
		},
		mapX: 74,
		mapY: 38,
		image: Ce.storage,
		imageCaption: {
			vi: `Fig. 3 — Không gian bên trong gian kho với sàn gỗ kê cao và cửa thông gió trên cao.`,
			zh: `图三 — 仓廒内部架空木地板与高侧通风木窗。`
		}
	},
	{
		id: `hoi-lang`,
		code: `05`,
		layerId: `courtyard`,
		name: {
			vi: `Hành Lang Gỗ Chu Vi (Hồi Lang)`,
			zh: `环周木构回廊`
		},
		subtitle: {
			vi: `Vùng đệm che nắng mưa · Bảo vệ mặt tiền các gian kho`,
			zh: `遮雨防晒缓冲带 · 护佑仓门干爽`
		},
		summary: {
			vi: `Hành lang cột gỗ kê tảng đá xanh chạy vòng quanh 4 mặt sân, vừa che mưa tạt trực tiếp vào cửa kho, vừa làm lối di chuyển khô ráo.`,
			zh: `四面贯通的木柱坡顶回廊以青石柱础隔湿，阻挡斜风骤雨扑打仓门，兼具遮阴降温之效。`
		},
		detail: {
			vi: `Nhờ mái hiên rộng vươn ra ngoài, ánh nắng gay gắt mùa hè không chiếu thẳng lên cửa gỗ các gian kho, giảm dao động nhiệt độ bề mặt.`,
			zh: `深挑檐设计削弱关中盛夏直射阳光，在院落与砖墙之间形成一道温和的微气候过渡走廊。`
		},
		dimensions: `Hành lang chu vi 4 mặt · Chân cột đá xanh`,
		audioScript: {
			vi: `Hãy chú ý phần chân cột gỗ đặt trên tảng đá xanh — chi tiết nhỏ này giúp tách hoàn toàn gỗ khỏi hơi ẩm đất nền suốt hơn một thế kỷ.`,
			zh: `请留意每根立柱下方的青石柱础——正是这种隔潮垫石，让木构回廊历经百年风霜而不腐朽。`
		},
		mapX: 28,
		mapY: 36,
		image: Ce.courtyard,
		imageCaption: {
			vi: `Fig. 4 — Dãy cột gỗ Hồi Lang ôm quanh sân lát gạch đá Triều Ấp.`,
			zh: `图四 — 环周木柱回廊与青砖铺地内庭院。`
		}
	},
	{
		id: `san-thoat-nuoc`,
		code: `06`,
		layerId: `drainage`,
		name: {
			vi: `Sân Giữa Phơi Lương & Hệ thống Thoát Nước`,
			zh: `中心晾晒院落与排水系统`
		},
		subtitle: {
			vi: `Sân phơi thóc mùa thu · Mái nghiêng và cống ngầm thoát nước`,
			zh: `晒粮广场 · 坡面暗沟防积水设计`
		},
		summary: {
			vi: `Khoảng sân trung tâm rộng lớn dùng để phơi lúa mì, kê trước khi nhập kho; toàn bộ mặt sân lát đá tạo độ dốc dẫn nước mưa qua rãnh thoát ra ngoài thành.`,
			zh: `开阔的院心既是收储前翻晒谷物的场地，也是整座仓城的集水排水枢纽，雨天不留积水。`
		},
		detail: {
			vi: `Nước mưa từ mái ngói dốc và mặt sân được gom về các rãnh thu nước rồi thoát ra triền dốc ngoài thành trại, tránh thấm ngược xuống chân tường các gian kho.`,
			zh: `屋顶雨水经檐口落入院面排水沟，再顺地下暗涵排出高台之外，彻底消除内涝返潮隐患。`
		},
		dimensions: `Sân trung tâm · Hệ thống dốc & cống ngầm`,
		audioScript: {
			vi: `Kho thóc sợ nhất nước đọng sau mưa lớn. Mặt sân nghiêng nhẹ về rãnh thoát giúp nước rút nhanh ra ngoài khu thành.`,
			zh: `古仓储粮最忌院内积水。朝邑工匠利用台塬高差铺设微坡院面与暗沟，确保暴雨过后迅速排干。`
		},
		mapX: 50,
		mapY: 52
	},
	{
		id: `tuong-thanh-hoang-ha`,
		code: `07`,
		layerId: `inner-wall`,
		name: {
			vi: `Đỉnh Tường Thành & Quan sát Địa hình Hoàng Hà`,
			zh: `登城马道与黄河地势`
		},
		subtitle: {
			vi: `Lối đi tuần trên thành · Địa thế cao ráo vùng Triều Ấp`,
			zh: `城顶马道 · 俯瞰黄土塬与河滩高差`
		},
		summary: {
			vi: `Từ lối đi trên mặt thành có thể quan sát trực quan lý do Phong Đồ Nghĩa Thương được đặt trên triền đất cao, tách biệt khỏi vùng bãi bồi dễ ngập của Hoàng Hà.`,
			zh: `登上城顶马道，可直观理解建造者为何择址高塬边缘，避开历史上黄河泛滥与地下水位偏高地带。`
		},
		detail: {
			vi: `Lựa chọn vị trí (选址) là nguyên tắc đầu tiên trong năm trụ cột kỹ thuật của nghĩa thương: cao ráo, thông gió tự nhiên nhưng tránh luồng gió ẩm trực diện.`,
			zh: `“择高而筑”是丰图义仓建筑智慧的首要法则：高台利于通风散湿，又与河道保持安全高差。`
		},
		dimensions: `Tường thành & Công sự · Quan sát toàn cảnh`,
		audioScript: {
			vi: `Nhìn từ mặt thành ra bình nguyên phía Đông, ta hiểu ngay vì sao việc chọn địa điểm lại quan trọng ngang với kỹ thuật xây tường hay lát sàn gỗ.`,
			zh: `站在城墙之上远眺东侧平原，便能明白选址本身就是丰图义仓百年防潮的第一项工程智慧。`
		},
		mapX: 50,
		mapY: 16
	},
	{
		id: `bia-ky`,
		code: `08`,
		layerId: `courtyard`,
		name: {
			vi: `Bia Ký 1931 & Ký ức Hương Thân Triều Ấp`,
			zh: `民国二十年碑刻与乡绅共筑史料`
		},
		subtitle: {
			vi: `Không chỉ của Diêm Kính Minh · Công sức cộng đồng Triều Ấp`,
			zh: `并非一人之功 · 朝邑乡绅督建捐资实录`
		},
		summary: {
			vi: `Tài liệu lưu trữ Thiểm Tây và văn bia năm Dân Quốc thứ 20 (1931) ghi chép rõ danh sách hương thân địa phương trực tiếp giám sát thi công và đóng góp tài chính.`,
			zh: `据陕西省档案馆藏史料及民国二十年（1931）碑刻，建仓不仅是阎敬铭倡议，更有众多朝邑乡绅实地督工与乡民集资共成。`
		},
		detail: {
			vi: `Các phòng trưng bày hiện đại (năm 2021 từng ghi nhận 12 phòng trưng bày cùng khu trải nghiệm nông canh) giúp người xem đọc lại câu chuyện cộng đồng tự cứu trợ qua nhiều thế hệ.`,
			zh: `当代展陈空间（2021年资料记录共设十二个展室及农耕体验区）系统还原了乡土社会“自捐自管、守望相助”的制度传统。`
		},
		dimensions: `Tư liệu bia ký · Ký ức cộng đồng`,
		audioScript: {
			vi: `Những tấm bia khắc tên người góp bạc và người trông coi xây dựng nhắc chúng ta rằng một nghĩa thương bền vững được tạo nên bởi cả cộng đồng Triều Ấp.`,
			zh: `碑石上镌刻的不仅是捐银数字，更是一方乡邻共同参与监造与守仓的社会契约。`
		},
		mapX: 27,
		mapY: 66,
		image: Ce.stele,
		imageCaption: {
			vi: `Fig. 5 — Không gian minh họa bia ký cổ đời Thanh bằng đá chạm khắc.`,
			zh: `图五 — 清代石刻碑文陈列意象。`
		}
	}
];
var D = [
	{
		id: `site`,
		code: `01`,
		name: {
			vi: `Chọn địa thế (选址)`,
			zh: `选址 · 高台避涝`
		},
		summary: {
			vi: `Đặt trên triền đất hoàng thổ cao ráo ở Triều Ấp, cao hơn vùng bãi bồi Hoàng Hà, đón gió khô thoáng tự nhiên và tránh nước ngầm dâng mùa lũ.`,
			zh: `择址朝邑东寨高爽黄土台塬，显著高于黄河故道滩面，天然避开汛期漫溢与高地下水位返潮。`
		},
		evidenceNote: {
			vi: `Ghi nhận trong tư liệu địa phương và báo chí 2019–2026 (SRC-003, SRC-005).`,
			zh: `见于国际在线及《陕西日报》等报道描述（SRC-003、SRC-005）。`
		}
	},
	{
		id: `structure`,
		code: `02`,
		name: {
			vi: `Kết cấu thành & vòm gạch (结构)`,
			zh: `结构 · 城中城与砖券`
		},
		summary: {
			vi: `Tổ chức hai lớp thành đất nện – gạch xanh bao quanh 58 gian hầm vòm gạch độc lập và hành lang gỗ Hồi Lang, tăng độ bền vững và cô lập rủi ro cháy nổ.`,
			zh: `外寨内城合围五十八孔独立砖券窑廒与木构回廊，墙体厚实且分廒隔断，兼具防盗与防火防潮能力。`
		},
		evidenceNote: {
			vi: `Mô tả cấu trúc vòm gạch và lớp phòng thủ đối chiếu SRC-001, SRC-003 và nghiên cứu 2021.`,
			zh: `砖券与多重城墙构造综合国家粮食局及2021年遗产研究记载（SRC-001、SRC-003）。`
		}
	},
	{
		id: `ventilation`,
		code: `03`,
		name: {
			vi: `Thông gió đối lưu (通风)`,
			zh: `通风 · 气窗与微风对流`
		},
		summary: {
			vi: `Bố trí cửa chớp gỗ trên cao và lỗ thông khí chân tường kết hợp hướng mở vào sân trong, tạo luồng khí lưu thông liên tục mà không chiếu nắng trực tiếp vào thóc.`,
			zh: `廒墙高处设木百叶气窗，墙脚开通风孔道，避开阳光直射而形成上下穿堂微风，带走粮堆余热潮气。`
		},
		evidenceNote: {
			vi: `Nhân viên bảo tồn hiện vẫn thực hiện mở cửa thông gió và kiểm tra định kỳ các gian kho (SRC-005).`,
			zh: `2026年《陕西日报》证实管理人员至今仍定期巡检通风，维持仓房可用性（SRC-005）。`
		}
	},
	{
		id: `moisture`,
		code: `04`,
		name: {
			vi: `Chống ẩm nền kho (防潮)`,
			zh: `防潮 · 架空松木地板`
		},
		summary: {
			vi: `Lát sàn gỗ tùng kê cao cách mặt đất, tạo khoảng không thông thoáng và kết hợp vật liệu hút ẩm tự nhiên dưới gầm sàn để ngăn hơi ẩm đất nền bốc lên khối lúa.`,
			zh: `仓内铺设架空木地板，与夯土地面保持明显架空高度，配合传统防潮垫层，阻断地气上行。`
		},
		evidenceNote: {
			vi: `Đặc điểm sàn gỗ cách ẩm nổi tiếng được CRI và tư liệu 2026 ghi nhận; các thông số nhiệt độ ổn định cụ thể (như 18°C quanh năm) chưa có chuỗi đo công khai đầy đủ.`,
			zh: `架空木地板为公开报道核心特征；关于“常年恒温18℃”等具体数值目前尚缺连续公开实测记录，本展区仅作定性说明。`
		}
	},
	{
		id: `drainage`,
		code: `05`,
		name: {
			vi: `Thoát nước mưa (排水)`,
			zh: `排水 · 屋面檐沟与暗渠`
		},
		summary: {
			vi: `Mái ngói dốc, máng thu nước mái hiên và độ dốc sân lát đá phối hợp rãnh ngầm đẩy nước mưa nhanh chóng ra khỏi chân thành cổ.`,
			zh: `坡屋面落水、院落微坡铺砖与地下暗沟协同导流，防止暴雨积水浸润墙基与仓廒地面。`
		},
		evidenceNote: {
			vi: `Cần đối chiếu bản đồ rãnh thoát nước chi tiết khi quy hoạch bảo vệ 2026 hoàn tất (SRC-007).`,
			zh: `具体暗沟走向与管径参数待2026年文物保护规划测绘图纸公布后进一步核补（SRC-007）。`
		}
	}
];
var Te = [
	{
		id: `roof`,
		code: `L1`,
		name: {
			vi: `Mái ngói dốc cách nhiệt`,
			zh: `双层隔热通风瓦顶`
		},
		spec: `Mái ngói dốc · Đệm khí giảm bức xạ`,
		humidityReduction: 6.5,
		tempBuffer: 4.2,
		description: {
			vi: `Mái ngói che bức xạ nắng mùa hè vùng Quan Trung và dẫn nước mưa nhanh xuống máng thoát, tạo lớp đệm không khí trên vòm kho.`,
			zh: `坡顶青瓦阻隔关中烈日直射并迅速导排雨水，在砖券顶部形成温和缓冲气层。`
		}
	},
	{
		id: `wall`,
		code: `L2`,
		name: {
			vi: `Tường gạch xanh bọc đất nện`,
			zh: `青砖包芯夯土厚墙`
		},
		spec: `Vòm gạch độc lập · Tường bao dày`,
		humidityReduction: 7,
		tempBuffer: 5.4,
		description: {
			vi: `Khối tường đất nện bọc gạch xanh có quán tính nhiệt lớn, làm chậm truyền nhiệt ngày – đêm giữa mùa hè nóng và mùa đông khô lạnh.`,
			zh: `青砖包芯夯土墙体热惰性大，显著平缓关中昼夜及冬夏剧烈温差传导（具体恒温读数尚待持续监测验证）。`
		}
	},
	{
		id: `floor`,
		code: `L3`,
		name: {
			vi: `Sàn gỗ kê cao cách đất`,
			zh: `架空松木防潮地板`
		},
		spec: `Kê cao thông khí gầm · Chống ẩm nền`,
		humidityReduction: 11.5,
		tempBuffer: 1.8,
		description: {
			vi: `Ván gỗ đặt trên trụ kê tách khỏi nền đất, giúp không khí đối lưu bên dưới mặt sàn và ngăn ẩm mốc xâm nhập hạt lương thực.`,
			zh: `松木仓板架空铺设于砖墩之上，板底留设通气空间，有效阻断地下水汽上渗。`
		}
	},
	{
		id: `drainage`,
		code: `L4`,
		name: {
			vi: `Sân dốc & hệ thống thoát nước`,
			zh: `院落微坡与暗沟排水`
		},
		spec: `Sân nghiêng thoát nước · Rãnh dẫn ra thành`,
		humidityReduction: 5.5,
		tempBuffer: .6,
		description: {
			vi: `Nước mưa rơi xuống sân trung tâm được dẫn theo độ dốc và hệ thống rãnh thoát ra ngoài triền đất hoàng thổ, giữ nền kho khô ráo.`,
			zh: `院面铺砖配合暗沟排水设计，确保强降雨后雨水迅速排出城外，避免墙基积水。`
		}
	}
];
var Ee = [
	{
		id: `1817-yan-birth`,
		year: `1817`,
		reignDate: {
			vi: `Gia Khánh năm thứ 22`,
			zh: `嘉庆二十二年 · 朝邑生诞`
		},
		era: `construction`,
		title: {
			vi: `Diêm Kính Minh chào đời tại Triều Ấp`,
			zh: `阎敬铭诞于朝邑，清廉治政之基`
		},
		detail: {
			vi: `Diêm Kính Minh (1817–1892) sinh ra tại Triều Ấp, Đại Lệ. Sau khi giữ nhiều trọng trách tài chính dưới triều Thanh đến chức Thượng thư Bộ Hộ, ông luôn coi trọng tích trữ lương thực tại địa phương để phòng ngừa thiên tai.`,
			zh: `阎敬铭（1817–1892）生于陕西朝邑。后历任地方及户部尚书，以清廉节用、重视备荒储粮留名史册。`
		},
		figures: {
			vi: `Diêm Kính Minh (阎敬铭)`,
			zh: `阎敬铭`
		},
		context: {
			vi: `Đặt nền tảng nhân vật và tư tưởng tự lực dự phòng cho cộng đồng nông nghiệp Quan Trung.`,
			zh: `理解倡建者的乡土出身与晚清备荒思想渊源。`
		},
		metric: {
			vi: `Tiểu sử người khởi xướng`,
			zh: `倡建者生年`
		},
		sourceIds: [`SRC-002`, `SRC-003`]
	},
	{
		id: `1877-famine`,
		year: `1877`,
		reignDate: {
			vi: `Quang Tự năm thứ 3 (Đinh Sửu)`,
			zh: `光绪三年 · 丁丑奇荒`
		},
		era: `construction`,
		title: {
			vi: `Khủng hoảng lương thực Quan Trung & Động cơ lập kho`,
			zh: `关中特大旱灾，朝邑重创促成建仓之誓`
		},
		detail: {
			vi: `Trận đại hạn năm 1877 tác động đặc biệt nặng nề tới Triều Ấp và vùng Quan Trung. Thực tế thiếu kho dự trữ khiến cứu trợ gặp muộn màng đã trực tiếp thúc đẩy ý tưởng xây dựng một nghĩa thương kiên cố tại quê hương.`,
			zh: `光绪三年关中大旱，朝邑一带受灾尤甚。无粮可调之痛成为促成“民捐民管、储粮备荒”丰图义仓的直接历史动因。`
		},
		figures: {
			vi: `Diêm Kính Minh & nhân dân Triều Ấp chịu nạn đói`,
			zh: `阎敬铭与受灾朝邑乡民`
		},
		context: {
			vi: `Cho thấy nghĩa thương không sinh ra để phô trương, mà là phản ứng sinh tồn trước thảm họa mất mùa.`,
			zh: `揭示义仓并非官样工程，而是针对粮食危机与饥荒记忆的制度回应。`
		},
		metric: {
			vi: `Nguyên nhân trực tiếp`,
			zh: `建仓直接动因`
		},
		sourceIds: [`SRC-002`, `SRC-003`]
	},
	{
		id: `1882-1885-build`,
		year: `1882–1885`,
		reignDate: {
			vi: `Quang Tự năm thứ 8–11`,
			zh: `光绪八至十一年 · 兴建落成`
		},
		era: `construction`,
		title: {
			vi: `Khởi công, cộng đồng Triều Ấp chung tay và hoàn thành 58 kho`,
			zh: `动工兴建、乡绅督造与五十八廒竣工`
		},
		detail: {
			vi: `Khởi công năm 1882 theo đề xướng của Diêm Kính Minh và hoàn thành năm 1885. Theo tư liệu bia ký 1931, không chỉ Diêm Kính Minh mà đông đảo hương thân và dân chúng địa phương đã đóng góp tài chính và trực tiếp giám sát xây dựng.`,
			zh: `1882年动工、1885年落成。据民国二十年（1931）碑刻与档案记载，除阎敬铭倡建外，朝邑乡绅集资并实地督工，方筑成五十八廒规模。`
		},
		figures: {
			vi: `Diêm Kính Minh, hương thân Triều Ấp & thợ xây địa phương`,
			zh: `阎敬铭、朝邑乡绅与本地工匠`
		},
		context: {
			vi: `Khẳng định bản chất “nghĩa thương dân lập” — tài chính và quản lý gắn liền cộng đồng chứ không chỉ phụ thuộc ngân khố triều đình.`,
			zh: `确立丰图义仓“民建民管”的社会属性与工程协作传统。`
		},
		metric: {
			vi: `Sức chứa thiết kế ~5.220 tấn`,
			zh: `设计储量约5220吨`
		},
		sourceIds: [
			`SRC-001`,
			`SRC-002`,
			`SRC-003`
		]
	},
	{
		id: `1900-relief`,
		year: `1900`,
		reignDate: {
			vi: `Quang Tự năm thứ 26 (Canh Tý)`,
			zh: `光绪二十六年 · 开仓赈灾`
		},
		era: `relief`,
		title: {
			vi: `Mở kho phát lương cứu trợ trong nạn đói năm 1900`,
			zh: `光绪二十六年饥荒开廒放赈`
		},
		detail: {
			vi: `Khi mất mùa và biến động xã hội gây nạn đói lan rộng cuối thời Quang Tự, Phong Đồ Nghĩa Thương mở cửa xuất lương cứu tế, trực tiếp giữ ổn định đời sống cho dân chúng Triều Ấp.`,
			zh: `光绪末年荒歉叠加之际，丰图义仓启封放粮赈济乡里，切实履行“积谷备荒”的立仓初衷。`
		},
		figures: {
			vi: `Ban quản lý nghĩa thương & các hộ dân được cứu trợ`,
			zh: `义仓司事与受赈乡邻`
		},
		context: {
			vi: `Chứng minh cơ chế dự trữ cộng đồng hoạt động hiệu quả chỉ 15 năm sau khi hoàn thành công trình.`,
			zh: `落成十五年后即经历实战检验，证实义仓制度的社会救济效能。`
		},
		metric: {
			vi: `Cứu trợ khẩn cấp thời Quang Tự`,
			zh: `首次大型赈饥记录`
		},
		sourceIds: [`SRC-003`]
	},
	{
		id: `1929-drought`,
		year: `1929`,
		reignDate: {
			vi: `Dân Quốc năm thứ 18`,
			zh: `民国十八年 · 关中大旱赈济`
		},
		era: `relief`,
		title: {
			vi: `Tiếp tục mở kho cứu trợ trong đại hạn năm 1929`,
			zh: `民国十八年大旱再度开仓济民`
		},
		detail: {
			vi: `Theo tư liệu của International Online (CRI), trong đợt hạn hán nghiêm trọng năm 1929 tại Thiểm Tây, nguồn thóc tích trữ tại Phong Đồ Nghĩa Thương một lần nữa phát huy vai trò cứu trợ dân vùng hạ du.`,
			zh: `据国际在线报道史料，1929年关中特大旱灾期间，丰图义仓再度开廒济荒，延续近半个世纪的防灾使命。`
		},
		figures: {
			vi: `Cư dân Triều Ấp & các hương thân bảo vệ sổ kho (1931)`,
			zh: `朝邑民众及后续立碑记事乡绅`
		},
		context: {
			vi: `Củng cố niềm tin cộng đồng vào giá trị sống còn của dự trữ lương thực, dẫn đến việc khắc bia tổng kết năm 1931.`,
			zh: `见证跨越清末民初的社会保障延续性，并促成1931年碑记留存后世。`
		},
		metric: {
			vi: `Tái khẳng định vai trò cứu trợ`,
			zh: `民国时期重要赈济节点`
		},
		sourceIds: [`SRC-002`, `SRC-003`]
	},
	{
		id: `1976-1977-repair`,
		year: `1976–1977`,
		reignDate: {
			vi: `Giai đoạn tu sửa hiện đại đầu tiên`,
			zh: `1976–1977年 · 建筑修缮与碑刻移护`
		},
		era: `preservation`,
		title: {
			vi: `Tu sửa gian kho, mái tháp & Di dời hiện vật chữ Long–Hổ`,
			zh: `修缮仓廒顶楼，“龙虎”石刻迁置保护`
		},
		detail: {
			vi: `Các hạng mục kho, mái và lầu cổng được gia cố tu sửa; đồng thời các tấm khắc chữ “Long – Hổ” (龙虎) do Từ Hi Thái hậu đề tặng riêng để biểu dương Diêm Kính Minh được chuyển vị trí bảo quản an toàn.`,
			zh: `对仓房、屋顶及仓楼实施修缮；原存与慈禧太后题赐阎敬铭相关的“龙虎”文字刻石在修缮过程中被移置妥善保存。`
		},
		figures: {
			vi: `Cán bộ quản lý kho lương & đội ngũ tu bổ di tích`,
			zh: `粮站维护人员与文保修缮匠师`
		},
		context: {
			vi: `Giúp công trình giữ nguyên kết cấu qua thế kỷ XX mà không làm thất lạc các hiện vật chữ viết lịch sử quan trọng.`,
			zh: `明确区分“龙虎”题字与“天下第一仓”匾额的各自历史与保存脉络。`
		},
		metric: {
			vi: `Bảo vệ kết cấu & hiện vật Long–Hổ`,
			zh: `重要修缮与文物移护`
		},
		sourceIds: [`SRC-002`]
	},
	{
		id: `1997-2019-heritage`,
		year: `1997–2019`,
		reignDate: {
			vi: `2006 Quốc bảo · 2019 Danh thắng 4A`,
			zh: `2006年国保 · 2019年4A与宣教基地`
		},
		era: `preservation`,
		title: {
			vi: `Từ Di tích Văn vật Quốc gia (2006) đến Danh thắng 4A (2019)`,
			zh: `跻身全国重点文保单位，获评4A级景区与粮食安全教育基地`
		},
		detail: {
			vi: `Giai đoạn 1997–2019 đánh dấu quá trình nghiên cứu bổ sung tư liệu, được Quốc Vụ Viện công nhận Di tích Văn vật Trọng điểm Quốc gia (2006) và trở thành danh thắng 4A cùng cơ sở giáo dục an ninh lương thực quốc gia (2019).`,
			zh: `历经二十余年文献补辑与价值认定，于2006年列入全国重点文物保护单位，2019年获评国家4A级旅游景区及粮食安全宣传教育基地。`
		},
		figures: {
			vi: `Các nhà nghiên cứu di sản & ngành lương thực Thiểm Tây`,
			zh: `文博研究机构与陕西粮食系统`
		},
		context: {
			vi: `Đưa một kho thóc nông thôn trở thành không gian giáo dục di sản kiến trúc và lịch sử an ninh lương thực cấp quốc gia.`,
			zh: `完成由单纯储备设施向国家级文化遗产与教育基地的身份拓展。`
		},
		metric: {
			vi: `2006 Quốc bảo · 2019 4A (2021 ghi 5.229 tấn)`,
			zh: `国保第六批 · 4A级景区`
		},
		sourceIds: [
			`SRC-001`,
			`SRC-003`,
			`SRC-004`
		]
	},
	{
		id: `2023-2026-transition`,
		year: `2023–2026`,
		reignDate: {
			vi: `Chuyển đổi từ dự trữ trung ương sang di sản sống`,
			zh: `2023年退出央储 · 2026年规划与活态传承`
		},
		era: `living`,
		title: {
			vi: `Ngừng dự trữ trung ương (2023), tiếp tục bảo dưỡng & lập quy hoạch (2026)`,
			zh: `停止承担中央储备粮任务，58廒持续维护并编制保护规划`
		},
		detail: {
			vi: `Theo bài báo trên Thiểm Tây Nhật Báo (05/06/2026), từ năm 2023 Phong Đồ Nghĩa Thương không còn đảm nhận nhiệm vụ lưu trữ lương dự trữ trung ương. Tuy nhiên 58 gian kho vẫn được kiểm tra bảo dưỡng định kỳ, song song với các hoạt động trải nghiệm nông canh, Đồng Châu Bang Tử và dự án lập quy hoạch bảo vệ năm 2026.`,
			zh: `据《陕西日报》（2026年6月5日）报道，自2023年起仓城不再承担中央储备粮储存任务，但工作人员仍定期检修58孔仓廒以保持可用状态；2026年5月公开招标由陕西省文化遗产研究院承担保护规划编制，并开展麦收体验与实景演艺活动。`
		},
		figures: {
			vi: `Nhân viên bảo dưỡng kho, nghệ nhân Đồng Châu Bang Tử & Viện Nghiên cứu Di sản Văn hóa Thiểm Tây`,
			zh: `仓房管护团队、同州梆子演职人员与陕西省文化遗产研究院`
		},
		context: {
			vi: `Bước ngoặt quan trọng nhất hiện nay: chuyển từ “kho chứa thóc đang dùng” thành bảo tàng sống về an ninh lương thực và ký ức cộng đồng.`,
			zh: `当代转型核心：从实体国家粮库转变为讲述粮食记忆与农耕智慧的活态文化博物馆。`
		},
		metric: {
			vi: `Cập nhật xác minh 06/2026`,
			zh: `2026年6月核实现状`
		},
		sourceIds: [`SRC-005`, `SRC-007`]
	}
];
var De = [
	{
		id: `yan-jingming`,
		roleTitle: {
			vi: `Diêm Kính Minh (1817–1892)`,
			zh: `阎敬铭 · 倡建者`
		},
		subtitle: {
			vi: `Thượng thư Bộ Hộ · Người khởi xướng nghĩa thương`,
			zh: `晚清户部尚书 · 丰图义仓倡建人`
		},
		period: `1817–1892`,
		narrative: {
			vi: `Chứng kiến thảm họa đói năm Đinh Sửu 1877 tại quê hương Triều Ấp, Diêm Kính Minh đứng ra kêu gọi lập một kho thóc bền vững bằng sức dân tự quản thay vì lệ thuộc hoàn toàn vào ngân khố triều đình.`,
			zh: `目睹光绪三年丁丑奇荒家乡饿殍之痛后，倡议在朝邑筑立“民捐民管、不费国帑”的永固义仓。`
		},
		evidence: {
			vi: `Tư liệu lưu trữ Thiểm Tây (SRC-002) & International Online (SRC-003).`,
			zh: `见陕西省档案馆专题史料及文史报道（SRC-002、SRC-003）。`
		},
		sourceIds: [`SRC-002`, `SRC-003`]
	},
	{
		id: `chaoyi-gentry`,
		roleTitle: {
			vi: `Hương thân Triều Ấp (朝邑乡绅)`,
			zh: `朝邑乡绅 · 筹资与督工群体`
		},
		subtitle: {
			vi: `Bia ký Dân Quốc thứ 20 (1931) ghi công tập thể`,
			zh: `民国二十年碑记实录 · 社区共筑力量`
		},
		period: `1882–1931`,
		narrative: {
			vi: `Phong Đồ Nghĩa Thương không phải công trình của riêng một cá nhân. Văn bia năm 1931 ghi nhận cụ thể vai trò của các hương thân Triều Ấp trong việc đóng góp tiền bạc, đôn đốc thi công và duy trì quy chế quản lý minh bạch.`,
			zh: `丰图义仓并非一人之力可成。民国二十年（1931）碑刻明确记载多位朝邑乡绅共同捐资、监工与司理仓务的事迹，彰显乡土自治传统。`
		},
		evidence: {
			vi: `Hồ sơ bia ký 1931 tại Mạng Lưu trữ Thiểm Tây (SRC-002).`,
			zh: `依据陕西省档案馆藏民国二十年碑刻文献（SRC-002）。`
		},
		sourceIds: [`SRC-002`]
	},
	{
		id: `granary-stewards`,
		roleTitle: {
			vi: `Người quản lý & Bảo dưỡng kho`,
			zh: `仓储管理人员 · 百年守护者`
		},
		subtitle: {
			vi: `Từ sổ sách xuân tá thu hoàn tới tuần kiểm 58 kho ngày nay`,
			zh: `从昔日过斗验粮到今日58廒日常巡检`
		},
		period: `1885–2026`,
		narrative: {
			vi: `Qua gần một thế kỷ rưỡi, đội ngũ thủ kho chịu trách nhiệm kiểm tra ẩm độ, mở cửa thông gió theo mùa và bảo dưỡng mái ngói, sàn gỗ. Kể cả sau năm 2023 khi ngừng trữ dự trữ trung ương, nhân viên vẫn duy trì bảo dưỡng toàn bộ 58 gian kho.`,
			zh: `百余年来，历代司事与现代粮库管理员负责看天开窗、防鼠防潮与修补瓦面。2023年停止央储任务后，管护人员依然坚持定期检修五十八孔仓廒。`
		},
		evidence: {
			vi: `Thiểm Tây Nhật Báo ngày 05/06/2026 (SRC-005).`,
			zh: `据《陕西日报》2026年6月5日实地探访报道（SRC-005）。`
		},
		sourceIds: [`SRC-005`]
	},
	{
		id: `local-residents`,
		roleTitle: {
			vi: `Cư dân Triều Ấp`,
			zh: `朝邑当地居民 · 粮仓记忆共同体`
		},
		subtitle: {
			vi: `Ký ức mùa thu hoạch, vay trả thóc & các đợt cứu đói`,
			zh: `丰收晒粮与灾荒领赈的世代记忆`
		},
		period: `1877–Nay`,
		narrative: {
			vi: `Đối với người dân địa phương, tường thành nghĩa thương gắn với vòng tuần hoàn sinh kế: năm được mùa gửi thóc dự phòng, mùa giáp hạt hoặc đại hạn năm 1900, 1929 lại xếp hàng nhận lương thực vượt qua nạn đói.`,
			zh: `对朝邑百姓而言，高墙之内封存的不只是麦粟，更是荒年活命的指望与秋收后守信归仓的乡规记忆。`
		},
		evidence: {
			vi: `Tư liệu lịch sử cứu trợ 1900, 1929 & ký ức địa phương (SRC-003, SRC-004).`,
			zh: `综合1900与1929年赈济史料及地方口述记忆（SRC-003、SRC-004）。`
		},
		sourceIds: [`SRC-003`, `SRC-004`]
	},
	{
		id: `modern-conservators`,
		roleTitle: {
			vi: `Người bảo tồn & Giáo dục hôm nay`,
			zh: `当代保护者与宣教团队`
		},
		subtitle: {
			vi: `Phòng trưng bày, thực hành nông canh & Quy hoạch 2026`,
			zh: `文化展陈、农耕研学与2026年保护规划`
		},
		period: `2019–2026`,
		narrative: {
			vi: `Đội ngũ chuyên gia di sản, hướng dẫn viên an ninh lương thực và Viện Nghiên cứu Di sản Văn hóa Thiểm Tây đang đánh giá tổng thể giá trị công trình để cân bằng giữa bảo vệ cấu trúc gốc và giáo dục cộng đồng.`,
			zh: `文保工作者、粮食文化讲解员及陕西省文化遗产研究院共同推动价值评估、展示利用与2026年专项保护规划编制。`
		},
		evidence: {
			vi: `Thông báo trúng thầu quy hoạch 27/05/2026 (SRC-007) & SRC-005.`,
			zh: `见2026年5月27日陕西省政府采购中标公告（SRC-007）及SRC-005。`
		},
		sourceIds: [`SRC-005`, `SRC-007`]
	}
];
var Oe = [
	{
		id: `grain-history`,
		code: `01`,
		name: {
			vi: `Lịch sử Lương thực (Grain History)`,
			zh: `粮食起源与农耕史`
		},
		focus: {
			vi: `Quá trình thuần hóa lúa mì, kê vàng và vai trò của bình nguyên Quan Trung trong nông nghiệp phương Bắc.`,
			zh: `追溯粟麦驯化历程与关中平原“八百里秦川”粮仓地理基础。`
		},
		highlights: {
			vi: `Mẫu hạt giống vùng Hoàng Hà · Niên biểu mùa vụ Quan Trung`,
			zh: `北方旱作农耕标本 · 关中四季农时图谱`
		}
	},
	{
		id: `farming-tools`,
		code: `02`,
		name: {
			vi: `Công cụ Canh tác (Farming Tools)`,
			zh: `传统农具与收割器具`
		},
		focus: {
			vi: `Trưng bày nông cụ cày bừa, liềm gặt, quạt rê trấu (phong xa) và cối đá xay bột của nông dân Thiểm Tây.`,
			zh: `展示犁耙、镰刀、木质风车、石磨石碾等传统耕收与加工器物。`
		},
		highlights: {
			vi: `Quạt thóc gỗ · Cối đá tay quay · Xẻng đảo phơi thóc`,
			zh: `木制扬谷风车 · 传统石磨 · 晒场木锨`
		}
	},
	{
		id: `measurement`,
		code: `03`,
		name: {
			vi: `Đơn vị Cân Đong (Measurement)`,
			zh: `传统衡器与量器制度`
		},
		focus: {
			vi: `Các hộp đong bằng gỗ (Đẩu, Thăng), cân đòn và chuẩn quy đổi giúp bảo đảm công bằng khi vay trả thóc.`,
			zh: `陈列官定木斗、升、杆秤及检斤规矩，呈现古仓“春借秋还”如何以标准器维持公平。`
		},
		highlights: {
			vi: `1 Đẩu (斗) = 10 Thăng (升) · Chuẩn cân đong cộng đồng`,
			zh: `一斗十升传统容积体系 · 民仓公斗`
		}
	},
	{
		id: `food-culture`,
		code: `04`,
		name: {
			vi: `Văn hóa Ẩm thực & Tem phiếu (Food Culture)`,
			zh: `饮食民俗与粮票记忆`
		},
		focus: {
			vi: `Nghệ thuật chế biến lúa mì vùng Vị Nam cùng bộ sưu tập tem phiếu lương thực (粮票) thời kinh tế kế hoạch.`,
			zh: `呈现关中麦食习俗与二十世纪粮油供应票证（粮票），记录一代人的温饱记忆。`
		},
		highlights: {
			vi: `Tem phiếu lương thực · Dụng cụ làm mì truyền thống`,
			zh: `各年代地方与全国粮票 · 传统面食器具`
		}
	},
	{
		id: `grain-storage`,
		code: `05`,
		name: {
			vi: `Công nghệ Kho chứa (Grain Storage)`,
			zh: `历代储粮与防潮技术`
		},
		focus: {
			vi: `Đối chiếu cách tích trữ lương thực cổ đại (hầm đất, kho vòm gạch, sàn kê gỗ) với hệ thống giám sát hiện đại.`,
			zh: `对比地窖、砖券仓廒及架空地板等传统储粮智慧，阐释防虫、防鼠与防潮原理。`
		},
		highlights: {
			vi: `Mô hình gian hầm vòm · Vật liệu chống ẩm tự nhiên`,
			zh: `砖券廒房模型 · 传统防潮隔垫材料`
		}
	},
	{
		id: `food-security`,
		code: `06`,
		name: {
			vi: `An ninh Lương thực & Cứu trợ (Food Security)`,
			zh: `备荒制度与粮食安全`
		},
		focus: {
			vi: `Khái quát lịch sử Thường Bình Thương, Xã Thương và Nghĩa Thương — từ cứu đói cổ đại đến giáo dục an ninh lương thực ngày nay.`,
			zh: `梳理常平仓、社仓至义仓的备荒理念演变，连接当代粮食安全教育实践。`
		},
		highlights: {
			vi: `Quy chế Nghĩa Thương · Giáo dục tiết kiệm lương thực`,
			zh: `义仓章程文献 · 当代惜粮教育展陈`
		}
	}
];
var O = [
	{
		id: `quiz-dou`,
		prompt: {
			vi: `Dụng cụ hình hộp vuông bằng gỗ viền sắt dùng để đong thể tích thóc khi nông dân vay và hoàn trả gọi là gì?`,
			zh: `古代义仓在“春借秋还”时用于公平计量粮食体积的木制方器称为什么？`
		},
		options: [
			{
				id: `dou`,
				label: {
					vi: `Đẩu đong gỗ (木斗)`,
					zh: `木斗（量器）`
				}
			},
			{
				id: `windmill`,
				label: {
					vi: `Quạt rê trấu (木风车)`,
					zh: `木质扇谷风车`
				}
			},
			{
				id: `mill`,
				label: {
					vi: `Cối xay đá (石磨)`,
					zh: `石磨`
				}
			}
		],
		correctOptionId: `dou`,
		explanation: {
			vi: `Chính xác! Đẩu (木斗) là dụng cụ đo thể tích tiêu chuẩn (1 Đẩu = 10 Thăng), gạt ngang miệng bằng thanh gỗ gạt (斗刮) để tránh gian lận khi xuất nhập kho.`,
			zh: `正确！木斗为传统标准容积量器（一斗合十升），装满后须以“斗刮”抹平斗口，确保借还公允。`
		}
	},
	{
		id: `quiz-winnow`,
		prompt: {
			vi: `Trước khi đưa lúa mì vào 58 gian kho, thiết bị nào dùng sức gió quay tay để tách hạt lép và bụi rơm ra khỏi hạt chắc?`,
			zh: `小麦入廒储存前，农人转动手柄产生风力以吹净麦糠与瘪粒的器具是哪一种？`
		},
		options: [
			{
				id: `ration`,
				label: {
					vi: `Tem phiếu lương thực (粮票)`,
					zh: `粮票`
				}
			},
			{
				id: `windmill`,
				label: {
					vi: `Quạt rê thóc / Phong xa (木风车)`,
					zh: `木风车（扇车）`
				}
			},
			{
				id: `steelyard`,
				label: {
					vi: `Cân đòn móc sắt (杆秤)`,
					zh: `传统杆秤`
				}
			}
		],
		correctOptionId: `windmill`,
		explanation: {
			vi: `Đúng rồi! Phong xa (木风车) làm sạch tạp chất trước khi nhập kho — tạp chất lẫn rơm rạ dễ hút ẩm và sinh mối mọt trong quá trình bảo quản dài ngày.`,
			zh: `正确！木风车（扬谷扇车）可高效清选麦粒中的碎秆与灰土，减少杂质吸潮发霉隐患。`
		}
	},
	{
		id: `quiz-coupon`,
		prompt: {
			vi: `Tờ chứng nhận in bằng giấy dùng trong nửa sau thế kỷ XX để phân phối định mức lúa mì, gạo, dầu ăn cho từng hộ gia đình là gì?`,
			zh: `二十世纪下半叶用于按户定量供应粮食与食用油的纸质凭证称为什么？`
		},
		options: [
			{
				id: `coupon`,
				label: {
					vi: `Tem phiếu lương thực (粮票)`,
					zh: `粮票 / 粮油供应证`
				}
			},
			{
				id: `dou`,
				label: {
					vi: `Đẩu đong gỗ (木斗)`,
					zh: `木斗`
				}
			},
			{
				id: `flail`,
				label: {
					vi: `Chày đập lúa (连枷)`,
					zh: `连枷`
				}
			}
		],
		correctOptionId: `coupon`,
		explanation: {
			vi: `Chính xác! Bộ sưu tập tem phiếu (粮票) tại bảo tàng phản ánh thời kỳ lương thực được phân phối chặt chẽ theo kế hoạch quốc gia.`,
			zh: `正确！粮票展品真实记录了计划经济时期粮食统购统销与按量供给的历史阶段。`
		}
	}
];
var k = [
	{
		id: `evt-2026-opera`,
		dateLabel: `06/2026 · Ghi nhận báo chí`,
		statusTag: {
			vi: `Sự kiện theo kỳ (SRC-005)`,
			zh: `2026年6月实况记录`
		},
		title: {
			vi: `Đồng Châu Bang Tử & Vở thực cảnh “Long Hổ Trấn Thương Ký”`,
			zh: `同州梆子主题展演与《龙虎镇仓记》实景演出`
		},
		description: {
			vi: `Bài báo ngày 05/06/2026 của Thiểm Tây Nhật Báo ghi nhận các buổi trình diễn nghệ thuật dân gian Đồng Châu Bang Tử kết hợp vở diễn thực cảnh “Long Hổ Trấn Thương Ký” và tái hiện nghi lễ mở kho “Khai Thương Đại Điển” (开仓大典) ngay tại khu di tích.`,
			zh: `《陕西日报》2026年6月5日报道记录了景区推出的“丰图义仓”主题同州梆子戏曲、《龙虎镇仓记》实景剧及“开仓大典”仪式再现活动。`
		},
		sourceIds: [`SRC-005`]
	},
	{
		id: `evt-2026-harvest`,
		dateLabel: `06/2026 · Ghi nhận báo chí`,
		statusTag: {
			vi: `Trải nghiệm nông canh`,
			zh: `农耕与粮票体验`
		},
		title: {
			vi: `Trải nghiệm thu hoạch lúa mì, nông cụ & trao đổi mô phỏng tem phiếu`,
			zh: `夏收割麦农具体验与模拟粮票文化互动`
		},
		description: {
			vi: `Du khách và học sinh được trực tiếp dùng nông cụ thu hoạch lúa mì vụ hè và tham gia hoạt động trao đổi vật phẩm mô phỏng tem phiếu (粮票) nhằm hiểu giá trị lao động nông nghiệp.`,
			zh: `参与者可体验传统收麦农具操作，并通过模拟“粮票兑换”环节直观感受储粮与惜粮文化（注：属特定节庆期报道活动，非每日固定常设项目）。`
		},
		sourceIds: [`SRC-005`]
	},
	{
		id: `evt-2026-plan`,
		dateLabel: `27/05/2026 · Hồ sơ mua sắm công`,
		statusTag: {
			vi: `Bảo tồn 2026 (SRC-007)`,
			zh: `2026年保护规划动态`
		},
		title: {
			vi: `Lập Quy hoạch Bảo vệ Di tích Phong Đồ Nghĩa Thương (Hợp đồng 180 ngày)`,
			zh: `陕西省文化遗产研究院中标编制丰图义仓保护规划`
		},
		description: {
			vi: `Ngày 27/05/2026, địa phương công bố kết quả lựa chọn Viện Nghiên cứu Di sản Văn hóa Thiểm Tây thực hiện lập quy hoạch bảo vệ tổng thể (đánh giá giá trị, ranh giới bảo vệ, môi trường, trưng bày và quản lý trong thời hạn 180 ngày). Tình trạng phê duyệt bản quy hoạch cuối cùng hiện chưa có thông báo công khai.`,
			zh: `2026年5月27日公开招标由陕西省文化遗产研究院承担丰图义仓保护规划编制（涵盖价值评估、保护区划、环境整治与展示管理，合同工期180日；最终批复结果尚待后续公告确认）。`
		},
		sourceIds: [`SRC-007`]
	}
];
var ke = [
	{
		id: `cluster-fengtu`,
		name: {
			vi: `Phong Đồ Nghĩa Thương (丰图义仓)`,
			zh: `丰图义仓`
		},
		period: {
			vi: `Đời Thanh · 1882–1885`,
			zh: `清光绪八至十一年（1882–1885）`
		},
		relation: {
			vi: `Trung tâm cụm di tích · Thôn Đại Nhất, trấn Triều Ấp`,
			zh: `核心地标 · 朝邑镇大一村`
		},
		description: {
			vi: `Nghĩa thương dân lập 58 gian kho vòm gạch bảo tồn nguyên vẹn, giữ vai trò hạt nhân của cụm di sản nông nghiệp và lịch sử Triều Ấp.`,
			zh: `保存完好的清代民办大型义仓建筑群，现为全国重点文物保护单位与粮食文化展示核心。`
		},
		image: Ce.hero
	},
	{
		id: `cluster-daici`,
		name: {
			vi: `Lầu Đại Từ Sầm (岱祠岑楼)`,
			zh: `岱祠岑楼`
		},
		period: {
			vi: `Khởi nguồn từ thời Bắc Tống · Tu sửa qua nhiều triều đại`,
			zh: `始建可溯至北宋 · 历代重修`
		},
		relation: {
			vi: `Cụm di sản phía Bắc Phong Đồ Nghĩa Thương`,
			zh: `位于丰图义仓北侧朝邑古建群内`
		},
		description: {
			vi: `Công trình lầu hát cổ gắn với miếu Đông Nhạc (东岳庙) của trấn cổ Triều Ấp, phản ánh đời sống tín ngưỡng và sinh hoạt văn hóa dân gian gắn liền với vùng kho lương.`,
			zh: `原属朝邑东岳庙建筑序列的古代戏楼，历史渊源可追溯至北宋，与丰图义仓共同构成朝邑北坡文化景观带。`
		},
		image: Ce.courtyard
	},
	{
		id: `cluster-jinlong`,
		name: {
			vi: `Tháp chùa Kim Long (金龙寺塔)`,
			zh: `金龙寺塔`
		},
		period: {
			vi: `Tháp gạch cổ 7 tầng`,
			zh: `七层古砖塔`
		},
		relation: {
			vi: `Cùng cụm di sản phía Bắc với Lầu Đại Từ`,
			zh: `与岱祠岑楼同属丰图义仓北向历史组团`
		},
		description: {
			vi: `Ngôi tháp gạch 7 tầng gắn với lịch sử chùa Kim Long trên triền cao Triều Ấp, tạo điểm nhấn cảnh quan và liên kết không gian tham quan vùng cổ trấn.`,
			zh: `七级砖砌佛塔与金龙寺历史相承，矗立于朝邑高塬之上，与义仓、岱祠岑楼形成连续的历史视线走廊。`
		},
		image: Ce.pagoda
	}
];
var Ae = [
	{
		id: `stop-tongguan`,
		order: `01`,
		name: {
			vi: `Cổ thành Đồng Quan (潼关古城)`,
			zh: `潼关古城`
		},
		role: {
			vi: `Cửa ngõ Hoàng Hà – Vị Hà`,
			zh: `黄河入关门户`
		},
		highlight: {
			vi: `Khởi điểm tuyến văn hóa Hoàng Hà – làng cổ do Bộ Văn hóa & Du lịch Trung Quốc công bố ngày 17/07/2024.`,
			zh: `2024年7月17日文化和旅游部公布之黄河古村文化线路起点，扼守山河要冲。`
		}
	},
	{
		id: `stop-fengtu`,
		order: `02`,
		name: {
			vi: `Phong Đồ Nghĩa Thương (丰图义仓)`,
			zh: `丰图义仓`
		},
		role: {
			vi: `Trạm trọng tâm về di sản lương thực`,
			zh: `粮食安全与义仓典范`
		},
		highlight: {
			vi: `Điểm nhấn kiến trúc kho thóc đời Thanh và bảo tàng di sản sống tại trấn Triều Ấp, Đại Lệ.`,
			zh: `朝邑高塬上的清代城池式粮仓，展现农耕备荒与社区互助文化。`
		}
	},
	{
		id: `stop-dangjia`,
		order: `03`,
		name: {
			vi: `Làng cổ Đảng Gia (党家村)`,
			zh: `韩城党家村`
		},
		role: {
			vi: `Quần thể dân cư tứ hợp viện Hàn Thành`,
			zh: `民居瑰宝古村落`
		},
		highlight: {
			vi: `Làng cổ bảo tồn hơn trăm tứ hợp viện thời Minh – Thanh dọc thung lũng phía Bắc.`,
			zh: `以明清四合院与家训刻石闻名的历史文化名村，呈现关中东府民居营造智慧。`
		}
	},
	{
		id: `stop-chenlu`,
		order: `04`,
		name: {
			vi: `Cổ trấn Trần Lô (陈炉古镇)`,
			zh: `陈炉古镇`
		},
		role: {
			vi: `Di sản gốm Diệu Châu ngàn năm`,
			zh: `千年陶瓷古镇`
		},
		highlight: {
			vi: `Lò gốm truyền thống đỏ lửa nhiều thế kỷ, nối tiếp mạch nghề thủ công dân gian Thiểm Tây.`,
			zh: `依托耀州窑千年窑火延续至今的陶瓷聚落，建筑依山层叠，缸罐垒墙。`
		}
	},
	{
		id: `stop-mengjiangyuan`,
		order: `05`,
		name: {
			vi: `Thôn Mạnh Khương Nguyên (孟姜塬村)`,
			zh: `孟姜塬村`
		},
		role: {
			vi: `Làng nông nghiệp & văn hóa cuối tuyến`,
			zh: `农旅融合收官站`
		},
		highlight: {
			vi: `Khép lại hành trình khám phá nông thôn mới và văn hóa đồng bằng Vị Bắc.`,
			zh: `结合渭北塬区果业生态与民间传说文化的乡村旅游节点。`
		}
	}
];
var je = [
	{
		id: `op-address`,
		label: {
			vi: `Địa chỉ di tích`,
			zh: `景区地址`
		},
		value: `大荔县朝邑镇大一村朝渡路 (Thôn Đại Nhất, trấn Triều Ấp, huyện Đại Lệ)`,
		status: `verified`,
		note: {
			vi: `Địa điểm chính thức tại trấn Triều Ấp, thành phố Vị Nam, Thiểm Tây.`,
			zh: `陕西省渭南市大荔县朝邑镇大一村朝渡路定位确切。`
		}
	},
	{
		id: `op-hours`,
		label: {
			vi: `Giờ mở cửa niêm yết`,
			zh: `参考开放时间`
		},
		value: `08:00–18:00`,
		status: `check-before-visit`,
		note: {
			vi: `Ghi nhận trên nền tảng du lịch (2026); có thể điều chỉnh theo mùa đông/hè — nên gọi kiểm tra trước khi đến.`,
			zh: `源于2026年旅游平台公开列表，冬夏时令或有微调，出行前请电话复核。`
		}
	},
	{
		id: `op-phone`,
		label: {
			vi: `Điện thoại tư vấn vé`,
			zh: `票务咨询电话`
		},
		value: `0913-3412522`,
		status: `check-before-visit`,
		note: {
			vi: `Số điện thoại niêm yết của điểm tham quan để hỏi giá vé mùa hiện tại và lịch diễn.`,
			zh: `可用于出发前确认当日门票优惠政策及文化活动场次。`
		}
	},
	{
		id: `op-transit`,
		label: {
			vi: `Tàu cao tốc & Xe buýt`,
			zh: `高铁与公共交通`
		},
		value: `Ga Đại Lệ (大荔站) → Tuyến buýt Đại Lệ 101`,
		status: `check-before-visit`,
		note: {
			vi: `Tuyến Đại Lệ 101 được các đơn vị tổng hợp lịch xe ghi nhận kết nối ga với Phong Đồ Nghĩa Thương; nên kiểm tra giờ xuất bến thực tế.`,
			zh: `多处公交聚合站点记录大荔101路连接高铁大荔站与丰图义仓，乘车前请核对实时班次。`
		}
	}
];
var Me = [
	{
		id: `heritage-45`,
		durationMinutes: 45,
		name: {
			vi: `Tuyến Khám phá Cốt lõi (45 phút)`,
			zh: `核心遗产速览线（45分钟）`
		},
		focus: {
			vi: `Chu Tước Môn, dạo Hồi Lang, quan sát 58 gian kho vòm gạch và lên tường thành nhìn về Hoàng Hà.`,
			zh: `由朱雀门入，经木构回廊察看五十八孔仓廒，登城顶马道远眺黄河高塬地势。`
		},
		stationIds: [
			`chu-tuoc-mon`,
			`hoi-lang`,
			`58-ao-luong`,
			`tuong-thanh-hoang-ha`
		]
	},
	{
		id: `architecture-90`,
		durationMinutes: 90,
		name: {
			vi: `Tuyến Kiến trúc & Chống ẩm (90 phút)`,
			zh: `建筑防潮研读线（90分钟）`
		},
		focus: {
			vi: `Khảo sát toàn bộ hai cổng Đông–Tây, sân phơi & hệ thống thoát nước, 58 gian kho và mặt cắt sàn gỗ kê cao.`,
			zh: `完整考察东西运粮通道、中心院落排水暗沟、砖券廒房与架空防潮构造。`
		},
		stationIds: [
			`chu-tuoc-mon`,
			`cong-dong`,
			`cong-tay`,
			`san-thoat-nuoc`,
			`58-ao-luong`
		]
	},
	{
		id: `scholar-120`,
		durationMinutes: 120,
		name: {
			vi: `Tuyến Nghiên cứu & Bảo tàng (120 phút)`,
			zh: `文史档案与全区研学线（120分钟）`
		},
		focus: {
			vi: `Đi trọn 8 điểm dừng trong thành kho, đọc tư liệu bia ký 1931 và kết hợp Bảo tàng Văn hóa Lương thực.`,
			zh: `遍览八大空间节点，细读1931年碑刻乡绅共筑史料并参观粮食文化专题展厅。`
		},
		stationIds: [
			`chu-tuoc-mon`,
			`cong-dong`,
			`cong-tay`,
			`58-ao-luong`,
			`hoi-lang`,
			`san-thoat-nuoc`,
			`tuong-thanh-hoang-ha`,
			`bia-ky`
		]
	}
];
var Ne = [
	{
		id: `SRC-001`,
		title: `Cục Quản lý Lương thực và Dự trữ Nhà nước Trung Quốc (2021)`,
		publisher: `lswz.gov.cn`,
		url: `https://www.lswz.gov.cn/html/ywpd/zfdc/2021-02/02/content_264243.shtml`,
		purpose: {
			vi: `Ghi nhận số liệu năm 2021 (5.229 tấn lương dự trữ trung ương), 58 gian kho và 12 phòng trưng bày + khu trải nghiệm nông canh.`,
			zh: `记录2021年5229吨央储粮数据、58廒规模及十二展室与农耕体验区。`
		}
	},
	{
		id: `SRC-002`,
		title: `Mạng Lưu trữ Tỉnh Thiểm Tây — Hồ sơ Phong Đồ Nghĩa Thương`,
		publisher: `daj.shaanxi.gov.cn`,
		url: `https://daj.shaanxi.gov.cn/Article/View?id=1805`,
		purpose: {
			vi: `Bia ký năm Dân Quốc thứ 20 (1931) về vai trò hương thân Triều Ấp, lịch sử tu sửa 1976–1977 và di dời chữ Long–Hổ.`,
			zh: `核证1931年碑记、朝邑乡绅督造角色、1976–1977年修缮及“龙虎”文字迁保详情。`
		}
	},
	{
		id: `SRC-003`,
		title: `International Online (CRI) — Tư liệu lịch sử & cứu trợ 1900, 1929`,
		publisher: `sn.cri.cn`,
		url: `https://sn.cri.cn/2019-03-13/9e36ae91-6b5c-da7d-fe23-b845da9f7dc2.html`,
		purpose: {
			vi: `Tư liệu về đại hạn 1877, mở kho cứu đói 1900 và 1929, cùng đặc điểm địa hình và cấu trúc chống ẩm.`,
			zh: `记录1877年旱灾、1900与1929年开仓放赈史实及建筑防潮构造说明。`
		}
	},
	{
		id: `SRC-004`,
		title: `China News Radio — Lịch sử sử dụng và giá trị di sản`,
		publisher: `cnr.cn`,
		url: `https://www.cnr.cn/sxpd/c/20220426/t20220426_525807142.shtml`,
		purpose: {
			vi: `Ghi nhận giá trị sử dụng lâu dài và chuyển đổi thành không gian giáo dục văn hóa du lịch tại Đại Lệ.`,
			zh: `阐释百年仓廒历久弥新的保护价值与地方文旅融合脉络。`
		}
	},
	{
		id: `SRC-005`,
		title: `Thiểm Tây Nhật Báo (05/06/2026) — 麦浪飘香绕粮仓`,
		publisher: `esb.sxdaily.com.cn`,
		url: `https://esb.sxdaily.com.cn/pc/content/202606/05/content_2048336.html`,
		purpose: {
			vi: `Xác nhận ngừng nhiệm vụ dự trữ trung ương từ 2023, vẫn bảo dưỡng 58 kho năm 2026 và các hoạt động Đồng Châu Bang Tử / Khai Thương Đại Điển.`,
			zh: `确认2023年停止央储、2026年维持58廒管护以及《龙虎镇仓记》与夏收互动报道。`
		}
	},
	{
		id: `SRC-006`,
		title: `Bộ Văn hóa và Du lịch Trung Quốc — Tuyến văn hóa Hoàng Hà (17/07/2024)`,
		publisher: `zhuanti.mct.gov.cn`,
		url: `https://zhuanti.mct.gov.cn/xcss2024_xcygj/shanxi1/detail/7193.html`,
		purpose: {
			vi: `Công bố chính thức tuyến Đồng Quan → Phong Đồ Nghĩa Thương → Đảng Gia Thôn → Trần Lô → Mạnh Khương Nguyên.`,
			zh: `官方发布“潼关古城—丰图义仓—党家村—陈炉古镇—孟姜塬村”乡村文化线路。`
		}
	},
	{
		id: `SRC-007`,
		title: `Cổng mua sắm công Thiểm Tây (27/05/2026) — Quy hoạch bảo vệ di tích`,
		publisher: `ccgp-shaanxi.gov.cn`,
		url: `https://www.ccgp-shaanxi.gov.cn/freecms/site/shaanxi/ggxx/info/2026/8a69c1139e331350019e6825b4f73ff1.html`,
		purpose: {
			vi: `Ghi nhận Viện Nghiên cứu Di sản Văn hóa Thiểm Tây trúng thầu lập quy hoạch bảo vệ Phong Đồ Nghĩa Thương (180 ngày).`,
			zh: `公布陕西省文化遗产研究院中标编制丰图义仓保护规划（工期180日）。`
		}
	},
	{
		id: `SRC-008`,
		title: `UNESCO World Heritage — Interpretation and Communication Principles`,
		publisher: `whc.unesco.org`,
		url: `https://whc.unesco.org/en/faq/290`,
		purpose: {
			vi: `7 nguyên tắc chuẩn biên tập di sản: khả năng tiếp cận, nguồn tin cậy, bối cảnh tự nhiên–xã hội, tính xác thực, bền vững, bao trùm và đánh giá liên tục.`,
			zh: `确立遗产阐释与传播的七项核心编辑原则。`
		}
	},
	{
		id: `SRC-009`,
		title: `ICOMOS — International Cultural Heritage Tourism Charter`,
		publisher: `icomoschina.org.cn`,
		url: `https://www.icomoschina.org.cn/content/details48_9834.html`,
		purpose: {
			vi: `Chuẩn mực đạo đức bảo tồn: tái dựng số phải có căn cứ nghiên cứu, không làm tổn hại tính xác thực của di tích gốc.`,
			zh: `规范数字化展示伦理，坚持研究依据与遗产原真性优先原则。`
		}
	}
];
var Pe = [
	{
		id: `fc-5000`,
		claim: {
			vi: `Hiện vẫn đang trữ ~5.000 tấn thóc quốc gia trong kho`,
			zh: `现仍常态存放五千吨中央储备粮`
		},
		resolution: {
			vi: `ĐÃ SỬA: Từ năm 2023 kho đã ngừng nhiệm vụ lưu trữ lương dự trữ trung ương; 58 kho vẫn được bảo dưỡng nhưng chuyển sang di sản & giáo dục (SRC-005).`,
			zh: `已更正：2023年起不再承担中央储备粮任务，现存58廒重点用于养护及文博展示（SRC-005）。`
		},
		status: `corrected`
	},
	{
		id: `fc-5220`,
		claim: {
			vi: `Số liệu 5.220 tấn so với 5.229 tấn`,
			zh: `5220吨与5229吨数据区分`
		},
		resolution: {
			vi: `XÁC MINH THEO NGỮ CẢNH: ~5.220 tấn là sức chứa thiết kế tổng khu; 5.229 tấn là lượng dự trữ được báo cáo năm 2021 (SRC-001).`,
			zh: `区分口径：5220吨为设计总容量估算；5229吨为2021年官方报道在储记录（SRC-001）。`
		},
		status: `verified-with-context`
	},
	{
		id: `fc-18c`,
		claim: {
			vi: `Nhiệt độ trong kho luôn ổn định quanh 18°C suốt bốn mùa`,
			zh: `仓内四季恒温18℃`
		},
		resolution: {
			vi: `ĐÃ ĐIỀU CHỈNH: Chưa đủ dữ liệu đo liên tục hiện đại để khẳng định cố định 18°C; bộ mô phỏng trên trang được gắn nhãn rõ là mô hình giáo dục.`,
			zh: `已审慎改写：尚缺公开连续实测序列证明恒定18℃，微气候模块明确标注为教学示意模型。`
		},
		status: `corrected`
	},
	{
		id: `fc-58-vaults`,
		claim: {
			vi: `Thông số kích thước, tải trọng và nhiệt độ riêng cho từng hầm số 01–58`,
			zh: `按编号生成单廒宽深温湿度数据`
		},
		resolution: {
			vi: `ĐÃ LOẠI BỎ DỮ LIỆU GIẢ LẬP: Không còn sinh số đo giả theo số thứ tự; Granary Explorer dùng nhãn Demo Concept và chỉ hiển thị số liệu công bố toàn khu.`,
			zh: `已移除推算伪数据：五十八廒浏览器标注为概念演示，不再虚构单廒实测参数。`
		},
		status: `corrected`
	},
	{
		id: `fc-12-halls`,
		claim: {
			vi: `12 phòng trưng bày văn hóa lương thực`,
			zh: `十二个粮食文化展室`
		},
		resolution: {
			vi: `6 nhóm chủ đề trong Bảo tàng số là phân nhóm biên tập (SRC-001 ghi nhận 12 phòng năm 2021, cần xác minh danh mục phòng hiện tại).`,
			zh: `本页六大板块为编研归类，非取代2021年记载之十二展室官方目录（待现场复核）。`
		},
		status: `needs-survey`
	},
	{
		id: `fc-longhu`,
		claim: {
			vi: `Danh hiệu “天下第一仓” và hai chữ “龙虎”`,
			zh: `“天下第一仓”与“龙虎”二字区分`
		},
		resolution: {
			vi: `Tách riêng câu chuyện Từ Hi Thái hậu đề chữ Long–Hổ biểu dương Diêm Kính Minh (chuyển bảo quản khi tu sửa 1976–1977) khỏi biển hiệu Thiên hạ đệ nhất thương (SRC-002).`,
			zh: `明确区分御封名号与1976–1977年修缮时移置保护的“龙虎”刻石典故（SRC-002）。`
		},
		status: `verified-with-context`
	},
	{
		id: `fc-hours-ticket`,
		claim: {
			vi: `Giờ mở cửa 08:00–18:00, xe buýt Đại Lệ 101 & giá vé`,
			zh: `开放时间、大荔101路及门票价格`
		},
		resolution: {
			vi: `Không cố định giá vé trong mã nguồn; gắn nhãn “Check before visit” cho giờ mở cửa, điện thoại 0913-3412522 và tuyến buýt.`,
			zh: `不固化变动票价；开放时段与公交信息均标注“行前核实”。`
		},
		status: `needs-survey`
	},
	{
		id: `fc-map-plan`,
		claim: {
			vi: `Sơ đồ mặt bằng 3 lớp phòng thủ (kể cả thành trại 1891)`,
			zh: `三层防御平面图与1891年寨墙`
		},
		resolution: {
			vi: `Ghi chú rõ đây là sơ đồ minh họa định hướng không gian; bản vẽ đo đạc chính thức cần đối chiếu với Quy hoạch bảo vệ 2026 (SRC-007).`,
			zh: `明确标示为空间导览示意图，非正式测绘总图，待与2026年保护规划图纸核准（SRC-007）。`
		},
		status: `needs-survey`
	}
];
var Fe = [
	{
		code: `01`,
		title: {
			vi: `Tiếp cận & Khả năng hiểu`,
			zh: `可及性与可读性`
		},
		note: {
			vi: `Giao diện song ngữ Việt–Trung, hỗ trợ bàn phím và nhãn thay thế rõ ràng.`,
			zh: `提供中越双语对照、键盘导航及图文替代文本。`
		}
	},
	{
		code: `02`,
		title: {
			vi: `Nguồn thông tin đáng tin cậy`,
			zh: `信源可靠可溯`
		},
		note: {
			vi: `Mọi mốc lịch sử và số liệu đều gắn mã tham chiếu SRC-001 đến SRC-009.`,
			zh: `所有史实均关联至公开研究与档案编号（SRC-001–009）。`
		}
	},
	{
		code: `03`,
		title: {
			vi: `Bối cảnh tự nhiên & xã hội`,
			zh: `自然与社会语境`
		},
		note: {
			vi: `Đặt kho lương trong tương quan hạn hán Quan Trung, Hoàng Hà và cộng đồng Triều Ấp.`,
			zh: `置于关中旱涝地理与乡土互助制度中解读建筑意义。`
		}
	},
	{
		code: `04`,
		title: {
			vi: `Bảo vệ tính xác thực (ICOMOS)`,
			zh: `守护遗产原真性`
		},
		note: {
			vi: `Phân biệt minh bạch giữa tư liệu xác minh, dữ liệu trung bình và mô phỏng giáo dục.`,
			zh: `严守真实记录与教学示意的边界，杜绝杜撰单廒参数。`
		}
	},
	{
		code: `05`,
		title: {
			vi: `Phát triển bền vững`,
			zh: `可持续发展导向`
		},
		note: {
			vi: `Gắn bảo tồn kiến trúc với giáo dục an ninh lương thực và cụm di sản địa phương.`,
			zh: `兼顾文物本体安全、粮食教育与地方文化共生。`
		}
	},
	{
		code: `06`,
		title: {
			vi: `Tính bao trùm cộng đồng`,
			zh: `社区记忆包容性`
		},
		note: {
			vi: `Kể câu chuyện của hương thân, người giữ kho và cư dân địa phương bên cạnh danh nhân.`,
			zh: `让乡绅、守仓人与普通民众的声音同样进入叙事中心。`
		}
	},
	{
		code: `07`,
		title: {
			vi: `Nghiên cứu & Đánh giá liên tục`,
			zh: `持续研究与动态更新`
		},
		note: {
			vi: `Ghi nhận thay đổi 2023–2026 và chờ cập nhật khi quy hoạch bảo vệ được phê duyệt.`,
			zh: `随2023–2026年职能转型与最新保护规划进展持续修订。`
		}
	}
];
function Ie(e, t, n, r) {
	let i = Math.min(100, Math.max(20, e)), a = Math.min(200, Math.max(0, t)), o = new Set(n), s = 0, c = 0;
	for (let e of r) o.has(e.id) && (s += e.humidityReduction, c += e.tempBuffer);
	let l = o.has(`drainage`) ? .22 : 1, u = o.has(`roof`) ? .3 : 1, d = i + a / 200 * 14 * l * u - s, f = Math.round(Math.min(95, Math.max(38, d)) * 10) / 10, p = Math.round((i - f) * 10) / 10, m = Math.round(Math.max(1.8, 14 - c) * 10) / 10, h = 6;
	return f <= 58 ? h = 36 : f <= 65 ? h = 24 : f <= 72 && (h = 12), {
		internalHumidity: f,
		humidityDelta: p,
		tempVarianceC: m,
		safeStorageMonths: h,
		grade: f <= 62 ? `optimal` : f <= 72 ? `stable` : `caution`
	};
}
function Le(e, t) {
	let n = new Set(t), r = e.length;
	if (r === 0) return {
		completedCount: 0,
		totalCount: 0,
		percent: 0,
		nextStationId: null
	};
	let i = 0, a = null;
	for (let t of e) n.has(t) ? i += 1 : a === null && (a = t);
	let o = Math.round(i / r * 100);
	return {
		completedCount: i,
		totalCount: r,
		percent: o,
		nextStationId: a
	};
}
function Re(e, t) {
	return t === `all` ? e : e.filter((e) => e.era === t);
}
function ze(e, t) {
	if (e.length === 0) return {
		activeEntry: null,
		activeIndex: -1,
		prevEntry: null,
		nextEntry: null,
		progressPercent: 0
	};
	let n = e.findIndex((e) => e.id === t), r = n >= 0 ? n : 0;
	return {
		activeEntry: e[r],
		activeIndex: r,
		prevEntry: r > 0 ? e[r - 1] : null,
		nextEntry: r < e.length - 1 ? e[r + 1] : null,
		progressPercent: e.length <= 1 ? 100 : Math.round(r / (e.length - 1) * 100)
	};
}
function Ve(e, t) {
	let n = t.trim().toLowerCase();
	return n ? e.filter((e) => e.id.toLowerCase().includes(n) || e.title.toLowerCase().includes(n) || e.publisher.toLowerCase().includes(n) || e.purpose.vi.toLowerCase().includes(n) || e.purpose.zh.toLowerCase().includes(n)) : e;
}
function He(e, t) {
	return e.filter((e) => e.layerId === t);
}
function Ue(e, t, n) {
	let r = He(e, t);
	return r.length === 0 || r.some((e) => e.id === n) ? n : r[0].id;
}
function j(e, t) {
	return t === `zh` ? e.zh : e.vi;
}
function M({ text: e, lang: t, className: n = ``, secondaryClassName: r = `mt-1 text-ink/70 text-[0.92em]`, as: i = `div` }) {
	return t === `vi` ? (0, A.jsx)(i, {
		className: n,
		children: e.vi
	}) : t === `zh` ? (0, A.jsx)(i, {
		lang: `zh-Hans`,
		className: n,
		children: e.zh
	}) : (0, A.jsxs)(i, {
		className: n,
		children: [(0, A.jsx)(`span`, {
			className: `block`,
			children: e.vi
		}), (0, A.jsx)(`span`, {
			lang: `zh-Hans`,
			className: `block ${r}`,
			children: e.zh
		})]
	});
}
function Ge({ lang: e, onJumpToSource: t }) {
	let [n, r] = (0, h.useState)(`all`), [i, a] = (0, h.useState)(Ee[0].id), o = (0, h.useRef)({}), s = e === `zh`, c = Re(Ee, n), { activeEntry: l, activeIndex: u, prevEntry: d, nextEntry: f } = ze(c, i), p = [
		{
			id: `all`,
			label: s ? `全部 (1817–2026)` : `Tất cả (1817–2026)`
		},
		{
			id: `construction`,
			label: s ? `建仓` : `Kiến thiết`
		},
		{
			id: `relief`,
			label: s ? `灾荒赈济` : `Cứu tế`
		},
		{
			id: `preservation`,
			label: s ? `文物保护` : `Bảo tồn`
		},
		{
			id: `living`,
			label: s ? `活态传承` : `Di sản sống`
		}
	], m = (e) => {
		r(e);
		let t = Re(Ee, e);
		t.length > 0 && !t.some((e) => e.id === i) && a(t[0].id);
	}, g = (e) => {
		a(e);
		let t = o.current[e];
		t && t.scrollIntoView({
			behavior: `smooth`,
			inline: `center`,
			block: `nearest`
		});
	};
	return (0, h.useEffect)(() => {
		if (!l) return;
		let e = o.current[l.id];
		e && e.scrollIntoView({
			behavior: `smooth`,
			inline: `center`,
			block: `nearest`
		});
	}, [n]), (0, A.jsx)(`section`, {
		id: `timeline`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [(0, A.jsxs)(`div`, {
				className: `mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between`,
				children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
					className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
					children: s ? `02 · 1817–2026 历史长卷与功能演进` : `02. Dòng Thời Gian Lịch Sử (1817–2026) · 历史长卷`
				}), (0, A.jsx)(`h2`, {
					className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
					children: s ? `从旱灾危机、乡民共筑到活态传承` : `Nguyên nhân · Công trình · Cộng đồng · Chuyển đổi 2026`
				})] }), (0, A.jsx)(`div`, {
					role: `group`,
					"aria-label": s ? `按阶段筛选历史节点` : `Lọc mốc lịch sử theo chủ đề`,
					className: `flex flex-wrap gap-1 border border-line/36 bg-paper-alt/60 p-1 lg:flex-nowrap shrink-0`,
					children: p.map((e) => {
						let t = n === e.id;
						return (0, A.jsx)(`button`, {
							type: `button`,
							"aria-pressed": t,
							onClick: () => m(e.id),
							className: `min-h-9 px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${t ? `bg-ink text-paper` : `text-ink/75 hover:text-cinnabar`}`,
							children: e.label
						}, e.id);
					})
				})]
			}), (0, A.jsxs)(`div`, {
				className: `border border-line/36 bg-paper-alt/40 p-4 sm:p-6`,
				children: [
					(0, A.jsxs)(`div`, {
						className: `mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-line/27 pb-3`,
						children: [(0, A.jsxs)(`div`, {
							className: `flex items-center gap-2.5 text-xs text-ink/70`,
							children: [
								(0, A.jsx)(`span`, {
									className: `tabular-nums font-mono font-semibold whitespace-nowrap shrink-0 text-cinnabar`,
									children: c.length > 0 ? `${String(u + 1).padStart(2, `0`)} / ${String(c.length).padStart(2, `0`)}` : `00 / 00`
								}),
								(0, A.jsx)(`span`, {
									"aria-hidden": `true`,
									children: `·`
								}),
								(0, A.jsx)(`span`, { children: s ? `点击年份节点查看史料、人物、社会背景及出处` : `Chọn mốc năm để xem tư liệu, nhân vật, bối cảnh xã hội & nguồn dẫn` })
							]
						}), (0, A.jsxs)(`div`, {
							className: `flex items-center gap-2 shrink-0`,
							children: [(0, A.jsxs)(`button`, {
								type: `button`,
								disabled: !d,
								onClick: () => d && g(d.id),
								title: d ? `${s ? `上一事件` : `Sự kiện trước`}: ${d.year}` : s ? `已到首个历史节点` : `Đang ở mốc đầu tiên`,
								className: `inline-flex min-h-10 items-center gap-1 border border-line/45 bg-paper px-3 py-1.5 text-xs font-medium text-ink whitespace-nowrap shrink-0 transition-colors hover:border-cinnabar hover:text-cinnabar disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-cinnabar`,
								children: [(0, A.jsx)(ChevronLeft, {
									className: `h-3.5 w-3.5`,
									"aria-hidden": `true`
								}), (0, A.jsx)(`span`, { children: s ? `上一节点` : `Trước` })]
							}), (0, A.jsxs)(`button`, {
								type: `button`,
								disabled: !f,
								onClick: () => f && g(f.id),
								title: f ? `${s ? `下一事件` : `Sự kiện tiếp`}: ${f.year}` : s ? `已到最后历史节点` : `Đang ở mốc cuối cùng`,
								className: `inline-flex min-h-10 items-center gap-1 border border-line/45 bg-paper px-3 py-1.5 text-xs font-medium text-ink whitespace-nowrap shrink-0 transition-colors hover:border-cinnabar hover:text-cinnabar disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-cinnabar`,
								children: [(0, A.jsx)(`span`, { children: s ? `下一节点` : `Tiếp` }), (0, A.jsx)(ChevronRight, {
									className: `h-3.5 w-3.5`,
									"aria-hidden": `true`
								})]
							})]
						})]
					}),
					(0, A.jsx)(`div`, {
						className: `relative rail overflow-x-auto pb-2`,
						role: `region`,
						"aria-label": s ? `历史年份时间轴` : `Trục thời gian lịch sử`,
						children: (0, A.jsx)(`div`, {
							role: `tablist`,
							"aria-label": s ? `选择历史年份` : `Chọn mốc năm lịch sử`,
							className: `relative flex min-w-max items-start justify-between pt-2 pb-2 md:min-w-full`,
							children: c.map((t, n) => {
								let r = l?.id === t.id, i = n < u, a = n === 0, s = n === c.length - 1;
								return (0, A.jsxs)(`button`, {
									ref: (e) => {
										o.current[t.id] = e;
									},
									type: `button`,
									role: `tab`,
									"aria-selected": r,
									onClick: () => g(t.id),
									onKeyDown: (e) => {
										if (e.key === `ArrowRight` && n < c.length - 1) {
											e.preventDefault();
											let t = c[n + 1];
											g(t.id), o.current[t.id]?.focus();
										} else if (e.key === `ArrowLeft` && n > 0) {
											e.preventDefault();
											let t = c[n - 1];
											g(t.id), o.current[t.id]?.focus();
										}
									},
									className: `group relative flex w-32 shrink-0 flex-col items-center py-1 text-center transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar sm:w-36 md:flex-1 md:min-w-[7rem] ${r ? `text-cinnabar` : `text-ink/75 hover:text-ink`}`,
									children: [
										(0, A.jsx)(`span`, {
											className: `px-1 tabular-nums font-mono text-xs sm:text-sm whitespace-nowrap transition-colors ${r ? `font-bold text-cinnabar` : `font-semibold text-ink/85`}`,
											children: t.year
										}),
										(0, A.jsxs)(`span`, {
											"aria-hidden": `true`,
											className: `my-2.5 flex w-full items-center`,
											children: [
												(0, A.jsx)(`span`, { className: `h-px flex-1 ${a ? `bg-transparent` : n <= u ? `h-0.5 bg-cinnabar` : `bg-ink/20`}` }),
												(0, A.jsx)(`span`, {
													className: `mx-1 flex h-4 w-4 shrink-0 items-center justify-center border transition-transform duration-150 ${r ? `scale-110 border-cinnabar bg-cinnabar text-paper` : i ? `border-cinnabar bg-paper` : `border-line/60 bg-paper group-hover:border-cinnabar`}`,
													children: (0, A.jsx)(`span`, { className: `h-1.5 w-1.5 ${r ? `bg-paper` : i ? `bg-cinnabar` : `bg-ink/45 group-hover:bg-cinnabar`}` })
												}),
												(0, A.jsx)(`span`, { className: `h-px flex-1 ${s ? `bg-transparent` : n < u ? `h-0.5 bg-cinnabar` : `bg-ink/20`}` })
											]
										}),
										(0, A.jsx)(`span`, {
											className: `line-clamp-2 px-1.5 text-[11px] leading-snug ${r ? `font-semibold text-ink` : `text-ink/65 group-hover:text-ink`}`,
											children: j(t.title, e)
										})
									]
								}, t.id);
							})
						})
					}),
					l && (0, A.jsx)(`article`, {
						role: `tabpanel`,
						"aria-live": `polite`,
						className: `mt-5 border border-line/36 bg-paper p-5 sm:p-7`,
						children: (0, A.jsxs)(`div`, {
							className: `grid grid-cols-1 gap-6 lg:grid-cols-[16rem_1fr]`,
							children: [(0, A.jsxs)(`div`, {
								className: `border-b border-line/27 pb-4 lg:border-r lg:border-b-0 lg:pr-6 lg:pb-0`,
								children: [
									(0, A.jsx)(`p`, {
										className: `tabular-nums font-mono text-xs tracking-wider uppercase text-ink/60`,
										children: s ? `历史档案 ${String(u + 1).padStart(2, `0`)}` : `Hồ sơ ${String(u + 1).padStart(2, `0`)}`
									}),
									(0, A.jsx)(`p`, {
										className: `tabular-nums font-mono mt-1.5 text-2xl font-bold text-cinnabar sm:text-3xl`,
										children: l.year
									}),
									(0, A.jsx)(`p`, {
										className: `mt-2 text-xs leading-relaxed text-ink/75`,
										children: j(l.reignDate, e)
									}),
									(0, A.jsxs)(`div`, {
										className: `mt-4 border-t border-line/27 pt-3 text-xs`,
										children: [(0, A.jsx)(`span`, {
											className: `block text-[11px] uppercase tracking-wider text-ink/55`,
											children: s ? `关联人物 / 群体` : `Nhân vật & Cộng đồng`
										}), (0, A.jsx)(`span`, {
											className: `mt-1 block font-medium text-ink/85`,
											children: j(l.figures, e)
										})]
									}),
									(0, A.jsxs)(`div`, {
										className: `mt-3 border-t border-line/27 pt-3 text-xs`,
										children: [(0, A.jsx)(`span`, {
											className: `block text-[11px] uppercase tracking-wider text-ink/55`,
											children: s ? `核心记录` : `Ghi chú chính`
										}), (0, A.jsx)(`span`, {
											className: `mt-1 block font-medium text-ink/80`,
											children: j(l.metric, e)
										})]
									})
								]
							}), (0, A.jsxs)(`div`, {
								className: `flex flex-col justify-between`,
								children: [(0, A.jsxs)(`div`, { children: [
									(0, A.jsx)(`h3`, {
										className: `text-xl font-bold text-ink sm:text-2xl`,
										children: j(l.title, e)
									}),
									e === `bilingual` && (0, A.jsx)(`p`, {
										lang: `zh-Hans`,
										className: `mt-1 text-base font-medium text-ink/70`,
										children: l.title.zh
									}),
									(0, A.jsx)(M, {
										lang: e,
										text: l.detail,
										className: `mt-4 max-w-2xl text-sm leading-relaxed text-ink/85 sm:text-base`,
										secondaryClassName: `mt-2.5 max-w-2xl text-xs leading-relaxed text-ink/70 sm:text-sm`
									}),
									(0, A.jsxs)(`div`, {
										className: `mt-4 border-t border-line/27 pt-3`,
										children: [(0, A.jsx)(`p`, {
											className: `text-xs font-semibold uppercase tracking-wider text-celadon`,
											children: s ? `社会语境与功能意义` : `Ý nghĩa với chức năng Nghĩa thương`
										}), (0, A.jsx)(M, {
											lang: e,
											text: l.context,
											className: `mt-1.5 text-sm leading-relaxed text-ink/80`,
											secondaryClassName: `mt-1 text-xs leading-relaxed text-ink/65`
										})]
									}),
									(0, A.jsxs)(`div`, {
										className: `mt-4 flex flex-wrap items-center gap-2 text-xs`,
										children: [(0, A.jsx)(`span`, {
											className: `text-ink/55`,
											children: s ? `研究出处：` : `Nguồn kiểm chứng:`
										}), l.sourceIds.map((e) => (0, A.jsxs)(`button`, {
											type: `button`,
											onClick: () => t(e),
											className: `inline-flex items-center gap-1 border border-line/36 px-2 py-0.5 font-mono text-[11px] text-ink/80 transition-colors hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
											children: [(0, A.jsx)(`span`, { children: e }), (0, A.jsx)(ArrowDownRight, {
												className: `h-3 w-3`,
												"aria-hidden": `true`
											})]
										}, e))]
									})
								] }), (0, A.jsxs)(`div`, {
									className: `mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/27 pt-4 text-xs`,
									children: [d ? (0, A.jsxs)(`button`, {
										type: `button`,
										onClick: () => g(d.id),
										className: `inline-flex min-h-9 items-center gap-1.5 text-left font-medium text-ink/75 transition-colors hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: [
											(0, A.jsx)(ChevronLeft, {
												className: `h-3.5 w-3.5 shrink-0`,
												"aria-hidden": `true`
											}),
											(0, A.jsx)(`span`, {
												className: `tabular-nums font-mono`,
												children: d.year
											}),
											(0, A.jsx)(`span`, {
												"aria-hidden": `true`,
												children: `·`
											}),
											(0, A.jsx)(`span`, {
												className: `truncate max-w-[14rem] sm:max-w-xs`,
												children: j(d.title, e)
											})
										]
									}) : (0, A.jsx)(`span`, {
										className: `text-ink/65`,
										children: s ? `时间轴起点 · 1817` : `Khởi điểm trục thời gian · 1817`
									}), f ? (0, A.jsxs)(`button`, {
										type: `button`,
										onClick: () => g(f.id),
										className: `inline-flex min-h-9 items-center gap-1.5 text-right font-medium text-cinnabar transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: [
											(0, A.jsx)(`span`, {
												className: `truncate max-w-[14rem] sm:max-w-xs`,
												children: j(f.title, e)
											}),
											(0, A.jsx)(`span`, {
												"aria-hidden": `true`,
												children: `·`
											}),
											(0, A.jsx)(`span`, {
												className: `tabular-nums font-mono`,
												children: f.year
											}),
											(0, A.jsx)(ChevronRight, {
												className: `h-3.5 w-3.5 shrink-0`,
												"aria-hidden": `true`
											})
										]
									}) : (0, A.jsx)(`span`, {
										className: `text-ink/45`,
										children: s ? `最新核实节点 · 2026` : `Cập nhật mới nhất · 2026`
									})]
								})]
							})]
						})
					}, l.id)
				]
			})]
		})
	});
}
var Ke = {
	moat: `Outer Moat & Trench`,
	"outer-fortress": `Outer Wall (1891)`,
	"inner-wall": `Inner City Rampart`,
	vaults: `58 Storage Vaults`,
	courtyard: `Wooden Courtyard Corridor`,
	drainage: `Central Drying Yard & Drainage`
};
function qe({ lang: e, layers: t, visibleLayers: n, activeLayerId: r, stations: i, activeStation: a, visitedIds: o, onSelectArea: s, onSelectStation: c }) {
	let [l, u] = (0, h.useState)(null), [d, f] = (0, h.useState)(null), p = (0, h.useRef)(0), m = e === `zh`, g = l ?? d, _ = l ?? r, v = t.find((e) => e.id === r) ?? t[0], y = t.find((e) => e.id === _) ?? v, b = g ? t.find((e) => e.id === g) ?? null : null, ee = He(i, r), te = g ? He(i, g) : [], ne = (e) => {
		Date.now() - p.current < 300 || u(e);
	}, re = (e) => {
		u((t) => t === e ? null : t);
	}, x = (e) => {
		f(e), s(e);
	}, ie = (e, t) => {
		e.key === `Enter` || e.key === ` ` ? (e.preventDefault(), x(t)) : e.key === `Escape` && (p.current = Date.now(), f(null), u(null));
	}, ae = (e) => n.includes(e), C = (e) => r === e, w = (e) => l === e, T = (e, t) => C(e) ? `var(--theme-cinnabar)` : w(e) ? `var(--theme-gold)` : t;
	return (0, A.jsxs)(`div`, {
		className: `frame bg-paper-alt/55 p-4 sm:p-6 lg:sticky lg:top-20`,
		children: [
			(0, A.jsxs)(`div`, {
				className: `mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/70`,
				children: [(0, A.jsxs)(`span`, {
					className: `inline-flex items-center gap-1.5 font-medium`,
					children: [(0, A.jsx)(Compass, {
						className: `h-3.5 w-3.5 text-cinnabar`,
						"aria-hidden": `true`
					}), (0, A.jsx)(`span`, { children: m ? `悬停或点击外郭、内城、58廒等区域弹出详情` : `Rê chuột hoặc nhấn vào từng khu vực (Outer Wall, Inner City, Vaults) để mở thẻ chi tiết` })]
				}), (0, A.jsxs)(`span`, {
					className: `font-mono text-[11px] font-semibold text-cinnabar`,
					children: [
						y.code,
						` · `,
						Ke[y.id]
					]
				})]
			}),
			(0, A.jsxs)(`div`, {
				className: `relative aspect-square w-full border border-line/45 bg-paper overflow-hidden`,
				children: [
					(0, A.jsxs)(`svg`, {
						viewBox: `0 0 400 400`,
						className: `h-full w-full text-ink`,
						children: [
							(0, A.jsxs)(`g`, {
								"aria-hidden": `true`,
								className: `fill-current font-mono text-[9.5px] opacity-60`,
								children: [
									(0, A.jsxs)(`text`, {
										x: `200`,
										y: `16`,
										textAnchor: `middle`,
										children: [`N · `, m ? `北 / 黄土高塬` : `Bắc`]
									}),
									(0, A.jsxs)(`text`, {
										x: `200`,
										y: `394`,
										textAnchor: `middle`,
										children: [`S · `, m ? `南 / 朱雀正门` : `Nam · Chu Tước Môn`]
									}),
									(0, A.jsxs)(`text`, {
										x: `11`,
										y: `200`,
										textAnchor: `middle`,
										transform: `rotate(-90 11 200)`,
										children: [`W · `, m ? `西 / 出粮门` : `Tây`]
									}),
									(0, A.jsxs)(`text`, {
										x: `390`,
										y: `200`,
										textAnchor: `middle`,
										transform: `rotate(90 390 200)`,
										children: [`E · `, m ? `东 / 进粮门` : `Đông`]
									})
								]
							}),
							ae(`moat`) && (0, A.jsx)(`g`, {
								role: `button`,
								tabIndex: 0,
								"data-site-area": `moat`,
								"aria-pressed": C(`moat`),
								"aria-label": `L1 Outer Moat · ${j(t.find((e) => e.id === `moat`).name, e)}`,
								onClick: () => x(`moat`),
								onKeyDown: (e) => ie(e, `moat`),
								onMouseEnter: () => ne(`moat`),
								onMouseLeave: () => re(`moat`),
								onFocus: () => u(`moat`),
								onBlur: () => u(null),
								className: `cursor-pointer focus:outline-none`,
								children: (0, A.jsx)(`rect`, {
									x: `18`,
									y: `22`,
									width: `364`,
									height: `356`,
									fill: C(`moat`) ? `color-mix(in oklab, var(--theme-celadon) 12%, transparent)` : w(`moat`) ? `color-mix(in oklab, var(--theme-celadon) 8%, transparent)` : `transparent`,
									stroke: T(`moat`, `var(--theme-celadon)`),
									strokeWidth: C(`moat`) || w(`moat`) ? `8` : `6`,
									strokeDasharray: `8 4`,
									strokeOpacity: C(`moat`) || w(`moat`) ? `0.95` : `0.45`
								})
							}),
							ae(`outer-fortress`) && (0, A.jsxs)(`g`, {
								role: `button`,
								tabIndex: 0,
								"data-site-area": `outer-fortress`,
								"aria-pressed": C(`outer-fortress`),
								"aria-label": `L2 Outer Wall · ${j(t.find((e) => e.id === `outer-fortress`).name, e)}`,
								onClick: () => x(`outer-fortress`),
								onKeyDown: (e) => ie(e, `outer-fortress`),
								onMouseEnter: () => ne(`outer-fortress`),
								onMouseLeave: () => re(`outer-fortress`),
								onFocus: () => u(`outer-fortress`),
								onBlur: () => u(null),
								className: `cursor-pointer focus:outline-none`,
								children: [(0, A.jsx)(`rect`, {
									x: `30`,
									y: `34`,
									width: `340`,
									height: `332`,
									fill: C(`outer-fortress`) ? `color-mix(in oklab, var(--theme-cinnabar) 10%, var(--theme-paper))` : w(`outer-fortress`) ? `color-mix(in oklab, var(--theme-gold) 14%, var(--theme-paper))` : `var(--theme-paper)`,
									stroke: T(`outer-fortress`, `currentColor`),
									strokeWidth: C(`outer-fortress`) || w(`outer-fortress`) ? `5` : `3.5`,
									strokeOpacity: C(`outer-fortress`) || w(`outer-fortress`) ? `0.95` : `0.45`
								}), (0, A.jsx)(`text`, {
									x: `40`,
									y: `45`,
									className: `pointer-events-none fill-current font-mono text-[8px] opacity-60`,
									children: `OUTER WALL · 外郭`
								})]
							}),
							ae(`inner-wall`) && (0, A.jsxs)(`g`, {
								role: `button`,
								tabIndex: 0,
								"data-site-area": `inner-wall`,
								"aria-pressed": C(`inner-wall`),
								"aria-label": `L3 Inner City · ${j(t.find((e) => e.id === `inner-wall`).name, e)}`,
								onClick: () => x(`inner-wall`),
								onKeyDown: (e) => ie(e, `inner-wall`),
								onMouseEnter: () => ne(`inner-wall`),
								onMouseLeave: () => re(`inner-wall`),
								onFocus: () => u(`inner-wall`),
								onBlur: () => u(null),
								className: `cursor-pointer focus:outline-none`,
								children: [
									(0, A.jsx)(`rect`, {
										x: `48`,
										y: `50`,
										width: `304`,
										height: `300`,
										fill: C(`inner-wall`) ? `color-mix(in oklab, var(--theme-cinnabar) 13%, var(--theme-paper))` : w(`inner-wall`) ? `color-mix(in oklab, var(--theme-gold) 14%, var(--theme-paper))` : `var(--theme-paper)`,
										stroke: T(`inner-wall`, `currentColor`),
										strokeWidth: C(`inner-wall`) || w(`inner-wall`) ? `6.5` : `5`,
										strokeOpacity: C(`inner-wall`) || w(`inner-wall`) ? `0.98` : `0.82`
									}),
									(0, A.jsx)(`rect`, {
										x: `176`,
										y: `330`,
										width: `48`,
										height: `44`,
										fill: `var(--theme-paper)`,
										stroke: T(`inner-wall`, `var(--theme-cinnabar)`),
										strokeWidth: C(`inner-wall`) || w(`inner-wall`) ? `3` : `2`
									}),
									(0, A.jsx)(`text`, {
										x: `56`,
										y: `60`,
										className: `pointer-events-none fill-current font-mono text-[8px] opacity-65`,
										children: `INNER CITY · 内城`
									})
								]
							}),
							ae(`vaults`) && (0, A.jsxs)(`g`, {
								role: `button`,
								tabIndex: 0,
								"data-site-area": `vaults`,
								"aria-pressed": C(`vaults`),
								"aria-label": `L4 Storage Vaults · ${j(t.find((e) => e.id === `vaults`).name, e)}`,
								onClick: () => x(`vaults`),
								onKeyDown: (e) => ie(e, `vaults`),
								onMouseEnter: () => ne(`vaults`),
								onMouseLeave: () => re(`vaults`),
								onFocus: () => u(`vaults`),
								onBlur: () => u(null),
								className: `cursor-pointer focus:outline-none`,
								children: [
									(0, A.jsx)(`rect`, {
										x: `65`,
										y: `65`,
										width: `270`,
										height: `270`,
										fill: C(`vaults`) ? `color-mix(in oklab, var(--theme-cinnabar) 18%, var(--theme-paper))` : w(`vaults`) ? `color-mix(in oklab, var(--theme-gold) 26%, var(--theme-paper))` : `color-mix(in oklab, var(--theme-gold) 14%, var(--theme-paper))`,
										stroke: T(`vaults`, `currentColor`),
										strokeWidth: C(`vaults`) || w(`vaults`) ? `3` : `1.5`,
										strokeOpacity: C(`vaults`) || w(`vaults`) ? `0.98` : `0.65`
									}),
									Array.from({ length: 14 }).map((e, t) => {
										let n = 79 + t * 18;
										return (0, A.jsxs)(`g`, {
											stroke: C(`vaults`) || w(`vaults`) ? `var(--theme-cinnabar)` : `currentColor`,
											strokeOpacity: C(`vaults`) || w(`vaults`) ? `0.6` : `0.35`,
											strokeWidth: `1`,
											children: [
												(0, A.jsx)(`line`, {
													x1: n,
													y1: `65`,
													x2: n,
													y2: `95`
												}),
												(0, A.jsx)(`line`, {
													x1: n,
													y1: `305`,
													x2: n,
													y2: `335`
												}),
												(0, A.jsx)(`line`, {
													x1: `65`,
													y1: n,
													x2: `95`,
													y2: n
												}),
												(0, A.jsx)(`line`, {
													x1: `305`,
													y1: n,
													x2: `335`,
													y2: n
												})
											]
										}, t);
									}),
									(0, A.jsx)(`rect`, {
										x: `71`,
										y: `70`,
										width: `130`,
										height: `13`,
										fill: `var(--theme-paper)`,
										fillOpacity: `0.88`,
										className: `pointer-events-none`
									}),
									(0, A.jsx)(`text`, {
										x: `74`,
										y: `79.5`,
										textAnchor: `start`,
										className: `pointer-events-none fill-current font-mono text-[8px] font-semibold opacity-80`,
										children: `58 STORAGE VAULTS · 五十八廒`
									})
								]
							}),
							ae(`courtyard`) && (0, A.jsx)(`g`, {
								role: `button`,
								tabIndex: 0,
								"data-site-area": `courtyard`,
								"aria-pressed": C(`courtyard`),
								"aria-label": `L5 Courtyard Corridor · ${j(t.find((e) => e.id === `courtyard`).name, e)}`,
								onClick: () => x(`courtyard`),
								onKeyDown: (e) => ie(e, `courtyard`),
								onMouseEnter: () => ne(`courtyard`),
								onMouseLeave: () => re(`courtyard`),
								onFocus: () => u(`courtyard`),
								onBlur: () => u(null),
								className: `cursor-pointer focus:outline-none`,
								children: (0, A.jsx)(`rect`, {
									x: `95`,
									y: `95`,
									width: `210`,
									height: `210`,
									fill: C(`courtyard`) ? `color-mix(in oklab, var(--theme-gold) 30%, var(--theme-paper))` : w(`courtyard`) ? `color-mix(in oklab, var(--theme-gold) 20%, var(--theme-paper))` : `var(--theme-paper)`,
									stroke: T(`courtyard`, `var(--theme-gold)`),
									strokeWidth: C(`courtyard`) || w(`courtyard`) ? `3.5` : `2`,
									strokeOpacity: C(`courtyard`) || w(`courtyard`) ? `1` : `0.75`
								})
							}),
							ae(`drainage`) && (0, A.jsxs)(`g`, {
								role: `button`,
								tabIndex: 0,
								"data-site-area": `drainage`,
								"aria-pressed": C(`drainage`),
								"aria-label": `L6 Central Drainage Court · ${j(t.find((e) => e.id === `drainage`).name, e)}`,
								onClick: () => x(`drainage`),
								onKeyDown: (e) => ie(e, `drainage`),
								onMouseEnter: () => ne(`drainage`),
								onMouseLeave: () => re(`drainage`),
								onFocus: () => u(`drainage`),
								onBlur: () => u(null),
								className: `cursor-pointer focus:outline-none`,
								children: [(0, A.jsx)(`rect`, {
									x: `116`,
									y: `116`,
									width: `168`,
									height: `168`,
									fill: C(`drainage`) ? `color-mix(in oklab, var(--theme-celadon) 16%, var(--theme-paper))` : w(`drainage`) ? `color-mix(in oklab, var(--theme-celadon) 11%, var(--theme-paper))` : `color-mix(in oklab, var(--theme-paper) 96%, transparent)`,
									stroke: T(`drainage`, `var(--theme-celadon)`),
									strokeWidth: C(`drainage`) || w(`drainage`) ? `2.5` : `1.25`,
									strokeOpacity: C(`drainage`) || w(`drainage`) ? `0.95` : `0.5`
								}), (0, A.jsxs)(`g`, {
									stroke: `var(--theme-celadon)`,
									strokeWidth: C(`drainage`) || w(`drainage`) ? `2` : `1.5`,
									strokeDasharray: `4 3`,
									strokeOpacity: C(`drainage`) || w(`drainage`) ? `0.95` : `0.7`,
									children: [
										(0, A.jsx)(`line`, {
											x1: `116`,
											y1: `116`,
											x2: `284`,
											y2: `284`
										}),
										(0, A.jsx)(`line`, {
											x1: `284`,
											y1: `116`,
											x2: `116`,
											y2: `284`
										}),
										(0, A.jsx)(`circle`, {
											cx: `200`,
											cy: `200`,
											r: `14`,
											fill: `var(--theme-paper)`
										})
									]
								})]
							})
						]
					}),
					i.map((t) => {
						let n = t.id === a.id, r = o.includes(t.id);
						return (0, A.jsx)(`button`, {
							type: `button`,
							onClick: (e) => {
								e.stopPropagation(), f(t.layerId), c(t.id, t.layerId);
							},
							"aria-pressed": n,
							"aria-label": `${t.code} ${j(t.name, e)}`,
							style: {
								left: `${t.mapX}%`,
								top: `${t.mapY}%`
							},
							className: `absolute -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 text-xs font-bold tabular-nums transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar ${n ? `scale-110 border-paper bg-cinnabar text-paper shadow-md z-10` : r ? `border-celadon bg-celadon text-paper hover:scale-105` : `border-ink bg-paper text-ink hover:border-cinnabar hover:text-cinnabar hover:scale-105`}`,
							children: t.code
						}, t.id);
					}),
					b && (0, A.jsxs)(`div`, {
						"data-testid": `zone-popup-card`,
						role: d && !l ? `dialog` : void 0,
						"aria-label": `${b.code} ${j(b.name, e)}`,
						className: `absolute inset-x-3 bottom-3 z-20 border border-cinnabar bg-paper/95 p-3.5 shadow-lg backdrop-blur-xs transition-opacity ${l && d !== l ? `pointer-events-none` : `pointer-events-auto`}`,
						children: [
							(0, A.jsxs)(`div`, {
								className: `flex items-start justify-between gap-2 border-b border-line/27 pb-2`,
								children: [(0, A.jsxs)(`div`, { children: [(0, A.jsxs)(`p`, {
									className: `font-mono text-[10px] font-bold uppercase tracking-wider text-cinnabar`,
									children: [
										b.code,
										` · `,
										Ke[b.id],
										` ·`,
										` `,
										l ? m ? `悬停预览` : `Xem nhanh` : m ? `已锁定区域` : `Đang mở thẻ chi tiết`
									]
								}), (0, A.jsx)(`h4`, {
									className: `mt-0.5 text-sm font-bold text-ink`,
									children: j(b.name, e)
								})] }), d && !l && (0, A.jsx)(`button`, {
									type: `button`,
									onClick: () => {
										p.current = Date.now(), f(null), u(null);
									},
									"aria-label": m ? `关闭弹窗` : `Đóng thẻ nổi`,
									className: `inline-flex h-6 w-6 shrink-0 items-center justify-center border border-line/36 text-ink/70 hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
									children: (0, A.jsx)(X, {
										className: `h-3.5 w-3.5`,
										"aria-hidden": `true`
									})
								})]
							}),
							(0, A.jsx)(`p`, {
								className: `mt-2 text-xs leading-relaxed text-ink/85`,
								children: j(b.explanation, e)
							}),
							d && !l && te.length > 0 && (0, A.jsx)(`div`, {
								className: `mt-2.5 flex flex-wrap gap-1.5 border-t border-line/18 pt-2`,
								children: te.map((t) => (0, A.jsxs)(`button`, {
									type: `button`,
									onClick: () => c(t.id, t.layerId),
									className: `border px-2 py-0.5 text-[11px] font-medium transition-colors ${t.id === a.id ? `border-cinnabar bg-cinnabar text-paper` : `border-line/36 bg-paper-alt/60 text-ink hover:border-cinnabar`}`,
									children: [
										t.code,
										` · `,
										j(t.name, e)
									]
								}, t.id))
							})
						]
					})
				]
			}),
			(0, A.jsxs)(`div`, {
				"data-testid": `site-segment-card`,
				className: `mt-4 border border-cinnabar/40 bg-paper p-4`,
				children: [
					(0, A.jsxs)(`div`, {
						className: `flex flex-wrap items-center justify-between gap-2 border-b border-line/27 pb-2.5`,
						children: [(0, A.jsxs)(`div`, {
							className: `flex items-center gap-2`,
							children: [(0, A.jsx)(Layers, {
								className: `h-3.5 w-3.5 text-cinnabar`,
								"aria-hidden": `true`
							}), (0, A.jsxs)(`span`, {
								className: `font-mono text-xs font-bold text-cinnabar`,
								children: [
									v.code,
									` · `,
									Ke[v.id]
								]
							})]
						}), (0, A.jsx)(`span`, {
							className: `font-mono text-[11px] text-ink/60`,
							children: ee.length > 0 ? m ? `${ee.length} 个关联节点` : `${ee.length} điểm di tích thuộc khu` : m ? `外围环线` : `Vành đai ngoại vi`
						})]
					}),
					(0, A.jsx)(`h3`, {
						className: `mt-2.5 text-base font-bold text-ink`,
						children: j(v.name, e)
					}),
					e === `bilingual` && (0, A.jsx)(`p`, {
						lang: `zh-Hans`,
						className: `text-xs font-medium text-ink/65`,
						children: v.name.zh
					}),
					(0, A.jsx)(M, {
						lang: e,
						text: v.explanation,
						className: `mt-2 text-xs leading-relaxed text-ink/80`,
						secondaryClassName: `mt-1 text-[11px] leading-relaxed text-ink/60`
					}),
					v.epistemicNote && (0, A.jsx)(`p`, {
						className: `mt-2 border-t border-line/18 pt-2 text-[11px] italic leading-relaxed text-ink/65`,
						children: j(v.epistemicNote, e)
					}),
					(0, A.jsxs)(`div`, {
						className: `mt-3 border-t border-line/18 pt-2.5`,
						children: [(0, A.jsxs)(`p`, {
							className: `mb-2 flex items-center gap-1 text-[11px] font-medium text-ink/65`,
							children: [(0, A.jsx)(MapPin, {
								className: `h-3 w-3 text-cinnabar`,
								"aria-hidden": `true`
							}), (0, A.jsx)(`span`, { children: ee.length > 0 ? m ? `本区可点选游览节点：` : `Các điểm dừng thuộc khu vực này:` : m ? `护城壕紧邻外郭与南门观测点：` : `Điểm quan sát tiếp giáp vành đai hào:` })]
						}), (0, A.jsx)(`div`, {
							className: `flex flex-wrap gap-1.5`,
							children: (ee.length > 0 ? ee : i.filter((e) => e.id === `chu-tuoc-mon` || e.id === `tuong-thanh-hoang-ha`)).map((t) => {
								let n = t.id === a.id;
								return (0, A.jsxs)(`button`, {
									type: `button`,
									onClick: () => {
										f(t.layerId), c(t.id, t.layerId);
									},
									className: `inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? `border-cinnabar bg-cinnabar text-paper` : `border-line/36 bg-paper-alt/40 text-ink/80 hover:border-cinnabar hover:text-cinnabar`}`,
									children: [(0, A.jsx)(`span`, {
										className: `font-mono`,
										children: t.code
									}), (0, A.jsx)(`span`, { children: j(t.name, e) })]
								}, t.id);
							})
						})]
					})
				]
			}),
			(0, A.jsx)(`div`, {
				className: `mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2`,
				children: i.map((t) => {
					let n = t.id === a.id;
					return (0, A.jsxs)(`button`, {
						type: `button`,
						onClick: () => {
							f(t.layerId), c(t.id, t.layerId);
						},
						className: `flex min-h-10 items-center gap-2 border px-3 py-1.5 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? `border-cinnabar bg-cinnabar text-paper font-semibold` : `border-line/36 bg-paper text-ink/80 hover:border-cinnabar hover:text-cinnabar`}`,
						children: [(0, A.jsxs)(`span`, {
							className: `tabular-nums font-mono shrink-0`,
							children: [t.code, ` ·`]
						}), (0, A.jsx)(`span`, {
							className: `truncate`,
							children: j(t.name, e)
						})]
					}, t.id);
				})
			})
		]
	});
}
function Je(e) {
	let t = `丰图义仓 ${e.query}`, n = `Bản HTML độc lập không kèm máy chủ Gemini. Mở liên kết bên dưới để xem kết quả Google Search cho câu hỏi này.`, r = `本页为独立 HTML 版本，未连接 Gemini 服务器。点击下方链接，在 Google 中查看该问题的实时搜索结果。`;
	return {
		summary: e.lang === `zh` ? r : e.lang === `vi` ? n : `${n}\n${r}`,
		sources: [{
			title: `Google: ${t}`,
			uri: `https://www.google.com/search?q=${encodeURIComponent(t)}`
		}],
		webSearchQueries: [t],
		model: `offline`
	};
}
async function Ye(e) {
	if (typeof location < `u` && location.protocol === `file:`) return Je(e);
	let t = null;
	try {
		let n = await fetch(`/api/heritage-grounding`, {
			method: `POST`,
			headers: { "Content-Type": `application/json` },
			body: JSON.stringify(e)
		}), r = await n.json().catch(() => null);
		if (n.ok && r && typeof r.summary == `string`) return r;
		r && typeof r.error == `string` && (t = r.error);
	} catch {}
	if (t) throw Error(t);
	return Je(e);
}
function Xe({ lang: e, contextTitle: t, presets: n, compact: r = !1 }) {
	let i = e === `zh`, [a, o] = (0, h.useState)(``), [s, c] = (0, h.useState)(!1), [l, u] = (0, h.useState)(null), [d, f] = (0, h.useState)(null), [p, m] = (0, h.useState)(null), g = async (n, r = null) => {
		let a = n.trim();
		if (a) {
			c(!0), u(null), m(r);
			try {
				let n = await Ye({
					query: a,
					segmentTitle: t,
					lang: e
				});
				f(n);
			} catch (e) {
				u(e instanceof Error ? e.message : i ? `联网检索失败，请稍后重试。` : `Không thể tra cứu trực tuyến lúc này. Vui lòng thử lại.`);
			} finally {
				c(!1);
			}
		}
	};
	return (0, A.jsxs)(`div`, {
		"data-testid": `search-grounding-panel`,
		className: `border border-line/36 bg-paper-alt/35 ${r ? `p-4` : `p-4 sm:p-5`}`,
		children: [
			(0, A.jsxs)(`div`, {
				className: `flex flex-wrap items-center justify-between gap-2 border-b border-line/27 pb-2.5`,
				children: [(0, A.jsxs)(`span`, {
					className: `inline-flex items-center gap-1.5 text-xs font-bold text-ink`,
					children: [(0, A.jsx)(Globe, {
						className: `h-3.5 w-3.5 text-celadon`,
						"aria-hidden": `true`
					}), (0, A.jsx)(`span`, { children: i ? `Google 搜索实时核验` : `Kiểm chứng Trực tuyến (Google Search)` })]
				}), (0, A.jsx)(`span`, {
					className: `font-mono text-[11px] text-ink/55`,
					children: i ? `附带公开来源链接` : `Kèm liên kết trích dẫn`
				})]
			}),
			(0, A.jsx)(`div`, {
				className: `mt-3 flex flex-wrap gap-2`,
				children: n.map((e) => {
					let t = p === e.id;
					return (0, A.jsx)(`button`, {
						type: `button`,
						disabled: s,
						onClick: () => g(e.query, e.id),
						className: `border px-2.5 py-1.5 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar disabled:opacity-50 ${t ? `border-celadon bg-celadon/10 font-semibold text-ink` : `border-line/36 bg-paper text-ink/80 hover:border-celadon hover:text-ink`}`,
						children: i ? e.label.zh : e.label.vi
					}, e.id);
				})
			}),
			(0, A.jsxs)(`form`, {
				onSubmit: (e) => {
					e.preventDefault(), g(a, null);
				},
				className: `mt-3 flex flex-col gap-2 sm:flex-row`,
				children: [
					(0, A.jsx)(`label`, {
						htmlFor: `grounding-input-${r ? `map` : `visit`}`,
						className: `sr-only`,
						children: i ? `输入需要核实的丰图义仓信息` : `Nhập câu hỏi kiểm chứng về Phong Đồ Nghĩa Thương`
					}),
					(0, A.jsx)(`input`, {
						id: `grounding-input-${r ? `map` : `visit`}`,
						type: `text`,
						value: a,
						onChange: (e) => o(e.target.value),
						placeholder: i ? `输入关键词实时核查（如：2026开放时间、城墙修缮、交通）` : `Hỏi thông tin cập nhật (vd: giờ mở cửa 2026, kiến trúc tường thành...)`,
						className: `flex-1 border border-line/45 bg-paper px-3 py-2 text-xs text-ink placeholder:text-ink/45 focus:border-celadon focus:outline-none`
					}),
					(0, A.jsxs)(`button`, {
						type: `submit`,
						disabled: s || !a.trim(),
						className: `inline-flex min-h-9 items-center justify-center gap-1.5 border border-ink bg-ink px-3.5 py-2 text-xs font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-cinnabar`,
						children: [s ? (0, A.jsx)(LoaderCircle, {
							className: `h-3.5 w-3.5 animate-spin`,
							"aria-hidden": `true`
						}) : (0, A.jsx)(Search, {
							className: `h-3.5 w-3.5`,
							"aria-hidden": `true`
						}), (0, A.jsx)(`span`, { children: i ? `联网检索` : `Tra cứu` })]
					})
				]
			}),
			s && (0, A.jsxs)(`p`, {
				className: `mt-3 flex items-center gap-2 text-xs text-ink/65`,
				children: [(0, A.jsx)(LoaderCircle, {
					className: `h-3.5 w-3.5 animate-spin text-celadon`,
					"aria-hidden": `true`
				}), (0, A.jsx)(`span`, { children: i ? `正在检索公开网络资料并核对来源...` : `Đang đối chiếu dữ liệu tìm kiếm công khai...` })]
			}),
			l && (0, A.jsx)(`div`, {
				role: `alert`,
				className: `mt-3 border border-cinnabar/50 bg-cinnabar/5 p-3 text-xs text-cinnabar`,
				children: l
			}),
			d && !s && (0, A.jsxs)(`div`, {
				className: `mt-3 border-t border-line/27 pt-3`,
				children: [(0, A.jsx)(`p`, {
					className: `whitespace-pre-line text-xs leading-relaxed text-ink/85`,
					children: d.summary
				}), d.sources.length > 0 && (0, A.jsxs)(`div`, {
					className: `mt-3 border-t border-line/18 pt-2.5`,
					children: [(0, A.jsx)(`p`, {
						className: `mb-1.5 font-mono text-[11px] uppercase tracking-wider text-ink/55`,
						children: i ? `Google 搜索引用来源` : `Nguồn Google Search đối chiếu`
					}), (0, A.jsx)(`ul`, {
						className: `space-y-1`,
						children: d.sources.map((e) => (0, A.jsx)(`li`, { children: (0, A.jsxs)(`a`, {
							href: e.uri,
							target: `_blank`,
							rel: `noopener noreferrer`,
							className: `inline-flex items-center gap-1 text-xs text-celadon hover:underline focus-visible:outline-2 focus-visible:outline-cinnabar`,
							children: [(0, A.jsx)(`span`, {
								className: `truncate max-w-[260px] sm:max-w-[420px]`,
								children: e.title
							}), (0, A.jsx)(ExternalLink, {
								className: `h-3 w-3 shrink-0`,
								"aria-hidden": `true`
							})]
						}) }, e.uri))
					})]
				})]
			})
		]
	});
}
var Ze = [
	`moat`,
	`outer-fortress`,
	`inner-wall`,
	`vaults`,
	`courtyard`,
	`drainage`
];
function Qe({ lang: e, activeStationId: t, onSelectStation: n, visitedIds: r, onToggleVisited: i }) {
	let [a, o] = (0, h.useState)(!1), [s, c] = (0, h.useState)(!1), [l, u] = (0, h.useState)(Ze), [d, f] = (0, h.useState)(`vaults`), p = e === `zh`, m = E.find((e) => e.id === t) ?? E[0], g = r.includes(m.id), _ = () => {
		typeof window < `u` && `speechSynthesis` in window && (window.speechSynthesis.cancel(), c(!1));
	}, v = (e) => {
		f(e), u((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	};
	return (0, A.jsx)(`section`, {
		id: `explore`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [
				(0, A.jsxs)(`div`, {
					className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
					children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
						className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
						children: p ? `01 · 全景探索与交互式平面图` : `01. Bản đồ Di tích Tương tác · 全景探索`
					}), (0, A.jsx)(`h2`, {
						className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
						children: p ? `六层防护格局与八大空间节点` : `Khám phá Quần thể 6 Khu vực & 8 Điểm Tương tác`
					})] }), (0, A.jsx)(`p`, {
						className: `max-w-md text-xs leading-relaxed text-ink/70`,
						children: p ? `注：本图为空间导览与结构教学示意图，不替代官方测绘总平面图（待对照2026保护规划图纸核准）。` : `Lưu ý: Đây là sơ đồ minh họa định hướng không gian, chưa thay thế bản vẽ đo đạc khảo sát chính thức.`
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `mb-6 border border-line/36 bg-paper-alt/40 p-4`,
					children: [(0, A.jsxs)(`div`, {
						className: `mb-3 flex flex-wrap items-center justify-between gap-2 text-xs`,
						children: [(0, A.jsxs)(`span`, {
							className: `inline-flex items-center gap-1.5 font-semibold text-ink`,
							children: [(0, A.jsx)(Layers, {
								className: `h-3.5 w-3.5 text-cinnabar`,
								"aria-hidden": `true`
							}), (0, A.jsx)(`span`, { children: p ? `切换空间结构图层 (Layer 1–6) 或直接点击下方平面区域` : `Bật/tắt 6 lớp cấu trúc (Layer 1–6) hoặc nhấn trực tiếp vào mặt bằng` })]
						}), (0, A.jsxs)(`div`, {
							className: `flex items-center gap-3`,
							children: [l.length < Ze.length && (0, A.jsxs)(`button`, {
								type: `button`,
								onClick: () => u(Ze),
								className: `inline-flex items-center gap-1 text-[11px] font-medium text-cinnabar hover:underline focus-visible:outline-2 focus-visible:outline-cinnabar`,
								children: [(0, A.jsx)(RotateCcw, {
									className: `h-3 w-3`,
									"aria-hidden": `true`
								}), (0, A.jsx)(`span`, { children: p ? `显示全部图层` : `Hiện tất cả` })]
							}), (0, A.jsxs)(`span`, {
								className: `tabular-nums font-mono text-ink/65`,
								children: [
									l.length,
									`/6 `,
									p ? `层显示中` : `lớp đang hiển thị`
								]
							})]
						})]
					}), (0, A.jsx)(`div`, {
						className: `grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6`,
						children: we.map((t) => {
							let n = l.includes(t.id), r = d === t.id;
							return (0, A.jsxs)(`button`, {
								type: `button`,
								"aria-pressed": n,
								onClick: () => v(t.id),
								className: `min-h-10 border px-2.5 py-2 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? r ? `border-cinnabar bg-paper text-cinnabar font-semibold` : `border-line/45 bg-paper text-ink hover:border-cinnabar` : `border-line/27 bg-paper-alt/30 text-ink/45 hover:opacity-90`}`,
								children: [(0, A.jsx)(`span`, {
									className: `block font-mono text-[10px] opacity-70`,
									children: t.code
								}), (0, A.jsx)(`span`, {
									className: `block truncate`,
									children: j(t.name, e)
								})]
							}, t.id);
						})
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start`,
					children: [(0, A.jsx)(qe, {
						lang: e,
						layers: we,
						visibleLayers: l,
						activeLayerId: d,
						stations: E,
						activeStation: m,
						visitedIds: r,
						onSelectArea: (e) => {
							_(), f(e), l.includes(e) || u((t) => [...t, e]);
							let r = Ue(E, e, t);
							r !== t && n(r);
						},
						onSelectStation: (e, t) => {
							_(), f(t), l.includes(t) || u((e) => [...e, t]), n(e);
						}
					}), (0, A.jsxs)(`article`, {
						className: `border border-line/36 bg-paper p-5 sm:p-7`,
						children: [
							(0, A.jsxs)(`div`, {
								className: `flex flex-wrap items-start justify-between gap-3 border-b border-line/27 pb-4`,
								children: [(0, A.jsxs)(`div`, { children: [
									(0, A.jsxs)(`p`, {
										className: `text-xs font-mono tabular-nums text-cinnabar`,
										children: [
											p ? `节点 ${m.code}` : `Điểm ${m.code}`,
											` ·`,
											` `,
											m.dimensions
										]
									}),
									(0, A.jsx)(`h3`, {
										className: `mt-1.5 text-2xl font-bold text-ink`,
										children: j(m.name, e)
									}),
									e === `bilingual` && (0, A.jsx)(`p`, {
										lang: `zh-Hans`,
										className: `mt-0.5 text-base font-medium text-ink/70`,
										children: m.name.zh
									})
								] }), (0, A.jsxs)(`button`, {
									type: `button`,
									onClick: () => i(m.id),
									"aria-pressed": g,
									className: `inline-flex min-h-10 items-center gap-1.5 border px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${g ? `border-celadon bg-celadon text-paper` : `border-line/54 text-ink hover:border-celadon hover:text-celadon`}`,
									children: [(0, A.jsx)(Check, {
										className: `h-3.5 w-3.5`,
										"aria-hidden": `true`
									}), (0, A.jsx)(`span`, { children: g ? p ? `已参观` : `Đã ghé thăm` : p ? `标记已游览` : `Đánh dấu đã thăm` })]
								})]
							}),
							(0, A.jsx)(M, {
								lang: e,
								text: m.summary,
								className: `mt-4 text-base font-medium leading-relaxed text-ink`,
								secondaryClassName: `mt-1.5 text-sm leading-relaxed text-ink/75`
							}),
							(0, A.jsx)(M, {
								lang: e,
								text: m.detail,
								className: `mt-4 text-sm leading-relaxed text-ink/80`,
								secondaryClassName: `mt-1.5 text-sm leading-relaxed text-ink/65`
							}),
							(0, A.jsxs)(`div`, {
								className: `mt-5 border-t border-line/27 pt-4`,
								children: [(0, A.jsxs)(`div`, {
									className: `flex flex-wrap items-center gap-3`,
									children: [(0, A.jsx)(`button`, {
										type: `button`,
										onClick: () => o((e) => !e),
										"aria-expanded": a,
										className: `min-h-10 border border-line/45 px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: a ? p ? `收起讲解词` : `Thu gọn thuyết minh` : p ? `阅读现场讲解词` : `Đọc lời thuyết minh tại điểm`
									}), (0, A.jsx)(`button`, {
										type: `button`,
										onClick: () => {
											if (typeof window > `u` || !(`speechSynthesis` in window)) {
												o((e) => !e);
												return;
											}
											if (s) {
												window.speechSynthesis.cancel(), c(!1);
												return;
											}
											window.speechSynthesis.cancel();
											let e = new SpeechSynthesisUtterance(p ? m.audioScript.zh : m.audioScript.vi);
											e.lang = p ? `zh-CN` : `vi-VN`, e.rate = .95, e.onend = () => c(!1), e.onerror = () => c(!1), o(!0), c(!0), window.speechSynthesis.speak(e);
										},
										className: `inline-flex min-h-10 items-center gap-1.5 border border-cinnabar/60 px-3.5 py-2 text-xs font-semibold text-cinnabar transition-colors hover:bg-cinnabar hover:text-paper focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: s ? (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(VolumeX, {
											className: `h-3.5 w-3.5`,
											"aria-hidden": `true`
										}), (0, A.jsx)(`span`, { children: p ? `停止朗读` : `Dừng đọc` })] }) : (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(Volume2, {
											className: `h-3.5 w-3.5`,
											"aria-hidden": `true`
										}), (0, A.jsx)(`span`, { children: p ? `语音朗读` : `Nghe thuyết minh` })] })
									})]
								}), a && (0, A.jsx)(`div`, {
									className: `mt-3 border border-line/27 bg-paper-alt/60 p-4`,
									children: (0, A.jsx)(M, {
										lang: e,
										text: m.audioScript,
										className: `text-sm italic leading-relaxed text-ink/85`,
										secondaryClassName: `mt-2 text-xs not-italic leading-relaxed text-ink/70`
									})
								})]
							}),
							m.image && (0, A.jsxs)(`figure`, {
								className: `mt-6 border-t border-line/27 pt-5`,
								children: [(0, A.jsx)(`div`, {
									className: `bg-paper-alt p-2 border border-line/27`,
									children: (0, A.jsx)(`img`, {
										src: m.image,
										alt: j(m.name, e),
										referrerPolicy: `no-referrer`,
										className: `aspect-[3/2] w-full object-cover`
									})
								}), m.imageCaption && (0, A.jsxs)(`figcaption`, {
									className: `mt-2 text-xs italic text-ink/65`,
									children: [j(m.imageCaption, e), e === `bilingual` && (0, A.jsx)(`span`, {
										lang: `zh-Hans`,
										className: `block not-italic text-ink/55`,
										children: m.imageCaption.zh
									})]
								})]
							}),
							(0, A.jsx)(`div`, {
								className: `mt-6 border-t border-line/27 pt-5`,
								children: (0, A.jsx)(Xe, {
									lang: e,
									compact: !0,
									contextTitle: `${we.find((e) => e.id === d)?.name.vi ?? ``} (${m.name.zh})`,
									presets: [{
										id: `arch-detail`,
										label: {
											vi: `Kiến trúc & Bảo tồn khu vực này`,
											zh: `核查该区建筑与保护动态`
										},
										query: `Kiến trúc và hiện trạng bảo tồn gần đây của khu vực ${m.name.zh} (${m.name.vi}) tại 丰图义仓`
									}, {
										id: `2026-plan`,
										label: {
											vi: `Quy hoạch Bảo vệ 2026`,
											zh: `2026年丰图义仓保护规划`
										},
										query: `Tiến độ Quy hoạch Bảo vệ Di tích 丰图义仓 năm 2026 của Viện Di sản Văn hóa Thiểm Tây`
									}]
								})
							})
						]
					})]
				})
			]
		})
	});
}
function $e({ lang: e }) {
	let t = e === `zh`;
	return (0, A.jsx)(`footer`, {
		className: `border-t border-line/36 bg-paper-alt/40 py-8`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-ink/65 sm:flex-row sm:items-center sm:px-6`,
			children: [(0, A.jsxs)(`div`, { children: [
				(0, A.jsxs)(`p`, {
					className: `font-semibold text-ink`,
					children: [
						`丰图义仓 ·`,
						` `,
						t ? `The Living Heritage of Grain · 陕西大荔朝邑镇数字遗产博物馆` : `The Living Heritage of Grain · Bảo tàng Di sản Số Triều Ấp, Đại Lệ`
					]
				}),
				(0, A.jsx)(`p`, {
					className: `mt-1`,
					children: t ? `光绪八年（1882）始建 · 2023年停止央储转向活态传承 · 附 SRC-001–009 核查档案` : `Khởi dựng 1882 · Bảo tàng Di sản Sống (cập nhật 2023–2026) · Biên soạn theo chuẩn UNESCO & ICOMOS`
				}),
				(0, A.jsx)(`span`, {
					className: `whisper mt-2 block`,
					"aria-hidden": `true`,
					children: `« pour les moments qui restent ✿ »`
				})
			] }), (0, A.jsx)(`a`, {
				href: `#top`,
				className: `border border-line/45 px-3 py-1.5 font-medium text-ink transition-colors hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
				children: t ? `返回顶部 ↑` : `Về đầu trang ↑`
			})]
		})
	});
}
function et({ lang: e }) {
	let [t, n] = (0, h.useState)(Oe[0].id), [r, i] = (0, h.useState)(0), [a, o] = (0, h.useState)(null), [s, c] = (0, h.useState)(5), l = e === `zh`, u = Oe.find((e) => e.id === t) ?? Oe[0], d = O[r] ?? O[0], f = a === d.correctOptionId;
	return (0, A.jsx)(`section`, {
		id: `museum`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [(0, A.jsxs)(`div`, {
				className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
				children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
					className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
					children: l ? `06 · 粮食文化博物馆` : `06. Bảo tàng Văn hóa Lương thực · 粮食文化博物馆`
				}), (0, A.jsx)(`h2`, {
					className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
					children: l ? `农具、衡器、粮票与备荒制度六大展区` : `Nông cụ, Cân đong, Tem phiếu & Văn hóa Lương thực`
				})] }), (0, A.jsx)(`p`, {
					className: `max-w-md text-xs leading-relaxed text-ink/70`,
					children: l ? `注：以下6个专题为本指南的编研分组（2021年官方曾记录现场设有12个展室及农耕体验区，待核实最新展陈目录）。` : `Lưu ý: 6 nhóm sau là phân nhóm biên tập (tài liệu năm 2021 ghi nhận 12 phòng trưng bày tại điểm — SRC-001).`
				})]
			}), (0, A.jsxs)(`div`, {
				className: `grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start`,
				children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`div`, {
					className: `grid grid-cols-1 gap-3 sm:grid-cols-2`,
					children: Oe.map((t) => {
						let r = t.id === u.id;
						return (0, A.jsxs)(`button`, {
							type: `button`,
							"aria-pressed": r,
							onClick: () => n(t.id),
							className: `border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${r ? `border-cinnabar bg-paper-alt/80` : `border-line/36 bg-paper hover:border-cinnabar/60`}`,
							children: [
								(0, A.jsx)(`p`, {
									className: `font-mono text-xs text-cinnabar`,
									children: t.code
								}),
								(0, A.jsx)(`h3`, {
									className: `mt-1 text-base font-bold text-ink`,
									children: j(t.name, e)
								}),
								(0, A.jsx)(`p`, {
									className: `mt-1.5 text-xs leading-relaxed text-ink/70`,
									children: j(t.focus, e)
								})
							]
						}, t.id);
					})
				}), (0, A.jsxs)(`div`, {
					className: `mt-4 border border-line/36 bg-paper p-5`,
					children: [
						(0, A.jsx)(`p`, {
							className: `font-mono text-xs text-cinnabar`,
							children: l ? `专题 ${u.code}` : `Nhóm ${u.code}`
						}),
						(0, A.jsx)(`h3`, {
							className: `mt-1 text-xl font-bold text-ink`,
							children: j(u.name, e)
						}),
						(0, A.jsx)(M, {
							lang: e,
							text: u.focus,
							className: `mt-2 text-sm leading-relaxed text-ink/85`,
							secondaryClassName: `mt-1.5 text-xs leading-relaxed text-ink/65`
						}),
						(0, A.jsx)(`p`, {
							className: `mt-3 border-t border-line/27 pt-3 text-xs font-medium text-celadon`,
							children: j(u.highlights, e)
						})
					]
				})] }), (0, A.jsxs)(`div`, {
					className: `space-y-6`,
					children: [
						(0, A.jsxs)(`figure`, {
							className: `frame bg-paper-alt p-2`,
							children: [(0, A.jsx)(`img`, {
								src: Ce.museum,
								alt: l ? `传统木斗、石磨、簸箕与旧粮票馆藏展示意象` : `Đẩu đong gỗ, cối đá xay, sàng thóc và tem phiếu lương thực cổ`,
								referrerPolicy: `no-referrer`,
								className: `aspect-[4/3] w-full object-cover`
							}), (0, A.jsx)(`figcaption`, {
								className: `mt-2 px-1 text-xs italic text-ink/65`,
								children: l ? `图七 — 传统量器（木斗）、农耕加工器具与二十世纪粮票展示意象。` : `Fig. 7 — Đẩu đong gỗ, cối xay đá và tem phiếu lương thực trong trưng bày văn hóa lương thực.`
							})]
						}),
						(0, A.jsxs)(`div`, {
							className: `border border-line/36 bg-paper p-5`,
							children: [
								(0, A.jsxs)(`div`, {
									className: `flex items-center justify-between gap-2 border-b border-line/27 pb-3`,
									children: [(0, A.jsx)(`h3`, {
										className: `text-base font-bold text-ink`,
										children: l ? `互动辨物 · 认识传统粮具` : `Trò chơi Nhận diện Nông cụ & Tem phiếu`
									}), (0, A.jsxs)(`span`, {
										className: `tabular-nums font-mono text-xs text-cinnabar`,
										children: [
											r + 1,
											` / `,
											O.length
										]
									})]
								}),
								(0, A.jsx)(`p`, {
									className: `mt-3 text-sm leading-relaxed text-ink`,
									children: j(d.prompt, e)
								}),
								(0, A.jsx)(`div`, {
									className: `mt-3 space-y-2`,
									children: d.options.map((t) => {
										let n = a === t.id, r = t.id === d.correctOptionId;
										return (0, A.jsxs)(`button`, {
											type: `button`,
											onClick: () => o(t.id),
											className: `flex min-h-10 w-full items-center justify-between border px-3 py-2 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? r ? `border-celadon bg-celadon/15 text-ink font-semibold` : `border-cinnabar bg-cinnabar/15 text-ink font-semibold` : `border-line/36 bg-paper hover:border-cinnabar`}`,
											children: [(0, A.jsx)(`span`, { children: j(t.label, e) }), n && (r ? (0, A.jsx)(CircleCheck, {
												className: `h-4 w-4 text-celadon shrink-0`,
												"aria-hidden": `true`
											}) : (0, A.jsx)(CircleX, {
												className: `h-4 w-4 text-cinnabar shrink-0`,
												"aria-hidden": `true`
											}))]
										}, t.id);
									})
								}),
								a && (0, A.jsx)(`div`, {
									className: `mt-3 border-t border-line/27 pt-3 text-xs leading-relaxed text-ink/80`,
									children: (0, A.jsx)(`p`, {
										className: f ? `font-semibold text-celadon` : `font-semibold text-cinnabar`,
										children: j(d.explanation, e)
									})
								}),
								(0, A.jsx)(`div`, {
									className: `mt-4 flex justify-end`,
									children: (0, A.jsx)(`button`, {
										type: `button`,
										onClick: () => {
											o(null), i((e) => (e + 1) % O.length);
										},
										className: `min-h-9 border border-line/45 px-3.5 py-1.5 text-xs font-medium text-ink hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: l ? `下一题 →` : `Câu hỏi tiếp theo →`
									})
								})
							]
						}),
						(0, A.jsxs)(`div`, {
							className: `border border-line/36 bg-paper-alt/40 p-4`,
							children: [
								(0, A.jsxs)(`div`, {
									className: `flex items-center justify-between text-xs`,
									children: [(0, A.jsx)(`span`, {
										className: `font-semibold text-ink`,
										children: l ? `传统容量换算参考（斗 / 升）` : `Đối chiếu Đong cổ (1 Đẩu = 10 Thăng)`
									}), (0, A.jsxs)(`span`, {
										className: `tabular-nums font-mono font-bold text-cinnabar`,
										children: [
											s,
											` `,
											l ? `斗` : `Đẩu`
										]
									})]
								}),
								(0, A.jsx)(`input`, {
									type: `range`,
									"aria-label": l ? `调节木斗数量` : `Số lượng Đẩu gỗ`,
									min: 1,
									max: 20,
									value: s,
									onChange: (e) => c(Number(e.target.value)),
									className: `mt-2.5 w-full accent-cinnabar`
								}),
								(0, A.jsxs)(`div`, {
									className: `mt-2 flex flex-wrap justify-between gap-2 text-xs text-ink/75 tabular-nums font-mono`,
									children: [(0, A.jsxs)(`span`, { children: [
										`= `,
										s * 10,
										` `,
										l ? `升 (Thăng)` : `Thăng (升)`
									] }), (0, A.jsxs)(`span`, { children: [
										`≈ `,
										s * 10,
										` L (`,
										l ? `市制体积参考` : `quy đổi thể tích tham khảo`,
										`)`
									] })]
								})
							]
						})
					]
				})]
			})]
		})
	});
}
function tt(e) {
	return (0, A.jsx)(VaultExplorer, { lang: e.lang });
}
function nt({ lang: e, onLangChange: t, theme: n, onThemeToggle: r, onExplorePlan: i }) {
	let a = e === `zh`, o = [
		{
			value: `1882–1885`,
			label: {
				vi: `Khởi công & hoàn thành`,
				zh: `光绪八年始建 · 十一年落成`
			}
		},
		{
			value: `58 廒 · ~5.220 Tấn`,
			label: {
				vi: `Sức chứa thiết kế (2021 ghi 5.229 tấn)`,
				zh: `设计容量 · 2021年记录储粮5229吨`
			}
		},
		{
			value: `2023–2026`,
			label: {
				vi: `Ngừng dự trữ TƯ · Bảo dưỡng & Di sản sống`,
				zh: `停止央储任务 · 维持护养与展教`
			}
		},
		{
			value: `08:00–18:00`,
			label: {
				vi: `Giờ niêm yết · Kiểm tra trước khi đến`,
				zh: `参考时段 · 出行前请核实票务`
			}
		}
	], s = [
		{
			href: `#top`,
			label: a ? `00 序章` : `00. Dẫn nhập`
		},
		{
			href: `#explore`,
			label: a ? `01 全景` : `01. Di tích`
		},
		{
			href: `#timeline`,
			label: a ? `02 历史` : `02. Lịch sử`
		},
		{
			href: `#architecture`,
			label: a ? `03 建筑` : `03. Kiến trúc`
		},
		{
			href: `#granaries`,
			label: a ? `04 五十八廒` : `04. 58 Kho`
		},
		{
			href: `#people`,
			label: a ? `05 人物` : `05. Nhân vật`
		},
		{
			href: `#museum`,
			label: a ? `06 博物馆` : `06. Bảo tàng`
		},
		{
			href: `#living`,
			label: a ? `07 活态传承` : `07. Di sản sống`
		},
		{
			href: `#visit`,
			label: a ? `08 参观` : `08. Tham quan`
		},
		{
			href: `#research`,
			label: a ? `09 档案` : `09. Nguồn`
		}
	];
	return (0, A.jsx)(`section`, {
		id: `top`,
		className: `border-b border-line/27 pt-6 pb-10 sm:pt-8 sm:pb-12`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [
				(0, A.jsx)(`span`, {
					className: `whisper mb-1 block`,
					"aria-hidden": `true`,
					children: `« les greniers de la mémoire »`
				}),
				(0, A.jsxs)(`div`, {
					className: `mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line/18 pb-4`,
					children: [(0, A.jsxs)(`div`, {
						className: `flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-ink/65`,
						children: [
							(0, A.jsx)(`span`, { children: a ? `陕西省渭南市大荔县朝邑镇` : `Triều Ấp · Đại Lệ · Thiểm Tây` }),
							(0, A.jsx)(`span`, {
								"aria-hidden": `true`,
								className: `hidden sm:inline`,
								children: `·`
							}),
							(0, A.jsx)(`span`, { children: a ? `丰图义仓 · The Living Heritage of Grain` : `Bảo tàng Di sản Số · An Interactive Cultural Heritage Guide` })
						]
					}), (0, A.jsxs)(`div`, {
						className: `flex items-center gap-3`,
						children: [(0, A.jsx)(`div`, {
							role: `group`,
							"aria-label": a ? `语言模式` : `Chế độ ngôn ngữ`,
							className: `inline-flex border border-line/36 bg-paper-alt/60 p-0.5`,
							children: [
								{
									id: `bilingual`,
									label: `Song ngữ`
								},
								{
									id: `vi`,
									label: `Tiếng Việt`
								},
								{
									id: `zh`,
									label: `中文`
								}
							].map((n) => {
								let r = e === n.id;
								return (0, A.jsx)(`button`, {
									type: `button`,
									"aria-pressed": r,
									onClick: () => t(n.id),
									className: `min-h-8 px-3 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${r ? `bg-ink text-paper` : `text-ink/75 hover:text-cinnabar`}`,
									children: n.label
								}, n.id);
							})
						}), (0, A.jsx)(`button`, {
							type: `button`,
							onClick: r,
							"aria-label": n === `light` ? a ? `切换夜间墨色主题` : `Chuyển sang giao diện mực đêm` : a ? `切换日间纸本主题` : `Chuyển sang giao diện giấy sáng`,
							className: `inline-flex min-h-9 items-center gap-1.5 border border-line/36 px-3 py-1.5 text-xs font-medium text-ink/80 whitespace-nowrap shrink-0 transition-colors hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
							children: n === `light` ? (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(Moon, {
								className: `h-3.5 w-3.5`,
								"aria-hidden": `true`
							}), (0, A.jsx)(`span`, { children: a ? `墨夜` : `Mực đêm` })] }) : (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)(Sun, {
								className: `h-3.5 w-3.5`,
								"aria-hidden": `true`
							}), (0, A.jsx)(`span`, { children: a ? `纸本` : `Giấy sáng` })] })
						})]
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch`,
					children: [(0, A.jsxs)(`div`, {
						className: `flex flex-col justify-between gap-6`,
						children: [(0, A.jsxs)(`div`, { children: [
							(0, A.jsxs)(`div`, {
								className: `flex flex-wrap items-center gap-4`,
								children: [(0, A.jsx)(`h1`, {
									className: `text-4xl font-bold tracking-wide text-ink sm:text-5xl`,
									children: e === `zh` ? `丰图义仓 · 记忆的粮仓` : `A Granary That Remembers.`
								}), (0, A.jsx)(`span`, {
									className: `seal inline-block px-2.5 py-1 text-xs uppercase whitespace-nowrap shrink-0`,
									children: `丰图义仓`
								})]
							}),
							(0, A.jsx)(`p`, {
								className: `mt-3 text-lg font-medium tracking-wide text-cinnabar sm:text-xl`,
								children: a ? `为护粮而筑，为守望相助而存 · The Living Heritage of Grain` : `Xây để giữ hạt thóc, dựng nên để dân cưu mang nhau`
							}),
							(0, A.jsx)(M, {
								lang: e,
								text: {
									vi: `Phong Đồ Nghĩa Thương được xây dựng để lưu trữ lương thực trong những năm được mùa và cứu trợ người dân khi mùa màng thất bát. Từ năm 2023, dù không còn thực hiện nhiệm vụ dự trữ trung ương, 58 gian kho vẫn được bảo dưỡng định kỳ như một chứng tích sống của lịch sử an ninh lương thực và lòng tương trợ cộng đồng.`,
									zh: `丰图义仓昔为丰年储谷、荒年放赈而建。自2023年起不再承担中央储备粮任务，但五十八孔仓廒仍持续维护并保持可用状态，转型为讲述粮食安全历史、农耕技艺与乡土互助的活态文化遗产。`
								},
								className: `mt-5 max-w-2xl text-base leading-relaxed text-ink/85`,
								secondaryClassName: `mt-2.5 text-sm leading-relaxed text-ink/70`
							}),
							(0, A.jsx)(`div`, {
								className: `mt-5 border-t border-b border-line/36 py-3`,
								children: (0, A.jsx)(`p`, {
									className: `text-sm italic leading-relaxed text-ink/85`,
									children: a ? `“一座粮仓不仅储存谷物，更封存着丰歉更迭、饥荒记忆、守望相助与营造智慧。”` : `“Một kho lương không chỉ lưu giữ ngũ cốc. Nó lưu giữ ký ức về mùa màng, nạn đói, lòng tương trợ và trí tuệ của những người xây dựng nó.”`
								})
							})
						] }), (0, A.jsxs)(`div`, {
							className: `flex flex-wrap items-center gap-4 pt-1`,
							children: [(0, A.jsx)(`button`, {
								type: `button`,
								onClick: i,
								className: `min-h-11 bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-paper whitespace-nowrap shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar`,
								children: a ? `进入 01 · 全景探索` : `Khám phá Bản đồ Di tích`
							}), (0, A.jsx)(`a`, {
								href: `#research`,
								className: `min-h-11 inline-flex items-center border border-line/54 px-5 py-3 text-sm font-medium text-ink whitespace-nowrap shrink-0 transition-colors hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar`,
								children: a ? `查看核证档案 (2026)` : `Hồ sơ Xác minh (2026)`
							})]
						})]
					}), (0, A.jsxs)(`figure`, {
						className: `flex flex-col`,
						children: [(0, A.jsx)(`div`, {
							className: `frame relative flex-1 bg-paper-alt p-2.5`,
							children: (0, A.jsx)(`img`, {
								src: Ce.hero,
								alt: a ? `丰图义仓清代青砖城墙与飞檐仓楼全景` : `Toàn cảnh tường thành gạch xanh và lầu cổng Phong Đồ Nghĩa Thương dưới nắng chiều`,
								referrerPolicy: `no-referrer`,
								className: `aspect-[16/10] w-full object-cover lg:h-full`
							})
						}), (0, A.jsx)(`figcaption`, {
							className: `mt-2.5 text-xs italic text-ink/65`,
							children: a ? `图一 — 朝邑高塬上的丰图义仓城墙与南向仓楼（据《陕西日报》2026年6月5日核实转型现状）。` : `Fig. 1 — Tường thành gạch xanh và lầu cổng trên triền đất Triều Ấp (cập nhật hiện trạng chuyển đổi 2023–2026 theo Thiểm Tây Nhật Báo).`
						})]
					})]
				}),
				(0, A.jsx)(`dl`, {
					className: `mt-10 grid grid-cols-2 border border-line/36 sm:grid-cols-4`,
					children: o.map((t, n) => (0, A.jsxs)(`div`, {
						className: `p-4 ${n > 0 ? `border-t border-line/27 sm:border-t-0 sm:border-l` : ``} ${n === 1 ? `border-l border-t-0` : ``}`,
						children: [(0, A.jsxs)(`dt`, {
							className: `text-xs tracking-wide text-ink/65`,
							children: [e === `zh` ? t.label.zh : t.label.vi, e === `bilingual` && (0, A.jsx)(`span`, {
								lang: `zh-Hans`,
								className: `block text-[11px] text-ink/55`,
								children: t.label.zh
							})]
						}), (0, A.jsx)(`dd`, {
							className: `tabular-nums mt-1.5 text-lg font-bold text-ink sm:text-xl`,
							children: t.value
						})]
					}, t.value))
				}),
				(0, A.jsx)(`nav`, {
					"aria-label": a ? `十章导览索引` : `Mục lục 10 chương triển lãm`,
					className: `mt-5 flex items-center gap-4 rail overflow-x-auto border-t border-line/18 pt-3.5 text-xs font-medium text-ink/75`,
					children: s.map((e) => (0, A.jsx)(`a`, {
						href: e.href,
						className: `whitespace-nowrap shrink-0 transition-colors hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
						children: e.label
					}, e.href))
				})
			]
		})
	});
}
function rt({ lang: e, onJumpToSource: t }) {
	let n = e === `zh`;
	return (0, A.jsx)(`section`, {
		id: `living`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [(0, A.jsxs)(`div`, {
				className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
				children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
					className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
					children: n ? `07 · 活态传承与2026最新动态` : `07. Di sản Sống & Hoạt động Bảo tồn · 活态传承`
				}), (0, A.jsx)(`h2`, {
					className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
					children: n ? `从储备粮库走向文化体验与保护规划` : `Hồ sơ Sự kiện Theo năm & Quy hoạch Bảo vệ 2026`
				})] }), (0, A.jsx)(`p`, {
					className: `max-w-md text-xs leading-relaxed text-ink/70`,
					children: n ? `按年份记录已报道的文化展演与保护动态，避免将2026年6月节庆期报道误标为全年每日固定演出。` : `Lưu trữ sự kiện theo thời điểm xác minh (báo chí tháng 06/2026 & đấu thầu tháng 05/2026), không mặc định là lịch diễn cố định hằng ngày.`
				})]
			}), (0, A.jsx)(`div`, {
				className: `grid grid-cols-1 gap-6 md:grid-cols-3`,
				children: k.map((r) => (0, A.jsxs)(`article`, {
					className: `flex flex-col justify-between border border-line/36 bg-paper p-5 sm:p-6`,
					children: [(0, A.jsxs)(`div`, { children: [
						(0, A.jsxs)(`div`, {
							className: `flex flex-wrap items-center justify-between gap-2 border-b border-line/27 pb-3 text-xs`,
							children: [(0, A.jsxs)(`span`, {
								className: `inline-flex items-center gap-1.5 font-mono text-cinnabar`,
								children: [(0, A.jsx)(Calendar, {
									className: `h-3.5 w-3.5`,
									"aria-hidden": `true`
								}), (0, A.jsx)(`span`, { children: r.dateLabel })]
							}), (0, A.jsx)(`span`, {
								className: `text-ink/60`,
								children: j(r.statusTag, e)
							})]
						}),
						(0, A.jsx)(`h3`, {
							className: `mt-4 text-lg font-bold text-ink leading-snug`,
							children: j(r.title, e)
						}),
						(0, A.jsx)(M, {
							lang: e,
							text: r.description,
							className: `mt-3 text-sm leading-relaxed text-ink/80`,
							secondaryClassName: `mt-2 text-xs leading-relaxed text-ink/65`
						})
					] }), (0, A.jsxs)(`div`, {
						className: `mt-5 flex flex-wrap items-center gap-2 border-t border-line/27 pt-3 text-xs`,
						children: [(0, A.jsx)(`span`, {
							className: `text-ink/55`,
							children: n ? `核实来源：` : `Nguồn dẫn:`
						}), r.sourceIds.map((e) => (0, A.jsxs)(`button`, {
							type: `button`,
							onClick: () => t(e),
							className: `inline-flex items-center gap-1 border border-line/36 px-2 py-0.5 font-mono text-[11px] text-ink/80 hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
							children: [(0, A.jsx)(`span`, { children: e }), (0, A.jsx)(ArrowDownRight, {
								className: `h-3 w-3`,
								"aria-hidden": `true`
							})]
						}, e))]
					})]
				}, r.id))
			})]
		})
	});
}
function it({ lang: e }) {
	let [t, n] = (0, h.useState)(78), [r, i] = (0, h.useState)(95), [a, o] = (0, h.useState)([
		`roof`,
		`wall`,
		`floor`,
		`drainage`
	]), [s, c] = (0, h.useState)(`floor`), [l, u] = (0, h.useState)(`site`), d = e === `zh`, f = (e) => {
		c(e), o((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}, p = (e, t) => {
		n(e), i(t);
	}, m = Ie(t, r, a, Te), g = Te.find((e) => e.id === s) ?? Te[0], _ = D.find((e) => e.id === l) ?? D[0], v = {
		optimal: {
			label: d ? `干燥优良（示意模型）` : `Khô ráo tối ưu (Mô hình)`,
			className: `border-celadon text-celadon`,
			Icon: ShieldCheck
		},
		stable: {
			label: d ? `尚属平稳（示意模型）` : `Ổn định (Mô hình)`,
			className: `border-gold text-gold`,
			Icon: CircleCheck
		},
		caution: {
			label: d ? `潮气偏高（示意模型）` : `Độ ẩm cao (Mô hình)`,
			className: `border-cinnabar text-cinnabar`,
			Icon: TriangleAlert
		}
	}[m.grade], y = v.Icon;
	return (0, A.jsx)(`section`, {
		id: `architecture`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [
				(0, A.jsxs)(`div`, {
					className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
					children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
						className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
						children: d ? `03 · 建筑智慧五大原则` : `03. Trí tuệ Kiến trúc & Kỹ thuật Bảo quản · 建筑智慧`
					}), (0, A.jsx)(`h2`, {
						className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
						children: d ? `选址 · 结构 · 通风 · 防潮 · 排水` : `Năm Trụ cột Kỹ thuật & Mặt cắt Chống ẩm`
					})] }), (0, A.jsx)(`p`, {
						className: `max-w-md text-xs leading-relaxed text-ink/70`,
						children: d ? `结合实地报道与历史文献阐释营造原理；右侧微气候参数为教学示意，不代表实时传感实测值。` : `Tổng hợp 5 chủ đề kỹ thuật xây dựng đời Thanh; bộ mô phỏng khí hậu bên dưới là mô hình minh họa giáo dục.`
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `mb-8 border border-line/36 bg-paper-alt/40 p-4 sm:p-5`,
					children: [(0, A.jsx)(`div`, {
						className: `grid grid-cols-2 gap-2 sm:grid-cols-5`,
						children: D.map((t) => {
							let n = t.id === _.id;
							return (0, A.jsxs)(`button`, {
								type: `button`,
								"aria-pressed": n,
								onClick: () => u(t.id),
								className: `min-h-11 border px-3 py-2 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? `border-cinnabar bg-cinnabar text-paper font-semibold` : `border-line/36 bg-paper text-ink/80 hover:border-cinnabar hover:text-cinnabar`}`,
								children: [(0, A.jsx)(`span`, {
									className: `block font-mono text-[10px] opacity-75`,
									children: t.code
								}), (0, A.jsx)(`span`, {
									className: `block truncate`,
									children: j(t.name, e)
								})]
							}, t.id);
						})
					}), (0, A.jsxs)(`div`, {
						className: `mt-4 border-t border-line/27 pt-4`,
						children: [
							(0, A.jsx)(`h3`, {
								className: `text-lg font-bold text-ink`,
								children: j(_.name, e)
							}),
							(0, A.jsx)(M, {
								lang: e,
								text: _.summary,
								className: `mt-2 max-w-3xl text-sm leading-relaxed text-ink/85`,
								secondaryClassName: `mt-1.5 max-w-3xl text-xs leading-relaxed text-ink/65`
							}),
							(0, A.jsx)(`p`, {
								className: `mt-2.5 text-xs italic text-ink/60`,
								children: j(_.evidenceNote, e)
							})
						]
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start`,
					children: [(0, A.jsxs)(`div`, {
						className: `space-y-6`,
						children: [(0, A.jsxs)(`div`, {
							className: `frame bg-paper-alt/55 p-4 sm:p-6`,
							children: [
								(0, A.jsxs)(`div`, {
									className: `mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/70`,
									children: [(0, A.jsx)(`span`, { children: d ? `廒房横剖面示意（点击层位可开关）` : `Mặt cắt minh họa gian kho · Nhấn lớp để bật/tắt` }), (0, A.jsxs)(`span`, {
										className: `tabular-nums font-mono`,
										children: [
											a.length,
											`/4 `,
											d ? `层启用` : `lớp đang bật`
										]
									})]
								}),
								(0, A.jsxs)(`svg`, {
									viewBox: `0 0 560 320`,
									className: `w-full border border-line/36 bg-paper text-ink`,
									role: `img`,
									"aria-label": d ? `丰图义仓四重防潮剖面图` : `Sơ đồ mặt cắt bốn lớp chống ẩm kho thóc`,
									children: [
										(0, A.jsx)(`line`, {
											x1: `20`,
											y1: `265`,
											x2: `540`,
											y2: `265`,
											stroke: `currentColor`,
											strokeOpacity: `0.4`,
											strokeWidth: `1.5`
										}),
										(0, A.jsxs)(`g`, {
											opacity: a.includes(`drainage`) ? 1 : .28,
											className: `cursor-pointer transition-opacity`,
											onClick: () => f(`drainage`),
											children: [
												(0, A.jsx)(`polygon`, {
													points: `24,265 110,265 110,285 24,275`,
													fill: `color-mix(in oklab, var(--theme-celadon) 24%, transparent)`,
													stroke: `var(--theme-celadon)`,
													strokeWidth: `1.5`
												}),
												(0, A.jsx)(`rect`, {
													x: `55`,
													y: `276`,
													width: `34`,
													height: `22`,
													fill: `var(--theme-paper)`,
													stroke: `var(--theme-celadon)`,
													strokeWidth: `1.5`
												}),
												(0, A.jsxs)(`text`, {
													x: `26`,
													y: `308`,
													className: `fill-current font-mono text-[10px]`,
													children: [`L4 · `, d ? `微坡院面与暗沟` : `Sân dốc & rãnh ngầm`]
												})
											]
										}),
										(0, A.jsxs)(`g`, {
											opacity: a.includes(`wall`) ? 1 : .28,
											className: `cursor-pointer transition-opacity`,
											onClick: () => f(`wall`),
											children: [
												(0, A.jsx)(`rect`, {
													x: `115`,
													y: `108`,
													width: `36`,
													height: `157`,
													fill: `color-mix(in oklab, var(--theme-ink) 18%, transparent)`,
													stroke: `currentColor`,
													strokeWidth: `1.5`
												}),
												(0, A.jsx)(`rect`, {
													x: `410`,
													y: `108`,
													width: `36`,
													height: `157`,
													fill: `color-mix(in oklab, var(--theme-ink) 18%, transparent)`,
													stroke: `currentColor`,
													strokeWidth: `1.5`
												}),
												(0, A.jsx)(`line`, {
													x1: `115`,
													y1: `130`,
													x2: `151`,
													y2: `130`,
													stroke: `var(--theme-cinnabar)`,
													strokeWidth: `2`
												}),
												(0, A.jsx)(`line`, {
													x1: `410`,
													y1: `130`,
													x2: `446`,
													y2: `130`,
													stroke: `var(--theme-cinnabar)`,
													strokeWidth: `2`
												}),
												(0, A.jsxs)(`text`, {
													x: `456`,
													y: `185`,
													className: `fill-current font-mono text-[10px]`,
													children: [`L2 · `, d ? `砖土厚墙` : `Tường dày`]
												})
											]
										}),
										(0, A.jsxs)(`g`, {
											opacity: a.includes(`roof`) ? 1 : .28,
											className: `cursor-pointer transition-opacity`,
											onClick: () => f(`roof`),
											children: [
												(0, A.jsx)(`polygon`, {
													points: `92,108 280,52 468,108`,
													fill: `none`,
													stroke: `currentColor`,
													strokeWidth: `2.5`
												}),
												(0, A.jsx)(`polygon`, {
													points: `82,98 280,34 478,98`,
													fill: `color-mix(in oklab, var(--theme-cinnabar) 14%, transparent)`,
													stroke: `var(--theme-cinnabar)`,
													strokeWidth: `2.5`
												}),
												(0, A.jsxs)(`text`, {
													x: `280`,
													y: `24`,
													textAnchor: `middle`,
													className: `fill-current font-mono text-[10px]`,
													children: [`L1 · `, d ? `坡屋面与隔热气层` : `Mái ngói dốc & lớp đệm`]
												})
											]
										}),
										(0, A.jsxs)(`g`, {
											opacity: `0.85`,
											children: [
												(0, A.jsx)(`rect`, {
													x: `185`,
													y: `186`,
													width: `190`,
													height: `44`,
													fill: `color-mix(in oklab, var(--theme-gold) 30%, transparent)`,
													stroke: `var(--theme-gold)`,
													strokeWidth: `1.5`
												}),
												(0, A.jsx)(`rect`, {
													x: `205`,
													y: `152`,
													width: `150`,
													height: `34`,
													fill: `color-mix(in oklab, var(--theme-gold) 24%, transparent)`,
													stroke: `var(--theme-gold)`,
													strokeWidth: `1.5`
												}),
												(0, A.jsx)(`text`, {
													x: `280`,
													y: `212`,
													textAnchor: `middle`,
													className: `fill-current text-[12px] font-semibold`,
													children: d ? `传统储粮空间` : `Không gian trữ hạt`
												})
											]
										}),
										(0, A.jsxs)(`g`, {
											opacity: a.includes(`floor`) ? 1 : .28,
											className: `cursor-pointer transition-opacity`,
											onClick: () => f(`floor`),
											children: [
												(0, A.jsx)(`rect`, {
													x: `151`,
													y: `230`,
													width: `259`,
													height: `10`,
													fill: `color-mix(in oklab, var(--theme-cinnabar) 35%, transparent)`,
													stroke: `var(--theme-cinnabar)`,
													strokeWidth: `1.5`
												}),
												[
													172,
													224,
													276,
													328,
													378
												].map((e) => (0, A.jsx)(`rect`, {
													x: e,
													y: `240`,
													width: `12`,
													height: `25`,
													fill: `currentColor`,
													fillOpacity: `0.45`
												}, e)),
												(0, A.jsxs)(`text`, {
													x: `280`,
													y: `294`,
													textAnchor: `middle`,
													className: `fill-current font-mono text-[10px]`,
													children: [`L3 · `, d ? `架空木地板与板底通风` : `Sàn gỗ kê cao · Thông khí gầm`]
												})
											]
										})
									]
								}),
								(0, A.jsx)(`div`, {
									className: `mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2`,
									children: Te.map((t) => {
										let n = a.includes(t.id), r = s === t.id;
										return (0, A.jsxs)(`button`, {
											type: `button`,
											onClick: () => f(t.id),
											"aria-pressed": n,
											className: `border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? r ? `border-cinnabar bg-paper` : `border-line/54 bg-paper hover:border-cinnabar` : `border-line/27 bg-paper-alt/40 opacity-65 hover:opacity-100`}`,
											children: [
												(0, A.jsxs)(`div`, {
													className: `flex items-center justify-between gap-2 text-xs`,
													children: [(0, A.jsx)(`span`, {
														className: `font-mono font-bold text-cinnabar`,
														children: t.code
													}), (0, A.jsxs)(`span`, {
														className: `tabular-nums font-mono text-ink/65`,
														children: [
															`-`,
															t.humidityReduction,
															`% RH (mô hình)`
														]
													})]
												}),
												(0, A.jsx)(`p`, {
													className: `mt-1 text-sm font-semibold text-ink`,
													children: j(t.name, e)
												}),
												(0, A.jsx)(`p`, {
													className: `mt-0.5 text-xs text-ink/65`,
													children: t.spec
												})
											]
										}, t.id);
									})
								})
							]
						}), (0, A.jsxs)(`div`, {
							className: `border border-line/36 bg-paper p-5`,
							children: [
								(0, A.jsxs)(`div`, {
									className: `flex items-center justify-between gap-2 text-xs text-ink/60`,
									children: [(0, A.jsxs)(`span`, {
										className: `font-mono uppercase`,
										children: [
											g.code,
											` · `,
											g.spec
										]
									}), (0, A.jsx)(`span`, { children: a.includes(g.id) ? d ? `当前启用` : `Đang bật` : d ? `已关闭对比` : `Đang tắt để đối chiếu` })]
								}),
								(0, A.jsx)(`h3`, {
									className: `mt-1.5 text-lg font-bold text-ink`,
									children: j(g.name, e)
								}),
								(0, A.jsx)(M, {
									lang: e,
									text: g.description,
									className: `mt-2 text-sm leading-relaxed text-ink/80`,
									secondaryClassName: `mt-1.5 text-xs leading-relaxed text-ink/65`
								})
							]
						})]
					}), (0, A.jsxs)(`div`, {
						className: `space-y-6`,
						children: [(0, A.jsxs)(`div`, {
							className: `border border-line/36 bg-paper p-5 sm:p-6`,
							children: [
								(0, A.jsxs)(`div`, {
									className: `flex flex-wrap items-center justify-between gap-2 border-b border-line/27 pb-3`,
									children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
										className: `font-mono text-[10px] uppercase tracking-wider text-ink/55`,
										children: d ? `教学演示模型 · 非实测传感数据` : `MÔ HÌNH GIÁO DỤC · KHÔNG PHẢI ĐO ĐẠC TRỰC TIẾP`
									}), (0, A.jsx)(`h3`, {
										className: `mt-0.5 text-lg font-bold text-ink`,
										children: d ? `仓内微气候原理模拟` : `Mô phỏng Vi khí hậu Trong kho`
									})] }), (0, A.jsxs)(`span`, {
										className: `inline-flex items-center gap-1.5 border px-2.5 py-1 text-xs font-semibold ${v.className}`,
										children: [(0, A.jsx)(y, {
											className: `h-3.5 w-3.5`,
											"aria-hidden": `true`
										}), (0, A.jsx)(`span`, { children: v.label })]
									})]
								}),
								(0, A.jsxs)(`div`, {
									className: `mt-4 flex flex-wrap gap-2`,
									children: [
										(0, A.jsx)(`button`, {
											type: `button`,
											onClick: () => p(48, 10),
											className: `min-h-9 border border-line/36 px-3 py-1 text-xs text-ink/80 hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
											children: d ? `关中旱季` : `Mùa khô Quan Trung`
										}),
										(0, A.jsx)(`button`, {
											type: `button`,
											onClick: () => p(78, 95),
											className: `min-h-9 border border-line/36 px-3 py-1 text-xs text-ink/80 hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
											children: d ? `七月伏雨` : `Mưa dầm tháng 7`
										}),
										(0, A.jsx)(`button`, {
											type: `button`,
											onClick: () => p(92, 165),
											className: `min-h-9 border border-line/36 px-3 py-1 text-xs text-ink/80 hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
											children: d ? `暴雨汛期` : `Mưa bão vùng sông`
										})
									]
								}),
								(0, A.jsxs)(`div`, {
									className: `mt-5 space-y-4`,
									children: [(0, A.jsxs)(`div`, { children: [(0, A.jsxs)(`div`, {
										className: `flex justify-between text-xs font-medium text-ink`,
										children: [(0, A.jsx)(`label`, {
											htmlFor: `humidity-slider`,
											children: d ? `仓外相对湿度（假设值）` : `Độ ẩm không khí ngoài trời (giả định)`
										}), (0, A.jsxs)(`span`, {
											className: `tabular-nums font-mono font-bold`,
											children: [t, `%`]
										})]
									}), (0, A.jsx)(`input`, {
										id: `humidity-slider`,
										type: `range`,
										min: 30,
										max: 95,
										value: t,
										onChange: (e) => n(Number(e.target.value)),
										className: `mt-1.5 w-full accent-cinnabar`
									})] }), (0, A.jsxs)(`div`, { children: [(0, A.jsxs)(`div`, {
										className: `flex justify-between text-xs font-medium text-ink`,
										children: [(0, A.jsx)(`label`, {
											htmlFor: `rain-slider`,
											children: d ? `单日降雨强度（假设值）` : `Lượng mưa ngày (mm giả định)`
										}), (0, A.jsxs)(`span`, {
											className: `tabular-nums font-mono font-bold`,
											children: [r, ` mm`]
										})]
									}), (0, A.jsx)(`input`, {
										id: `rain-slider`,
										type: `range`,
										min: 0,
										max: 180,
										value: r,
										onChange: (e) => i(Number(e.target.value)),
										className: `mt-1.5 w-full accent-cinnabar`
									})] })]
								}),
								(0, A.jsxs)(`dl`, {
									className: `mt-6 grid grid-cols-2 border border-line/36`,
									children: [
										(0, A.jsxs)(`div`, {
											className: `border-b border-r border-line/27 p-3.5`,
											children: [(0, A.jsx)(`dt`, {
												className: `text-xs text-ink/65`,
												children: d ? `模拟仓内湿度` : `Độ ẩm mô phỏng`
											}), (0, A.jsxs)(`dd`, {
												className: `tabular-nums mt-1 text-2xl font-bold text-ink`,
												children: [m.internalHumidity, `%`]
											})]
										}),
										(0, A.jsxs)(`div`, {
											className: `border-b border-line/27 p-3.5`,
											children: [(0, A.jsx)(`dt`, {
												className: `text-xs text-ink/65`,
												children: d ? `相对缓冲差值` : `Mức giảm ẩm tương đối`
											}), (0, A.jsx)(`dd`, {
												className: `tabular-nums mt-1 text-2xl font-bold text-celadon`,
												children: m.humidityDelta > 0 ? `-${m.humidityDelta}%` : `${m.humidityDelta}%`
											})]
										}),
										(0, A.jsxs)(`div`, {
											className: `border-r border-line/27 p-3.5`,
											children: [(0, A.jsx)(`dt`, {
												className: `text-xs text-ink/65`,
												children: d ? `缓冲温差（定性）` : `Biên độ đệm nhiệt`
											}), (0, A.jsxs)(`dd`, {
												className: `tabular-nums mt-1 text-2xl font-bold text-ink`,
												children: [
													`±`,
													m.tempVarianceC,
													`°C`
												]
											})]
										}),
										(0, A.jsxs)(`div`, {
											className: `p-3.5`,
											children: [(0, A.jsx)(`dt`, {
												className: `text-xs text-ink/65`,
												children: d ? `理论储麦时长` : `Ngưỡng giữ thóc lý thuyết`
											}), (0, A.jsxs)(`dd`, {
												className: `tabular-nums mt-1 text-2xl font-bold text-cinnabar`,
												children: [
													m.safeStorageMonths,
													` `,
													d ? `个月` : `tháng`
												]
											})]
										})
									]
								})
							]
						}), (0, A.jsxs)(`figure`, { children: [(0, A.jsx)(`div`, {
							className: `frame bg-paper-alt p-2`,
							children: (0, A.jsx)(`img`, {
								src: Ce.storage,
								alt: d ? `丰图义仓内部木板与高窗通风实景` : `Bên trong gian kho với sàn gỗ kê cao, vách vôi và cửa chớp gỗ`,
								referrerPolicy: `no-referrer`,
								className: `aspect-[4/3] w-full object-cover`
							})
						}), (0, A.jsx)(`figcaption`, {
							className: `mt-2 text-xs italic text-ink/65`,
							children: d ? `图六 — 廒房内部架空木地板与高窗通风细节。` : `Fig. 6 — Sàn gỗ kê cao và cửa thông gió trên cao trong không gian bảo quản.`
						})] })]
					})]
				})
			]
		})
	});
}
function at({ lang: e, onJumpToSource: t }) {
	let [n, r] = (0, h.useState)(De[1].id), i = e === `zh`, a = De.find((e) => e.id === n) ?? De[0];
	return (0, A.jsx)(`section`, {
		id: `people`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [(0, A.jsxs)(`div`, {
				className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
				children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
					className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
					children: i ? `05 · 人物与社区记忆` : `05. Con người & Ký ức Cộng đồng · 人物与故事`
				}), (0, A.jsx)(`h2`, {
					className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
					children: i ? `不只是阎敬铭：一座由乡邻共筑的义仓` : `Không chỉ của Diêm Kính Minh: Nghĩa thương của Cộng đồng Triều Ấp`
				})] }), (0, A.jsx)(`p`, {
					className: `max-w-md text-xs leading-relaxed text-ink/70`,
					children: i ? `依据1931年碑刻与当代口述记录，还原倡建者、朝邑乡绅、守仓人、民众与保护者的五重视角。` : `Góc nhìn đa chiều từ bia ký năm Dân Quốc thứ 20 (1931) và tư liệu cứu trợ qua nhiều thế hệ.`
				})]
			}), (0, A.jsxs)(`div`, {
				className: `grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`,
				children: [(0, A.jsx)(`div`, {
					className: `space-y-2.5`,
					role: `tablist`,
					"aria-label": i ? `选择人物与群体` : `Chọn nhóm nhân vật lịch sử`,
					children: De.map((t, n) => {
						let i = t.id === a.id;
						return (0, A.jsxs)(`button`, {
							type: `button`,
							role: `tab`,
							"aria-selected": i,
							onClick: () => r(t.id),
							className: `w-full border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${i ? `border-cinnabar bg-paper-alt/80` : `border-line/36 bg-paper hover:border-cinnabar/60`}`,
							children: [
								(0, A.jsx)(`div`, {
									className: `flex items-center justify-between gap-2 text-xs`,
									children: (0, A.jsxs)(`span`, {
										className: `font-mono text-cinnabar`,
										children: [
											`0`,
											n + 1,
											` · `,
											t.period
										]
									})
								}),
								(0, A.jsx)(`h3`, {
									className: `mt-1 text-base font-bold text-ink`,
									children: j(t.roleTitle, e)
								}),
								(0, A.jsx)(`p`, {
									className: `mt-0.5 text-xs text-ink/65`,
									children: j(t.subtitle, e)
								})
							]
						}, t.id);
					})
				}), (0, A.jsxs)(`div`, {
					className: `space-y-6`,
					children: [(0, A.jsxs)(`article`, {
						role: `tabpanel`,
						className: `border border-line/36 bg-paper p-5 sm:p-7`,
						children: [
							(0, A.jsx)(`p`, {
								className: `font-mono text-xs text-cinnabar`,
								children: a.period
							}),
							(0, A.jsx)(`h3`, {
								className: `mt-1.5 text-2xl font-bold text-ink`,
								children: j(a.roleTitle, e)
							}),
							(0, A.jsx)(`p`, {
								className: `mt-1 text-sm font-medium text-ink/70`,
								children: j(a.subtitle, e)
							}),
							(0, A.jsx)(M, {
								lang: e,
								text: a.narrative,
								className: `mt-4 text-base leading-relaxed text-ink/85`,
								secondaryClassName: `mt-2 text-sm leading-relaxed text-ink/70`
							}),
							(0, A.jsxs)(`div`, {
								className: `mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line/27 pt-4 text-xs`,
								children: [(0, A.jsx)(`span`, {
									className: `italic text-ink/65`,
									children: j(a.evidence, e)
								}), (0, A.jsx)(`div`, {
									className: `flex flex-wrap gap-1.5`,
									children: a.sourceIds.map((e) => (0, A.jsxs)(`button`, {
										type: `button`,
										onClick: () => t(e),
										className: `inline-flex items-center gap-1 border border-line/36 px-2 py-0.5 font-mono text-[11px] text-ink/80 hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: [(0, A.jsx)(`span`, { children: e }), (0, A.jsx)(ArrowDownRight, {
											className: `h-3 w-3`,
											"aria-hidden": `true`
										})]
									}, e))
								})]
							})
						]
					}), (0, A.jsxs)(`div`, {
						className: `grid grid-cols-1 gap-5 border border-line/36 bg-paper-alt/40 p-5 sm:grid-cols-[1fr_11rem] sm:items-center`,
						children: [(0, A.jsxs)(`div`, { children: [
							(0, A.jsx)(`p`, {
								className: `text-xs font-semibold uppercase tracking-widest text-cinnabar`,
								children: i ? `专题考辨 · “龙虎”与“天下第一仓”` : `Chuyên đề Khảo dị · Hai chữ “Long Hổ” (龙虎)`
							}),
							(0, A.jsx)(`h4`, {
								className: `mt-1.5 text-lg font-bold text-ink`,
								children: i ? `慈禧御书“龙虎”表扬阎敬铭及1976年迁护史实` : `Phân biệt chữ “Long – Hổ” biểu dương Diêm Kính Minh với danh hiệu “Thiên hạ đệ nhất thương”`
							}),
							(0, A.jsx)(M, {
								lang: e,
								text: {
									vi: `Theo tư liệu Cục Lưu trữ Thiểm Tây (SRC-002), Từ Hi Thái hậu từng đề riêng hai chữ “Long” và “Hổ” để biểu dương Diêm Kính Minh; trong các đợt tu sửa năm 1976–1977, các tấm khắc này được chuyển sang vị trí bảo quản an toàn. Trong biên tập di sản, câu chuyện này được tách biệt rõ ràng, không nhập nhằng với bốn chữ danh hiệu “Thiên hạ đệ nhất thương”.`,
									zh: `据陕西省档案馆史料记载，慈禧太后曾另题“龙”、“虎”二字以表彰阎敬铭功绩；1976–1977年修缮工程中，相关刻石被迁置他处保护。历史阐释中应将“龙虎”二字与“天下第一仓”名号分述，避免混为一谈。`
								},
								className: `mt-2.5 text-sm leading-relaxed text-ink/80`,
								secondaryClassName: `mt-1.5 text-xs leading-relaxed text-ink/65`
							})
						] }), (0, A.jsx)(`div`, {
							className: `border border-line/36 bg-paper p-1.5`,
							children: (0, A.jsx)(`img`, {
								src: Ce.stele,
								alt: i ? `清代石刻碑文参考意象` : `Minh họa văn bia đá chạm khắc đời Thanh`,
								referrerPolicy: `no-referrer`,
								className: `aspect-[3/2] w-full object-cover sm:aspect-[3/4]`
							})
						})]
					})]
				})]
			})]
		})
	});
}
function ot({ lang: e, highlightedSourceId: t }) {
	let n = e === `zh`, [r, i] = (0, h.useState)(``), a = Ve(Ne, r), o = (e) => {
		switch (e) {
			case `corrected`: return {
				label: n ? `已更正` : `Đã đính chính`,
				className: `text-cinnabar border-cinnabar/40`
			};
			case `verified-with-context`: return {
				label: n ? `按口径核实` : `Xác minh theo ngữ cảnh`,
				className: `text-celadon border-celadon/40`
			};
			case `needs-survey`: return {
				label: n ? `待现场核对` : `Cần đối chiếu thực địa`,
				className: `text-gold border-gold/50`
			};
		}
	};
	return (0, A.jsx)(`section`, {
		id: `research`,
		className: `scroll-mt-24 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [
				(0, A.jsxs)(`div`, {
					className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
					children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
						className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
						children: n ? `09 · 学术档案、核查记录与阐释原则` : `09. Thư viện Nguồn, Kiểm chứng & Chuẩn UNESCO · 研究档案`
					}), (0, A.jsx)(`h2`, {
						className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
						children: n ? `文献档案（SRC-001–009）与事实核查登记表` : `Hồ sơ Nghiên cứu & Minh bạch Kiểm chứng Dữ liệu`
					})] }), (0, A.jsx)(`p`, {
						className: `max-w-md text-xs leading-relaxed text-ink/70`,
						children: n ? `依循 UNESCO 遗产阐释七原则与 ICOMOS 原真性宪章：区分实证记录、推算比例与教学示意。` : `Tuân thủ 7 nguyên tắc UNESCO & Hiến chương ICOMOS: tách bạch tư liệu lưu trữ, tỷ lệ thiết kế và mô hình giáo dục.`
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `border border-line/36 bg-paper p-5 sm:p-6`,
					children: [(0, A.jsxs)(`div`, {
						className: `flex flex-col gap-4 border-b border-line/27 pb-4 sm:flex-row sm:items-center sm:justify-between`,
						children: [(0, A.jsxs)(`div`, {
							className: `flex items-center gap-2`,
							children: [(0, A.jsx)(FileSearch, {
								className: `h-4 w-4 text-cinnabar`,
								"aria-hidden": `true`
							}), (0, A.jsx)(`h3`, {
								className: `text-base font-bold text-ink`,
								children: n ? `公开档案与参考文献 (${a.length}/${Ne.length})` : `Danh mục Nguồn tham khảo SRC-001 – SRC-009 (${a.length}/${Ne.length})`
							})]
						}), (0, A.jsxs)(`div`, {
							className: `w-full sm:w-80`,
							children: [(0, A.jsx)(`label`, {
								htmlFor: `research-source-search`,
								className: `sr-only`,
								children: n ? `筛选文献编号或关键词` : `Lọc theo mã SRC hoặc từ khóa`
							}), (0, A.jsx)(`input`, {
								id: `research-source-search`,
								type: `search`,
								value: r,
								onChange: (e) => i(e.target.value),
								placeholder: n ? `搜索 SRC-005、陕西日报、UNESCO...` : `Tìm SRC-005, 1931, UNESCO, bảo vệ...`,
								className: `w-full border border-line/45 bg-paper-alt/40 px-3 py-2 text-xs text-ink placeholder:text-ink/45 focus:border-cinnabar focus:outline-none`
							})]
						})]
					}), a.length === 0 ? (0, A.jsx)(`div`, {
						className: `py-8 text-center text-sm text-ink/65`,
						children: n ? `未找到匹配文献，请清除搜索词。` : `Không tìm thấy nguồn phù hợp. Hãy thử từ khóa khác hoặc xóa bộ lọc.`
					}) : (0, A.jsx)(`div`, {
						className: `mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`,
						children: a.map((r) => {
							let i = t === r.id;
							return (0, A.jsxs)(`article`, {
								id: `source-${r.id}`,
								className: `flex flex-col justify-between border p-4 transition-colors ${i ? `border-cinnabar bg-cinnabar/5 ring-1 ring-cinnabar/50` : `border-line/36 bg-paper-alt/30`}`,
								children: [(0, A.jsxs)(`div`, { children: [
									(0, A.jsxs)(`div`, {
										className: `flex items-center justify-between gap-2 border-b border-line/18 pb-2 text-xs`,
										children: [(0, A.jsx)(`span`, {
											className: `font-mono font-bold text-cinnabar`,
											children: r.id
										}), (0, A.jsx)(`span`, {
											className: `font-mono text-[11px] text-ink/60`,
											children: r.publisher
										})]
									}),
									(0, A.jsx)(`h4`, {
										className: `mt-2.5 text-sm font-bold leading-snug text-ink`,
										children: r.title
									}),
									(0, A.jsx)(M, {
										lang: e,
										text: r.purpose,
										className: `mt-2 text-xs leading-relaxed text-ink/75`,
										secondaryClassName: `mt-1 text-[11px] leading-relaxed text-ink/60`
									})
								] }), (0, A.jsxs)(`div`, {
									className: `mt-3 pt-2 border-t border-line/18 flex items-center justify-between gap-2 text-xs`,
									children: [i ? (0, A.jsx)(`span`, {
										className: `font-mono text-[11px] font-medium text-cinnabar`,
										children: n ? `★ 已定位来源` : `★ Nguồn đang tra cứu`
									}) : (0, A.jsx)(`span`, {
										className: `font-mono text-[11px] text-ink/65`,
										children: n ? `公开链接` : `Liên kết gốc`
									}), (0, A.jsxs)(`a`, {
										href: r.url,
										target: `_blank`,
										rel: `noopener noreferrer`,
										className: `inline-flex items-center gap-1 font-medium text-ink/85 hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: [(0, A.jsx)(`span`, { children: n ? `查阅原文` : `Mở nguồn` }), (0, A.jsx)(ExternalLink, {
											className: `h-3 w-3`,
											"aria-hidden": `true`
										})]
									})]
								})]
							}, r.id);
						})
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `mt-10 border border-line/36 bg-paper p-5 sm:p-6`,
					children: [(0, A.jsxs)(`div`, {
						className: `mb-4 flex items-center gap-2 border-b border-line/27 pb-3`,
						children: [(0, A.jsx)(ShieldCheck, {
							className: `h-4 w-4 text-cinnabar`,
							"aria-hidden": `true`
						}), (0, A.jsx)(`h3`, {
							className: `text-base font-bold text-ink`,
							children: n ? `事实核查与口径修订登记表（2026年编审）` : `Bảng Đăng ký Kiểm chứng & Đính chính Thông tin (Phiên bản 2026)`
						})]
					}), (0, A.jsx)(`div`, {
						className: `rail overflow-x-auto`,
						children: (0, A.jsxs)(`table`, {
							className: `w-full min-w-[640px] border-collapse text-left text-xs`,
							children: [(0, A.jsx)(`thead`, { children: (0, A.jsxs)(`tr`, {
								className: `border-b border-line/36 text-[11px] uppercase tracking-wider text-ink/60`,
								children: [
									(0, A.jsx)(`th`, {
										className: `py-2.5 pr-4 font-medium`,
										children: n ? `核查项 / 常见误读` : `Nội dung kiểm tra`
									}),
									(0, A.jsx)(`th`, {
										className: `py-2.5 pr-4 font-medium`,
										children: n ? `处置状态` : `Trạng thái`
									}),
									(0, A.jsx)(`th`, {
										className: `py-2.5 font-medium`,
										children: n ? `核实结论与来源说明` : `Kết luận biên tập & Đối chiếu`
									})
								]
							}) }), (0, A.jsx)(`tbody`, {
								className: `divide-y divide-line/27`,
								children: Pe.map((t) => {
									let n = o(t.status);
									return (0, A.jsxs)(`tr`, {
										className: `align-top`,
										children: [
											(0, A.jsx)(`td`, {
												className: `py-3.5 pr-4 font-semibold text-ink w-1/3`,
												children: j(t.claim, e)
											}),
											(0, A.jsx)(`td`, {
												className: `py-3.5 pr-4 whitespace-nowrap`,
												children: (0, A.jsx)(`span`, {
													className: `inline-block border px-2 py-0.5 font-mono text-[11px] ${n.className}`,
													children: n.label
												})
											}),
											(0, A.jsx)(`td`, {
												className: `py-3.5 leading-relaxed text-ink/80`,
												children: (0, A.jsx)(M, {
													lang: e,
													text: t.resolution,
													className: `text-xs leading-relaxed text-ink/85`,
													secondaryClassName: `mt-1 text-[11px] leading-relaxed text-ink/60`
												})
											})
										]
									}, t.id);
								})
							})]
						})
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `mt-10 border border-line/36 bg-paper-alt/35 p-5 sm:p-6`,
					children: [(0, A.jsxs)(`div`, {
						className: `flex flex-wrap items-center justify-between gap-3 border-b border-line/27 pb-3`,
						children: [(0, A.jsxs)(`div`, {
							className: `flex items-center gap-2`,
							children: [(0, A.jsx)(CircleCheck, {
								className: `h-4 w-4 text-celadon`,
								"aria-hidden": `true`
							}), (0, A.jsx)(`h3`, {
								className: `text-base font-bold text-ink`,
								children: n ? `7项 UNESCO 遗产阐释原则与 ICOMOS 伦理准则` : `7 Nguyên tắc Diễn giải Di sản UNESCO & Chuẩn đạo đức ICOMOS`
							})]
						}), (0, A.jsx)(`span`, {
							className: `font-mono text-[11px] text-ink/60`,
							children: `SRC-008 · SRC-009`
						})]
					}), (0, A.jsxs)(`div`, {
						className: `mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`,
						children: [Fe.map((t) => (0, A.jsxs)(`div`, {
							className: `border border-line/27 bg-paper p-3.5`,
							children: [
								(0, A.jsx)(`p`, {
									className: `font-mono text-xs text-cinnabar`,
									children: t.code
								}),
								(0, A.jsx)(`h4`, {
									className: `mt-1 text-sm font-bold text-ink`,
									children: j(t.title, e)
								}),
								(0, A.jsx)(M, {
									lang: e,
									text: t.note,
									className: `mt-1.5 text-xs leading-relaxed text-ink/75`,
									secondaryClassName: `mt-1 text-[11px] leading-relaxed text-ink/55`
								})
							]
						}, t.code)), (0, A.jsxs)(`div`, {
							className: `border border-celadon/35 bg-celadon/5 p-3.5`,
							children: [
								(0, A.jsxs)(`p`, {
									className: `inline-flex items-center gap-1 font-mono text-xs text-celadon`,
									children: [(0, A.jsx)(Info, {
										className: `h-3.5 w-3.5`,
										"aria-hidden": `true`
									}), (0, A.jsx)(`span`, { children: `ICOMOS` })]
								}),
								(0, A.jsx)(`h4`, {
									className: `mt-1 text-sm font-bold text-ink`,
									children: n ? `数字展示原真性声明` : `Tuyên bố Tính xác thực Số`
								}),
								(0, A.jsx)(`p`, {
									className: `mt-1.5 text-xs leading-relaxed text-ink/75`,
									children: n ? `一切平面图、通风动态模型与分廒容量示意均作为公众教育工具，不得取代正式文物测绘与保护规划图纸。` : `Mọi sơ đồ mặt bằng, mô phỏng vi khí hậu và ước lượng tỷ lệ kho đều phục vụ giáo dục di sản, không thay thế bản vẽ đo đạc khảo cổ chính thức.`
								})
							]
						})]
					})]
				})
			]
		})
	});
}
function st({ lang: e, onStartTour: t }) {
	let n = e === `zh`;
	return (0, A.jsx)(`header`, {
		className: `sticky top-0 z-30 border-b border-line/27 bg-paper/95 backdrop-blur-sm`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3 sm:px-6`,
			children: [
				(0, A.jsx)(`a`, {
					href: `#top`,
					className: `text-lg font-bold tracking-wide text-ink whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cinnabar`,
					children: `丰图义仓`
				}),
				(0, A.jsx)(`nav`, {
					"aria-label": n ? `主导航` : `Điều hướng chính`,
					className: `hidden md:flex items-center gap-6 text-sm font-medium text-ink/75`,
					children: [
						{
							href: `#explore`,
							label: n ? `全景探索` : `Di tích`
						},
						{
							href: `#timeline`,
							label: n ? `历史长卷` : `Lịch sử`
						},
						{
							href: `#granaries`,
							label: n ? `五十八廒` : `58 Kho`
						},
						{
							href: `#museum`,
							label: n ? `粮文化馆` : `Bảo tàng`
						},
						{
							href: `#research`,
							label: n ? `研究档案` : `Nghiên cứu`
						}
					].map((e) => (0, A.jsx)(`a`, {
						href: e.href,
						className: `whitespace-nowrap shrink-0 transition-colors hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cinnabar`,
						children: e.label
					}, e.href))
				}),
				(0, A.jsx)(`button`, {
					type: `button`,
					onClick: t,
					className: `min-h-10 bg-cinnabar px-4 py-2 text-xs font-semibold tracking-wide text-paper whitespace-nowrap shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar`,
					children: n ? `参观导览` : `Tham quan`
				})
			]
		})
	});
}
function ct({ lang: e, selectedRouteId: t, onSelectRoute: n, visitedIds: r, onToggleVisited: i, onResetVisited: a, onJumpToStation: o }) {
	let s = e === `zh`, [c, l] = (0, h.useState)(ke[0].id), [u, d] = (0, h.useState)(Ae[1].id), f = Me.find((e) => e.id === t) ?? Me[0], p = Le(f.stationIds, r), m = ke.find((e) => e.id === c) ?? ke[0], g = Ae.find((e) => e.id === u) ?? Ae[1];
	return (0, A.jsx)(`section`, {
		id: `visit`,
		className: `scroll-mt-24 border-b border-line/27 py-14 sm:py-16`,
		children: (0, A.jsxs)(`div`, {
			className: `mx-auto max-w-6xl px-4 sm:px-6`,
			children: [
				(0, A.jsxs)(`div`, {
					className: `mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,
					children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`p`, {
						className: `text-xs font-medium tracking-widest uppercase text-cinnabar`,
						children: s ? `08 · 朝邑遗产组团、黄河线路与参观导览` : `08. Tham quan, Cụm Di sản Triều Ấp & Tuyến Hoàng Hà · 参观发现`
					}), (0, A.jsx)(`h2`, {
						className: `mt-1.5 text-3xl font-bold text-ink sm:text-4xl`,
						children: s ? `实地导览手册与行程核对清单` : `Cẩm nang Thực địa, Cụm Di tích & Sổ tay Lộ trình`
					})] }), (0, A.jsxs)(`button`, {
						type: `button`,
						onClick: a,
						disabled: r.length === 0,
						className: `inline-flex min-h-10 items-center gap-1.5 border border-line/45 px-3.5 py-2 text-xs font-medium text-ink/80 transition-colors hover:border-cinnabar hover:text-cinnabar disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-cinnabar`,
						children: [(0, A.jsx)(RotateCcw, {
							className: `h-3.5 w-3.5`,
							"aria-hidden": `true`
						}), (0, A.jsx)(`span`, { children: s ? `重置打卡记录` : `Đặt lại tiến độ` })]
					})]
				}),
				(0, A.jsxs)(`div`, {
					className: `mb-10 border border-line/36 bg-paper p-5 sm:p-6`,
					children: [
						(0, A.jsxs)(`div`, {
							className: `mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-line/27 pb-3`,
							children: [(0, A.jsxs)(`h3`, {
								className: `inline-flex items-center gap-2 text-base font-bold text-ink`,
								children: [(0, A.jsx)(MapPin, {
									className: `h-4 w-4 text-cinnabar`,
									"aria-hidden": `true`
								}), (0, A.jsx)(`span`, { children: s ? `实用信息分级核验（区分“已核实”与“行前确认”）` : `Thông tin Thực địa (Phân tách “Đã xác minh” & “Kiểm tra trước khi đến”)` })]
							}), (0, A.jsx)(`span`, {
								className: `font-mono text-[11px] text-ink/60`,
								children: s ? `不固化动态票价` : `Không cố định giá vé mùa`
							})]
						}),
						(0, A.jsx)(`div`, {
							className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
							children: je.map((t) => {
								let n = t.status === `verified`;
								return (0, A.jsxs)(`div`, {
									className: `border border-line/27 bg-paper-alt/35 p-4 flex flex-col justify-between gap-2`,
									children: [(0, A.jsxs)(`div`, { children: [(0, A.jsxs)(`div`, {
										className: `flex flex-wrap items-center justify-between gap-2`,
										children: [(0, A.jsx)(`span`, {
											className: `text-xs font-semibold uppercase tracking-wider text-ink/65`,
											children: j(t.label, e)
										}), (0, A.jsxs)(`span`, {
											className: `inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[11px] ${n ? `border-celadon/45 text-celadon` : `border-gold/60 text-cinnabar`}`,
											children: [n ? (0, A.jsx)(CircleCheck, {
												className: `h-3 w-3`,
												"aria-hidden": `true`
											}) : (0, A.jsx)(CircleAlert, {
												className: `h-3 w-3`,
												"aria-hidden": `true`
											}), (0, A.jsx)(`span`, { children: n ? s ? `Verified · 已核实` : `Verified` : s ? `Check before visit · 行前核实` : `Check before visit` })]
										})]
									}), (0, A.jsx)(`p`, {
										className: `mt-1.5 font-mono text-sm font-bold text-ink`,
										children: t.value
									})] }), (0, A.jsx)(M, {
										lang: e,
										text: t.note,
										className: `text-xs leading-relaxed text-ink/75`,
										secondaryClassName: `mt-1 text-[11px] leading-relaxed text-ink/55`
									})]
								}, t.id);
							})
						}),
						(0, A.jsx)(`div`, {
							className: `mt-5`,
							children: (0, A.jsx)(Xe, {
								lang: e,
								presets: [
									{
										id: `hours-tickets`,
										label: {
											vi: `Giờ mở cửa & Giá vé hiện tại`,
											zh: `实时核查开放时间与门票`
										},
										query: `丰图义仓 2026 最新开放时间 门票价格 预约政策`
									},
									{
										id: `transit-bus`,
										label: {
											vi: `Tàu cao tốc & Tuyến buýt Đại Lệ 101`,
											zh: `大荔高铁站至丰图义仓101路公交`
										},
										query: `大荔站 到 丰图义仓 大荔101路公交 最新班次`
									},
									{
										id: `events-2026`,
										label: {
											vi: `Sự kiện văn hóa & Trạng thái 2026`,
											zh: `丰图义仓2026最新文化活动与展览`
										},
										query: `丰图义仓 2026 最新新闻 文化活动 保护规划`
									}
								]
							})
						})
					]
				}),
				(0, A.jsxs)(`div`, {
					className: `mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12`,
					children: [(0, A.jsxs)(`div`, {
						className: `lg:col-span-7 border border-line/36 bg-paper p-5 sm:p-6`,
						children: [
							(0, A.jsxs)(`div`, {
								className: `flex items-center gap-2 border-b border-line/27 pb-3`,
								children: [(0, A.jsx)(Landmark, {
									className: `h-4 w-4 text-cinnabar`,
									"aria-hidden": `true`
								}), (0, A.jsx)(`h3`, {
									className: `text-base font-bold text-ink`,
									children: s ? `朝邑古建遗产组团（三点联动）` : `Cụm Di sản Cổ trấn Triều Ấp (3 Di tích Liên hoàn)`
								})]
							}),
							(0, A.jsx)(`div`, {
								className: `mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3`,
								children: ke.map((t) => {
									let n = t.id === m.id;
									return (0, A.jsxs)(`button`, {
										type: `button`,
										"aria-pressed": n,
										onClick: () => l(t.id),
										className: `border px-3 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? `border-cinnabar bg-cinnabar/5 text-ink` : `border-line/36 bg-paper-alt/30 text-ink/75 hover:border-cinnabar/60`}`,
										children: [(0, A.jsx)(`p`, {
											className: `text-xs font-bold leading-snug`,
											children: j(t.name, e)
										}), (0, A.jsx)(`p`, {
											className: `mt-1 text-[11px] text-ink/60`,
											children: j(t.period, e)
										})]
									}, t.id);
								})
							}),
							(0, A.jsxs)(`div`, {
								className: `mt-5 grid grid-cols-1 gap-4 sm:grid-cols-12 items-start`,
								children: [m.image && (0, A.jsx)(`figure`, {
									className: `sm:col-span-5 overflow-hidden border border-line/27 bg-paper-alt/40`,
									children: (0, A.jsx)(`img`, {
										src: m.image,
										alt: j(m.name, e),
										className: `h-40 w-full object-cover`,
										loading: `lazy`
									})
								}), (0, A.jsxs)(`div`, {
									className: m.image ? `sm:col-span-7` : `sm:col-span-12`,
									children: [
										(0, A.jsx)(`p`, {
											className: `text-xs font-mono text-cinnabar`,
											children: j(m.relation, e)
										}),
										(0, A.jsx)(`h4`, {
											className: `mt-1 text-lg font-bold text-ink`,
											children: j(m.name, e)
										}),
										(0, A.jsx)(M, {
											lang: e,
											text: m.description,
											className: `mt-2 text-sm leading-relaxed text-ink/80`,
											secondaryClassName: `mt-1.5 text-xs leading-relaxed text-ink/60`
										})
									]
								})]
							})
						]
					}), (0, A.jsxs)(`div`, {
						className: `lg:col-span-5 border border-line/36 bg-paper-alt/35 p-5 sm:p-6 flex flex-col justify-between`,
						children: [(0, A.jsxs)(`div`, { children: [(0, A.jsxs)(`div`, {
							className: `flex items-center justify-between gap-2 border-b border-line/27 pb-3`,
							children: [(0, A.jsxs)(`h3`, {
								className: `inline-flex items-center gap-2 text-base font-bold text-ink`,
								children: [(0, A.jsx)(Route, {
									className: `h-4 w-4 text-celadon`,
									"aria-hidden": `true`
								}), (0, A.jsx)(`span`, { children: s ? `黄河古村文化线路（2024年7月发布）` : `Tuyến Văn hóa Hoàng Hà (17/07/2024)` })]
							}), (0, A.jsx)(`span`, {
								className: `font-mono text-[11px] text-ink/60`,
								children: `SRC-006`
							})]
						}), (0, A.jsx)(`div`, {
							className: `mt-4 flex flex-col gap-2`,
							children: Ae.map((t) => {
								let n = t.id === g.id;
								return (0, A.jsxs)(`button`, {
									type: `button`,
									"aria-pressed": n,
									onClick: () => d(t.id),
									className: `flex items-center justify-between border px-3 py-2 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${n ? `border-celadon bg-celadon/10 font-bold text-ink` : `border-line/27 bg-paper text-ink/80 hover:border-celadon/60`}`,
									children: [(0, A.jsxs)(`span`, { children: [(0, A.jsx)(`span`, {
										className: `font-mono mr-2 text-cinnabar`,
										children: t.order
									}), j(t.name, e)] }), (0, A.jsx)(`span`, {
										className: `text-[11px] font-normal text-ink/60`,
										children: j(t.role, e)
									})]
								}, t.id);
							})
						})] }), (0, A.jsxs)(`div`, {
							className: `mt-4 border-t border-line/27 pt-3`,
							children: [(0, A.jsxs)(`p`, {
								className: `text-xs font-semibold text-celadon`,
								children: [
									g.order,
									` · `,
									j(g.name, e)
								]
							}), (0, A.jsx)(M, {
								lang: e,
								text: g.highlight,
								className: `mt-1 text-xs leading-relaxed text-ink/80`,
								secondaryClassName: `mt-1 text-[11px] leading-relaxed text-ink/60`
							})]
						})]
					})]
				}),
				(0, A.jsx)(`div`, {
					className: `grid grid-cols-1 gap-4 md:grid-cols-3`,
					children: Me.map((t) => {
						let r = t.id === f.id;
						return (0, A.jsxs)(`button`, {
							type: `button`,
							"aria-pressed": r,
							onClick: () => n(t.id),
							className: `border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-cinnabar ${r ? `border-cinnabar bg-paper-alt/85` : `border-line/36 bg-paper hover:border-cinnabar/60`}`,
							children: [
								(0, A.jsxs)(`div`, {
									className: `flex items-center justify-between gap-2 text-xs`,
									children: [(0, A.jsxs)(`span`, {
										className: `inline-flex items-center gap-1 font-mono text-cinnabar`,
										children: [(0, A.jsx)(Compass, {
											className: `h-3.5 w-3.5`,
											"aria-hidden": `true`
										}), (0, A.jsxs)(`span`, {
											className: `tabular-nums`,
											children: [t.durationMinutes, ` min`]
										})]
									}), (0, A.jsxs)(`span`, {
										className: `tabular-nums text-ink/60`,
										children: [
											t.stationIds.length,
											` `,
											s ? `站` : `trạm`
										]
									})]
								}),
								(0, A.jsx)(`h3`, {
									className: `mt-2 text-base font-bold text-ink`,
									children: j(t.name, e)
								}),
								(0, A.jsx)(`p`, {
									className: `mt-1.5 text-xs leading-relaxed text-ink/75`,
									children: j(t.focus, e)
								})
							]
						}, t.id);
					})
				}),
				(0, A.jsxs)(`div`, {
					className: `mt-6 border border-line/36 bg-paper p-5 sm:p-6`,
					children: [(0, A.jsxs)(`div`, {
						className: `flex flex-wrap items-center justify-between gap-4 border-b border-line/27 pb-4`,
						children: [(0, A.jsxs)(`div`, { children: [(0, A.jsx)(`h3`, {
							className: `text-lg font-bold text-ink`,
							children: j(f.name, e)
						}), (0, A.jsx)(`p`, {
							className: `mt-0.5 text-xs text-ink/65`,
							children: s ? `已完成 ${p.completedCount} / ${p.totalCount} 站` : `Đã hoàn thành ${p.completedCount} / ${p.totalCount} điểm dừng`
						})] }), (0, A.jsxs)(`div`, {
							className: `flex items-center gap-3`,
							children: [(0, A.jsx)(`div`, {
								className: `h-2 w-36 overflow-hidden bg-ink/15`,
								children: (0, A.jsx)(`div`, {
									className: `h-full bg-cinnabar transition-all`,
									style: { width: `${p.percent}%` }
								})
							}), (0, A.jsxs)(`span`, {
								className: `tabular-nums font-mono text-sm font-bold text-ink`,
								children: [p.percent, `%`]
							})]
						})]
					}), (0, A.jsx)(`ul`, {
						className: `divide-y divide-line/27`,
						children: f.stationIds.map((t, n) => {
							let a = E.find((e) => e.id === t);
							if (!a) return null;
							let c = r.includes(a.id);
							return (0, A.jsxs)(`li`, {
								className: `flex flex-wrap items-center justify-between gap-4 py-3.5`,
								children: [(0, A.jsxs)(`div`, {
									className: `flex min-w-0 flex-1 items-start gap-3`,
									children: [(0, A.jsx)(`button`, {
										type: `button`,
										onClick: () => i(a.id),
										"aria-pressed": c,
										"aria-label": c ? `${s ? `取消已游览` : `Bỏ đánh dấu`} ${j(a.name, e)}` : `${s ? `标记已游览` : `Đánh dấu đã thăm`} ${j(a.name, e)}`,
										className: `mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-cinnabar transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-cinnabar`,
										children: c ? (0, A.jsx)(SquareCheckBig, {
											className: `h-5 w-5`,
											"aria-hidden": `true`
										}) : (0, A.jsx)(Square, {
											className: `h-5 w-5 text-ink/45`,
											"aria-hidden": `true`
										})
									}), (0, A.jsxs)(`div`, {
										className: `min-w-0`,
										children: [(0, A.jsxs)(`p`, {
											className: `text-sm font-semibold ${c ? `line-through text-ink/55` : `text-ink`}`,
											children: [(0, A.jsxs)(`span`, {
												className: `tabular-nums font-mono mr-2 text-cinnabar`,
												children: [String(n + 1).padStart(2, `0`), ` ·`]
											}), j(a.name, e)]
										}), (0, A.jsx)(`p`, {
											className: `mt-0.5 text-xs text-ink/65`,
											children: j(a.subtitle, e)
										})]
									})]
								}), (0, A.jsxs)(`button`, {
									type: `button`,
									onClick: () => o(a.id),
									className: `inline-flex min-h-9 items-center gap-1 border border-line/36 px-3 py-1.5 text-xs font-medium text-ink/80 whitespace-nowrap shrink-0 transition-colors hover:border-cinnabar hover:text-cinnabar focus-visible:outline-2 focus-visible:outline-cinnabar`,
									children: [(0, A.jsx)(`span`, { children: s ? `查看平面图` : `Xem trên sơ đồ` }), (0, A.jsx)(ArrowUpRight, {
										className: `h-3.5 w-3.5`,
										"aria-hidden": `true`
									})]
								})]
							}, a.id);
						})
					})]
				})
			]
		})
	});
}
var lt = `fengtu_visited_stations_v1`;
var ut = `fengtu_lang_mode_v1`;
var dt = `fengtu_theme_mode_v1`;
function ft() {
	let [e, t] = (0, h.useState)(() => {
		try {
			let e = localStorage.getItem(ut);
			if (e === `bilingual` || e === `vi` || e === `zh`) return e;
		} catch {}
		return `bilingual`;
	}), [n, r] = (0, h.useState)(() => {
		try {
			let e = localStorage.getItem(dt);
			if (e === `light` || e === `dark`) return e;
		} catch {}
		return `light`;
	}), [i, a] = (0, h.useState)(`chu-tuoc-mon`), [o, s] = (0, h.useState)(`heritage-45`), [c, l] = (0, h.useState)(null), [u, d] = (0, h.useState)(() => {
		try {
			let e = localStorage.getItem(lt);
			if (e) {
				let t = JSON.parse(e);
				if (Array.isArray(t)) return t;
			}
		} catch {}
		return [];
	});
	(0, h.useEffect)(() => {
		let e = document.documentElement;
		e.dataset.theme = n, n === `dark` ? e.classList.add(`dark`) : e.classList.remove(`dark`);
		try {
			localStorage.setItem(dt, n);
		} catch {}
	}, [n]), (0, h.useEffect)(() => {
		document.documentElement.lang = e === `zh` ? `zh-Hans` : `vi`;
		try {
			localStorage.setItem(ut, e);
		} catch {}
	}, [e]), (0, h.useEffect)(() => {
		try {
			localStorage.setItem(lt, JSON.stringify(u));
		} catch {}
	}, [u]);
	let f = (e) => {
		d((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}, p = (e) => {
		let t = document.getElementById(e);
		t && t.scrollIntoView({
			behavior: `smooth`,
			block: `start`
		});
	}, m = (e) => {
		a(e), p(`explore`);
	}, g = (e) => {
		l(e);
		let t = document.getElementById(`source-${e}`);
		t ? t.scrollIntoView({
			behavior: `smooth`,
			block: `center`
		}) : p(`research`);
	};
	return (0, A.jsx)(`div`, {
		className: `sheet-outer text-ink`,
		children: (0, A.jsxs)(`div`, {
			className: `production-sheet`,
			children: [
				(0, A.jsx)(`div`, {
					className: `overlay overlay-grain`,
					"aria-hidden": `true`
				}),
				(0, A.jsx)(`div`, {
					className: `overlay overlay-vignette`,
					"aria-hidden": `true`
				}),
				(0, A.jsx)(`div`, {
					className: `overlay overlay-light`,
					"aria-hidden": `true`
				}),
				(0, A.jsxs)(`div`, {
					className: `sheet-main`,
					children: [
						(0, A.jsx)(st, {
							lang: e,
							onStartTour: () => p(`visit`)
						}),
						(0, A.jsxs)(`main`, { children: [
							(0, A.jsx)(nt, {
								lang: e,
								onLangChange: t,
								theme: n,
								onThemeToggle: () => r((e) => e === `light` ? `dark` : `light`),
								onExplorePlan: () => p(`explore`)
							}),
							(0, A.jsx)(Qe, {
								lang: e,
								activeStationId: i,
								onSelectStation: a,
								visitedIds: u,
								onToggleVisited: f
							}),
							(0, A.jsx)(Ge, {
								lang: e,
								onJumpToSource: g
							}),
							(0, A.jsx)(it, { lang: e }),
							(0, A.jsx)(tt, { lang: e }),
							(0, A.jsx)(at, {
								lang: e,
								onJumpToSource: g
							}),
							(0, A.jsx)(et, { lang: e }),
							(0, A.jsx)(rt, {
								lang: e,
								onJumpToSource: g
							}),
							(0, A.jsx)(ct, {
								lang: e,
								selectedRouteId: o,
								onSelectRoute: s,
								visitedIds: u,
								onToggleVisited: f,
								onResetVisited: () => d([]),
								onJumpToStation: m
							}),
							(0, A.jsx)(ot, {
								lang: e,
								highlightedSourceId: c
							})
						] }),
						(0, A.jsx)($e, { lang: e })
					]
				}),
				(0, A.jsx)(`aside`, {
					className: `binder-strip`,
					"aria-hidden": `true`
				})
			]
		})
	});
}
function ScrollProgress() {
	const [fallback, setFallback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()")) return;
		const onScroll = () => {
			const root = document.documentElement;
			const max = root.scrollHeight - root.clientHeight;
			setFallback(max > 0 ? root.scrollTop / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scroll-progress",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scroll-progress-bar",
			style: fallback == null ? void 0 : { transform: `scaleX(${fallback})` }
		})
	});
}
var SplitComponent = function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ft, {})] });
};
//#endregion
export { SplitComponent as component };
