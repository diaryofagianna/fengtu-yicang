export type Bi = { vi: string; zh: string };

export const chapters = [
  { id: "gioi-thieu", no: "00", vi: "Dẫn nhập", zh: "导言" },
  { id: "di-tich", no: "01", vi: "Di tích", zh: "遗址" },
  { id: "lich-su", no: "02", vi: "Lịch sử", zh: "历史" },
  { id: "kien-truc", no: "03", vi: "Kiến trúc", zh: "建筑" },
  { id: "gian-kho", no: "04", vi: "Gian kho", zh: "仓廒" },
  { id: "nhan-vat", no: "05", vi: "Nhân vật", zh: "人物" },
  { id: "bao-tang", no: "06", vi: "Bảo tàng", zh: "博物" },
  { id: "di-san", no: "07", vi: "Di sản sống", zh: "活态" },
  { id: "tham-quan", no: "08", vi: "Tham quan", zh: "参观" },
  { id: "nguon", no: "09", vi: "Nguồn", zh: "档案" },
] as const;

export type LayerId = "moat" | "outer-fortress" | "inner-wall" | "vaults" | "courtyard" | "drainage";

export const layers: {
  id: LayerId;
  code: string;
  name: Bi;
  explanation: Bi;
  note?: Bi;
}[] = [
  {
    id: "moat",
    code: "L1",
    name: { vi: "Hào thành ngoài", zh: "护城壕" },
    explanation: {
      vi: "Vành đai hào bao ngoài giúp phòng thủ và thu thoát nước mưa xuống triền đất hoàng thổ, giữ nền móng luôn khô ráo.",
      zh: "外围护城壕兼顾防卫与高塬排水导流，阻截暴雨汇水渗透仓基。",
    },
  },
  {
    id: "outer-fortress",
    code: "L2",
    name: { vi: "Thành trại ngoại vi", zh: "寨城外郭" },
    explanation: {
      vi: "Tường đất nện kết hợp lối tuần tra và công sự bảo vệ bên ngoài khu kho gạch.",
      zh: "夯土外寨墙体与巡防通道，构成仓城外层防卫屏护。",
    },
    note: {
      vi: "Một nghiên cứu năm 2021 ghi nhận thành trại xây năm 1891 như lớp phòng thủ ngoài; cần đối chiếu thêm với bản vẽ đo đạc chính thức.",
      zh: "2021年部分研究述及1891年增筑外寨墙，仍待与官方测绘及保护规划图纸核对。",
    },
  },
  {
    id: "inner-wall",
    code: "L3",
    name: { vi: "Thành trong bọc gạch", zh: "砖砌内城" },
    explanation: {
      vi: "Khối tường gạch xanh bọc đất nện kiên cố bao quanh toàn bộ 58 gian kho, tạo mô hình “thành trong thành”.",
      zh: "青砖包芯夯土内城合围五十八廒，形成严密的“城中城”空间格局。",
    },
  },
  {
    id: "vaults",
    code: "L4",
    name: { vi: "58 gian hầm vòm gạch", zh: "五十八孔仓廒" },
    explanation: {
      vi: "Hệ thống 58 gian kho độc lập bố trí khép kín dọc bốn cạnh sân, tổng sức chứa thiết kế khoảng 5.220 tấn.",
      zh: "五十八间独立砖券窑廒沿四隅连廊排布，设计总储粮能力约五千二百二十吨。",
    },
  },
  {
    id: "courtyard",
    code: "L5",
    name: { vi: "Sân trong & Hồi lang", zh: "院落与回廊" },
    explanation: {
      vi: "Sân lát gạch đá rộng rãi làm nơi phơi sấy lúa mì, kiểm đong lương thực và nối thông hành lang gỗ bốn mặt.",
      zh: "宽敞内庭院用于晾晒麦粟、过秤盘粮，四面木构回廊遮雨避晒。",
    },
  },
  {
    id: "drainage",
    code: "L6",
    name: { vi: "Hệ thống thoát nước", zh: "坡面与暗沟排水" },
    explanation: {
      vi: "Mái ngói dốc, máng thu nước và mặt sân nghiêng dẫn nước mưa ra cống ngầm thoát khỏi khu thành cổ.",
      zh: "屋面排水檐沟配合院落微坡与砖砌暗涵，迅速将雨水排出城外。",
    },
  },
];

export type Stop = {
  id: string;
  code: string;
  layerId: LayerId;
  x: number;
  y: number;
  name: Bi;
  subtitle: Bi;
  summary: Bi;
  detail: Bi;
  audio: Bi;
  look: Bi;
};

