import { ds, dsMilLight } from "@/lib/design-system";
import { FileText } from "lucide-react";

type MilitaryCaseStudy = {
  clientName: string;
  meta: string;
  statusAtStart: string;
  result: string;
  testimonial: string;
};

const cases: MilitaryCaseStudy[] = [
  {
    clientName: "Сергей С.",
    meta: "Оспаривание ВВК / Отказ в выплате",
    statusAtStart: "Отказ в выплате 3 млн руб, утеряна справка 100",
    result: "Получены выплаты 3 000 000 руб.",
    testimonial:
      "После тяжелого ранения мне поставили категорию годности, которая не предполагала выплат, а потом и вовсе потеряли справку формы 100. Обратился к военным юристам. Ребята через суд истребовали все документы из госпиталя, оспорили решение ВВК. В итоге я получил все положенные 3 миллиона. Огромное спасибо за честную работу!",
  },
  {
    clientName: "Иван А.",
    meta: "Незаконная мобилизация / Бронь",
    statusAtStart: "Призван несмотря на бронь IT-специалиста",
    result: "Возврат из распределительной части",
    testimonial:
      "Пришла повестка, хотя я работаю в аккредитованной IT-компании и у меня есть бронь. В военкомате слушать ничего не стали и отправили в часть. Жена связалась с дежурным юристом. В тот же день они подали жалобы и связались с командованием. Меня вернули домой прямо из распределительного пункта. Очень оперативно!",
  },
  {
    clientName: "Анна К.",
    meta: "г. Екатеринбург / Выплаты семье погибшего",
    statusAtStart: "Статус «Без вести пропавший» 8 месяцев",
    result: "Получены страховые и президентские выплаты",
    testimonial:
      "Муж пропал без вести, командование ничего не говорило 8 месяцев. Мы с детьми остались без кормильца и без выплат. Юристы помогли составить иск, собрали доказательства и через суд установили факт гибели. Только после этого мы смогли получить президентские и страховые выплаты. Спасибо за помощь в такой тяжелой ситуации.",
  },
  {
    clientName: "Дмитрий В.",
    meta: "г. Ростов-на-Дону / Защита по СОЧ (ст. 337)",
    statusAtStart: "Уголовное дело, грозил реальный срок",
    result: "Условный срок (без лишения свободы)",
    testimonial:
      "Уехал из части из-за тяжелой болезни матери, не знал как правильно оформить рапорт. Завели уголовное дело по СОЧ, грозил большой срок. Адвокат собрал все медицинские документы мамы, доказал стечение тяжелых обстоятельств. В итоге удалось избежать тюрьмы. Вытащили из безвыходной ситуации.",
  },
];

type MilitaryCasesProps = {
  onConsultation: () => void;
};

export function MilitaryCases({ onConsultation }: MilitaryCasesProps) {
  return (
    <section
      id="military-reviews"
      className={`${dsMilLight.sectionBleed} bg-[#F7F8FA] ${dsMilLight.sectionSpacing} pb-24 md:pb-32`}
    >
      <div className={dsMilLight.container}>
        <div className={ds.sectionHeaderGap}>
          <h2 className={ds.h2Section}>Реальные дела</h2>
          <p className={ds.sectionLead}>
            Посмотрите, как мы решаем проблемы военнослужащих — реальные отзывы
            о нашей работе
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${ds.gridGap}`}>
          {cases.map((item) => (
            <article
              key={item.clientName}
              className={`flex flex-col rounded-[32px] !border !border-gray-100/50 !bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:!shadow-md md:p-8`}
            >
              <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold !text-[#111827]">
                    {item.clientName}
                  </h3>
                  <p className="mt-1 text-sm font-medium !text-[#6B7280]">
                    {item.meta}
                  </p>
                </div>
                <div className="group flex shrink-0 items-center gap-2 rounded-xl !bg-[#F7F8FA] px-3 py-2 transition-colors">
                  <FileText className="h-4 w-4 !text-[#111827]" aria-hidden />
                  <span className="text-xs font-bold uppercase tracking-wider !text-[#111827]">
                    Решение
                  </span>
                </div>
              </header>

              <div className="mb-8 space-y-3">
                <p className="text-sm font-medium !text-[#6B7280]">
                  Ситуация при обращении:{" "}
                  <span className="text-base font-bold !text-[#FFDD2D]">
                    {item.statusAtStart}
                  </span>
                </p>
                <div className="inline-flex items-center gap-2 rounded-xl !bg-[#F7F8FA] px-3 py-2 text-sm font-medium !text-[#6B7280]">
                  Итог:{" "}
                  <span className="font-bold !text-[#111827]">{item.result}</span>
                </div>
              </div>

              <div className="mb-8 flex-1">
                <p className="mb-2 text-sm font-bold !text-[#111827]">Отзыв:</p>
                <p className={`${ds.body} !text-[#6B7280]`}>{item.testimonial}</p>
              </div>

              <footer className="mt-auto flex flex-wrap items-center justify-between gap-4 !border-t !border-gray-100 pt-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center transition-opacity hover:opacity-80"
                >
                  <img
                    src="/images/yandex-mapx.svg"
                    alt="Яндекс Карты"
                    className="h-8 w-auto object-contain"
                  />
                </a>

                <button
                  type="button"
                  onClick={onConsultation}
                  className={`${ds.btnSecondary} !shadow-none hover:!scale-95 active:!scale-95`}
                >
                  Записаться к юристу
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
