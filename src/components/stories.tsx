import { halls, livingEvents, people, quiz } from "@/data/museum";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { T } from "./text";

export function People() {
  const [id, setId] = useState(people[0].id);
  const person = people.find((item) => item.id === id) ?? people[0];
  return (
    <section id="nhan-vat" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">05 · 人物与故事</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Không chỉ của Diêm Kính Minh" zh="并非阎敬铭一人之仓" block />
      </h2>
      <p className="mt-3 max-w-3xl text-ink/75">
        <T
          vi="Góc nhìn từ bia ký Dân Quốc thứ 20 (1931) và tư liệu cứu trợ qua nhiều thế hệ."
          zh="从民国二十年（1931）碑刻与历代赈济史料切入。"
          block
        />
      </p>
      <div className="mt-5 flex gap-2 overflow-x-auto">
        {people.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === person.id}
            onClick={() => setId(item.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-3 text-sm",
              item.id === person.id ? "border-cinnabar bg-cinnabar text-paper" : "border-line/50",
            )}
          >
            <T vi={item.name.vi} zh={item.name.zh} />
          </button>
        ))}
      </div>
      <article className="mt-5 rounded-2xl border border-line/45 p-5 sm:p-7">
        <p className="text-sm text-celadon">
          <T vi={person.role.vi} zh={person.role.zh} block />
        </p>
        <h3 className="mt-1 font-display text-3xl">
          <T vi={person.name.vi} zh={person.name.zh} block />
        </h3>
        <p className="mt-4 max-w-3xl">
          <T vi={person.body.vi} zh={person.body.zh} block />
        </p>
        <p className="mt-4 font-mono text-xs text-ink/55">{person.source}</p>
      </article>

      <aside className="mt-6 rounded-2xl border border-gold/50 bg-gold/10 p-5">
        <p className="font-mono text-xs tracking-widest text-gold uppercase">
          <T vi="Chuyên đề khảo dị · hai chữ Long Hổ" zh="考异 · “龙虎”二字" />
        </p>
        <h3 className="mt-2 font-display text-2xl">
          <T
            vi="Tách chữ “Long – Hổ” khỏi danh hiệu “Thiên hạ đệ nhất thương”"
            zh="将“龙虎”二字与“天下第一仓”分述"
            block
          />
        </h3>
        <p className="mt-3">
          <T
            vi="Theo hồ sơ lưu trữ Thiểm Tây (SRC-002), Từ Hi Thái hậu từng đề riêng hai chữ Long và Hổ để biểu dương Diêm Kính Minh. Trong tu sửa 1976–1977, các tấm khắc được chuyển đi bảo quản. Không nhập câu chuyện này với bốn chữ danh hiệu trên cổng."
            zh="据陕西省档案馆史料，慈禧太后曾另题“龙”“虎”二字表彰阎敬铭；1976–1977年修缮时相关刻石被迁置保护。不应与“天下第一仓”名号混为一谈。"
            block
          />
        </p>
      </aside>
    </section>
  );
}

