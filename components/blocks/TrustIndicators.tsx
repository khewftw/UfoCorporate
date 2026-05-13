import { ds } from "@/lib/design-system";

const features = [
  {
    title: "15+ лет опыта",
    text: "Мы прошли через тысячи судебных заседаний и знаем систему изнутри. Наш опыт позволяет предвидеть действия оппонентов на три шага вперед и находить выход даже из тупиковых ситуаций.",
  },
  {
    title: ">2.5 млрд ₽",
    text: "Списанные долги, отмененные штрафы и сохраненное имущество. Мы не просто выигрываем суды, мы защищаем реальные деньги и активы наших доверителей.",
  },
  {
    title: "98% побед",
    text: "Мы не беремся за дела ради гонорара. Начинаем работу только если уверены в успехе, и честно обсуждаем все риски еще до подписания договора.",
  },
];

export function TrustIndicators() {
  return (
    <section className={`w-full flex justify-center px-4 md:px-8 ${ds.sectionSpacing || "py-16 md:py-24"}`}>
      <div className="group relative w-full max-w-[1202px] min-h-[650px] md:h-[730px] rounded-[32px] overflow-hidden shadow-2xl">
        
        {/* Фоновое изображение */}
        <img
          src="/real photos/about-bg.png"
          alt="Команда юристов УФО-ЦЕНТР"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 z-0"
        />

        <div className="relative z-20 flex h-full flex-col justify-between p-[36px]">
          
          {/* Главный заголовок */}
          <h2 className="text-center text-[28px] md:text-[36px] font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-[-0.02em]">
            Мы берём дело на себя. <br className="hidden md:block" />
            Вам остаются только приятные новости.
          </h2>

          {/* Сетка со статистикой (Glassmorphism по CSS из фигмы) */}
          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-auto md:grid-cols-3 md:gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start rounded-[18px] bg-white/10 border border-white/20 p-[24px] gap-[16px] backdrop-blur-[6.8px] transition-colors hover:bg-white/20 h-auto md:h-[203px]"
              >
                {/* Заголовок карточки */}
                <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.2] md:leading-[42px] tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                {/* Текст карточки */}
                <p className="font-medium text-[14px] md:text-[16px] leading-[1.4] md:leading-[21px] tracking-[-0.02em] text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}