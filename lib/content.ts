/**
 * Site content — EN/VN bilingual.
 *
 * Cấu trúc: mỗi field đều có 2 ngôn ngữ. UI tự pick theo locale.
 * Edit ở đây để update toàn site.
 */

export type Locale = 'en' | 'vi';

// ============================================================
// Site-wide info
// ============================================================
export const site = {
  name:   'Mai Linh Ho',
  handle: '@marlibol',
  role: {
    en: 'Social & Event Production',
    vi: 'Social & Event Production',
  },
  city: {
    en: 'Hanoi, Vietnam',
    vi: 'Hà Nội, Việt Nam',
  },
  email: 'linhrin02@gmail.com',
  phone: '0374827688',
  socials: {
    instagram: 'https://www.instagram.com/marlibol/',
    linkedin:  'https://linkedin.com/in/mai-linh-ho',
  },
  tagline: {
    en: 'Producing stories on stage and on screen.',
    vi: 'Kể chuyện — bằng sân khấu, bằng màn hình, bằng từng khoảnh khắc.',
  },
};

// ============================================================
// UI labels (nav, section numbers, kickers, etc.)
// ============================================================
export const ui = {
  nav: {
    en: [
      { label: 'Index',      href: '#hero',       n: '01' },
      { label: 'Note',       href: '#about',      n: '02' },
      { label: 'Lineage',    href: '#experience', n: '03' },
      { label: 'Projects',   href: '#work',       n: '04' },
      { label: 'Skills',     href: '#skills',     n: '05' },
      { label: 'Off-hours',  href: '#hobbies',    n: '06' },
      { label: 'Contact',    href: '#contact',    n: '07' },
    ],
    vi: [
      { label: 'Mở đầu',     href: '#hero',       n: '01' },
      { label: 'Giới thiệu', href: '#about',      n: '02' },
      { label: 'Kinh nghiệm',href: '#experience', n: '03' },
      { label: 'Dự án',      href: '#work',       n: '04' },
      { label: 'Kỹ năng',    href: '#skills',     n: '05' },
      { label: 'Sở thích',   href: '#hobbies',    n: '06' },
      { label: 'Liên hệ',    href: '#contact',    n: '07' },
    ],
  },
  sections: {
    about: {
      kicker:  { en: '02 / Note',       vi: '02 / Giới thiệu' },
      h1:      { en: 'About,',          vi: 'Đôi dòng,' },
      h2:      { en: 'briefly.',        vi: 'ngắn gọn.' },
      label:   { en: 'On the work, in plain words', vi: 'Vài dòng về tôi' },
    },
    experience: {
      kicker:  { en: '03 / Lineage',    vi: '03 / Kinh nghiệm' },
      h1:      { en: "Where I've",      vi: 'Những nơi' },
      h2:      { en: 'been.',           vi: 'tôi đã đi qua.' },
      label:   { en: 'Reverse chronological', vi: 'Sắp xếp theo thời gian' },
      eduTitle:{ en: '/  Education',    vi: '/  Học vấn' },
    },
    work: {
      kicker:  { en: '04 / Projects',   vi: '04 / Dự án' },
      h1:      { en: 'Selected',        vi: 'Một số' },
      h2:      { en: 'projects.',       vi: 'dự án.' },
      intro:   {
        en: 'A short-list from the last two years — live productions for institutions, brands, and artists, plus editorial work from the press bench.',
        vi: 'Một vài dự án nổi bật trong hai năm vừa qua — từ chương trình livestream, sự kiện thương hiệu, đến nghệ sĩ và phòng tin tức.',
      },
      entries: { en: 'entries',         vi: 'mục' },
    },
    skills: {
      kicker:  { en: '05 / Skills',     vi: '05 / Kỹ năng' },
      h1:      { en: 'The kit.',        vi: 'Bộ công cụ.' },
      intro:   {
        en: 'What I bring to a brief. Mostly built across stages and press desks — some learned in school, most learned on the job.',
        vi: 'Những gì tôi mang đến cho công việc. Phần lớn rèn được trên sân khấu và phòng tin tức — một chút từ ghế nhà trường, còn lại là từ trải nghiệm thực tế.',
      },
    },
    hobbies: {
      kicker:  { en: '06 / Off-hours',  vi: '06 / Sở thích' },
      h1:      { en: 'Outside',         vi: 'Ngoài giờ' },
      h2:      { en: 'the work.',       vi: 'làm việc.' },
      intro:   {
        en: 'A few things I do when no one is paying me. They keep the day human.',
        vi: 'Vài thứ tôi làm khi không ai trả tiền cho mình. Để ngày sống vẫn còn là ngày sống.',
      },
    },
    contact: {
      kicker:  { en: '07 / Contact',    vi: '07 / Liên hệ' },
      h1:      { en: 'Have a room',     vi: 'Có một căn phòng' },
      h2:      { en: 'to fill?',        vi: 'cần lấp đầy?' },
      cta:     { en: 'Write to me',     vi: 'Viết cho tôi' },
      intro:   {
        en: "For productions, brand commissions, editorial work, or anything else — the kettle's on. Hanoi-based, available remote.",
        vi: 'Sản xuất, thương hiệu, biên tập, hay bất cứ điều gì khác — cứ nhắn tôi nhé. Ở Hà Nội, làm việc remote thoải mái.',
      },
    },
  },
  stats: {
    based:     { en: 'Based',     vi: 'Hoạt động tại' },
    languages: { en: 'Languages', vi: 'Ngôn ngữ' },
    field:     { en: 'Field',     vi: 'Lĩnh vực' },
    status:    { en: 'Available, Spring 2026', vi: 'Sẵn sàng nhận việc, Xuân 2026' },
    role:      { en: '/  Role',   vi: '/  Vai trò' },
    scroll:    { en: 'Scroll',    vi: 'Cuộn xuống' },
    email:     { en: '/  Email',  vi: '/  Email' },
    elsewhere: { en: '/  Elsewhere', vi: '/  Ở những nơi khác' },
  },
};