export const stops: Stop[] = [
  {
    id: "chu-tuoc-mon",
    code: "01",
    layerId: "inner-wall",
    x: 50,
    y: 86,
    name: { vi: "Chu Tước Môn & tường thành", zh: "朱雀门与外城墙" },
    subtitle: { vi: "Lối vào chính hướng Nam", zh: "南向正门 · 城墙防卫与匾额源流" },
    summary: {
      vi: "Cổng vòm gạch xanh hướng Nam trên triền cao Triều Ấp. Danh hiệu “Thiên hạ đệ nhất thương” cần tách khỏi hai chữ “Long Hổ” được đề tặng riêng.",
      zh: "南向青砖拱券门洞立于朝邑高台塬畔。门额“丰图义仓”与“天下第一仓”须与另行题赠的“龙虎”二字分述。",
    },
    detail: {
      vi: "Khối tường thành dày tạo vùng đệm nhiệt, ngăn trộm cướp và lũ vùng hạ du Hoàng Hà. Hai chữ “Long Hổ” biểu dương Diêm Kính Minh được di dời bảo quản khi tu sửa năm 1976–1977.",
      zh: "高厚砖土城墙兼顾防匪、防洪与隔热缓冲。“龙虎”二字石刻在1976–1977年修缮时曾迁置保护。",
    },
    audio: {
      vi: "Đứng trước cổng Nam, hãy quan sát độ cao triền đất hoàng thổ so với đồng bằng Hoàng Hà phía xa — địa thế cao ráo này là tuyến phòng thủ đầu tiên chống ngập úng.",
      zh: "立于南门之外，请远望仓城与周边河滩的高差——高爽的黄土台塬地势，正是义仓防潮防涝的第一道屏障。",
    },
    look: { vi: "Thành trong thành · cổng Nam · minh họa định hướng", zh: "城中城 · 南门 · 方位示意" },
  },
  {
    id: "cong-dong",
    code: "02",
    layerId: "outer-fortress",
    x: 86,
    y: 50,
    name: { vi: "Cổng Đông · tuyến nhập lương", zh: "东门 · 进粮通道" },
    subtitle: { vi: "Xe thóc mùa gặt · kiểm đong trước khi nhập", zh: "秋收运粮入仓 · 过斗检验" },
    summary: {
      vi: "Hướng Đông đón đoàn xe từ cánh đồng Triều Ấp và bãi bồi Hoàng Hà, đưa thóc vào sân cân đong, phơi khô.",
      zh: "东侧通道承接朝邑及渭洛平原乡民送来的秋收小麦与粟谷，经检验晾晒后分廒入储。",
    },
    detail: {
      vi: "Phân luồng nhập (Đông) và xuất (Tây) để lệ “xuân tá thu hoàn” không bị ùn tắc trong mùa vụ.",
      zh: "东西分门令“春借秋还”放赈与收储秩序井然，避免人畜车辆在门洞内拥堵。",
    },
    audio: {
      vi: "Vào mùa thu hoạch, thóc được chở qua cổng Đông, kiểm tra độ khô bằng phương pháp truyền thống trước khi phân vào từng gian hầm.",
      zh: "每逢秋收入库，乡民运粮多由东路进仓，经专人验看干湿度与成色后方准入廒。",
    },
    look: { vi: "Trục Đông–Tây · phân luồng vận chuyển", zh: "东西轴线 · 运粮分流" },
  },
  {
    id: "cong-tay",
    code: "03",
    layerId: "outer-fortress",
    x: 14,
    y: 50,
    name: { vi: "Cổng Tây · tuyến xuất cứu trợ", zh: "西门 · 出粮赈济通道" },
    subtitle: { vi: "Mùa giáp hạt & đại hạn 1900, 1929", zh: "荒年放赈 · 1900与1929" },
    summary: {
      vi: "Lối xuất lương cho vay không lãi mùa giáp hạt và mở kho cứu đói quy mô lớn năm 1900 và 1929.",
      zh: "主要承担青黄不接时出仓放粮与灾荒赈济，见证光绪二十六年及民国十八年开仓济民。",
    },
    detail: {
      vi: "Mỗi đợt xuất kho có người giữ kho và đại diện hương thân chứng kiến, đối chiếu sổ sách và dụng cụ đong chuẩn.",
      zh: "每次出粮均须仓管与地方乡绅共同验封核账，以公斗量粮，确保赈灾粮食公平发放到户。",
    },
    audio: {
      vi: "Nếu cổng Đông gắn với niềm vui được mùa, cổng Tây lưu ký ức sinh tồn của hàng nghìn gia đình qua hai trận hạn năm 1900 và 1929.",
      zh: "若说东路承载丰收喜悦，西侧通道则铭刻着1900与1929年关中大荒中乡民领粮度日的集体记忆。",
    },
    look: { vi: "Cửa Tây · xuất kho & đối chiếu sổ sách", zh: "西门 · 出仓核账" },
  },
  {
    id: "58-ao-luong",
    code: "04",
    layerId: "vaults",
    x: 74,
    y: 36,
    name: { vi: "58 gian kho vòm gạch", zh: "五十八孔砖券仓廒" },
    subtitle: { vi: "Thiết kế ~5.220 tấn · bảo tồn từ 2023", zh: "设计储量约5220吨 · 2023年后活态保护" },
    summary: {
      vi: "58 gian độc lập bao quanh sân. Năm 2021 ghi 5.229 tấn lương dự trữ trung ương; từ 2023 ngừng trữ trung ương và tiếp tục bảo dưỡng.",
      zh: "五十八间砖券窑廒环列内城。2021年曾储中央储备粮5229吨；2023年起不再承担央储任务，仍由专人检修。",
    },
    detail: {
      vi: "Vòm gạch độc lập cách ly rủi ro cháy và ẩm mốc. Nhiều gian nay là không gian trưng bày; số còn lại vẫn được thông gió, tuần kiểm.",
      zh: "独立砖券结构既防火防鼠又减少连片受潮。部分廒房已转为粮食文化展厅，其余仍按规范巡检保养。",
    },
    audio: {
      vi: "Từ năm 2023, 58 gian kho không còn giữ nhiệm vụ dự trữ trung ương, nhưng vẫn được kiểm tra, thông gió định kỳ để giữ khả năng vận hành của một công trình lịch sử.",
      zh: "自2023年起虽已退出中央储备粮储存序列，工作人员仍按时开窗通风、巡检仓房，守护这座百年粮仓的生命力。",
    },
    look: { vi: "Sàn gỗ kê cao và cửa thông gió trên cao", zh: "架空木地板与高侧通风木窗" },
  },
  {
    id: "hoi-lang",
    code: "05",
    layerId: "courtyard",
    x: 28,
    y: 34,
    name: { vi: "Hồi lang gỗ chu vi", zh: "环周木构回廊" },
    subtitle: { vi: "Đệm che nắng mưa · giữ mặt tiền kho khô", zh: "遮雨防晒缓冲带 · 护佑仓门" },
    summary: {
      vi: "Hành lang cột gỗ kê tảng đá xanh chạy bốn mặt sân, che mưa tạt vào cửa kho và làm lối đi khô ráo.",
      zh: "四面贯通的木柱坡顶回廊以青石柱础隔湿，阻挡斜风骤雨扑打仓门，兼具遮阴降温之效。",
    },
    detail: {
      vi: "Mái hiên rộng khiến nắng hè Quan Trung không chiếu thẳng lên cửa gỗ, giảm dao động nhiệt bề mặt.",
      zh: "深挑檐削弱关中盛夏直射阳光，在院落与砖墙之间形成温和的微气候过渡走廊。",
    },
    audio: {
      vi: "Hãy chú ý chân cột gỗ đặt trên tảng đá xanh — chi tiết này tách gỗ khỏi hơi ẩm đất nền suốt hơn một thế kỷ.",
      zh: "请留意每根立柱下方的青石柱础——正是这种隔潮垫石，让木构回廊历经百年而不腐朽。",
    },
    look: { vi: "Cột gỗ và chân cột đá xanh quanh sân lát gạch", zh: "环周木柱与青石柱础" },
  },
  {
    id: "san-thoat-nuoc",
    code: "06",
    layerId: "drainage",
    x: 50,
    y: 52,
    name: { vi: "Sân phơi & thoát nước", zh: "中心晾晒院落与排水" },
    subtitle: { vi: "Sân phơi mùa thu · mái dốc và cống ngầm", zh: "晒粮广场 · 坡面暗沟" },
    summary: {
      vi: "Sân trung tâm để phơi lúa mì, kê trước khi nhập kho. Mặt sân lát đá dốc dẫn mưa ra rãnh thoát.",
      zh: "开阔的院心既是收储前翻晒谷物的场地，也是整座仓城的集水排水枢纽，雨天不留积水。",
    },
    detail: {
      vi: "Nước từ mái ngói và mặt sân gom về rãnh rồi thoát ra triền dốc ngoài thành, tránh thấm ngược chân tường các gian kho.",
      zh: "屋顶雨水经檐口落入院面排水沟，再顺地下暗涵排出高台之外，消除内涝返潮隐患。",
    },
    audio: {
      vi: "Kho thóc sợ nhất nước đọng sau mưa lớn. Mặt sân nghiêng nhẹ về rãnh thoát giúp nước rút nhanh ra ngoài khu thành.",
      zh: "古仓储粮最忌院内积水。工匠利用台塬高差铺设微坡院面与暗沟，确保暴雨过后迅速排干。",
    },
    look: { vi: "Sân trung tâm · dốc & cống ngầm — sơ đồ minh họa", zh: "中心院落 · 微坡与暗沟示意" },
  },
  {
    id: "tuong-thanh-hoang-ha",
    code: "07",
    layerId: "inner-wall",
    x: 50,
    y: 16,
    name: { vi: "Mặt thành & địa thế Hoàng Hà", zh: "登城马道与黄河地势" },
    subtitle: { vi: "Lối tuần trên thành · triền cao Triều Ấp", zh: "城顶马道 · 黄土塬与河滩高差" },
    summary: {
      vi: "Từ mặt thành thấy vì sao nghĩa thương được đặt trên triền đất cao, tách khỏi bãi bồi dễ ngập của Hoàng Hà.",
      zh: "登上城顶马道，可直观理解建造者为何择址高塬边缘，避开黄河泛滥与地下水位偏高地带。",
    },
    detail: {
      vi: "Chọn vị trí là nguyên tắc đầu tiên trong năm trụ cột kỹ thuật: cao ráo, thông gió tự nhiên, tránh luồng gió ẩm trực diện.",
      zh: "“择高而筑”是建筑智慧的首要法则：高台利于通风散湿，又与河道保持安全高差。",
    },
    audio: {
      vi: "Nhìn từ mặt thành ra bình nguyên phía Đông, việc chọn địa điểm quan trọng ngang với kỹ thuật xây tường hay lát sàn gỗ.",
      zh: "站在城墙之上远眺东侧平原，便能明白选址本身就是百年防潮的第一项工程智慧。",
    },
    look: { vi: "Tường thành & công sự · quan sát toàn cảnh", zh: "城墙与马道 · 全景观察" },
  },
  {
    id: "bia-ky",
    code: "08",
    layerId: "courtyard",
    x: 30,
    y: 66,
    name: { vi: "Bia ký 1931 & hương thân", zh: "民国二十年碑刻" },
    subtitle: { vi: "Không chỉ của Diêm Kính Minh", zh: "并非一人之功 · 乡绅督建" },
    summary: {
      vi: "Tư liệu lưu trữ Thiểm Tây và văn bia Dân Quốc thứ 20 (1931) ghi danh hương thân giám sát thi công và đóng góp tài chính.",
      zh: "据陕西省档案馆藏史料及民国二十年（1931）碑刻，建仓更有众多朝邑乡绅实地督工与乡民集资共成。",
    },
    detail: {
      vi: "Các phòng trưng bày hiện đại (năm 2021 từng ghi 12 phòng cùng khu trải nghiệm nông canh) giúp đọc lại câu chuyện cộng đồng tự cứu trợ.",
      zh: "当代展陈空间（2021年资料记录共设十二个展室及农耕体验区）还原了“自捐自管、守望相助”的制度传统。",
    },
    audio: {
      vi: "Những tấm bia khắc tên người góp bạc và người trông coi xây dựng nhắc rằng một nghĩa thương bền vững được tạo nên bởi cả cộng đồng Triều Ấp.",
      zh: "碑石上镌刻的不仅是捐银数字，更是一方乡邻共同参与监造与守仓的社会契约。",
    },
    look: { vi: "Minh họa bia ký đá đời Thanh — không thay bản dập", zh: "清代石刻碑文陈列意象" },
  },
];

