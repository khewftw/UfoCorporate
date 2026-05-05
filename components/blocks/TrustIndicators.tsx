import { ds } from "@/lib/design-system";

const features = [
  {
    num: "1",
    title: "15+ лет практики",
    text: "Мы прошли через тысячи судебных заседаний и знаем систему изнутри. Наш опыт позволяет предвидеть действия оппонентов на три шага вперед и находить выход даже из тупиковых ситуаций.",
    tag: "Твердый опыт",
    wide: false,
  },
  {
    num: "2",
    title: ">2.5 млрд ₽",
    text: "Списанные долги, отмененные штрафы и сохраненное имущество. Мы не просто выигрываем суды, мы защищаем реальные деньги и активы наших доверителей.",
    tag: "Сохраненные активы",
    wide: false,
  },
  {
    num: "3",
    title: "98% побед",
    text: "Мы не беремся за дела ради гонорара. Начинаем работу только если уверены в успехе, и честно обсуждаем все риски еще до подписания договора.",
    tag: "Честная статистика",
    wide: false,
  },
  {
    num: "4",
    title: "120+ экспертов в штате",
    text: "Над вашим делом работает не один человек, а целая команда: профильные юристы, арбитражные управляющие, финансовые аналитики и оценщики. Мы закрываем правовые риски «под ключ» в рамках одной компании.",
    tag: "Комплексный подход",
    wide: true,
  },
];

export function TrustIndicators() {
  return (
    // Применяем стандартный отступ секции из UI-кита или задаем его явно для единства стиля
    <section className={`w-full ${ds.sectionSpacing || "py-16 md:py-24"}`}>
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>
          Мы берём дело на себя. <br className="hidden md:block" />
          Вам остаются только приятные&nbsp;новости.
        </h2>
        <p className={ds.sectionLead}>
          Вы доверяете нам свои проблемы, а мы превращаем их в решенные задачи.
          Вот почему выбирают нас:
        </p>
      </div>

      <div className={`grid w-full grid-cols-1 md:grid-cols-3 ${ds.gridGap}`}>
        {features.map((item) => (
          <article
            key={item.num}
            className={`group relative flex flex-col ${ds.cardBento} ${ds.cardBentoHover} ${
              item.wide
                ? "md:col-span-3 md:flex-row md:items-stretch md:gap-8 lg:gap-12"
                : ""
            }`}
          >
            <div
              className={`flex flex-1 flex-col justify-between ${item.wide ? "md:w-1/2" : ""}`}
            >
              <div>
                <h3 className={`${ds.h3Card} pr-12`}>{item.title}</h3>
                <p className={`${ds.body} mt-4`}>{item.text}</p>
              </div>
              <p className={`${ds.meta} mt-8`}>{item.tag}</p>
            </div>

            <span
              className={`absolute right-6 top-6 z-10 text-4xl font-black italic md:right-8 md:top-8 md:text-5xl ${ds.textAccent}`}
            >
              {item.num}
            </span>

            {item.wide && (
              <div
                className={`mt-6 flex min-h-[160px] flex-1 items-center justify-center rounded-2xl md:mt-0 md:w-1/2 ${ds.surfaceSoft}`}
              >
                <span className="text-2xl font-bold uppercase tracking-widest !text-[#111827] opacity-10">
                  УФО-ЦЕНТР
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}