// ============================================================
// About paragraphs
// ============================================================
export const about = {
  en: [
    "I'm a Communications & Event Producer based in Hanoi. My work sits at the intersection of journalism, stagecraft and content — which is a long way of saying I build moments that hold a room.",
    "Recent rooms include international taekwondo championships, bank-headlined countdowns at the Opera House, an artist's first stadium tour, and a press desk at the Ministry of Foreign Affairs. Different rooms, same job: keep the story clean and the energy alive.",
    'I write and produce in Vietnamese and English (C1), with experience translating, transcribing, and editing across both.',
  ],
  vi: [
    'Tôi làm Sản xuất Sự kiện & Truyền thông tại Hà Nội. Công việc của tôi nằm ở giao điểm của báo chí, sân khấu và nội dung — nói ngắn lại, là tạo nên những khoảnh khắc giữ được cảm xúc của cả khán phòng.',
    'Những "căn phòng" gần đây của tôi có thể kể đến: Giải Taekwondo Cảnh sát Châu Á mở rộng, đêm Countdown của ngân hàng tại Nhà hát Lớn, concert đầu tiên của một nghệ sĩ, và phòng tin tức tại Bộ Ngoại giao. Không gian khác nhau, nhưng công việc thì giống nhau — giữ câu chuyện sạch và giữ năng lượng sống.',
    'Tôi viết và sản xuất bằng cả tiếng Việt và tiếng Anh (C1), có kinh nghiệm dịch, gỡ băng và biên tập song ngữ.',
  ],
};

// ============================================================
// Philosophy
// ============================================================
export const philosophy = {
  en: 'I work where journalism meets stagecraft — coordinating artists, building moments, telling stories that hold a room of people for a few hours. The events I produce aren\'t products. They\'re memory, lit and rehearsed. My job is to make sure nothing breaks the spell.',
  vi: 'Tôi làm việc ở nơi báo chí gặp sân khấu — điều phối nghệ sĩ, dựng nên khoảnh khắc, kể những câu chuyện giữ được một khán phòng trong vài giờ. Những sự kiện tôi sản xuất không phải sản phẩm. Chúng là ký ức — có ánh sáng, có nhịp tập. Việc của tôi là đảm bảo không có gì phá vỡ phép màu ấy.',
};

