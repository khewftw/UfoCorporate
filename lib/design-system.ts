/**
 * Legal-Tech Bento — канонические Tailwind-классы.
 * Источник правды: `.cursor/rules/design.mdc`
 * Импортируйте отсюда, не дублируйте произвольные значения в блоках.
 */

export const ds = {
  /** Родитель секций под Hero: вертикальный шаг между блоками ≈ my-16 / my-24 */
  sectionStack: "flex flex-col gap-16 md:gap-24",

  /** Вертикальный «ключ» секции (внутренние блоки типа Blog / Reviews) */
  sectionSpacing: "py-16 md:py-24",

  /** Внутренний контейнер (если секция не на всю ширину героя) */
  container: "mx-auto w-full max-w-7xl px-4 md:px-8",

  /** Герой: нижний «воздух» под плавающей плашкой */
  heroSection: "relative w-full bg-transparent pb-20 pt-12 md:pb-28 md:pt-16",

  /** H1 только для Hero */
  h1Hero:
    "text-center text-4xl font-bold tracking-tight !text-[#111827] leading-[1.15] md:text-[3.5rem] md:leading-[1.1]",

  /** Заголовок секции (H2): по центру, один размер во всём продукте */
  h2Section:
    "text-center text-4xl font-bold tracking-tight !text-[#111827] md:text-[2.75rem] md:leading-tight",

  /** Отступ блока «H2 + лид» до следующего контента в секции */
  sectionHeaderGap: "mb-10 md:mb-12",

  /** Лид под H2 */
  sectionLead:
    "mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed !text-[#6B7280] md:text-xl",

  /** Заголовок карточки / внутренний оффер (H3) */
  h3Card:
    "text-2xl font-bold tracking-tight !text-[#111827] md:text-3xl md:leading-snug",

  /** Основной текст в карточках и формах */
  body:
    "text-lg font-normal leading-relaxed !text-[#6B7280]",

  /** Меньший текст (выдержки, второстепенные абзацы) */
  bodySm:
    "text-base font-normal leading-relaxed !text-[#6B7280]",

  /** Body на тёмном фоне */
  bodyOnDark:
    "text-lg font-normal leading-relaxed !text-gray-400",

  /** Вторичные подписи, теги */
  meta: "text-base font-medium !text-[#9CA3AF]",

  /** Заголовок карточки госоргана */
  agencyCardTitle:
    "text-base font-bold leading-tight !text-[#111827] md:text-lg",

  /** Описание в карточке госоргана */
  agencyCardBody:
    "text-sm font-medium leading-relaxed !text-[#6B7280] md:text-base",

  /** Фон приложения (серо-голубой) */
  appSurface: "bg-background",

  /** Строка «время чтения» */
  readingMeta:
    "flex items-center gap-2 text-xs font-medium !text-[#9CA3AF]",

  /** Мелкий юридический дисклеймер под кнопкой */
  legalFinePrint:
    "text-center text-xs !text-gray-400 md:text-left",

  /** Плавающая плашка под Hero */
  floatingPanel:
    "flex w-[96%] max-w-5xl -translate-x-1/2 items-start justify-between rounded-[24px] !bg-white p-3 shadow-[0_12px_40px_rgb(0,0,0,0.08)] md:items-center md:gap-4 md:p-6 md:justify-around",

  /** Иконка в плашке Hero */
  pillIconWell:
    "flex h-10 w-10 items-center justify-center rounded-2xl !bg-[#F7F8FA] !text-gray-700 md:h-12 md:w-12",

  pillIconWellMuted:
    "flex h-10 w-10 items-center justify-center rounded-2xl !bg-gray-100 !text-gray-700 md:h-12 md:w-12",

  pillLabel:
    "text-center text-[10px] font-medium leading-tight !text-[#6B7280] md:text-xs",

  pillLabelStrong:
    "text-center text-[10px] font-medium leading-tight !text-[#111827] md:text-xs",

  /** Bento-карточка (светлая) */
  cardBento:
    "overflow-hidden rounded-[32px] !bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-200 md:p-8",

  /** Оболочка формы лида (без общего padding — колонки сами задают) */
  leadFormShell:
    "relative flex w-full flex-col overflow-hidden rounded-[32px] !bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:flex-row md:items-center",

  cardBentoHover: "hover:-translate-y-1",

  /** Карточка блога: лёгкий борт + акцент при hover */
  cardBentoInteractive:
    "!border !border-gray-100/80 hover:!border-[#FFDD2D] hover:!shadow-[0_14px_40px_rgb(0,0,0,0.08)]",

  /** Карточка практики (цветной tint-фон задаётся отдельно) */
  cardService:
    "group relative flex min-h-[420px] flex-col overflow-hidden rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-1 md:min-h-[480px]",

  /** Компактная карточка практики (сетка 3×4) */
  cardServiceCompact:
    "group relative flex min-h-[280px] flex-col overflow-hidden rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-1 md:min-h-[320px]",

  /** Акцент в правом нижнем углу тёмной карточки услуги */
  serviceCardCornerAccent:
    "pointer-events-none absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-tl from-[#FFDD2D]/25 via-[#FFDD2D]/5 to-transparent md:h-40 md:w-40",

  /** Кнопка Primary */
  btnPrimary:
    "inline-flex items-center justify-center rounded-xl !bg-[#FFDD2D] px-8 py-4 text-base font-semibold !text-[#111827] transition-colors hover:!bg-[#f5d22a] md:text-lg",

  /** Кнопка Secondary (на тинтах / белом) */
  btnSecondary:
    "inline-flex items-center justify-center gap-2 rounded-xl !bg-white px-6 py-3 text-base font-semibold !text-[#111827] shadow-[0_4px_12px_rgb(0,0,0,0.05)] transition-colors hover:!bg-gray-50",

  /** Компактная secondary для шапки */
  btnSecondaryCompact:
    "inline-flex items-center justify-center gap-2 rounded-xl !border !border-gray-200 !bg-white px-4 py-2.5 text-sm font-semibold !text-[#111827] shadow-[0_4px_12px_rgb(0,0,0,0.05)] transition-colors hover:!border-[#FFDD2D] hover:!bg-[#FFDD2D]/10 sm:px-5 sm:text-base",

  /** Secondary на карточках услуг: hover на акцент-жёлтый */
  btnSecondaryTint:
    "inline-flex items-center justify-center gap-2 rounded-xl !bg-white px-6 py-3 text-sm font-semibold !text-[#111827] shadow-[0_4px_12px_rgb(0,0,0,0.05)] transition-colors hover:!bg-[#FFDD2D] hover:!shadow-[0_4px_12px_rgba(255,221,45,0.3)]",

  /** Ghost / outline на светлой поверхности (блог, вторичный CTA) */
  btnGhost:
    "inline-flex items-center justify-center rounded-xl !border !border-gray-300 !bg-transparent px-8 py-3 text-sm font-semibold !text-[#111827] transition-colors hover:!border-[#FFDD2D] hover:!bg-[#FFDD2D]/10",

  /** Ghost на тёмной карточке */
  btnGhostDark:
    "inline-flex items-center justify-center rounded-xl !border !border-white/20 !bg-transparent px-5 py-2.5 text-sm font-semibold !text-white transition-colors hover:!border-[#FFDD2D] hover:!bg-[#FFDD2D]/10 hover:!text-[#FFDD2D]",

  /** Инпут */
  input:
    "w-full rounded-xl !bg-[#F7F8FA] px-5 py-4 text-base !text-[#111827] placeholder:!text-gray-400 outline-none transition-all focus:!bg-white focus:!ring-2 focus:!ring-[#FFDD2D]/50",

  /** Сетка между карточками */
  gridGap: "gap-5 md:gap-6",

  /** Акцентный жёлтый (текст / цифры) */
  textAccent: "!text-[#FFDD2D]",

  /** Крупная сумма долга (reviews) */
  textDebtHighlight:
    "text-2xl font-bold tabular-nums md:text-3xl !text-[#FFDD2D]",

  /** Тёмная «контрастная» карточка услуги */
  cardDark:
    "!bg-[#111827] !text-white",

  /** Карточка отзыва: тёмный Bento (`rounded-[32px]` как cardBento) */
  cardReviewDark:
    "flex flex-col overflow-hidden rounded-[32px] !bg-[#111827] p-6 !text-white shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-transform md:p-8",

  /** Внутренний блок акцентов в отзыве */
  reviewInset: "rounded-2xl !bg-white/5 p-4 md:p-5",

  /** Лейбл на тёмной карточке (капитель) */
  labelOnDark:
    "text-xs font-semibold uppercase tracking-wide !text-gray-500",

  /** Поясняющий лейбл в блоке сумм (не капитель) */
  reviewFieldLabel: "text-xs font-medium !text-gray-500",

  /** Текст на тёмной карточке (имя клиента как подзаголовок) */
  reviewClientName:
    "truncate text-lg font-bold !text-white md:text-xl",

  /** Бейдж «0 руб.» после списания (мягкая поверхность) */
  badgeDebtCleared:
    "rounded-xl !bg-[#F7F8FA] px-3 py-1 text-xs font-semibold uppercase tracking-wide !text-[#111827]",

  /** Подзаголовок карточки отзыва (город · номер) */
  reviewSubtitle: "mt-1 text-xs font-normal !text-gray-500 md:text-sm",

  /** Подпись у иконки «Решение суда» */
  reviewRibbonLabel:
    "text-[10px] font-semibold uppercase tracking-wide !text-[#FFDD2D]/90",

  /** Подпись к Яндекс.Картам в футере карточки */
  reviewMapLabel: "text-xs font-medium !text-gray-500 md:text-sm",

  /** Строка с иконкой карт в карточке отзыва */
  reviewMapRow: "flex items-center gap-2",

  /** Шапка карточки отзыва */
  reviewCardHeader: "flex items-start justify-between gap-4 pb-5",

  /** Разделители на тёмной карточке отзыва */
  reviewDividerHeader: "!border-b !border-white/10",
  reviewDividerFooter: "!border-t !border-white/10",

  /** Футер карточки отзыва (карта + ghost-кнопка) */
  reviewCardFooter:
    "mt-6 flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between",

  /** Отступ блока под сеткой (кнопка «Все статьи») */
  sectionAfterGrid: "mt-10 flex justify-center md:mt-12",

  /** Подложка внутри карточки */
  surfaceSoft: "!bg-[#F7F8FA]",
} as const;