export type Era = "all" | "cause" | "build" | "community" | "living";

export const eraFilters: { id: Era; vi: string; zh: string }[] = [
  { id: "all", vi: "Tất cả (1817–2026)", zh: "全部（1817–2026）" },
  { id: "cause", vi: "Nguyên nhân", zh: "动因" },
  { id: "build", vi: "Kiến thiết", zh: "营建" },
  { id: "community", vi: "Cộng đồng", zh: "社区" },
  { id: "living", vi: "Di sản sống", zh: "活态" },
];

export const timeline: {
  id: string;
  year: string;
  era: Exclude<Era, "all">;
  title: Bi;
  summary: Bi;
  people: Bi;
  meaning: Bi;
  source: string;
}[] = [
  {
    id: "1817",
    year: "1817",
    era: "build",
    title: { vi: "Diêm Kính Minh chào đời tại Triều Ấp", zh: "阎敬铭诞于朝邑" },
    summary: {
      vi: "Diêm Kính Minh (1817–1892) sinh tại Triều Ấp, Đại Lệ. Sau khi giữ nhiều trọng trách tài chính đến chức Thượng thư Bộ Hộ, ông coi trọng tích trữ lương thực địa phương để phòng thiên tai.",
      zh: "阎敬铭（1817–1892）生于陕西朝邑。后历任地方及户部尚书，以清廉节用、重视备荒储粮留名史册。",
    },
    people: { vi: "Diêm Kính Minh (阎敬铭)", zh: "阎敬铭" },
    meaning: {
      vi: "Hiểu xuất thân hương thôn và nguồn gốc tư tưởng bị hoang cuối Thanh của người khởi xướng.",
      zh: "理解倡建者的乡土出身与晚清备荒思想渊源。",
    },
    source: "SRC-002",
  },
  {
    id: "1877",
    year: "1877",
    era: "cause",
    title: { vi: "Đinh Sửu kỳ hoang · Quan Trung", zh: "光绪三年 · 丁丑奇荒" },
    summary: {
      vi: "Đại hạn năm 1877 tác động đặc biệt nặng tới Triều Ấp. Thiếu kho dự trữ khiến cứu trợ muộn, trực tiếp thúc đẩy ý tưởng xây một nghĩa thương kiên cố tại quê hương.",
      zh: "光绪三年关中大旱，朝邑一带受灾尤甚。无粮可调之痛成为促成“民捐民管、储粮备荒”的直接历史动因。",
    },
    people: { vi: "Diêm Kính Minh và dân Triều Ấp chịu nạn đói", zh: "阎敬铭与受灾朝邑乡民" },
    meaning: {
      vi: "Nghĩa thương không sinh ra để phô trương, mà là phản ứng sinh tồn trước thảm họa mất mùa.",
      zh: "揭示义仓并非官样工程，而是针对粮食危机的制度回应。",
    },
    source: "SRC-003",
  },
  {
    id: "1882",
    year: "1882–1885",
    era: "build",
    title: { vi: "Khởi công và hoàn thành 58 kho", zh: "光绪八至十一年 · 兴建落成" },
    summary: {
      vi: "Khởi công năm 1882 theo đề xướng của Diêm Kính Minh, hoàn thành năm 1885. Bia ký 1931 ghi đông đảo hương thân và dân chúng đóng góp tài chính và giám sát xây dựng.",
      zh: "1882年动工、1885年落成。据1931年碑刻，除阎敬铭倡建外，朝邑乡绅集资并实地督工，方筑成五十八廒。",
    },
    people: { vi: "Diêm Kính Minh, hương thân Triều Ấp và thợ địa phương", zh: "阎敬铭、朝邑乡绅与本地工匠" },
    meaning: {
      vi: "Khẳng định bản chất nghĩa thương dân lập — tài chính và quản lý gắn với cộng đồng, không chỉ ngân khố triều đình.",
      zh: "确立“民建民管”的社会属性与工程协作传统。",
    },
    source: "SRC-002",
  },
  {
    id: "1900",
    year: "1900",
    era: "community",
    title: { vi: "Mở kho cứu đói cuối Quang Tự", zh: "光绪二十六年 · 开仓赈灾" },
    summary: {
      vi: "Khi mất mùa và biến động cuối thời Quang Tự gây nạn đói, Phong Đồ Nghĩa Thương mở cửa xuất lương, giữ ổn định đời sống dân Triều Ấp.",
      zh: "光绪末年荒歉之际，丰图义仓启封放粮赈济乡里，履行“积谷备荒”的立仓初衷。",
    },
    people: { vi: "Ban quản lý nghĩa thương và các hộ được cứu trợ", zh: "义仓司事与受赈乡邻" },
    meaning: {
      vi: "Cơ chế dự trữ cộng đồng được kiểm chứng khoảng 15 năm sau khi công trình hoàn thành.",
      zh: "落成十五年后即经历实战检验，证实义仓制度的社会救济效能。",
    },
    source: "SRC-003",
  },
  {
    id: "1929",
    year: "1929",
    era: "community",
    title: { vi: "Đại hạn Quan Trung, mở kho lần nữa", zh: "民国十八年 · 关中大旱赈济" },
    summary: {
      vi: "Theo International Online (CRI), trong đợt hạn nghiêm trọng năm 1929 tại Thiểm Tây, thóc tích trữ tại Phong Đồ Nghĩa Thương lại phát huy vai trò cứu trợ.",
      zh: "据国际在线报道，1929年关中特大旱灾期间，丰图义仓再度开廒济荒，延续近半个世纪的防灾使命。",
    },
    people: { vi: "Cư dân Triều Ấp và hương thân giữ sổ kho", zh: "朝邑民众及后续立碑记事乡绅" },
    meaning: {
      vi: "Củng cố niềm tin cộng đồng, dẫn tới việc khắc bia tổng kết năm 1931.",
      zh: "见证跨清末民初的社会保障延续性，并促成1931年碑记留存。",
    },
    source: "SRC-003",
  },
  {
    id: "1976",
    year: "1976–1977",
    era: "living",
    title: { vi: "Tu sửa và di dời chữ Long–Hổ", zh: "建筑修缮与碑刻移护" },
    summary: {
      vi: "Kho, mái và lầu cổng được gia cố. Các tấm khắc “Long – Hổ” do Từ Hi Thái hậu đề để biểu dương Diêm Kính Minh được chuyển vị trí bảo quản.",
      zh: "对仓房、屋顶及仓楼实施修缮；与慈禧太后题赐阎敬铭相关的“龙虎”刻石被移置妥善保存。",
    },
    people: { vi: "Cán bộ quản lý kho và đội tu bổ di tích", zh: "粮站维护人员与文保修缮匠师" },
    meaning: {
      vi: "Giữ kết cấu qua thế kỷ XX và tách câu chuyện chữ “Long Hổ” khỏi biển hiệu “Thiên hạ đệ nhất thương”.",
      zh: "明确区分“龙虎”题字与“天下第一仓”匾额各自的保存脉络。",
    },
    source: "SRC-002",
  },
  {
    id: "2006",
    year: "2006 · 2019",
    era: "living",
    title: { vi: "Quốc bảo 2006 · danh thắng 4A 2019", zh: "2006年国保 · 2019年4A" },
    summary: {
      vi: "Giai đoạn 1997–2019: nghiên cứu bổ sung tư liệu, Quốc Vụ Viện công nhận Di tích Văn vật Trọng điểm Quốc gia (2006), rồi danh thắng 4A và cơ sở giáo dục an ninh lương thực (2019).",
      zh: "2006年列入全国重点文物保护单位，2019年获评国家4A级旅游景区及粮食安全宣传教育基地。",
    },
    people: { vi: "Nhà nghiên cứu di sản và ngành lương thực Thiểm Tây", zh: "文博研究机构与陕西粮食系统" },
    meaning: {
      vi: "Một kho thóc nông thôn trở thành không gian giáo dục di sản kiến trúc và an ninh lương thực cấp quốc gia.",
      zh: "完成由单纯储备设施向国家级文化遗产与教育基地的身份拓展。",
    },
    source: "SRC-001",
  },
  {
    id: "2023",
    year: "2023–2026",
    era: "living",
    title: { vi: "Ngừng dự trữ trung ương · di sản sống", zh: "退出央储 · 保护规划" },
    summary: {
      vi: "Theo Thiểm Tây Nhật Báo (05/06/2026), từ năm 2023 kho không còn lưu trữ lương dự trữ trung ương. 58 gian vẫn được kiểm tra định kỳ; tháng 5/2026 Viện Nghiên cứu Di sản Văn hóa Thiểm Tây trúng thầu lập quy hoạch bảo vệ (180 ngày).",
      zh: "据《陕西日报》（2026年6月5日），自2023年起不再承担央储任务，但仍检修58孔仓廒；2026年5月由陕西省文化遗产研究院中标编制保护规划。",
    },
    people: {
      vi: "Nhân viên bảo dưỡng, nghệ nhân Đồng Châu Bang Tử và Viện Di sản Văn hóa Thiểm Tây",
      zh: "管护团队、同州梆子演职人员与陕西省文化遗产研究院",
    },
    meaning: {
      vi: "Bước ngoặt: từ kho chứa thóc đang dùng thành bảo tàng sống về an ninh lương thực và ký ức cộng đồng.",
      zh: "当代转型核心：从实体国家粮库转变为讲述粮食记忆与农耕智慧的活态文化博物馆。",
    },
    source: "SRC-005 · SRC-007",
  },
];

