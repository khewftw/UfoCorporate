import Image from "next/image";
import { Check } from "lucide-react";
import { ds, dsMilLight } from "@/lib/design-system";

const benefits = [
  "Консультация с разбором ситуации — 0 руб.",
  "Получение социальных выплат и боевых (до 6 млн руб)",
  "Оспаривание решений ВВК и комиссование",
  "Защита по уголовным делам (СОЧ, неисполнение приказа)",
];

type MilitaryHeroProps = {
  onConsultation: () => void;
};

export function MilitaryHero({ onConsultation }: MilitaryHeroProps) {
  return (
    <section
      // Добавили flex, items-center и min-h-[90vh], чтобы секция занимала экран и контент был по центру
      className={`${dsMilLight.sectionBleed} bg-[#F7F8FA] flex items-center min-h-[100svh] lg:min-h-[90vh] py-16 lg:py-0`}
    >
      <div className={`${dsMilLight.container} w-full`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={dsMilLight.eyebrow}>
              Коллегия военных юристов «УФО ЦЕНТР»
            </p>
            <h1 className={`${dsMilLight.h1Hero} mt-4`}>
              Помощь военного юриста: призыв, СВО, выплаты и ВВК. Защита прав
              военнослужащих.
            </h1>
            <p className={`${ds.body} mt-6 max-w-xl`}>
              Полный спектр услуг в области военного права. Работаем по договору.
              Оплата после решения вашего вопроса.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={dsMilLight.checkWell} aria-hidden>
                    <Check className="h-4 w-4 stroke-[2.5]" />
                  </span>
                  <span className={`${ds.bodySm} !text-gray-600`}>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onConsultation}
              className={`${ds.btnPrimary} mt-10 inline-flex px-10 py-5 text-lg cursor-pointer`}
            >
              Оставить заявку на консультацию
            </button>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] lg:max-w-none">
            <Image
              src="/real photos/i (1).jpg"
              alt="Военный юрист — консультация по СВО, ВВК и выплатам"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}