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
    "text-center text-3xl font-bold tracking-tight !text-[#111827] md:text-4xl md:leading-tight",

  /** Отступ блока «H2 + лид» до следующего контента в секции */
  sectionHeaderGap: "mb-10 md:mb-12",

  /** Лид под H2 */
  sectionLead:
    "mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed !text-[#6B7280] md:text-lg",

  /** Заголовок карточки / внутренний оффер (H3) */
  h3Card:
    "text-xl font-bold tracking-tight !text-[#111827] md:text-2xl md:leading-snug",

  /** Основной текст в карточках и формах */
  body:
    "text-base font-normal leading-relaxed !text-[#6B7280]",

  /** Меньший текст (выдержки, второстепенные абзацы) */
  bodySm:
    "text-sm font-normal leading-relaxed !text-[#6B7280]",

  /** Body на тёмном фоне */
  bodyOnDark:
    "text-base font-normal leading-relaxed !text-gray-400",

  /** Вторичные подписи, теги */
  meta: "text-sm font-medium !text-[#9CA3AF]",

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

  /** Кнопка Primary */
  btnPrimary:
    "inline-flex items-center justify-center rounded-xl !bg-[#FFDD2D] px-8 py-4 text-base font-semibold !text-[#111827] transition-colors hover:!bg-[#f5d22a]",

  /** Кнопка Secondary (на тинтах / белом) */
  btnSecondary:
    "inline-flex items-center justify-center gap-2 rounded-xl !bg-white px-6 py-3 text-sm font-semibold !text-[#111827] shadow-[0_4px_12px_rgb(0,0,0,0.05)] transition-colors hover:!bg-gray-50",

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
