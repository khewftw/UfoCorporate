import { Landmark } from "lucide-react";
import { ds, dsMilLight } from "@/lib/design-system";

type Agency = {
  name: string;
  logo: string | null;
  desc: string;
};

type AboutSectionProps = {
  /** `light` — светлая тема (лендинг военного права) */
  variant?: "dark" | "light";
};

const agencies: Agency[] = [
  {
    name: "Суды всех инстанций",
    logo: "/logos/image 816.png",
    desc: "Представительство в арбитраже и судах общей юрисдикции. Досудебное урегулирование.",
  },
  {
    name: "ФНС России",
    logo: "/logos/image 817.png",
    desc: "Разрешение налоговых споров. Налоговый аудит и законное снижение рисков.",
  },
  {
    name: "ФССП России",
    logo: "/logos/image-Photoroom (9) 1.png",
    desc: "Эффективное исполнение судебных решений. Оперативное взыскание задолженностей.",
  },
  {
    name: "Росреестр",
    logo: "/logos/image 819.png",
    desc: "Регистрация прав на недвижимость. Кадастровые операции и сопровождение сделок.",
  },
  {
    name: "МВД России",
    logo: "/logos/image 818.png",
    desc: "Защита прав, представительство интересов в административных и уголовных делах.",
  },
  {
    name: "Прокуратура РФ",
    logo: "/logos/image-Photoroom (10) 1.png",
    desc: "Контроль за законностью. Обжалование незаконных действий и прокурорский надзор.",
  },
];

/** Светлые bento-карточки: 1px обводка 15% — отделение от белого фона секции */
const lightAboutCard =
  "rounded-[32px] border border-[#111827]/15 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg md:p-8";