export const pillars: { code: string; title: Bi; body: Bi; source: string }[] = [
  {
    code: "01",
    title: { vi: "Chọn đất · cao ráo tránh lũ", zh: "选址 · 高台避涝" },
    body: {
      vi: "Đặt trên triền hoàng thổ cao ở Triều Ấp, cao hơn bãi bồi Hoàng Hà, đón gió khô và tránh nước ngầm mùa lũ.",
      zh: "择址朝邑东寨高爽黄土台塬，显著高于黄河故道滩面，避开汛期漫溢与高地下水位返潮。",
    },
    source: "SRC-003 · SRC-005",
  },
  {
    code: "02",
    title: { vi: "Kết cấu · thành trong thành", zh: "结构 · 城中城与砖券" },
    body: {
      vi: "Hai lớp thành đất nện – gạch xanh bao 58 gian hầm vòm độc lập và hồi lang gỗ, cô lập rủi ro cháy.",
      zh: "外寨内城合围五十八孔独立砖券窑廒与木构回廊，墙体厚实且分廒隔断。",
    },
    source: "SRC-001 · SRC-003",
  },
  {
    code: "03",
    title: { vi: "Thông gió · cửa chớp và đối lưu", zh: "通风 · 气窗与微风对流" },
    body: {
      vi: "Cửa chớp gỗ trên cao và lỗ thông khí chân tường mở về sân trong, khí lưu thông mà nắng không chiếu thẳng vào thóc.",
      zh: "廒墙高处设木百叶气窗，墙脚开通风孔道，形成上下穿堂微风，带走粮堆余热潮气。",
    },
    source: "SRC-005",
  },
  {
    code: "04",
    title: { vi: "Chống ẩm · sàn gỗ tùng kê cao", zh: "防潮 · 架空松木地板" },
    body: {
      vi: "Sàn gỗ tùng kê cao tạo khoảng trống dưới gầm, chặn hơi ẩm đất nền. Con số “18°C quanh năm” chưa có chuỗi đo công khai — chỉ nói định tính.",
      zh: "仓内铺设架空木地板，阻断地气上行。关于“常年恒温18℃”尚缺连续公开实测，本展仅作定性说明。",
    },
    source: "SRC-005",
  },
  {
    code: "05",
    title: { vi: "Thoát nước · máng mái và rãnh ngầm", zh: "排水 · 屋面檐沟与暗渠" },
    body: {
      vi: "Mái ngói dốc, máng hiên và độ dốc sân phối hợp rãnh ngầm đẩy mưa ra khỏi chân thành. Bản đồ rãnh chi tiết chờ quy hoạch bảo vệ 2026.",
      zh: "坡屋面、院落微坡与地下暗沟协同导流。具体走向待2026年保护规划测绘公布后核补。",
    },
    source: "SRC-007",
  },
];

