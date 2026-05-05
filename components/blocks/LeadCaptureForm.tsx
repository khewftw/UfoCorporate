import { ds } from "@/lib/design-system";

export function LeadCaptureForm() {
  return (
    <section className="w-full">
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Не знаете, с чего начать?</h2>
      </div>

      <div className={ds.leadFormShell}>
        <div className="relative z-10 order-2 flex w-full flex-col justify-center p-8 pt-0 md:order-1 md:w-[55%] md:p-12 md:pt-12 lg:p-16">
          {/* Увеличили размер заголовка до text-3xl / text-4xl для десктопа */}
          <h3 className={`${ds.h3Card} text-2xl md:text-4xl md:leading-tight`}>
            Получите правовой анализ вашей ситуации
          </h3>
          <p className={`${ds.body} mt-4`}>
            Дежурный юрист внимательно выслушает вас, оценит шансы на успех и
            подскажет правильные первые шаги.{" "}
            <span className="font-semibold !text-[#111827]">
              Это абсолютно бесплатно!
            </span>
          </p>

          <form className="mt-8 flex w-full max-w-md flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className={ds.input}
              required
            />
            <input
              type="tel"
              placeholder="+7 (999) 000-00-00"
              className={ds.input}
              required
            />
            <button type="submit" className={`${ds.btnPrimary} mt-2 w-full`}>
              Получить бесплатную консультацию
            </button>
            <p className={`${ds.legalFinePrint} mt-2`}>
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="underline hover:text-gray-500">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>

        <div className="order-1 flex w-full items-center justify-center p-8 pb-4 md:order-2 md:w-[45%] md:p-12 lg:pr-16">
          <img
            src="/images/cta.png"
            alt="Онлайн консультация юриста"
            className="w-full max-w-[280px] object-contain transition-transform md:max-w-[400px] md:scale-110 lg:max-w-[460px] lg:scale-125"
          />
        </div>
      </div>
    </section>
  );
}