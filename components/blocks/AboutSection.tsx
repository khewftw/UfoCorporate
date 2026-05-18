import { Landmark } from "lucide-react";
import { ds } from "@/lib/design-system";

type Agency = {
  name: string;
  logo: string | null;
};

const agencies: Agency[] = [
  { name: "Суды всех инстанций", logo: "/logos/image 816.png" },
  { name: "ФНС России", logo: "/logos/image 817.png" },
  { name: "ФССП России", logo: "/logos/image-Photoroom (9) 1.png" },
  { name: "Прокуратура РФ", logo: "/logos/image-Photoroom (10) 1.png" },
  { name: "МВД России", logo: "/logos/image 818.png" },
  { name: "Росреестр", logo: "/logos/image 819.png" },
  { name: "Адвокатская палата", logo: "/logos/image 820.png" },
];

const stats = [
  { value: "15+", suffix: "лет", label: "юридической практики" },
  { value: "2.5", suffix: "млрд ₽", label: "защищённых активов" },
  { value: "98%", suffix: "", label: "выигранных дел" },
];

export function AboutSection() {
  return (
    <section className="w-full">
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>О нас</h2>
        <p className={ds.sectionLead}>
          Юридическое бюро полного цикла. 15+ лет защищаем интересы граждан и
          бизнеса — от споров с банками до арбитражных и уголовных дел.
        </p>
      </div>

      <article
        className={`${ds.cardBento} flex flex-col justify-start gap-8 md:gap-10`}
      >
        <p className={ds.body}>
          Мы берём дело на себя — вам остаются только приятные новости. Опыт
          работы со всеми ключевыми государственными структурами обеспечивает
          реальный результат, а не обещания.
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl !border !border-gray-100/80 !bg-white px-3 py-4 text-center shadow-[0_4px_12px_rgb(0,0,0,0.03)] md:items-start md:px-6 md:py-6 md:text-left"
            >
              <span className="flex items-baseline gap-1 whitespace-nowrap">
                <span className="text-3xl font-bold tracking-tight !text-[#FFDD2D] sm:text-4xl md:text-5xl">
                  {s.value}
                </span>
                {s.suffix ? (
                  <span className="text-sm font-semibold !text-[#111827] md:text-base">
                    {s.suffix}
                  </span>
                ) : null}
              </span>
              <span className="text-sm font-medium leading-tight !text-[#6B7280] md:text-base">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 md:items-start">
          <h3 className={`${ds.h3Card} text-center md:text-left`}>
            Активно взаимодействуем с гос. органами
          </h3>
          <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {agencies.map((a) => (
              <div
                key={a.name}
                title={a.name}
                className="flex items-center justify-center transition-transform hover:scale-105"
              >
                {a.logo ? (
                  <img
                    src={a.logo}
                    alt={a.name}
                    className="h-20 w-auto max-w-full object-contain mix-blend-multiply sm:h-24 md:h-28"
                  />
                ) : (
                  <Landmark
                    className="h-12 w-12 !text-[#9CA3AF]"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