export const cutLayers = [
  { id: "roof", vi: "Mái ngói dốc & lớp đệm", zh: "坡屋面与隔热气层" },
  { id: "wall", vi: "Tường dày bọc gạch", zh: "青砖包芯夯土厚墙" },
  { id: "floor", vi: "Sàn gỗ kê cao", zh: "架空木地板与板底通风" },
  { id: "drain", vi: "Sân dốc & rãnh ngầm", zh: "院落微坡与暗沟" },
] as const;

export const people: { id: string; name: Bi; role: Bi; body: Bi; source: string }[] = [
  {
    id: "yan",
    name: { vi: "Diêm Kính Minh", zh: "阎敬铭 · 倡建者" },
    role: { vi: "Thượng thư Bộ Hộ · người khởi xướng", zh: "晚清户部尚书 · 倡建人" },
    body: {
      vi: "Chứng kiến thảm họa đói Đinh Sửu 1877 tại quê, ông kêu gọi lập kho thóc bền vững bằng sức dân tự quản thay vì lệ thuộc hoàn toàn vào ngân khố triều đình.",
      zh: "目睹光绪三年丁丑奇荒家乡之痛后，倡议在朝邑筑立“民捐民管、不费国帑”的永固义仓。",
    },
    source: "SRC-002 · SRC-003",
  },
  {
    id: "gentry",
    name: { vi: "Hương thân Triều Ấp", zh: "朝邑乡绅" },
    role: { vi: "Bia ký 1931 ghi công tập thể", zh: "筹资与督工群体" },
    body: {
      vi: "Phong Đồ Nghĩa Thương không phải công trình của một cá nhân. Văn bia năm 1931 ghi hương thân đóng góp tiền, đôn đốc thi công và giữ quy chế quản lý minh bạch.",
      zh: "民国二十年碑刻记载多位朝邑乡绅共同捐资、监工与司理仓务，彰显乡土自治传统。",
    },
    source: "SRC-002",
  },
  {
    id: "keepers",
    name: { vi: "Người quản lý & bảo dưỡng", zh: "仓储管理人员" },
    role: { vi: "Từ sổ xuân tá thu hoàn tới tuần kiểm 58 kho", zh: "从过斗验粮到今日巡检" },
    body: {
      vi: "Qua gần một thế kỷ rưỡi, thủ kho kiểm ẩm, mở cửa thông gió theo mùa và bảo dưỡng mái, sàn. Sau năm 2023, nhân viên vẫn duy trì bảo dưỡng toàn bộ 58 gian.",
      zh: "百余年来，司事与现代管理员负责看天开窗、防鼠防潮与修补瓦面。2023年后依然定期检修五十八孔仓廒。",
    },
    source: "SRC-005",
  },
  {
    id: "residents",
    name: { vi: "Cư dân Triều Ấp", zh: "朝邑当地居民" },
    role: { vi: "Ký ức mùa gặt, vay trả thóc và các đợt cứu đói", zh: "丰收晒粮与灾荒领赈" },
    body: {
      vi: "Với người địa phương, tường thành gắn với vòng sinh kế: năm được mùa gửi thóc dự phòng, mùa giáp hạt hoặc đại hạn 1900, 1929 lại xếp hàng nhận lương vượt qua nạn đói.",
      zh: "对朝邑百姓而言，高墙之内封存的不只是麦粟，更是荒年活命的指望与秋收后守信归仓的乡规记忆。",
    },
    source: "SRC-003 · SRC-004",
  },
  {
    id: "today",
    name: { vi: "Người bảo tồn hôm nay", zh: "当代保护者与宣教团队" },
    role: { vi: "Trưng bày, nông canh và quy hoạch 2026", zh: "展陈、研学与保护规划" },
    body: {
      vi: "Chuyên gia di sản, hướng dẫn viên an ninh lương thực và Viện Nghiên cứu Di sản Văn hóa Thiểm Tây đang cân bằng bảo vệ cấu trúc gốc với giáo dục cộng đồng.",
      zh: "文保工作者、讲解员及陕西省文化遗产研究院共同推动价值评估、展示利用与2026年专项保护规划编制。",
    },
    source: "SRC-005 · SRC-007",
  },
];

export const halls: { code: string; title: Bi; body: Bi; objects: Bi }[] = [
  {
    code: "A",
    title: { vi: "Nguồn gốc lương thực", zh: "粮食起源与农耕史" },
    body: {
      vi: "Quá trình thuần hóa lúa mì, kê và vai trò bình nguyên Quan Trung trong nông nghiệp phương Bắc.",
      zh: "追溯粟麦驯化历程与关中平原“八百里秦川”的粮仓地理基础。",
    },
    objects: { vi: "Mẫu hạt vùng Hoàng Hà · niên biểu mùa vụ", zh: "北方旱作标本 · 关中农时图谱" },
  },
  {
    code: "B",
    title: { vi: "Nông cụ thu hoạch", zh: "传统农具与收割器具" },
    body: {
      vi: "Cày bừa, liềm gặt, quạt rê trấu và cối đá xay bột của nông dân Thiểm Tây.",
      zh: "展示犁耙、镰刀、木质风车、石磨石碾等耕收与加工器物。",
    },
    objects: { vi: "Quạt thóc gỗ · cối đá · xẻng đảo phơi", zh: "木制扬谷风车 · 石磨 · 晒场木锨" },
  },
  {
    code: "C",
    title: { vi: "Cân đong và quy chế", zh: "传统衡器与量器" },
    body: {
      vi: "Hộp đong gỗ (đẩu, thăng), cân đòn và chuẩn quy đổi để vay trả thóc công bằng.",
      zh: "陈列木斗、升、杆秤，呈现“春借秋还”如何以标准器维持公平。",
    },
    objects: { vi: "1 đẩu = 10 thăng · đẩu công cộng", zh: "一斗十升 · 民仓公斗" },
  },
  {
    code: "D",
    title: { vi: "Ẩm thực và tem phiếu", zh: "饮食民俗与粮票" },
    body: {
      vi: "Chế biến lúa mì vùng Vị Nam và tem phiếu lương thực thời kinh tế kế hoạch.",
      zh: "呈现关中麦食习俗与二十世纪粮油供应票证，记录一代人的温饱记忆。",
    },
    objects: { vi: "Tem phiếu · dụng cụ làm mì", zh: "各年代粮票 · 传统面食器具" },
  },
  {
    code: "E",
    title: { vi: "Kỹ thuật trữ lương", zh: "历代储粮与防潮" },
    body: {
      vi: "Đối chiếu hầm đất, kho vòm gạch, sàn kê gỗ với nguyên lý chống sâu, chuột và ẩm.",
      zh: "对比地窖、砖券仓廒及架空地板，阐释防虫、防鼠与防潮原理。",
    },
    objects: { vi: "Mô hình gian hầm · vật liệu chống ẩm", zh: "砖券廒房模型 · 防潮隔垫" },
  },
  {
    code: "F",
    title: { vi: "Bị hoang và an ninh lương thực", zh: "备荒制度与粮食安全" },
    body: {
      vi: "Từ Thường Bình Thương, Xã Thương đến Nghĩa Thương — nối cứu đói cổ đại với giáo dục an ninh lương thực hôm nay.",
      zh: "梳理常平仓、社仓至义仓的备荒理念，连接当代粮食安全教育。",
    },
    objects: { vi: "Quy chế nghĩa thương · giáo dục tiết kiệm", zh: "义仓章程 · 惜粮教育" },
  },
];