export function GrainHall() {
  const [hall, setHall] = useState(halls[0].code);
  const current = halls.find((item) => item.code === hall) ?? halls[0];
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [dou, setDou] = useState(1);
  const card = quiz[step];

  return (
    <section id="bao-tang" className="scroll-mt-24 border-t border-line/30 px-4 py-10 sm:px-8">
      <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">06 · 粮食文化博物馆</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <T vi="Bảo tàng văn hóa lương thực" zh="粮食文化博物馆" block />
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-ink/70">
        <T
          vi="Sáu nhóm sau là phân nhóm biên tập. Tài liệu năm 2021 ghi nhận 12 phòng trưng bày tại điểm (SRC-001)."
          zh="以下六组为编研归类。2021年资料记载现场十二个展室（SRC-001）。"
          block
        />
      </p>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {halls.map((item) => (
          <button
            key={item.code}
            type="button"
            aria-pressed={item.code === current.code}
            onClick={() => setHall(item.code)}
            className={cn(
              "min-h-11 rounded-xl border px-3 py-3 text-left",
              item.code === current.code ? "border-cinnabar bg-cinnabar/10" : "border-line/40",
            )}
          >
            <span className="font-mono text-xs text-cinnabar">{item.code}</span>
            <span className="mt-1 block">
              <T vi={item.title.vi} zh={item.title.zh} block />
            </span>
          </button>
        ))}
      </div>
      <article className="mt-4 rounded-2xl border border-line/40 p-5">
        <h3 className="font-display text-2xl">
          <T vi={current.title.vi} zh={current.title.zh} block />
        </h3>
        <p className="mt-3">
          <T vi={current.body.vi} zh={current.body.zh} block />
        </p>
        <p className="mt-3 font-mono text-sm text-celadon">
          <T vi={current.objects.vi} zh={current.objects.zh} />
        </p>
      </article>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line/45 p-5">
          <h3 className="font-display text-2xl">
            <T vi="Nhận diện nông cụ & tem phiếu" zh="农具与粮票识别" block />
          </h3>
          <p className="mt-3">
            <T vi={card.q.vi} zh={card.q.zh} block />
          </p>
          <div className="mt-3 space-y-2">
            {card.options.map((option, i) => {
              const show = picked !== null;
              const correct = i === card.answer;
              return (
                <button
                  key={option.vi}
                  type="button"
                  disabled={picked !== null}
                  onClick={() => setPicked(i)}
                  className={cn(
                    "min-h-11 w-full rounded-xl border px-3 text-left",
                    show && correct && "border-gold bg-gold/15",
                    show && picked === i && !correct && "border-cinnabar",
                    !show && "border-line/40",
                  )}
                >
                  <T vi={option.vi} zh={option.zh} />
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <p className="mt-3 text-sm">
              <T vi={card.why.vi} zh={card.why.zh} block />
            </p>
          )}
          <button
            type="button"
            className="mt-4 min-h-11 rounded-full bg-ink px-4 text-sm text-paper disabled:opacity-40"
            disabled={picked === null}
            onClick={() => {
              setStep((n) => (n + 1) % quiz.length);
              setPicked(null);
            }}
          >
            <T vi="Câu hỏi tiếp theo" zh="下一题" />
          </button>
        </div>
        <div className="rounded-2xl border border-line/45 bg-paper-alt/40 p-5">
          <h3 className="font-display text-2xl">
            <T vi="Đối chiếu đong cổ" zh="古量换算" block />
          </h3>
          <p className="mt-2 text-sm text-ink/70">
            <T vi="1 đẩu (斗) = 10 thăng (升). Quy đổi thể tích tham khảo, không phải đơn vị pháp định hiện hành." zh="一斗合十升。仅供参照，不是现行法定计量。" />
          </p>
          <label className="mt-4 block">
            <T vi="Số đẩu gỗ" zh="木斗数量" />
            <input
              type="number"
              min={0}
              max={999}
              value={dou}
              onChange={(event) => setDou(Math.max(0, Number(event.target.value) || 0))}
              className="mt-2 w-full rounded-xl border border-line/50 bg-paper px-3 py-3 text-ink"
            />
          </label>
          <p className="mt-4 font-display text-4xl tabular-nums">
            {(dou * 10).toLocaleString("vi-VN")} <span className="text-xl">升</span>
          </p>
          <p className="font-mono text-xs text-ink/55">
            <T vi="Thăng" zh="升" />
          </p>
        </div>
      </div>

      <div id="di-san" className="scroll-mt-24 pt-12">
        <p className="font-mono text-xs tracking-widest text-cinnabar uppercase">07 · 活态传承</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">
          <T vi="Di sản sống & bảo tồn" zh="活态传承" block />
        </h2>
        <p className="mt-3 max-w-3xl text-ink/75">
          <T
            vi="Hồ sơ theo thời điểm xác minh (báo chí tháng 6/2026 và đấu thầu tháng 5/2026), không phải lịch diễn cố định hằng ngày."
            zh="按核证时点归档（2026年6月报道与5月招标），不默认每日固定演出。"
            block
          />
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {livingEvents.map((event) => (
            <article key={event.tag} className="rounded-2xl border border-line/45 p-5">
              <p className="font-mono text-xs text-cinnabar">
                {event.date} · {event.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl">
                <T vi={event.title.vi} zh={event.title.zh} block />
              </h3>
              <p className="mt-3">
                <T vi={event.body.vi} zh={event.body.zh} block />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