// ============================================================
// Projects
// ============================================================
export const projects = [
  {
    slug: 'asian-police-taekwondo',
    index: '01',
    year:  '2024',
    kicker: { en: 'International Sport Event', vi: 'Sự kiện thể thao quốc tế' },
    title: {
      en: 'Vietnam Asian Open Police Taekwondo Championships',
      vi: 'Giải Taekwondo Cảnh sát Châu Á mở rộng — Việt Nam 2024',
    },
    venue: {
      en: 'Quảng Ninh Provincial Arena',
      vi: 'Nhà thi đấu tỉnh Quảng Ninh',
    },
    summary: {
      en: 'Coordinating the live stage and 13 national delegations through opening ceremony, competition rounds, and broadcast moments.',
      vi: 'Phụ trách điều phối sân khấu trực tiếp và 13 đoàn quốc gia trong lễ khai mạc, các vòng thi đấu và các khoảnh khắc lên sóng.',
    },
    roles: {
      en: ['Stage Coordination', 'Team Liaison (13 nations)', 'Run-of-Show'],
      vi: ['Điều phối sân khấu', 'Phụ trách 13 đoàn quốc tế', 'Run-of-show'],
    },
    cover:  '/images/project-taekwondo.jpg',
  },
  {
    slug: 'vietinbank-countdown-2025',
    index: '02',
    year:  '2024 / 2025',
    kicker: { en: 'Brand Live Show', vi: 'Show thương hiệu' },
    title: {
      en: 'Vietinbank Countdown 2025 — Trust the Moment',
      vi: 'Vietinbank Countdown 2025 — Trust the Moment',
    },
    venue: {
      en: 'Hanoi Opera House',
      vi: 'Nhà hát Lớn Hà Nội',
    },
    summary: {
      en: 'Stage coordination and artist care for the headlining countdown broadcast on New Year\u2019s Eve. Cinematic main stage, simultaneous outdoor zone.',
      vi: 'Điều phối sân khấu và chăm sóc nghệ sĩ cho đêm Countdown được phát sóng trực tiếp đêm Giao thừa. Sân khấu chính điện ảnh, đồng thời có khu ngoài trời.',
    },
    roles: {
      en: ['Stage Coordination', 'Artist Liaison', 'Backstage Run'],
      vi: ['Điều phối sân khấu', 'Take care nghệ sĩ', 'Hậu trường'],
    },
    cover:  '/images/project-vietinbank.jpg',
  },
  {
    slug: 'phan-manh-quynh-concert',
    index: '03',
    year:  '2024 / 2025',
    kicker: { en: 'First Live Concert', vi: 'Live concert đầu tay' },
    title: {
      en: 'Phan Mạnh Quỳnh — Chuyến tàu mùa Đông / mùa Xuân',
      vi: 'Phan Mạnh Quỳnh — Chuyến tàu mùa Đông / mùa Xuân',
    },
    venue: {
      en: 'Nguyễn Du Stadium · Quần Ngựa Stadium',
      vi: 'NTĐ Nguyễn Du · SVĐ Quần Ngựa',
    },
    summary: {
      en: 'Show-assistant for the artist\u2019s first headlining live concert series. Wrangled run-of-show details from soundcheck to encore across two stadium runs.',
      vi: 'Show Assistant cho chuỗi live concert đầu tay của Phan Mạnh Quỳnh. Đảm bảo run-of-show từ soundcheck đến encore trong hai đêm diễn.',
    },
    roles: {
      en: ['Show Assistant', 'Artist Care', 'Stage Coordination'],
      vi: ['Show Assistant', 'Take care nghệ sĩ', 'Điều phối sân khấu'],
    },
    cover:  '/images/project-phanmanhquynh.jpg',
  },
  {
    slug: 'event-portfolio-2024-2025',
    index: '04',
    year:  '2024 — 2025',
    kicker: { en: 'Selected Productions', vi: 'Một số sản xuất tiêu biểu' },
    title: {
      en: 'Sống Trong Lòng Dân · PJICO Fest · Tâm Thức Tinh Hoa',
      vi: 'Sống Trong Lòng Dân · PJICO Fest · Tâm Thức Tinh Hoa',
    },
    venue: {
      en: 'Multiple venues · Hanoi & national',
      vi: 'Nhiều địa điểm · Hà Nội và toàn quốc',
    },
    summary: {
      en: 'A run of stage coordination work across institutional, corporate, and cultural productions — from Ministry events to bank-headlined festivals.',
      vi: 'Loạt công việc điều phối sân khấu trải dài từ sự kiện nhà nước, doanh nghiệp, đến các chương trình văn hoá — từ chương trình của Bộ đến lễ hội do ngân hàng tài trợ.',
    },
    roles: {
      en: ['Stage Coordination', 'Production Liaison'],
      vi: ['Điều phối sân khấu', 'Phối hợp sản xuất'],
    },
    cover:  '/images/project-events-collage.jpg',
  },
  {
    slug: 'nhan-dan-tv-journalism',
    index: '05',
    year:  '2023',
    kicker: { en: 'Editorial Internship', vi: 'Thực tập báo chí' },
    title: {
      en: 'Nhan Dan Television — Foreign Affairs Bureau',
      vi: 'Truyền hình Nhân Dân — Ban Đối ngoại',
    },
    venue: {
      en: '2 Le Thach, Hanoi',
      vi: '2 Lê Thạch, Hà Nội',
    },
    summary: {
      en: 'Editorial internship covering Ministry of Foreign Affairs press briefings and producing bilingual broadcast packages.',
      vi: 'Thực tập biên tập, đưa tin các buổi họp báo của Bộ Ngoại giao và sản xuất các phóng sự song ngữ.',
    },
    roles: {
      en: ['Editor (Internship)', 'EN—VI Translation', 'Press Coverage'],
      vi: ['Biên tập viên (thực tập)', 'Dịch Anh–Việt', 'Đưa tin báo chí'],
    },
    cover:  '/images/project-journalism.jpg',
  },
] as const;

