import { ds } from "@/lib/design-system";
import { FileText } from "lucide-react";

type CaseStudy = {
  clientName: string;
  meta: string;
  debtAtStart: string;
  testimonial: string;
};

const cases: CaseStudy[] = [
  {
    clientName: "Таланова Ольга",
    meta: "г. Казань / NoA65-25711/2021",
    debtAtStart: "1 601 652 руб.",
    testimonial:
      "Обращалась к юристам по вопросу банкротства, все подробно объяснили. Сама процедура заняла полгода и недавно все благополучно завершилось. Дело вела юрист Алла. Благодарю за помощь в решении моих финансовых проблем.",
  },
  {
    clientName: "Сулейманова Альфия",
    meta: "г. Уфа / No A07-2871/2022",
    debtAtStart: "689 341 руб.",
    testimonial:
      "Хочу выразить огромную благодарность Ирику и его команде. Боялась обращаться в данные инстанции, но потом решилась и не пожалела, всё четко и ясно. Спасибо с утра сегодня позвонил с хорошей новостью, буду советовать!",
  },
  {
    clientName: "Арсланов Азат",
    meta: "г. Уфа / NoA07-646/2022",
    debtAtStart: "2 487 288 руб.",
    testimonial:
      "Я обратился за помощью банкротства. Хочу выразить благодарность юристам и своему юристу Исааку Равильевичу. Они выполнили работу на отлично. Наконец-то избавился от кредитной ноши. Огромное спасибо всем.",
  },
  {
    clientName: "Насибуллина Эльвира",
    meta: "г. Уфа / No A07-15390/2021",
    debtAtStart: "73 150 руб.",
    testimonial:
      "Здравствуйте, благодарю ваше юридическое бюро и лично Рустама Наилевича за помощь в решении проблемы с долгами. Все прошло быстро и без лишних нервов.",
  },
];

export function ReviewsSection() {
  return (
    <section className={`w-full ${ds.sectionSpacing}`}>
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Реальные дела</h2>
        <p className={ds.sectionLead}>
          Ежедневно мы помогаем решить вопросы с долгами — десяткам людей, вот
          несколько историй наших клиентов
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
              <a
                href="#"
                className="group flex shrink-0 items-center gap-2 rounded-xl !bg-[#F7F8FA] px-3 py-2 transition-colors hover:!bg-[#FFDD2D]/20"
              >
                <FileText className="h-4 w-4 !text-[#111827]" aria-hidden />
                <span className="text-xs font-bold uppercase tracking-wider !text-[#111827]">
                  Решение суда
                </span>
              </a>
            </header>

            <div className="mb-8 space-y-3">
              <p className="text-sm font-medium !text-[#6B7280]">
                Долг при обращении:{" "}
                <span className="text-lg font-bold !text-[#FFDD2D]">
                  {item.debtAtStart}
                </span>
              </p>
              <div className="inline-flex items-center gap-2 rounded-xl !bg-[#F7F8FA] px-3 py-2 text-sm font-medium !text-[#6B7280]">
                После списания:{" "}
                <span className="font-bold !text-[#111827]">0 руб.</span>
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
                className={`${ds.btnSecondary} !shadow-none hover:!scale-95 active:!scale-95`}
              >
                Перейти к отзыву
              </button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
