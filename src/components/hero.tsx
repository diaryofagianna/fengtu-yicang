import { T } from "./text";

const stats = [
  { k: "1882–1885", vi: "Khởi công – hoàn thành", zh: "动工至落成" },
  { k: "58", vi: "Gian kho vòm gạch", zh: "砖券仓廒" },
  { k: "~5.220 t", vi: "Sức chứa thiết kế", zh: "设计储量" },
  { k: "2023", vi: "Ngừng dự trữ trung ương", zh: "退出央储" },
];

export function Hero() {
  return (
    <section id="gioi-thieu" className="scroll-mt-24 px-4 pt-8 pb-10 sm:px-8 sm:pt-12">
      <p className="font-mono text-xs tracking-widest text-celadon uppercase">
        Triều Ấp · Đại Lệ · Thiểm Tây · 朝邑 · 大荔 · 陕西
      </p>
      <h1 className="mt-3 font-display text-5xl leading-none sm:text-7xl">丰图义仓</h1>
      <p className="mt-3 font-display text-2xl text-cinnabar sm:text-3xl">Thiên hạ đệ nhất thương</p>
      <p className="mt-1 font-serif text-lg text-ink/70">天下第一仓 · The Living Heritage of Grain</p>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed">
        <T
          vi="Xây để giữ hạt thóc, dựng nên để dân cưu mang nhau. Từ năm 2023, dù không còn nhiệm vụ dự trữ trung ương, 58 gian kho vẫn được bảo dưỡng như chứng tích sống của an ninh lương thực và lòng tương trợ."
          zh="昔为丰年储谷、荒年放赈而建。自2023年起不再承担中央储备粮任务，五十八孔仓廒仍持续维护，讲述粮食安全与乡土互助。"
          block
        />
      </p>
      <blockquote className="mt-6 max-w-2xl border-l-2 border-cinnabar pl-4 text-ink/80 italic">
        <T
          vi="“Một kho lương không chỉ lưu giữ ngũ cốc. Nó lưu giữ ký ức về mùa màng, nạn đói, lòng tương trợ và trí tuệ của những người xây dựng nó.”"
          zh="“一座粮仓封存的不只是谷物，还有年成、饥馑、互助，以及建造者的智慧。”"
          block
        />
      </blockquote>
      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.k} className="rounded-2xl border border-line/45 px-3 py-4">
            <dt className="font-display text-2xl text-cinnabar">{item.k}</dt>
            <dd className="mt-1 text-sm">
              <T vi={item.vi} zh={item.zh} block />
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#di-tich" className="inline-flex min-h-11 items-center rounded-full bg-cinnabar px-5 text-paper">
          <T vi="Khám phá bản đồ di tích" zh="进入全景地图" />
        </a>
        <a href="#nguon" className="inline-flex min-h-11 items-center rounded-full border border-ink/25 px-5">
          <T vi="Hồ sơ xác minh 2026" zh="查看2026核证档案" />
        </a>
      </div>
      <figure className="mt-8">
        <img
          src="/figures/gate.jpg"
          alt="Cổng gạch và biển đề 丰图义仓 trên tường thành nghĩa thương ở Triều Ấp"
          className="aspect-[16/10] w-full rounded-2xl border border-line/40 object-cover"
        />
        <figcaption className="mt-2 text-sm text-ink/65">
          <T
            vi="Hình 1 — Tường thành gạch và biển đề trên cổng Phong Đồ Nghĩa Thương. Ảnh tham chiếu mặt đứng cổng, không thay hồ sơ đo vẽ."
            zh="图一 — 丰图义仓门额与城墙。门面参考照片，不替代测绘档案。"
            block
          />
        </figcaption>
      </figure>
    </section>
  );
}