export type Project = typeof projects[number];

// ============================================================
// Experience
// ============================================================
export const experience = [
  {
    period: { en: '2025 — Now', vi: '2025 — Nay' },
    role:   { en: 'Freelance Producer', vi: 'Producer tự do' },
    org:    { en: 'Independent · Hanoi', vi: 'Tự do · Hà Nội' },
    note:   { en: 'Selected event + content commissions.', vi: 'Nhận các dự án sự kiện và nội dung chọn lọc.' },
  },
  {
    period: { en: '11/2025 — 2/2026', vi: '11/2025 — 2/2026' },
    role:   { en: 'Social Media Researcher', vi: 'Nghiên cứu Mạng xã hội' },
    org:    { en: 'STATT Consulting', vi: 'STATT Consulting' },
    note:   { en: 'Quantitative & qualitative social research.', vi: 'Nghiên cứu social định lượng và định tính.' },
  },
  {
    period: { en: 'Oct 2024 — Apr 2025', vi: '10/2024 — 4/2025' },
    role:   { en: 'Event Executive (Probation)', vi: 'Event Executive (Thử việc)' },
    org:    { en: 'ZEIT — art comes first', vi: 'ZEIT — art comes first' },
    note:   { en: 'Stage coordination for major live productions.', vi: 'Điều phối sân khấu cho các show lớn.' },
  },
  {
    period: { en: 'Jul 2025', vi: '7/2025' },
    role:   { en: 'Conference Transcriber', vi: 'Gỡ băng hội nghị' },
    org:    { en: 'Techcombank Investment Summit', vi: 'Techcombank Investment Summit' },
    note:   { en: 'EN—VI live transcription, panel sessions.', vi: 'Gỡ băng song ngữ Anh–Việt, các phiên panel.' },
  },
  {
    period: { en: 'Sep 2023 — Oct 2024', vi: '9/2023 — 10/2024' },
    role:   { en: 'Social Media Manager / Content Creator', vi: 'Social Media Manager / Content Creator' },
    org:    { en: 'MVP Academy', vi: 'MVP Academy' },
    note:   { en: 'Cross-platform content strategy and execution.', vi: 'Lên chiến lược và triển khai nội dung đa nền tảng.' },
  },
  {
    period: { en: 'Mar 2023 — Jun 2023', vi: '3/2023 — 6/2023' },
    role:   { en: 'Editor (Internship)', vi: 'Biên tập (Thực tập)' },
    org:    { en: 'Nhan Dan Television', vi: 'Truyền hình Nhân Dân' },
    note:   { en: 'Foreign Affairs press coverage.', vi: 'Đưa tin mảng Đối ngoại.' },
  },
] as const;

