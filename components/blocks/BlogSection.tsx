import { ds } from "@/lib/design-system";

type Article = {
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
  descClass: string;
  image: string;
};

const articles: Article[] = [
  {
    title: "Когда пора начинать процедуру банкротства",
    description:
      "Разбираем явные и скрытые признаки перегрузки долгами и чек-лист подготовки к первому визиту к юристу.",
    bgClass: "bg-[#F0F4F8]",
    textClass: "text-[#111827]",
    descClass: "text-[#6B7280]",
    image: "/images/blog/safe.png",
  },
  {
    title: "Защита прав потребителей в 2026 году",
    description:
      "Краткий обзор новых тенденций в спорах с банками и проверенный алгоритм защиты ваших интересов.",
    bgClass: "bg-[#F3EFFF]",
    textClass: "text-[#111827]",
    descClass: "text-[#6B7280]",
    image: "/images/blog/shield.png",
  },
  {
    title: "Три ошибки в переписке с коллекторами",
    description:
      "Как правильно вести диалог и какие формулировки могут быть использованы против вас в суде.",
    bgClass: "bg-[#FFF8E7]",
    textClass: "text-[#111827]",
    descClass: "text-[#6B7280]",
    image: "/images/blog/docs.png",
  },
];

export function BlogSection() {
  return (
    <section className={`w-full ${ds.sectionSpacing || "py-16 md:py-24"}`}>
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Полезные материалы</h2>
        <p className={ds.sectionLead}>
          Разбираем сложные юридические кейсы простым языком. Повышайте свою
          правовую грамотность вместе с экспертами УФО-ЦЕНТРА.
        </p>
      </div>

      <div
        className={`grid w-full grid-cols-1 md:grid-cols-3 ${ds.gridGap || "gap-6"}`}
      >
        {articles.map((post) => (
          <article
            key={post.title}
            className={`${ds.cardService} ${post.bgClass} flex flex-col min-h-[460px] md:min-h-[480px] overflow-hidden group transition-all duration-300 hover:shadow-lg`}
          >
            {/* Контент сверху */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 pt-8 pb-0">
              <h3 className={`${ds.h3Card} ${post.textClass} leading-tight`}>
                {post.title}
              </h3>
              <p
                className={`${ds.body} mt-3 max-w-[260px] ${post.descClass} line-clamp-3`}
              >
                {post.description}
              </p>
            </div>

            {/* 3D Иллюстрация */}
            <div className="pointer-events-none relative mt-auto h-[220px] w-full">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Кнопка "Подробнее" с желтым свечением при наведении */}
            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
              <button 
                type="button" 
                className={`${ds.btnSecondaryTint} bg-white/70 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#FFDD2D] group-hover:text-[#111827] group-hover:shadow-[0_0_25px_rgba(255,221,45,0.6)] hover:scale-105`}
              >
                Подробнее
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className={ds.sectionAfterGrid}>
        <button type="button" className={ds.btnGhost}>
          Все материалы
        </button>
      </div>
    </section>
  );
}