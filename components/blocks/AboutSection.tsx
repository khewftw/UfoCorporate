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
    desc: "Представительство в арбитраже и судах общей юрисдикции. Досудебное урегулирование."
  },
  { 
    name: "ФНС России", 
    logo: "/logos/image 817.png",
    desc: "Разрешение налоговых споров. Налоговый аудит и законное снижение рисков."
  },
  { 
    name: "ФССП России", 
    logo: "/logos/image-Photoroom (9) 1.png",
    desc: "Эффективное исполнение судебных решений. Оперативное взыскание задолженностей."
  },
  { 
    name: "Росреестр", 
    logo: "/logos/image 819.png",
    desc: "Регистрация прав на недвижимость. Кадастровые операции и сопровождение сделок."
  },
  { 
    name: "МВД России", 
    logo: "/logos/image 818.png",
    desc: "Защита прав, представительство интересов в административных и уголовных делах."
  },
  { 
    name: "Прокуратура РФ", 
    logo: "/logos/image-Photoroom (10) 1.png",
    desc: "Контроль за законностью. Обжалование незаконных действий и прокурорский надзор."
  },
];

export function AboutSection() {
  return (
    <section className="w-full">
      {/* Шапка секции */}
      <div className="flex flex-col items-center text-center px-4 md:px-8 mb-10 w-full max-w-[1400px] mx-auto">
        <h2 className={ds.h2Section}>О нас</h2>
        <p className={`${ds.sectionLead} !mb-0 max-w-2xl`}>
          Юридическое бюро полного цикла. 15+ лет защищаем интересы граждан и
          бизнеса — от споров с банками до арбитражных и уголовных дел.
        </p>
      </div>

      {/* Bento Grid: 4 колонки на десктопе */}
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:px-8">
        
        {/* Карточка 1: Главный посыл */}
        <article className="flex flex-col justify-center rounded-[32px] bg-white border border-gray-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-2 relative overflow-hidden group">
          <div className="absolute right-[-20px] top-[-20px] opacity-5 transition-transform duration-500 group-hover:scale-110">
             <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          <p className="relative z-10 text-[16px] md:text-[18px] font-medium leading-relaxed text-[#111827]">
            Мы берём дело на себя — вам остаются только приятные новости. Опыт работы со всеми ключевыми государственными структурами обеспечивает реальный результат, а не обещания.
          </p>
        </article>

        {/* Карточка 2: 15+ лет (Увеличили цифры) */}
        <article className="flex flex-col justify-between rounded-[32px] bg-[#111827] p-8 shadow-xl md:col-span-1 transition-transform duration-300 hover:-translate-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFDD2D]">Опыт</span>
          <div className="mt-8">
            <div className="flex items-baseline gap-1">
              <span className="text-[64px] xl:text-[80px] font-bold tracking-tight text-white leading-none">15+</span>
              <span className="text-lg font-medium text-white/70 ml-1">лет</span>
            </div>
            <p className="mt-4 text-[13px] leading-tight font-medium text-gray-400">успешной юридической практики</p>
          </div>
        </article>

        {/* Карточка 3: >2.5 млрд (Увеличили цифры) */}
        <article className="flex flex-col justify-between rounded-[32px] bg-[#FFDD2D] p-8 shadow-xl md:col-span-1 transition-transform duration-300 hover:-translate-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#111827]/50">Активы</span>
          <div className="mt-8">
            <div className="flex items-baseline gap-1">
              <span className="text-[64px] xl:text-[80px] font-bold tracking-tight text-[#111827] leading-none">{">"}2.5</span>
            </div>
            <p className="mt-4 text-[13px] leading-tight font-bold text-[#111827]/80">млрд ₽ защищённых средств</p>
          </div>
        </article>

        {/* Карточка 4: Логотипы. Выровняли по левому краю, убрав серый контейнер с паддингом */}
        <article className="flex flex-col justify-center md:col-span-2 lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight text-[#111827]">
              Активно взаимодействуем с гос. органами
            </h3>
          </div>
          
          {/* Сетка карточек госорганов */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {agencies.map((a) => (
              <div 
                key={a.name} 
                className="group flex flex-col items-start gap-3 rounded-[24px] bg-white border border-gray-100/80 p-5 shadow-[0_4px_12px_rgb(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:border-[#FFDD2D]/50"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F8FA] p-2 transition-colors group-hover:bg-white">
                    {a.logo ? (
                      <img
                        src={a.logo}
                        alt={a.name}
                        className="h-full w-full object-contain mix-blend-multiply transition-transform group-hover:scale-110"
                      />
                    ) : (
                      <Landmark className="h-6 w-6 text-gray-400" aria-hidden />
                    )}
                  </div>
                  <h4 className="text-[14px] font-bold text-[#111827] leading-tight">
                    {a.name}
                  </h4>
                </div>
                <p className="text-[12px] font-medium text-gray-500 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Карточка 5: 98% (Эхо-эффект сверху вниз, идеальный размер) */}
        <article className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-gray-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-2 lg:col-span-1 transition-transform duration-300 hover:-translate-y-1 min-h-[360px]">
          <span className="relative z-20 text-xs font-bold uppercase tracking-widest text-gray-400">Успех</span>
          
          {/* Эхо-эффект (Сверху вниз). Подогнали размер text-[80px] xl:text-[96px], чтобы не залезало за края */}
          <div className="absolute left-8 top-16 flex flex-col pointer-events-none select-none">
            <span className="text-[80px] xl:text-[96px] font-black leading-[0.8] tracking-tighter text-[#111827] whitespace-nowrap">98%</span>
            <span className="text-[80px] xl:text-[96px] font-black leading-[0.8] tracking-tighter text-[#111827]/20 whitespace-nowrap">98%</span>
            <span className="text-[80px] xl:text-[96px] font-black leading-[0.8] tracking-tighter text-[#111827]/10 whitespace-nowrap">98%</span>
            <span className="text-[80px] xl:text-[96px] font-black leading-[0.8] tracking-tighter text-[#111827]/5 whitespace-nowrap">98%</span>
          </div>

          <div className="relative z-20 mt-auto pt-40">
            <p className="text-[13px] leading-tight font-medium text-gray-500 bg-white/80 backdrop-blur-sm p-1 rounded-md inline-block">
              выигранных дел в судах
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}