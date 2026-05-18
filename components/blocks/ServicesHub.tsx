import { ds } from "@/lib/design-system";

const services = [
  {
    title: "Банкротство физических лиц",
    description:
      "Полное законное списание кредитов и долгов по ЖКХ. Защитим от коллекторов и сохраним имущество.",
    image: "/images/services/bankrot2.png",
  },
  {
    title: "Семейное право",
    description:
      "Расторжение брака, справедливый раздел имущества и определение места жительства детей.",
    image: "/images/services/family.png",
  },
  {
    title: "Гражданское право",
    description:
      "Разрешение имущественных споров, защита прав потребителей и помощь с наследством.",
    image: "/images/services/civil.png",
  },
  {
    title: "Автоюрист",
    description:
      "Споры с ОСАГО/КАСКО, возврат прав, обжалование штрафов и помощь при ДТП.",
    image: "/images/services/auto.png",
  },
  {
    title: "Уголовное право",
    description:
      "Срочная защита обвиняемых. Экономические преступления, обжалование приговоров.",
    image: "/images/services/criminal.png",
  },
  {
    title: "Работа с маркетплейсами",
    description:
      "Споры с Wildberries и Ozon. Обжалование штрафов и взыскание компенсаций за товар.",
    image: "/images/services/marketplaces.png",
  },
  {
    title: "Военное право (СВО)",
    description:
      "Помощь участникам СВО. Выплаты, льготы и оспаривание решений военно-врачебных комиссий.",
    image: "/images/services/military.png",
  },
  {
    title: "Корпоративное право",
    description:
      "Корпоративные споры, взыскание дебиторской задолженности и защита бизнеса.",
    image: "/images/services/corporate.png",
  },
  {
    title: "Жилищное право",
    description:
      "Споры с застройщиками, приватизация, выселение и надежная защита прав жильцов.",
    image: "/images/services/housing.png",
  },
  {
    title: "Трудовое право",
    description:
      "Защита от незаконного увольнения и дискриминации. Взыскание невыплаченной зарплаты.",
    image: "/images/services/labor.png",
  },
  {
    title: "Исполнительное производство и взыскание долгов",
    description:
      "Работа с приставами, оспаривание незаконных взысканий и возврат списанных средств.",
    image: "/images/services/civil.png",
  },
  {
    title: "Миграционное право (ВНЖ, гражданство, депортации)",
    description:
      "Оформление ВНЖ и гражданства, защита от депортации и сопровождение в миграционных органах.",
    image: "/images/services/corporate.png",
  },
];

export function ServicesHub() {
  return (
    <section id="services" className="w-full scroll-mt-24">
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Наши ключевые практики</h2>
        <p className={ds.sectionLead}>
          От списания долгов до защиты бизнеса. Выберите вашу проблему, и мы
          предложим готовое правовое решение.
        </p>
      </div>

      <div
        className={`grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${ds.gridGap}`}
      >
        {services.map((service) => (
          <article
            key={service.title}
            className={`${ds.cardServiceCompact} ${ds.cardDark}`}
          >
            <div className={ds.serviceCardCornerAccent} aria-hidden />
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-lg font-bold tracking-tight !text-white md:text-xl md:leading-snug">
                {service.title}
              </h3>
              <p
                className={`mt-2 max-w-sm text-sm font-normal leading-relaxed ${ds.bodyOnDark}`}
              >
                {service.description}
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60%] w-full">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover object-bottom opacity-80"
              />
            </div>

            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
              <button type="button" className={ds.btnGhostDark}>
                Подробнее
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
