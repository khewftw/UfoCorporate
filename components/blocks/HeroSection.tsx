import { ds } from "@/lib/design-system";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Landmark,
  Shield,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className={ds.heroSection}>
      <div className={`${ds.container} flex flex-col items-center`}>
        <h1 className={ds.h1Hero}>
          Ваша юридическая защита без компромиссов
        </h1>
        <p className={`${ds.body} mx-auto mt-6 max-w-2xl text-center`}>
          Решаем сложные правовые задачи частных лиц и бизнеса. Работаем по
          договору с гарантией ответственности.
        </p>
        <div className="mt-8">
          <button type="button" className={ds.btnPrimary}>
            Оценить перспективы дела
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex w-full justify-center px-0 md:px-8">
        <img
          src="/images/hero-background.png"
          alt="Юридическая защита"
          className="h-auto w-full object-contain drop-shadow-2xl md:max-w-xl lg:max-w-2xl"
        />
      </div>

      {/* <div
        className={`absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2 ${ds.floatingPanel}`}
      >
        <div className="flex w-16 cursor-pointer flex-col items-center gap-2 transition-transform hover:-translate-y-1 md:w-auto md:min-w-[100px] md:gap-3">
          <div className={ds.pillIconWell}>
            <FileText className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className={ds.pillLabel}>Банкротство</span>
        </div>

        <div className="flex w-16 cursor-pointer flex-col items-center gap-2 transition-transform hover:-translate-y-1 md:w-auto md:min-w-[100px] md:gap-3">
          <div className={ds.pillIconWell}>
            <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className={ds.pillLabel}>Для бизнеса</span>
        </div>

        <div className="flex w-16 cursor-pointer flex-col items-center gap-2 transition-transform hover:-translate-y-1 md:w-auto md:min-w-[100px] md:gap-3">
          <div className={ds.pillIconWell}>
            <Shield className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className={ds.pillLabel}>Уголовные</span>
        </div>

        <div className="flex w-16 cursor-pointer flex-col items-center gap-2 transition-transform hover:-translate-y-1 md:w-auto md:min-w-[100px] md:gap-3">
          <div className={ds.pillIconWell}>
            <Landmark className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className={ds.pillLabel}>Суды</span>
        </div>

        <div className="flex w-16 cursor-pointer flex-col items-center gap-2 transition-transform hover:-translate-y-1 md:w-auto md:min-w-[100px] md:gap-3">
          <div className={ds.pillIconWellMuted}>
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className={ds.pillLabelStrong}>Все услуги</span>
        </div>
      </div> */}
    </section>
  );
}