export function AboutSection({ variant = "dark" }: AboutSectionProps) {
  const isLight = variant === "light";

  const sectionClass = isLight
    ? `${dsMilLight.sectionBleed} bg-white ${dsMilLight.sectionSpacing}`
    : "relative left-1/2 w-[100vw] -translate-x-1/2 bg-[#1C1C1E] py-16 md:py-24";

  const cardBase = isLight
    ? `${lightAboutCard} transition-transform duration-300`
    : "rounded-[32px] border border-white/10 bg-white/5 shadow-2xl transition-transform duration-300 hover:-translate-y-1";

  const quoteCardClass = isLight
    ? `${lightAboutCard} group relative flex flex-col justify-center overflow-hidden md:col-span-2`
    : `group relative flex flex-col justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl md:col-span-2`;

  const statCardClass = isLight
    ? `${cardBase} flex flex-col justify-between p-6 xl:p-8 md:col-span-1`
    : `flex flex-col justify-between rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:col-span-1 xl:p-8`;

  const successCardClass = isLight
    ? `${cardBase} relative flex min-h-[360px] flex-col justify-between overflow-hidden p-6 md:col-span-2 lg:col-span-1 xl:p-8`
    : `relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1 xl:p-8`;

  return (
    <section className={sectionClass}>
      <div className="mx-auto mb-10 flex w-full max-w-[1400px] flex-col items-center px-4 text-center md:mb-12 md:px-8">
        <h2 className={isLight ? ds.h2Section : `${ds.h2Section} !text-white`}>
          О нас
        </h2>
        <p
          className={
            isLight
              ? `${ds.sectionLead} !mb-0 max-w-2xl`
              : `${ds.sectionLead} !mb-0 max-w-2xl !text-gray-400`
          }
        >
          Юридическая компания полного цикла. 15+ лет защищаем интересы граждан и
          бизнеса — от споров с банками до арбитражных и уголовных дел.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-4">
        <article className={quoteCardClass}>
          <div
            className={`absolute right-[-20px] top-[-20px] opacity-5 transition-transform duration-500 group-hover:scale-110 ${
              isLight ? "text-[#111827]" : "text-white"
            }`}
            aria-hidden
          >
            <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p
            className={
              isLight
                ? `relative z-10 ${ds.body} !text-[#111827] md:text-xl`
                : "relative z-10 text-lg font-medium leading-relaxed text-white md:text-xl"
            }
          >
            Мы берём дело на себя — вам остаются только приятные новости. Опыт
            работы со всеми ключевыми государственными структурами обеспечивает
            реальный результат, а не обещания.
          </p>
        </article>

        <article className={statCardClass}>
          <span
            className={
              isLight
                ? "text-xs font-bold uppercase tracking-widest text-[#6B7280]"
                : "text-xs font-bold uppercase tracking-widest text-[#FFDD2D]"
            }
          >
            Опыт
          </span>
          <div className="mt-8">
            <div className="flex items-baseline gap-1">
              <span
                className={
                  isLight
                    ? "text-[56px] font-bold leading-none tracking-tight text-[#111827] lg:text-[64px] xl:text-[72px]"
                    : "text-[56px] font-bold leading-none tracking-tight text-white lg:text-[64px] xl:text-[72px]"
                }
              >
                15+
              </span>
              <span
                className={
                  isLight
                    ? "ml-1 text-base font-medium text-gray-500 lg:text-lg"
                    : "ml-1 text-base font-medium text-white/70 lg:text-lg"
                }
              >
                лет
              </span>
            </div>
            <p
              className={
                isLight
                  ? "mt-4 text-sm font-medium leading-tight text-gray-600 md:text-base"
                  : "mt-4 text-sm font-medium leading-tight text-gray-400 md:text-base"
              }
            >
              успешной юридической практики
            </p>
          </div>
        </article>

        <article
          className={
            isLight
              ? "flex flex-col justify-between rounded-[32px] border border-[#111827]/15 bg-[#FFDD2D] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 md:col-span-1 xl:p-8"
              : "flex flex-col justify-between rounded-[32px] bg-[#FFDD2D] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 md:col-span-1 xl:p-8"
          }
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#111827]/50">
            Активы
          </span>
          <div className="mt-8">
            <div className="flex items-baseline gap-1">
              <span className="text-[56px] font-bold leading-none tracking-tight text-[#111827] lg:text-[64px] xl:text-[72px]">
                {">"}2.5
              </span>
            </div>
            <p className="mt-4 text-sm font-bold leading-tight text-[#111827]/80 md:text-base">
              млрд ₽ защищённых средств
            </p>
          </div>
        </article>

        <article className="flex flex-col justify-center md:col-span-2 lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h3 className={isLight ? ds.h3Card : "text-2xl font-bold tracking-tight text-white md:text-3xl"}>
              Активно взаимодействуем с гос. органами
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {agencies.map((a) => (
              <div
                key={a.name}
                className={
                  isLight
                    ? "group flex flex-col items-start gap-3 rounded-[24px] border border-[#111827]/15 bg-[#F7F8FA] p-5 transition-all hover:-translate-y-1 hover:border-[#FFDD2D]/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:p-6"
                    : "group flex flex-col items-start gap-3 rounded-[24px] border border-white/10 bg-transparent p-5 transition-all hover:-translate-y-1 hover:border-[#FFDD2D]/50 hover:bg-white/5 md:p-6"
                }
              >
                <div className="flex w-full items-center gap-3">
                  <div
                    className={
                      isLight
                        ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#111827]/15 bg-white p-2 transition-colors group-hover:border-[#FFDD2D]/40"
                        : "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2 transition-colors group-hover:bg-white/20"
                    }
                  >
                    {a.logo ? (
                      <img
                        src={a.logo}
                        alt={a.name}
                        className="h-full w-full object-contain transition-transform group-hover:scale-110"
                      />
                    ) : (
                      <Landmark
                        className={`h-6 w-6 ${isLight ? "text-gray-400" : "text-gray-400"}`}
                        aria-hidden
                      />
                    )}
                  </div>
                  <h4 className={isLight ? ds.agencyCardTitle : `${ds.agencyCardTitle} !text-white`}>
                    {a.name}
                  </h4>
                </div>
                <p className={isLight ? ds.agencyCardBody : `${ds.agencyCardBody} !text-gray-400`}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className={successCardClass}>
          <span
            className={
              isLight
                ? "relative z-20 text-xs font-bold uppercase tracking-widest text-gray-500"
                : "relative z-20 text-xs font-bold uppercase tracking-widest text-gray-400"
            }
          >
            Успех
          </span>
          <div className="pointer-events-none absolute left-6 top-16 flex select-none flex-col">
            {(["", "/20", "/10", "/5"] as const).map((opacity, i) => (
              <span
                key={i}
                className={
                  isLight
                    ? `whitespace-nowrap text-[72px] font-black leading-[0.8] tracking-tighter text-[#111827]${opacity} lg:text-[80px] xl:text-[88px]`
                    : `whitespace-nowrap text-[72px] font-black leading-[0.8] tracking-tighter text-white${opacity} lg:text-[80px] xl:text-[88px]`
                }
              >
                98%
              </span>
            ))}
          </div>
          <div className="relative z-20 mt-auto pt-40">
            <p
              className={
                isLight
                  ? "text-sm font-medium leading-tight text-gray-600 md:text-base"
                  : "inline-block rounded-md bg-black/40 p-1.5 text-sm font-medium leading-tight text-gray-300 backdrop-blur-md md:text-base"
              }
            >
              выигранных дел в судах
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
