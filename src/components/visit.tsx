import { cluster, corrections, principles, routes, sources, stops, yellowRoute } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useMuseum } from "@/lib/museum-store";
import { ExternalLink, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { T } from "./text";

export function Visit() {
  const { visited, toggleVisited, resetVisited } = useMuseum();
  const done = visited.length;
  return (
    <section id="tham-quan" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">08 · 参观发现</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-3xl sm:text-4xl">
          <T vi="Tham quan & cụm Triều Ấp" zh="参观与朝邑组团" block />
        </h2>
        <button type="button" onClick={resetVisited} className="inline-flex min-h-11 items-center gap-2 text-sm text-cinnabar">
          <RotateCcw className="size-4" />
          <T vi="Đặt lại tiến độ" zh="重置进度" />
        </button>
      </div>
      <p className="mt-2 font-mono text-sm">
        <T vi={`Đã hoàn thành ${done} / ${stops.length} điểm dừng`} zh={`已完成 ${done} / ${stops.length} 个停留点`} />
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Fact
          k={{ vi: "Địa chỉ di tích", zh: "遗址地址" }}
          v={{ vi: "Thôn Đại Nhất, trấn Triều Ấp, huyện Đại Lệ, thành phố Vị Nam, tỉnh Thiểm Tây — đường Triều Độ.", zh: "陕西省渭南市大荔县朝邑镇大一村朝渡路。" }}
        />
        <Fact
          k={{ vi: "Điện thoại tư vấn vé", zh: "票务咨询电话" }}
          v={{ vi: "0913-3412522 — gọi trước để xác nhận ưu đãi vé và suất văn hóa trong ngày.", zh: "0913-3412522 — 出发前确认当日门票优惠与文化活动场次。" }}
        />
        <Fact
          k={{ vi: "Giờ niêm yết", zh: "开放时间" }}
          v={{ vi: "Kiểm tra trước khi đến. Giờ mùa đông và mùa hè có thể điều chỉnh; không cố định giá vé trên trang này.", zh: "行前核实。冬夏时令或有微调；本页不固化变动票价。" }}
        />
        <Fact
          k={{ vi: "Tàu cao tốc & xe buýt", zh: "高铁与公交" }}
          v={{ vi: "Nhiều lịch trình ghi tuyến Đại Lệ 101 nối ga cao tốc Đại Lệ với Phong Đồ Nghĩa Thương. Đối chiếu chuyến thực trước khi lên xe.", zh: "多处记录大荔101路连接高铁大荔站与丰图义仓，乘车前请核对实时班次。" }}
        />
      </div>

      <h3 className="mt-8 font-display text-2xl">
        <T vi="Ba tuyến trong thành kho" zh="仓城三条参观线" block />
      </h3>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {routes.map((route) => {
          const count = route.stops.filter((id) => visited.includes(id)).length;
          return (
            <article key={route.id} className="rounded-2xl border border-line/45 p-4">
              <p className="font-mono text-xs text-cinnabar">{route.minutes}’</p>
              <h4 className="mt-1 font-display text-xl">
                <T vi={route.title.vi} zh={route.title.zh} block />
              </h4>
              <p className="mt-2 text-sm">
                <T vi={route.body.vi} zh={route.body.zh} block />
              </p>
              <p className="mt-2 font-mono text-xs">
                {count}/{route.stops.length}
              </p>
              <ul className="mt-2 space-y-1">
                {route.stops.map((id) => {
                  const stop = stops.find((item) => item.id === id);
                  if (!stop) return null;
                  const on = visited.includes(id);
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => toggleVisited(id)}
                        className={cn("min-h-11 w-full rounded-lg px-2 text-left text-sm", on && "bg-celadon/15")}
                      >
                        <span className="font-mono text-xs text-cinnabar">{stop.code}</span>{" "}
                        <T vi={stop.name.vi} zh={stop.name.zh} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>

      <h3 className="mt-8 font-display text-2xl">
        <T vi="Cụm cổ trấn Triều Ấp" zh="朝邑古建组团" block />
      </h3>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {cluster.map((site) => (
          <article key={site.name.zh} className="rounded-2xl border border-line/40 p-4">
            <h4 className="font-display text-xl">
              <T vi={site.name.vi} zh={site.name.zh} block />
            </h4>
            <p className="mt-1 font-mono text-xs text-celadon">
              <T vi={site.when.vi} zh={site.when.zh} />
            </p>
            <p className="mt-2 text-sm text-ink/70">
              <T vi={site.place.vi} zh={site.place.zh} block />
            </p>
            <p className="mt-2 text-sm">
              <T vi={site.body.vi} zh={site.body.zh} block />
            </p>
          </article>
        ))}
      </div>

      <h3 className="mt-8 font-display text-2xl">
        <T vi="Tuyến văn hóa Hoàng Hà · 17/07/2024" zh="黄河文化线路" block />
      </h3>
      <ol className="mt-3 space-y-2">
        {yellowRoute.map((stop, index) => (
          <li key={stop.zh} className="flex gap-3 rounded-xl border border-line/35 p-3">
            <span className="font-mono text-cinnabar">{index + 1}</span>
            <T vi={stop.vi} zh={stop.zh} block />
          </li>
        ))}
      </ol>
      <p className="mt-2 font-mono text-xs text-ink/50">SRC-006</p>
    </section>
  );
}

function Fact({ k, v }: { k: { vi: string; zh: string }; v: { vi: string; zh: string } }) {
  return (
    <div className="rounded-2xl border border-line/40 p-4">
      <p className="font-mono text-xs text-cinnabar">
        <T vi={k.vi} zh={k.zh} />
      </p>
      <p className="mt-2">
        <T vi={v.vi} zh={v.zh} block />
      </p>
    </div>
  );
}

export function Sources() {
  const [query, setQuery] = useState("");
  const [ask, setAsk] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sources;
    return sources.filter((item) =>
      [item.id, item.publisher, item.title.vi, item.title.zh, item.purpose.vi, item.purpose.zh]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const searchHref = `https://www.google.com/search?q=${encodeURIComponent(ask || "丰图义仓")}`;

  return (
    <section id="nguon" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">09 · 研究档案</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Thư viện nguồn & đính chính" zh="研究档案与勘误" block />
      </h2>
      <p className="mt-3 max-w-3xl text-ink/75">
        <T
          vi="Tách bạch tư liệu lưu trữ, tỷ lệ thiết kế và mô hình giáo dục. Mọi sơ đồ và mô phỏng phục vụ giáo dục, không thay bản vẽ khảo cổ."
          zh="区分档案、设计比例与教学模型。示意图与模拟不替代正式测绘。"
          block
        />
      </p>

      <form
        className="mt-5 rounded-2xl border border-line/45 p-4"
        onSubmit={(event) => {
          event.preventDefault();
          window.open(searchHref, "_blank", "noopener,noreferrer");
        }}
      >
        <p className="font-mono text-xs text-celadon">
          <T vi="Kiểm chứng trực tuyến (Google Search)" zh="在线核证（Google 搜索）" />
        </p>
        <p className="mt-1 text-sm text-ink/70">
          <T
            vi="Trang này không nối máy chủ hỏi đáp. Liên kết bên dưới mở kết quả tìm kiếm công khai cho câu hỏi của bạn."
            zh="本页未连接问答服务器。下方链接在 Google 中打开该问题的公开检索结果。"
            block
          />
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            value={ask}
            onChange={(event) => setAsk(event.target.value)}
            placeholder="丰图义仓 2026"
            className="min-h-11 flex-1 rounded-xl border border-line/50 bg-paper px-3 text-ink"
            aria-label="Câu hỏi kiểm chứng"
          />
          <a
            href={searchHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm text-paper"
          >
            <ExternalLink className="size-4" />
            <T vi="Mở nguồn" zh="打开检索" />
          </a>
        </div>
      </form>

      <label className="mt-6 block text-sm">
        <T vi="Lọc theo mã SRC hoặc từ khóa" zh="按 SRC 编号或关键词筛选" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="SRC-005, 1931, UNESCO"
          className="mt-2 w-full rounded-xl border border-line/50 bg-paper px-3 py-3 text-ink"
        />
      </label>
      {filtered.length === 0 ? (
        <p className="mt-4">
          <T vi="Không tìm thấy nguồn phù hợp." zh="没有匹配的来源。" />
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {filtered.map((item) => (
            <li key={item.id} className="rounded-2xl border border-line/40 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-sm text-cinnabar">{item.id}</p>
                <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-celadon">
                  {item.publisher}
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
              <h3 className="mt-1 font-display text-xl">
                <T vi={item.title.vi} zh={item.title.zh} block />
              </h3>
              <p className="mt-2 text-sm">
                <T vi={item.purpose.vi} zh={item.purpose.zh} block />
              </p>
            </li>
          ))}
        </ul>
      )}

      <h3 className="mt-10 font-display text-2xl">
        <T vi="Bảng đính chính 2026" zh="2026年勘误登记" block />
      </h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line/40 font-mono text-xs text-ink/60">
              <th className="py-2 pr-3 font-medium">
                <T vi="Nội dung" zh="条目" />
              </th>
              <th className="py-2 pr-3 font-medium">
                <T vi="Trạng thái" zh="状态" />
              </th>
              <th className="py-2 font-medium">
                <T vi="Kết luận biên tập" zh="编订结论" />
              </th>
            </tr>
          </thead>
          <tbody>
            {corrections.map((row) => (
              <tr key={row.topic.zh} className="border-b border-line/25 align-top">
                <td className="py-3 pr-3">
                  <T vi={row.topic.vi} zh={row.topic.zh} block />
                </td>
                <td className="py-3 pr-3 text-cinnabar">
                  <T vi={row.status.vi} zh={row.status.zh} block />
                </td>
                <td className="py-3">
                  <T vi={row.conclusion.vi} zh={row.conclusion.zh} block />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-10 font-display text-2xl">
        <T vi="Bảy nguyên tắc UNESCO & ICOMOS" zh="七项阐释原则" block />
      </h3>
      <ol className="mt-3 grid gap-2 md:grid-cols-2">
        {principles.map((item, index) => (
          <li key={item.zh} className="rounded-xl border border-line/35 p-3">
            <span className="font-mono text-xs text-cinnabar">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-1">
              <T vi={item.vi} zh={item.zh} block />
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