export const quiz: { q: Bi; options: Bi[]; answer: number; why: Bi }[] = [
  {
    q: {
      vi: "Dụng cụ hộp gỗ viền sắt dùng để đong thể tích thóc khi vay và hoàn trả gọi là gì?",
      zh: "“春借秋还”时用于公平计量粮食体积的木制方器称为什么？",
    },
    options: [
      { vi: "Đẩu gỗ (木斗)", zh: "木斗" },
      { vi: "Quạt rê trấu", zh: "木风车" },
      { vi: "Cân đòn", zh: "杆秤" },
    ],
    answer: 0,
    why: {
      vi: "Đẩu gỗ là lượng khí chuẩn (một đẩu bằng mười thăng). Đầy đẩu phải gạt miệng bằng que gạt để vay trả công bằng.",
      zh: "木斗为传统标准容积量器（一斗合十升），装满后须以斗刮抹平斗口。",
    },
  },
  {
    q: {
      vi: "Trước khi đưa lúa mì vào kho, thiết bị nào dùng sức gió quay tay để tách hạt lép và bụi rơm?",
      zh: "小麦入廒前，转动手柄产生风力以吹净麦糠与瘪粒的器具是哪一种？",
    },
    options: [
      { vi: "Cối đá", zh: "石磨" },
      { vi: "Quạt rê thóc / phong xa", zh: "木风车（扬谷扇车）" },
      { vi: "Liềm gặt", zh: "镰刀" },
    ],
    answer: 1,
    why: {
      vi: "Phong xa làm sạch rơm vụn và đất, giảm tạp chất hút ẩm, mốc.",
      zh: "木风车可清选碎秆与灰土，减少杂质吸潮发霉隐患。",
    },
  },
  {
    q: {
      vi: "Tờ giấy nửa sau thế kỷ XX dùng để phân phối định mức lương thực, dầu ăn cho từng hộ là gì?",
      zh: "二十世纪下半叶按户定量供应粮食与食用油的纸质凭证称为什么？",
    },
    options: [
      { vi: "Bia ký", zh: "碑刻" },
      { vi: "Sổ kho", zh: "仓账" },
      { vi: "Tem phiếu lương thực", zh: "粮票 / 粮油供应证" },
    ],
    answer: 2,
    why: {
      vi: "Tem phiếu ghi lại giai đoạn thu mua thống nhất và cung cấp theo định mức.",
      zh: "粮票记录了计划经济时期粮食统购统销与按量供给的历史阶段。",
    },
  },
];

export const livingEvents = [
  {
    date: "05/06/2026",
    tag: "SRC-005",
    title: { vi: "Đồng Châu Bang Tử & “Long Hổ Trấn Thương Ký”", zh: "同州梆子与《龙虎镇仓记》" },
    body: {
      vi: "Thiểm Tây Nhật Báo ghi các buổi Đồng Châu Bang Tử, vở thực cảnh “Long Hổ Trấn Thương Ký” và nghi lễ “Khai Thương Đại Điển” tại di tích, cùng trải nghiệm gặt lúa mì và đổi vật phẩm mô phỏng tem phiếu. Đây là hoạt động theo kỳ được báo chí ghi, không phải lịch cố định hằng ngày.",
      zh: "《陕西日报》记录主题戏曲、《龙虎镇仓记》实景剧及“开仓大典”，并有夏收体验与模拟粮票互动。属节庆期报道活动，非每日固定常设。",
    },
  },
  {
    date: "27/05/2026",
    tag: "SRC-007",
    title: { vi: "Quy hoạch bảo vệ · hợp đồng 180 ngày", zh: "保护规划编制中标" },
    body: {
      vi: "Địa phương công bố Viện Nghiên cứu Di sản Văn hóa Thiểm Tây lập quy hoạch bảo vệ tổng thể (giá trị, ranh giới, môi trường, trưng bày, quản lý). Kết quả phê duyệt cuối chưa có thông báo công khai.",
      zh: "陕西省文化遗产研究院承担保护规划编制（价值评估、保护区划、环境整治与展示管理，工期180日）。最终批复尚待公告。",
    },
  },
];

export const cluster = [
  {
    name: { vi: "Phong Đồ Nghĩa Thương", zh: "丰图义仓" },
    when: { vi: "Quang Tự 8–11 (1882–1885)", zh: "清光绪八至十一年" },
    place: { vi: "Hạt nhân cụm · thôn Đại Nhất, trấn Triều Ấp", zh: "核心地标 · 朝邑镇大一村" },
    body: {
      vi: "Nghĩa thương dân lập 58 gian kho vòm gạch, di tích trọng điểm quốc gia và trung tâm trưng bày văn hóa lương thực.",
      zh: "保存完好的清代民办大型义仓，现为全国重点文物保护单位与粮食文化展示核心。",
    },
  },
  {
    name: { vi: "Lầu Đại Từ Sầm", zh: "岱祠岑楼" },
    when: { vi: "Có thể truy đến Bắc Tống · nhiều lần trùng tu", zh: "始建可溯至北宋 · 历代重修" },
    place: { vi: "Phía Bắc Phong Đồ Nghĩa Thương", zh: "位于丰图义仓北侧古建群内" },
    body: {
      vi: "Lầu hát cổ gắn với miếu Đông Nhạc của trấn cổ Triều Ấp, phản ánh tín ngưỡng và sinh hoạt gắn với vùng kho lương.",
      zh: "原属朝邑东岳庙建筑序列的古代戏楼，与丰图义仓共同构成朝邑北坡文化景观带。",
    },
  },
  {
    name: { vi: "Tháp chùa Kim Long", zh: "金龙寺塔" },
    when: { vi: "Tháp gạch bảy tầng", zh: "七级砖塔" },
    place: { vi: "Cùng nhóm phía Bắc với Lầu Đại Từ Sầm", zh: "与岱祠岑楼同属北向历史组团" },
    body: {
      vi: "Tháp gạch bảy tầng trên triền cao Triều Ấp, tạo điểm nhấn và nối tuyến nhìn giữa cổ trấn, nghĩa thương và lầu hát.",
      zh: "七级砖砌佛塔矗立于朝邑高塬，与义仓、岱祠岑楼形成连续的历史视线走廊。",
    },
  },
];

