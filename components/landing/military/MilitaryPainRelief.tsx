import {
  Banknote,
  HeartPulse,
  ShieldAlert,
  UserMinus,
  FileBadge,
  Scale,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { ds, dsMilLight } from "@/lib/design-system";

const services = [
  {
    icon: Banknote,
    tag: "До 6 000 000 ₽",
    title: "Выплаты за ранения",
    pain: "Отказывают в выплате из-за ошибки в документах или утери справки формы 100.",
    solution:
      "Через суд истребуем все медицинские документы и докажем факт получения ранения.",
    highlight: "Полное взыскание боевых и страховых",
    btnText: "Получить выплаты",
  },
  {
    icon: HeartPulse,
    tag: "Смена на «В» или «Д»",
    title: "Оспаривание ВВК",
    pain: "С тяжелым ранением ставят категорию «А/Б» и незаконно отправляют обратно на ЛБС.",
    solution:
      "Проводим независимую экспертизу, обжалуем решение ВВК в прокуратуре или суде.",
    highlight: "Законная смена категории годности",
    btnText: "Оспорить решение ВВК",
  },
  {
    icon: ShieldAlert,
    tag: "Срочная помощь",
    title: "Уголовные дела (СОЧ)",
    pain: "Грозит до 10 лет тюрьмы по ст. 337 (СОЧ) из-за оставления части по семейным обстоятельствам.",
    solution:
      "Находим смягчающие обстоятельства, доказываем отсутствие умысла и избегаем тюрьмы.",
    highlight: "Условный срок или прекращение дела",
    btnText: "Защита от тюрьмы",
  },
  {
    icon: UserMinus,
    tag: "Законный возврат",
    title: "Увольнение со службы",
    pain: "Не принимают рапорт на увольнение по предельному возрасту или ухудшению здоровья.",
    solution:
      "Составляем грамотные рапорта, подаем иски и обязываем командование издать приказ.",
    highlight: "Легальное возвращение домой",
    btnText: "Уволиться законно",
  },
  {
    icon: FileBadge,
    tag: "Доступ к льготам",
    title: "Статус ВБД и семьям",
    pain: "Боец пропал без вести, а семья осталась без выплат. Затягивают выдачу удостоверения ВБД.",
    solution:
      "Признаем погибшим через суд. Оформляем статус ВБД даже при нехватке документов.",
    highlight: "Семья получает все льготы",
    btnText: "Оформить статус",
  },
  {
    icon: Scale,
    tag: "Отмена решения",
    title: "Незаконный призыв",
    pain: "Мобилизовали многодетного отца, специалиста с бронью или негодного по здоровью.",
    solution:
      "Оперативно подаем иски в суд о приостановке решения призывной комиссии.",
    highlight: "Освобождение от мобилизации",
    btnText: "Отменить призыв",
  },
];

type MilitaryPainReliefProps = {
  onConsultation: () => void;
};

export function MilitaryPainRelief({ onConsultation }: MilitaryPainReliefProps) {
  return (
    <section className={`${dsMilLight.sectionBleed} bg-white ${dsMilLight.sectionSpacing}`}>
      <div className={dsMilLight.container}>
        <div className={ds.sectionHeaderGap}>
          <h2 className={`${ds.h2Section} max-w-4xl mx-auto`}>
            Решаем главные проблемы военнослужащих
          </h2>
          <p className={`${ds.sectionLead} !max-w-2xl`}>
            Не ждите, пока ситуация усугубится. Закон на вашей стороне — мы
            знаем, как заставить систему работать на вас.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFDD2D]/50 hover:shadow-xl md:p-8"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FFDD2D]/10 blur-3xl transition-all duration-500 group-hover:bg-[#FFDD2D]/20"
                aria-hidden
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F7F8FA] text-[#111827] transition-colors group-hover:bg-[#FFDD2D]">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-[#FFDD2D]/15 px-3 py-1 text-xs font-bold text-[#111827]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#111827] md:text-2xl">
                  {item.title}
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-500">
                      <AlertCircle className="h-4 w-4" /> Ситуация
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#111827]">
                      {item.pain}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-green-600">
                      <CheckCircle2 className="h-4 w-4" /> Наше решение
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <div className="mb-5 rounded-2xl bg-transparent border border-gray-100 p-4 text-center transition-colors group-hover:border-[#FFDD2D]/40 group-hover:bg-[#FFDD2D]/5">
                  <p className="text-sm font-bold text-[#111827]">
                    {item.highlight}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onConsultation}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFDD2D] px-5 py-4 text-sm font-bold text-[#111827] transition-all group-hover:shadow-[0_0_24px_rgba(255,221,45,0.6)] hover:bg-[#f5d22a]"
                >
                  {item.btnText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
