import { ds } from "@/lib/design-system";

export function ServicesHub() {
  const services = [
    {
      title: "Банкротство физических лиц",
      description:
        "Полное законное списание кредитов и долгов по ЖКХ. Защитим от коллекторов и сохраним имущество.",
      gridClass: "lg:col-span-3",
      bgClass: "!bg-[#F0F4F8]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/bankrot2.png",
    },
    {
      title: "Семейное право",
      description:
        "Расторжение брака, справедливый раздел имущества и определение места жительства детей.",
      gridClass: "lg:col-span-3",
      bgClass: "!bg-[#F3EFFF]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/family.png",
    },
    {
      title: "Гражданское право",
      description:
        "Разрешение имущественных споров, защита прав потребителей и помощь с наследством.",
      gridClass: "lg:col-span-2",
      bgClass: "!bg-[#EEF2F7]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/civil.png",
    },
    {
      title: "Автоюрист",
      description:
        "Споры с ОСАГО/КАСКО, возврат прав, обжалование штрафов и помощь при ДТП.",
      gridClass: "lg:col-span-2",
      bgClass: "!bg-[#E5F5F3]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/auto.png",
    },
    {
      title: "Уголовное право",
      description:
        "Срочная защита обвиняемых. Экономические преступления, обжалование приговоров.",
      gridClass: "lg:col-span-2",
      bgClass: "!bg-[#111827]",
      textClass: "!text-white",
      descClass: "!text-gray-400",
      image: "/images/services/criminal.png",
    },
    {
      title: "Работа с маркетплейсами",
      description:
        "Споры с Wildberries и Ozon. Обжалование штрафов и взыскание компенсаций за товар.",
      gridClass: "lg:col-span-3",
      bgClass: "!bg-[#FFF8E7]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/marketplaces.png",
    },
    {
      title: "Военное право (СВО)",
      description:
        "Помощь участникам СВО. Выплаты, льготы и оспаривание решений военно-врачебных комиссий.",
      gridClass: "lg:col-span-3",
      bgClass: "!bg-[#F0F4F8]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/military.png",
    },
    {
      title: "Корпоративное право",
      description:
        "Корпоративные споры, взыскание дебиторской задолженности и защита бизнеса.",
      gridClass: "lg:col-span-2",
      bgClass: "!bg-[#F3EFFF]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/corporate.png",
    },
    {
      title: "Жилищное право",
      description:
        "Споры с застройщиками, приватизация, выселение и надежная защита прав жильцов.",
      gridClass: "lg:col-span-2",
      bgClass: "!bg-[#EEF2F7]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/housing.png",
    },
    {
      title: "Трудовое право",
      description:
        "Защита от незаконного увольнения и дискриминации. Взыскание невыплаченной зарплаты.",
      gridClass: "lg:col-span-2",
      bgClass: "!bg-[#E5F5F3]",
      textClass: "!text-[#111827]",
      descClass: "!text-[#6B7280]",
      image: "/images/services/labor.png",
    },
  ];

  return (
    <section className="w-full">
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Наши ключевые практики</h2>
        <p className={ds.sectionLead}>
          От списания долгов до защиты бизнеса. Выберите вашу проблему, и мы
          предложим готовое правовое решение.
        </p>
      </div>

      <div
        className={`grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ${ds.gridGap}`}
      >
        {services.map((service) => (
          <article
            key={service.title}
            className={`${ds.cardService} ${service.bgClass} ${service.gridClass}`}
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3
                className={`text-xl font-bold tracking-tight md:text-2xl md:leading-snug ${service.textClass}`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-3 max-w-sm text-base font-normal leading-relaxed ${service.descClass}`}
              >
                {service.description}
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[70%] w-full">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover object-bottom"
              />
            </div>

            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
              <button type="button" className={ds.btnSecondaryTint}>
                Подробнее
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
