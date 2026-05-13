import { ds } from "@/lib/design-system";

export function LeadCaptureForm() {
  return (
    <section className="w-full">
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Не знаете, с чего начать?</h2>
      </div>

      {/* Главный контейнер - заливаем фирменным желтым */}
      <div className="relative flex w-full flex-col overflow-hidden rounded-[32px] bg-[#FFDD2D] shadow-2xl md:flex-row">
        
        {/* Левая часть: Текст и форма */}
        <div className="relative z-10 order-2 flex w-full flex-col justify-center p-8 pt-0 md:order-1 md:w-[55%] md:p-12 md:pt-12 lg:p-16">
          <h3 className="text-[28px] font-bold leading-tight tracking-tight text-[#111827] md:text-4xl md:leading-tight">
            Получите правовой анализ вашей ситуации
          </h3>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#111827]/80">
            Дежурный юрист внимательно выслушает вас, оценит шансы на успех и
            подскажет правильные первые шаги.{" "}
            <span className="font-bold text-[#111827]">
              Это абсолютно бесплатно!
            </span>
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-2xl border-none bg-white/90 px-5 py-4 text-base text-[#111827] placeholder:text-gray-400 shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/10"
              required
            />
            <input
              type="tel"
              placeholder="+7 (999) 000-00-00"
              className="w-full rounded-2xl border-none bg-white/90 px-5 py-4 text-base text-[#111827] placeholder:text-gray-400 shadow-sm transition-all focus:bg-white focus:outline-none focus:ring-4 focus:ring-black/10"
              required
            />
            {/* Кнопка теперь темная для максимального контраста с желтым фоном */}
            <button 
              type="submit" 
              className="mt-2 w-full rounded-2xl bg-[#111827] px-6 py-4 text-[16px] font-bold text-white shadow-xl transition-transform hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Получить бесплатную консультацию
            </button>
            <p className="mt-2 text-center text-[12px] font-medium leading-tight text-[#111827]/50">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="underline transition-colors hover:text-[#111827]/80">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>

        {/* Правая часть: Картинка и градиентное свечение */}
        <div className="relative order-1 flex w-full items-center justify-center p-8 pb-4 md:order-2 md:w-[45%] md:p-12 lg:pr-16">
          
          {/* Белый круг с жестким блюром (создает эффект свечения) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-60 blur-[40px] md:h-[400px] md:w-[400px] md:blur-[80px]" />
          
          {/* Сама картинка */}
          <img
            src="/images/cta.png"
            alt="Онлайн консультация юриста"
            className="relative z-10 w-full max-w-[280px] object-contain drop-shadow-2xl transition-transform md:max-w-[400px] md:scale-110 lg:max-w-[460px] lg:scale-125"
          />
        </div>
      </div>
    </section>
  );
}