export const yellowRoute: Bi[] = [
  {
    vi: "Thành cổ Đồng Quan — điểm đầu tuyến làng cổ Hoàng Hà do Bộ Văn hóa và Du lịch công bố ngày 17/07/2024, án ngữ cửa ải sông núi.",
    zh: "潼关古城 — 2024年7月17日文化和旅游部公布之黄河古村文化线路起点，扼守山河要冲。",
  },
  {
    vi: "Phong Đồ Nghĩa Thương — kho thành đời Thanh trên cao nguyên Triều Ấp, điển hình bị hoang và tương trợ cộng đồng.",
    zh: "丰图义仓 — 朝邑高塬上的清代城池式粮仓，展现农耕备荒与社区互助。",
  },
  {
    vi: "Đảng Gia Thôn — làng nổi tiếng tứ hợp viện Minh–Thanh và bia gia huấn, trí tuệ nhà ở Quan Trung đông phủ.",
    zh: "党家村 — 以明清四合院与家训刻石闻名，呈现关中东府民居营造智慧。",
  },
  {
    vi: "Trấn cổ Trần Lô — làng gốm nối lửa lò Diệu Châu, nhà xếp theo núi, tường xếp bằng vò chum.",
    zh: "陈炉古镇 — 依托耀州窑窑火延续至今的陶瓷聚落，建筑依山层叠，缸罐垒墙。",
  },
  {
    vi: "Thôn Mạnh Khương Nguyên — điểm du lịch thôn gắn cây ăn quả vùng nguyên Vị Bắc và truyền thuyết dân gian.",
    zh: "孟姜塬村 — 结合渭北塬区果业生态与民间传说文化的乡村旅游节点。",
  },
];

export const routes = [
  {
    id: "core",
    minutes: 45,
    title: { vi: "Tuyến cốt lõi", zh: "核心遗产速览线" },
    body: {
      vi: "Chu Tước Môn, dạo Hồi Lang, xem 58 gian kho và lên tường thành nhìn về Hoàng Hà.",
      zh: "由朱雀门入，经木构回廊察看五十八孔仓廒，登城顶马道远眺黄河高塬地势。",
    },
    stops: ["chu-tuoc-mon", "hoi-lang", "58-ao-luong", "tuong-thanh-hoang-ha"],
  },
  {
    id: "arch",
    minutes: 90,
    title: { vi: "Tuyến kiến trúc & chống ẩm", zh: "建筑防潮研读线" },
    body: {
      vi: "Hai cổng Đông–Tây, sân phơi và thoát nước, 58 gian kho, mặt cắt sàn gỗ kê cao.",
      zh: "考察东西运粮通道、中心院落排水暗沟、砖券廒房与架空防潮构造。",
    },
    stops: ["cong-dong", "cong-tay", "san-thoat-nuoc", "58-ao-luong"],
  },
  {
    id: "study",
    minutes: 120,
    title: { vi: "Tuyến nghiên cứu & bảo tàng", zh: "文史档案与全区研学线" },
    body: {
      vi: "Tám điểm trong thành kho, bia ký 1931 và Bảo tàng Văn hóa Lương thực.",
      zh: "遍览八大空间节点，细读1931年碑刻并参观粮食文化专题展厅。",
    },
    stops: stops.map((s) => s.id),
  },
];

export const sources: { id: string; title: Bi; publisher: string; url: string; purpose: Bi }[] = [
  {
    id: "SRC-001",
    title: { vi: "Cục Quản lý Lương thực và Dự trữ Nhà nước (2021)", zh: "国家粮食和物资储备局（2021）" },
    publisher: "lswz.gov.cn",
    url: "https://www.lswz.gov.cn/html/ywpd/zfdc/2021-02/02/content_264243.shtml",
    purpose: {
      vi: "Số liệu 2021: 5.229 tấn lương dự trữ trung ương, 58 gian kho, 12 phòng trưng bày và khu trải nghiệm nông canh.",
      zh: "记录2021年5229吨央储粮、58廒规模及十二展室与农耕体验区。",
    },
  },
  {
    id: "SRC-002",
    title: { vi: "Mạng lưu trữ tỉnh Thiểm Tây — hồ sơ Phong Đồ Nghĩa Thương", zh: "陕西省档案馆专题" },
    publisher: "daj.shaanxi.gov.cn",
    url: "https://daj.shaanxi.gov.cn/Article/View?id=1805",
    purpose: {
      vi: "Bia ký Dân Quốc thứ 20 (1931), vai trò hương thân, tu sửa 1976–1977 và di dời chữ Long–Hổ.",
      zh: "核证1931年碑记、乡绅督造、1976–1977年修缮及“龙虎”文字迁保。",
    },
  },
  {
    id: "SRC-003",
    title: { vi: "International Online (CRI) — cứu trợ 1900, 1929", zh: "国际在线 — 历史与赈济" },
    publisher: "sn.cri.cn",
    url: "https://sn.cri.cn/2019-03-13/9e36ae91-6b5c-da7d-fe23-b845da9f7dc2.html",
    purpose: {
      vi: "Đại hạn 1877, mở kho 1900 và 1929, địa hình và cấu trúc chống ẩm.",
      zh: "记录1877年旱灾、1900与1929年开仓放赈及防潮构造说明。",
    },
  },
  {
    id: "SRC-004",
    title: { vi: "China News Radio — giá trị sử dụng lâu dài", zh: "央广网 — 使用史与遗产价值" },
    publisher: "cnr.cn",
    url: "https://www.cnr.cn/sxpd/c/20220426/t20220426_525807142.shtml",
    purpose: {
      vi: "Giá trị sử dụng lâu dài và chuyển thành không gian giáo dục văn hóa du lịch tại Đại Lệ.",
      zh: "阐释百年仓廒的保护价值与地方文旅融合脉络。",
    },
  },
  {
    id: "SRC-005",
    title: { vi: "Thiểm Tây Nhật Báo (05/06/2026)", zh: "《陕西日报》2026年6月5日" },
    publisher: "esb.sxdaily.com.cn",
    url: "https://esb.sxdaily.com.cn/pc/content/202606/05/content_2048336.html",
    purpose: {
      vi: "Xác nhận ngừng dự trữ trung ương từ 2023, vẫn bảo dưỡng 58 kho năm 2026, Đồng Châu Bang Tử và Khai Thương Đại Điển.",
      zh: "确认2023年停止央储、2026年维持58廒管护以及实景演出与夏收互动。",
    },
  },
  {
    id: "SRC-006",
    title: { vi: "Bộ Văn hóa và Du lịch — tuyến Hoàng Hà (17/07/2024)", zh: "文化和旅游部黄河古村线路" },
    publisher: "mct.gov.cn",
    url: "https://zhuanti.mct.gov.cn/xcss2024_xcygj/shanxi1/detail/7193.html",
    purpose: {
      vi: "Công bố tuyến Đồng Quan → Phong Đồ Nghĩa Thương → Đảng Gia Thôn → Trần Lô → Mạnh Khương Nguyên.",
      zh: "官方发布“潼关古城—丰图义仓—党家村—陈炉古镇—孟姜塬村”乡村文化线路。",
    },
  },
  {
    id: "SRC-007",
    title: { vi: "Cổng mua sắm công Thiểm Tây (27/05/2026)", zh: "陕西省政府采购网" },
    publisher: "ccgp-shaanxi.gov.cn",
    url: "https://www.ccgp-shaanxi.gov.cn/freecms/site/shaanxi/ggxx/info/2026/8a69c1139e331350019e6825b4f73ff1.html",
    purpose: {
      vi: "Viện Nghiên cứu Di sản Văn hóa Thiểm Tây trúng thầu lập quy hoạch bảo vệ (180 ngày).",
      zh: "公布陕西省文化遗产研究院中标编制保护规划（工期180日）。",
    },
  },
  {
    id: "SRC-008",
    title: { vi: "UNESCO — diễn giải và trình bày di sản", zh: "UNESCO 遗产阐释原则" },
    publisher: "whc.unesco.org",
    url: "https://whc.unesco.org/en/faq/290",
    purpose: {
      vi: "Bảy nguyên tắc biên tập: tiếp cận, nguồn tin cậy, bối cảnh, xác thực, bền vững, bao trùm, đánh giá liên tục.",
      zh: "确立遗产阐释与传播的七项核心编辑原则。",
    },
  },
  {
    id: "SRC-009",
    title: { vi: "ICOMOS Trung Quốc — đạo đức bảo tồn số", zh: "ICOMOS 中国 — 展示伦理" },
    publisher: "icomoschina.org.cn",
    url: "https://www.icomoschina.org.cn/content/details48_9834.html",
    purpose: {
      vi: "Tái dựng số phải có căn cứ nghiên cứu, không làm tổn hại tính xác thực của di tích gốc.",
      zh: "规范数字化展示伦理，坚持研究依据与遗产原真性优先。",
    },
  },
];

