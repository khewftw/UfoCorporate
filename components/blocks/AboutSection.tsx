import { Landmark } from "lucide-react";
import { ds } from "@/lib/design-system";

type Agency = {
  name: string;
  logo: string | null;
  desc: string;
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

export function AboutSection() {
  return (
    // ВАЖНО: relative left-1/2 w-[100vw] -translate-x-1/2 вырывает секцию из любых ограничений родительской сетки
    <section className="relative left-1/2 w-[100vw] -translate-x-1/2 bg-[#1C1C1E] py-16 md:py-24">
      {/* Внутренний контейнер центрирует контент */}
      <div className="mx-auto mb-10 flex w-full max-w-[1400px] flex-col items-center px-4 text-center md:mb-12 md:px-8">
        <h2 className={`${ds.h2Section} !text-white`}>О нас</h2>
        <p className={`${ds.sectionLead} !mb-0 max-w-2xl !text-gray-400`}>
          Юридическая компания полного цикла. 15+ лет защищаем интересы граждан и
          бизнеса — от споров с банками до арбитражных и уголовных дел.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-4">
        
        {/* Карточка 1: Главный посыл */}
        <article className="group relative flex flex-col justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl md:col-span-2">
          <div className="absolute right-[-20px] top-[-20px] opacity-5 transition-transform duration-500 group-hover:scale-110">
            <svg
              width="180"
              height="180"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="text-white"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="relative z-10 text-lg font-medium leading-relaxed text-white md:text-xl">
            Мы берём дело на себя — вам остаются только приятные новости. Опыт
            работы со всеми ключевыми государственными структурами обеспечивает
            реальный результат, а не обещания.
          </p>
        </article>

        {/* Карточка 2: 15+ лет */}
        <article className="flex flex-col justify-between rounded-[32px] bg-white/5 border border-white/10 p-6 xl:p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:col-span-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFDD2D]">
            Опыт
          </span>
          <div className="mt-8">
            <div className="flex items-baseline gap-1">
              {/* Чуть уменьшили шрифт, чтобы 100% влезал в сетку */}
              <span className="text-[56px] font-bold leading-none tracking-tight text-white lg:text-[64px] xl:text-[72px]">
                15+
              </span>
              <span className="ml-1 text-base font-medium text-white/70 lg:text-lg">лет</span>
            </div>
            <p className="mt-4 text-sm font-medium leading-tight text-gray-400 md:text-base">
              успешной юридической практики
            </p>
          </div>
        </article>

        {/* Карточка 3: >2.5 млрд */}
        <article className="flex flex-col justify-between rounded-[32px] bg-[#FFDD2D] p-6 xl:p-8 shadow-xl transition-transform duration-300 hover:-translate-y-1 md:col-span-1">
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

        {/* Карточка 4: Гос. органы */}
        <article className="flex flex-col justify-center md:col-span-2 lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Активно взаимодействуем с гос. органами
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {agencies.map((a) => (
              <div
                key={a.name}
                className="group flex flex-col items-start gap-3 rounded-[24px] border border-white/10 bg-transparent p-5 transition-all hover:-translate-y-1 hover:border-[#FFDD2D]/50 hover:bg-white/5 md:p-6"
              >
                <div className="flex w-full items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2 transition-colors group-hover:bg-white/20">
                    {a.logo ? (
                      <img
                        src={a.logo}
                        alt={a.name}
                        className="h-full w-full object-contain transition-transform group-hover:scale-110"
                      />
                    ) : (
                      <Landmark className="h-6 w-6 text-gray-400" aria-hidden />
                    )}
                  </div>
                  <h4 className={`${ds.agencyCardTitle} !text-white`}>{a.name}</h4>
                </div>
                <p className={`${ds.agencyCardBody} !text-gray-400`}>{a.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Карточка 5: 98% */}
        <article className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1 xl:p-8">
          <span className="relative z-20 text-xs font-bold uppercase tracking-widest text-gray-400">
            Успех
          </span>
          {/* Сдвинули left-8 на left-6 и уменьшили текст, чтобы % не резался */}
          <div className="pointer-events-none absolute left-6 top-16 flex select-none flex-col">
            <span className="whitespace-nowrap text-[72px] font-black leading-[0.8] tracking-tighter text-white lg:text-[80px] xl:text-[88px]">
              98%
            </span>
            <span className="whitespace-nowrap text-[72px] font-black leading-[0.8] tracking-tighter text-white/20 lg:text-[80px] xl:text-[88px]">
              98%
            </span>
            <span className="whitespace-nowrap text-[72px] font-black leading-[0.8] tracking-tighter text-white/10 lg:text-[80px] xl:text-[88px]">
              98%
            </span>
            <span className="whitespace-nowrap text-[72px] font-black leading-[0.8] tracking-tighter text-white/5 lg:text-[80px] xl:text-[88px]">
              98%
            </span>
          </div>
          <div className="relative z-20 mt-auto pt-40">
            <p className="inline-block rounded-md bg-black/40 p-1.5 text-sm font-medium leading-tight text-gray-300 backdrop-blur-md md:text-base">
              выигранных дел в судах
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}