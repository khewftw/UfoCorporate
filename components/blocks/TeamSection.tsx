import { ds } from "@/lib/design-system";

const team = [
  {
    photo: "/real photos/alexey.png",
    name: "Алексей Черепанов",
    role: "Руководитель, юрист",
    description:
      "Основатель компании. Лично контролирует ключевые процессы и мастерски решает самые сложные конфликты в суде.",
  },
  {
    photo: "/real photos/men 1.png",
    name: "Михаил Смирнов",
    role: "Юрист по банкротству",
    description:
      "Списал более 1 млрд рублей долгов. Выступает главным экспертом по защите имущества должника и субсидиарной ответственности.",
  },
  {
    photo: "/real photos/women 1.png",
    name: "Елена Волкова",
    role: "Помощник юриста",
    description:
      "Обеспечивает безупречную подготовку всех процессуальных документов и оперативную связь с государственными инстанциями.",
  },
  {
    photo: "/real photos/women 2.png",
    name: "Анна Лебедева",
    role: "Семейное право",
    description:
      "Деликатно, но жестко отстаивает интересы доверителей при разделе бизнеса, недвижимости и спорах об опеке над детьми.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full scroll-mt-24">
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center md:mb-12 md:px-8">
        <h2 className={ds.h2Section}>Наша команда</h2>
        <p className={`${ds.sectionLead} !mb-0`}>
          Юристы с реальной судебной практикой. Каждый — узкий специалист в
          своей отрасли права.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${ds.gridGap}`}
      >
        {team.map((m) => (
          <article
            key={m.name}
            // Изменили aspect-square на aspect-[3/4] для правильных пропорций фото и достаточного места под текст
            className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-[32px] bg-[#111827] shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          >
            <img
              src={m.photo}
              alt={m.name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-[12px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-[#111827]/85" />

            {/* Дефолтное состояние (Имя и должность) */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6 text-center transition-all duration-500 group-hover:translate-y-8 group-hover:opacity-0">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  {m.role}
                </span>
              </span>
              <h3 className="text-[22px] md:text-2xl font-bold leading-tight tracking-tight text-white">
                {m.name}
              </h3>
            </div>

            {/* Ховер-состояние (Текст и кнопка) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-6">
              <div className="mb-4 h-1 w-10 scale-0 rounded-full bg-[#FFDD2D] transition-transform duration-500 delay-100 group-hover:scale-100" />
              
              {/* Сделали текст адекватного размера и выставили нормальные отступы */}
              <p className="mb-6 text-center text-[13px] font-medium leading-relaxed text-white/90 md:text-[14px]">
                {m.description}
              </p>
              
              {/* Кнопка с новым текстом "Консультация" */}
              <button
                type="button"
                className="relative z-10 rounded-xl bg-[#FFDD2D] px-6 py-3 text-[14px] font-bold text-[#111827] shadow-[0_8px_20px_rgba(255,221,45,0.3)] transition-transform hover:scale-105 active:scale-95"
              >
                Консультация
              </button>
              
              <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                Поможем бесплатно
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}