export const principles: Bi[] = [
  {
    vi: "Tiếp cận — song ngữ Việt–Trung, điều hướng bàn phím và văn bản thay cho hình.",
    zh: "可及性 — 中越双语对照、键盘导航及图文替代文本。",
  },
  {
    vi: "Nguồn tin cậy — mọi sử thực gắn mã hồ sơ công khai SRC-001–009.",
    zh: "可信来源 — 史实关联至公开研究与档案编号。",
  },
  {
    vi: "Bối cảnh — đọc kiến trúc trong địa lý hạn lụt Quan Trung và chế độ tương trợ hương thôn.",
    zh: "语境 — 置于关中旱涝地理与乡土互助制度中解读。",
  },
  {
    vi: "Xác thực — ranh giới giữa ghi chép thật và mô hình giáo dục; không bịa số đo từng gian.",
    zh: "真实性 — 严守记录与教学示意的边界，杜绝杜撰单廒参数。",
  },
  {
    vi: "Bền vững — cân bằng an toàn di tích, giáo dục lương thực và văn hóa địa phương.",
    zh: "可持续 — 兼顾文物本体安全、粮食教育与地方文化共生。",
  },
  {
    vi: "Bao trùm — hương thân, người giữ kho và dân thường cùng ở trung tâm câu chuyện.",
    zh: "包容 — 让乡绅、守仓人与普通民众的声音进入叙事中心。",
  },
  {
    vi: "Đánh giá liên tục — ghi thay đổi 2023–2026 và chờ cập nhật khi quy hoạch được phê duyệt.",
    zh: "持续评估 — 随职能转型与保护规划进展修订。",
  },
];

export const corrections: { topic: Bi; status: Bi; conclusion: Bi }[] = [
  {
    topic: { vi: "Vẫn trữ năm nghìn tấn dự trữ trung ương", zh: "现仍常态存放五千吨中央储备粮" },
    status: { vi: "Đã đính chính", zh: "已更正" },
    conclusion: {
      vi: "Từ năm 2023 kho ngừng nhiệm vụ lưu trữ lương dự trữ trung ương. 58 kho vẫn được bảo dưỡng, chuyển sang di sản và giáo dục (SRC-005).",
      zh: "2023年起不再承担中央储备粮任务，58廒重点用于养护及文博展示（SRC-005）。",
    },
  },
  {
    topic: { vi: "5.220 tấn và 5.229 tấn", zh: "5220吨与5229吨" },
    status: { vi: "Xác minh theo ngữ cảnh", zh: "区分口径" },
    conclusion: {
      vi: "~5.220 tấn là sức chứa thiết kế toàn khu. 5.229 tấn là lượng dự trữ được báo cáo năm 2021 (SRC-001).",
      zh: "5220吨为设计总容量估算；5229吨为2021年官方报道在储记录（SRC-001）。",
    },
  },
  {
    topic: { vi: "Trong kho bốn mùa 18°C", zh: "仓内四季恒温18℃" },
    status: { vi: "Đã điều chỉnh", zh: "已审慎改写" },
    conclusion: {
      vi: "Chưa đủ dữ liệu đo liên tục để khẳng định cố định 18°C. Mô phỏng trên trang được gắn nhãn mô hình giáo dục.",
      zh: "尚缺公开连续实测证明恒定18℃，微气候模块明确标注为教学示意模型。",
    },
  },
  {
    topic: { vi: "Số đo riêng từng hầm 01–58", zh: "按编号生成单廒数据" },
    status: { vi: "Đã loại bỏ dữ liệu giả lập", zh: "已移除推算伪数据" },
    conclusion: {
      vi: "Granary Explorer chỉ minh họa thao tác chọn gian và số liệu công bố toàn khu. Không suy diễn kích thước hay nhiệt ẩm riêng.",
      zh: "五十八廒浏览器标注为概念演示，不再虚构单廒实测参数。",
    },
  },
  {
    topic: { vi: "12 phòng trưng bày", zh: "十二个粮食文化展室" },
    status: { vi: "Cần đối chiếu thực địa", zh: "待现场复核" },
    conclusion: {
      vi: "Sáu nhóm trên trang là phân nhóm biên tập. SRC-001 ghi 12 phòng năm 2021; danh mục phòng hiện tại cần xác minh tại chỗ.",
      zh: "本页六大板块为编研归类，非取代2021年记载之十二展室官方目录。",
    },
  },
  {
    topic: { vi: "“天下第一仓” và hai chữ “龙虎”", zh: "名号与“龙虎”二字" },
    status: { vi: "Đã tách riêng", zh: "分述" },
    conclusion: {
      vi: "Chữ Long–Hổ do Từ Hi Thái hậu đề để biểu dương Diêm Kính Minh (chuyển bảo quản 1976–1977) không nhập với danh hiệu Thiên hạ đệ nhất thương (SRC-002).",
      zh: "明确区分御封名号与1976–1977年修缮时移置保护的“龙虎”刻石（SRC-002）。",
    },
  },
  {
    topic: { vi: "Giờ mở cửa, xe buýt 101 và giá vé", zh: "开放时间、公交与门票" },
    status: { vi: "Kiểm tra trước khi đến", zh: "行前核实" },
    conclusion: {
      vi: "Không cố định giá vé trong trang. Giờ niêm yết, điện thoại 0913-3412522 và tuyến buýt Đại Lệ 101 đều cần gọi xác nhận.",
      zh: "不固化变动票价；开放时段与公交信息均标注“行前核实”。",
    },
  },
  {
    topic: { vi: "Sơ đồ ba lớp phòng thủ, gồm thành trại 1891", zh: "三层防御与1891年寨墙" },
    status: { vi: "Sơ đồ định hướng", zh: "空间示意" },
    conclusion: {
      vi: "Mặt bằng là sơ đồ minh họa, không thay bản vẽ đo đạc. Đối chiếu khi quy hoạch bảo vệ 2026 hoàn tất (SRC-007).",
      zh: "明确标示为导览示意图，非正式测绘总图，待与2026年保护规划图纸核准。",
    },
  },
];

export const DESIGN_TONS = 5220;
export const VAULTS = 58;
export const RECORDED_2021 = 5229;