// ============================================================
// Skills
// ============================================================
export const skills = [
  {
    group: { en: 'Live Production', vi: 'Sản xuất sự kiện' },
    items: {
      en: ['On-site Execution', 'Artist & Talent Coordination', 'Run-of-Show', 'Stakeholder Liaison'],
      vi: ['Triển khai tại hiện trường', 'Điều phối nghệ sĩ', 'Run-of-show', 'Làm việc với đối tác'],
    },
  },
  {
    group: { en: 'Content & Editorial', vi: 'Nội dung & Biên tập' },
    items: {
      en: ['Content Direction', 'Copywriting (EN / VI)', 'Editing & Storytelling', 'Press Coverage'],
      vi: ['Định hướng nội dung', 'Copywriting (Anh / Việt)', 'Biên tập & Storytelling', 'Đưa tin báo chí'],
    },
  },
  {
    group: { en: 'Craft & Tools', vi: 'Công cụ' },
    items: {
      en: ['Photoshop', 'Premiere Pro', 'CapCut', 'Canva', 'Microsoft / Google Workspace'],
      vi: ['Photoshop', 'Premiere Pro', 'CapCut', 'Canva', 'Microsoft / Google Workspace'],
    },
  },
  {
    group: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: {
      en: ['English — C1 (Advanced)', 'Vietnamese — Native', 'EN ↔ VI Translation & Transcription'],
      vi: ['Tiếng Anh — C1', 'Tiếng Việt — Bản ngữ', 'Dịch & Gỡ băng Anh ↔ Việt'],
    },
  },
] as const;

// ============================================================
// Education
// ============================================================
export const education = [
  {
    school: { en: 'Academy of Journalism & Communication', vi: 'Học viện Báo chí và Tuyên truyền' },
    degree: { en: "Bachelor's, International Relations — Global Communication", vi: 'Cử nhân, Quan hệ Quốc tế — chuyên ngành Truyền thông Toàn cầu' },
    period: { en: '2020 — 2024', vi: '2020 — 2024' },
    note:   { en: 'Graduated with Very Good classification.', vi: 'Tốt nghiệp loại Giỏi.' },
  },
  {
    school: { en: 'Marie Curie Hanoi School', vi: 'Trường Marie Curie Hà Nội' },
    degree: { en: 'Secondary Education', vi: 'Trung học phổ thông' },
    period: { en: '2017 — 2020', vi: '2017 — 2020' },
    note:   { en: 'Graduated with Very Good classification.', vi: 'Tốt nghiệp loại Giỏi.' },
  },
] as const;

// ============================================================
// Hobbies / Off-hours
// ============================================================
export const hobbies = [
  {
    title:   { en: 'Marketing Foundation', vi: 'Marketing Foundation' },
    by:      { en: 'with Hưng Lưu', vi: 'với anh Hưng Lưu' },
    note: {
      en: 'Currently learning marketing fundamentals — frameworks, mindset, and craft — from Hưng Lưu (11+ years across MoMo, PMAX, Topica).',
      vi: 'Đang học khoá Marketing Foundation cùng anh Hưng Lưu (11+ năm tại MoMo, PMAX, Topica). Hiểu bản chất, framework và mindset của Marketing.',
    },
  },
  {
    title:   { en: 'Learning AI', vi: 'Học AI' },
    by:      { en: 'curiosity-driven', vi: 'vì tò mò' },
    note: {
      en: 'Reading, trying tools, and figuring out where AI fits into a producer\'s workflow. Mostly hands-on, mostly playful.',
      vi: 'Đọc, thử công cụ, và mò mẫm xem AI có thể giúp được gì cho một producer. Chủ yếu là vọc và chơi.',
    },
  },
  {
    title:   { en: 'Vibe coding', vi: 'Vibe coding' },
    by:      { en: 'building with AI', vi: 'xây sản phẩm cùng AI' },
    note: {
      en: 'Yes — this website is one of the experiments. Building small things with AI as a creative partner, not a tool.',
      vi: 'Đúng vậy — trang web này là một thử nghiệm. Làm những thứ nho nhỏ cùng AI, không phải dùng AI như công cụ, mà như một người cộng sự sáng tạo.',
    },
  },
  {
    title:   { en: 'Photowalks', vi: 'Photowalks' },
    by:      { en: 'Hanoi streets', vi: 'Phố Hà Nội' },
    note: {
      en: 'Walking, looking, photographing. Short snaps from the street — nothing more, nothing less.',
      vi: 'Đi, nhìn, và chụp. Vài tấm ảnh đường phố ngắn ngủi — không hơn không kém.',
    },
  },
] as const;
