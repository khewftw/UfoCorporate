import { ds } from "@/lib/design-system";

const services = [
  {
    title: "Банкротство физических лиц",
    description:
      "Полное законное списание кредитов и долгов по ЖКХ. Защитим от коллекторов и сохраним имущество.",
    image: "/images/services/bankrot 1.png",
  },
  {
    title: "Семейное право",
    description:
      "Расторжение брака, справедливый раздел имущества и определение места жительства детей.",
    image: "/images/services/family 1.png",
  },
  {
    title: "Гражданское право",
    description:
      "Разрешение имущественных споров, защита прав потребителей и помощь с наследством.",
    image: "/images/services/civil 1.png",
  },
  {
    title: "Автоюрист",
    description:
      "Споры с ОСАГО/КАСКО, возврат прав, обжалование штрафов и помощь при ДТП.",
    image: "/images/services/auto 1.png",
  },
  {
    title: "Уголовное право",
    description:
      "Срочная защита обвиняемых. Экономические преступления, обжалование приговоров.",
    image: "/images/services/criminal 1.png",
  },
  {
    title: "Работа с маркетплейсами",
    description:
      "Споры с Wildberries и Ozon. Обжалование штрафов и взыскание компенсаций за товар.",
    image: "/images/services/marketplaces 1.png",
  },
  {
    title: "Военное право (СВО)",
    description:
      "Помощь участникам СВО. Выплаты, льготы и оспаривание решений военно-врачебных комиссий.",
    image: "/images/services/military 1.png",
  },
  {
    title: "Корпоративное право",
    description:
      "Корпоративные споры, взыскание дебиторской задолженности и защита бизнеса.",
    image: "/images/services/corporate 1.png",
  },
  {
    title: "Жилищное право",
    description:
      "Споры с застройщиками, приватизация, выселение и надежная защита прав жильцов.",
    image: "/images/services/housing 1.png",
  },
  {
    title: "Трудовое право",
    description:
      "Защита от незаконного увольнения и дискриминации. Взыскание невыплаченной зарплаты.",
    image: "/images/services/labor 1.png",
  },
  {
    title: "Исполнительное производство и взыскание долгов",
    description:
      "Работа с приставами, оспаривание незаконных взысканий и возврат списанных средств.",
    image: "/images/services/debt 1.png",
  },
  {
    title: "Миграционное право (ВНЖ, гражданство, депортации)",
    description:
      "Оформление ВНЖ и гражданства, защита от депортации и сопровождение в миграционных органах.",
    image: "/images/services/migration 1.png",
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
            className="group relative flex min-h-[380px] md:min-h-[400px] w-full flex-col overflow-hidden rounded-[32px] bg-[#111827] p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* ФОНОВАЯ КАРТИНКА (Занимает 100% пространства, обрезается по краям карточки) */}
            <div
              className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${service.image}')` }}
            />

            {/* Текстовый блок (Обязательно z-10, чтобы быть поверх фона) */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-[18px] font-bold tracking-tight text-white md:text-[20px] md:leading-snug">
                {service.title}
              </h3>
              <p className="mt-2 max-w-sm text-[13px] md:text-[14px] font-medium leading-relaxed text-gray-300">
                {service.description}
              </p>
            </div>

            {/* Кнопка с двойным ховер-эффектом (z-20) */}
            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                className="
                  rounded-2xl border border-white/30 bg-black/20 px-6 py-2.5 text-[14px] font-bold text-white transition-all duration-300 
                  group-hover:border-[#FFDD2D]/50 group-hover:bg-[#FFDD2D]/20 group-hover:backdrop-blur-md 
                  hover:!border-[#FFDD2D] hover:!bg-[#FFDD2D] hover:!text-[#111827] hover:!shadow-[0_0_24px_rgba(255,221,45,0.6)] hover:scale-105
                "
              >
                Подробнее
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}