/** Тёмный лендинг услуги (военное право и аналоги) */
export const dsMil = {
  pageBg: "bg-[#111827]",
  sectionAlt: "bg-[#1C1C1E]",
  sectionStack: "flex flex-col gap-16 md:gap-24",
  container: "mx-auto w-full max-w-7xl px-4 md:px-8",
  sectionSpacing: "py-16 md:py-24",
  sectionHeaderGap: "mb-10 md:mb-12",
  eyebrow:
    "text-sm font-bold uppercase tracking-widest text-[#FFDD2D] md:text-base",
  h1Mil:
    "text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]",
  h2Mil:
    "text-center text-3xl font-bold tracking-tight text-white md:text-4xl md:leading-tight",
  h3Mil: "text-xl font-bold tracking-tight text-white md:text-2xl",
  bodyMil: "text-lg font-normal leading-relaxed text-gray-400",
  bodyMilSm: "text-base font-normal leading-relaxed text-gray-400",
  cardGlass:
    "rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:bg-white/10 md:p-8",
  cardGlassAccent:
    "rounded-[32px] border border-[#FFDD2D]/30 bg-[#FFDD2D]/10 p-6 md:p-8",
  accentAmount: "font-bold text-[#FFDD2D]",
  btnGhostMil:
    "inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:border-[#FFDD2D] hover:bg-[#FFDD2D]/10 md:text-lg",
  input:
    "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-gray-500 outline-none transition-all focus:border-[#FFDD2D]/50 focus:bg-white/10",
  legalFinePrint: "text-center text-sm text-gray-500 md:text-left",
  quickCheckBanner:
    "rounded-[24px] border border-[#FFDD2D]/30 bg-white/5 px-6 py-8 md:rounded-[32px] md:px-10 md:py-10",
  leadBanner:
    "relative overflow-hidden rounded-[32px] border border-[#FFDD2D]/40 bg-[#FFDD2D]/10 p-8 shadow-[0_0_60px_rgba(255,221,45,0.15)] md:p-12",
  caseCard:
    "flex flex-col rounded-[32px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFDD2D]/30 hover:bg-white/[0.08] md:p-8",
} as const;

/** Светлый лендинг «Военное право (СВО)» */
export const dsMilLight = {
  container: "mx-auto w-full max-w-[1400px] px-4 md:px-8",
  sectionBleed: "relative left-1/2 w-[100vw] -translate-x-1/2",
  sectionSpacing: "py-16 md:py-24",
  eyebrow:
    "text-sm font-semibold uppercase tracking-wide !text-[#6B7280] md:text-base",
  h1Hero:
    "text-4xl font-bold leading-[1.12] tracking-tight !text-[#111827] md:text-5xl lg:text-[3.25rem]",
  card:
    "rounded-[32px] border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg md:p-8",
  cardDarkAccent:
    "rounded-[32px] bg-[#111827] p-6 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:p-8",
  cardYellowAccent:
    "rounded-[32px] border border-[#FFDD2D]/40 bg-[#FFDD2D]/15 p-6 md:p-8",
  checkWell:
    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFDD2D] text-[#111827]",
  stepNumber:
    "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFDD2D] text-xl font-bold text-[#111827]",
} as const;
