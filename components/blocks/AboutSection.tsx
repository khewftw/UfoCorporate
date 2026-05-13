import { Landmark } from "lucide-react";
import { ds } from "@/lib/design-system";

type Agency = {
  name: string;
  /** Путь к SVG/PNG логотипа. Если null — рисуется иконка-плейсхолдер. */
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

      <article className="grid grid-cols-1 gap-y-6 overflow-hidden rounded-[32px] !bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:grid-cols-2 md:gap-y-0">
        <div className="min-h-0 w-full md:flex md:h-full md:flex-col">
          <div className="relative aspect-[5/4] w-full overflow-hidden !bg-[#F7F8FA] md:aspect-auto md:min-h-[460px] md:flex-1">
            <img
              src="/real photos/03.png"
              alt="Команда УФО-ЦЕНТР"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex min-h-0 w-full flex-col justify-start gap-7 px-6 pb-8 pt-0 md:h-full md:justify-center md:gap-8 md:px-10 md:py-10">
          <p className={`${ds.body}`}>
            Мы берём дело на себя — вам остаются только приятные новости. Опыт
            работы со всеми ключевыми государственными структурами обеспечивает
            реальный результат, а не обещания.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                // Центрируем на мобилках, левый край на десктопе. Уменьшили паддинги для мобилок (px-2 py-3)
                className="flex flex-col items-center text-center gap-1 rounded-2xl !border !border-gray-100/80 !bg-white px-2 py-3 shadow-[0_4px_12px_rgb(0,0,0,0.03)] md:items-start md:text-left md:px-5 md:py-4"
              >
                {/* whitespace-nowrap - железобетонно запрещает перенос строки внутри блока с цифрой */}
                <span className="flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-xl font-bold tracking-tight !text-[#FFDD2D] sm:text-2xl md:text-3xl">
                    {s.value}
                  </span>
                  {s.suffix ? (
                    <span className="text-[11px] font-semibold !text-[#111827] sm:text-sm">
                      {s.suffix}
                    </span>
                  ) : null}
                </span>
                <span className="text-[10px] font-medium leading-tight !text-[#6B7280] sm:text-xs md:text-sm">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Контейнер центрируется на мобильных и выравнивается по левому краю на десктопе */}
          <div className="flex flex-col items-center gap-4 mt-2 md:items-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-center !text-[#9CA3AF] md:text-left">
              Активно взаимодействуем с гос. органами
            </p>
            {/* Блок с логотипами: justify-center для мобилок, justify-start для десктопа */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:justify-start">
              {agencies.map((a) => (
                <div
                  key={a.name}
                  title={a.name}
                  className="flex items-center justify-center transition-transform hover:scale-110"
                >
                  {a.logo ? (
                    <img
                      src={a.logo}
                      alt={a.name}
                      // Гибкий размер: h-16 (телефоны) -> sm:h-20 (планшеты) -> md:h-24 (десктоп)
                      className="h-16 w-auto object-contain sm:h-20 md:h-24 mix-blend-multiply"
                    />
                  ) : (
                    <Landmark className="h-10 w-10 !text-[#9CA3AF]" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </article>
    </section>
  );
}