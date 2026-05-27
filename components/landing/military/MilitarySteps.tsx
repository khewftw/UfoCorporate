import { ArrowRight } from "lucide-react";
import { ds, dsMilLight } from "@/lib/design-system";

const steps = [
  {
    number: "01.",
    title: "Бесплатная\nконсультация",
    text: "Бесплатно изучаем ваши документы. Честно говорим о перспективах: если дело выиграть невозможно — мы скажем об этом сразу.",
  },
  {
    number: "02.",
    title: "Прозрачный\nдоговор",
    text: "Заключаем договор с фиксированной ценой. Никаких скрытых доплат. Вы четко знаете, за что платите.",
  },
  {
    number: "03.",
    title: "Работа на\nрезультат",
    text: "Персональный юрист собирает доказательства и готовит документы. Вы получаете регулярные отчеты о ходе дела.",
  },
  {
    number: "04.",
    title: "Исполнение\nрешения",
    text: "Контролируем поступление выплат на ваш счет или получение вами военного билета до полного завершения дела.",
  },
];

type MilitaryStepsProps = {
  onConsultation: () => void;
};

export function MilitarySteps({ onConsultation }: MilitaryStepsProps) {
  return (
    <section className={`${dsMilLight.sectionBleed} bg-[#F7F8FA] py-16 md:py-24`}>
      <div className={dsMilLight.container}>
        
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
          <h2 className={ds.h2Section}>Ваша защита в 4 простых шага</h2>
        </div>

        {/* Сетка карточек с обводкой 1px 5% opacity */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] border border-black/[0.15] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#FFDD2D]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#FFDD2D] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              
              <div>
                <span className="text-[20px] font-bold text-gray-300 transition-colors duration-300 group-hover:text-[#111827]">
                  {step.number}
                </span>
                <h3 className="mt-4 whitespace-pre-line text-xl font-bold leading-snug text-[#111827] md:text-2xl">
                  {step.title}
                </h3>
              </div>
              
              <p className="mt-8 text-[15px] font-medium leading-relaxed text-gray-500 group-hover:text-gray-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        {/* Нижний баннер с обводкой 1px 5% opacity */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[32px] border border-black/[0.15] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:mt-10 md:flex-row md:items-center md:p-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex shrink-0 -space-x-3">
              <img src="/images/avatars/lawyer-1.jpg" alt="Юрист" className="h-12 w-12 rounded-full border-[3px] border-white bg-gray-100 object-cover" />
              <img src="/images/avatars/lawyer-2.jpg" alt="Юрист" className="h-12 w-12 rounded-full border-[3px] border-white bg-gray-100 object-cover" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#FFDD2D] text-[13px] font-bold text-[#111827]">
                10+
              </div>
            </div>
            <span className="text-[15px] font-bold leading-snug text-[#111827]">
              Бесплатная юридическая экспертиза<br className="hidden sm:block" /> ваших документов
            </span>
          </div>

          <button
            type="button"
            onClick={onConsultation}
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FFDD2D] px-8 py-4 text-[15px] font-bold text-[#111827] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,221,45,0.4)] md:w-auto"
          >
            Получить план действий
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}