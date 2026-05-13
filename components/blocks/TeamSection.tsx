"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    slider.style.scrollSnapType = "none";

    const scrollAmount = slider.clientWidth * 0.8;
    const target = slider.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
    const duration = 600;
    const start = slider.scrollLeft;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      slider.scrollLeft = start + (target - start) * easeProgress;

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        slider.style.scrollSnapType = "x mandatory";
        checkScroll();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    sliderRef.current.style.scrollSnapType = "none";
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const enableSmoothSnap = () => {
    setIsDown(false);
    if (!sliderRef.current) return;
    sliderRef.current.style.scrollSnapType = "x mandatory";
    checkScroll();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const getMaskStyle = () => {
    if (!canScrollLeft && !canScrollRight) return "none";
    if (!canScrollLeft) return "linear-gradient(to right, black 90%, transparent 100%)";
    if (!canScrollRight) return "linear-gradient(to right, transparent 0%, black 10%, black 100%)";
    return "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)";
  };

  return (
    <section className="w-full overflow-hidden">
      
      {/* Шапка секции (Строго по центру) */}
      <div className="flex flex-col items-center text-center px-4 md:px-8 mb-10 max-w-3xl mx-auto">
        <h2 className={ds.h2Section}>Наша команда</h2>
        <p className={`${ds.sectionLead} !mb-0`}>
          Юристы с реальной судебной практикой. Каждый — узкий специалист в
          своей отрасли права. Перетяните, чтобы увидеть всех.
        </p>
      </div>

      {/* Обертка с динамической маской для размытия */}
      <div 
        className="relative w-full max-w-[1400px] mx-auto transition-all duration-300"
        style={{ WebkitMaskImage: getMaskStyle(), maskImage: getMaskStyle() }}
      >
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={enableSmoothSnap}
          onMouseUp={enableSmoothSnap}
          onMouseMove={handleMouseMove}
          onScroll={checkScroll}
          style={{ scrollSnapType: "x mandatory" }}
          className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-8 pt-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none"
        >
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative flex shrink-0 w-[300px] md:w-[380px] aspect-square flex-col overflow-hidden rounded-[32px] bg-[#111827] snap-center shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <img
                src={m.photo}
                alt={m.name}
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-[12px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-[#111827]/85" />

              {/* ДЕФОЛТНОЕ СОСТОЯНИЕ */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center gap-3 p-6 transition-all duration-500 group-hover:translate-y-8 group-hover:opacity-0">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                    {m.role}
                  </span>
                </span>
                
                <h3 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-[32px]">
                  {m.name}
                </h3>
              </div>

              {/* РАСКРЫТОЕ СОСТОЯНИЕ */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="mb-6 h-1 w-12 rounded-full bg-[#FFDD2D] transition-transform duration-500 delay-100 group-hover:scale-100 scale-0" />
                
                <p className="text-center text-[15px] font-medium leading-relaxed text-white/90 drop-shadow-md md:text-[17px] mb-8">
                  {m.description}
                </p>

                <button 
                  type="button" 
                  className="rounded-2xl bg-[#FFDD2D] px-6 py-3.5 text-[14px] md:text-[15px] font-bold text-[#111827] transition-transform hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgba(255,221,45,0.3)]"
                >
                  Записаться на консультацию
                </button>
                
                <span className="mt-3 text-[11px] md:text-[12px] uppercase tracking-widest text-white/50 font-semibold">
                  Поможем бесплатно
                </span>
              </div>
            </article>
          ))}
          
          <div className="shrink-0 w-4 md:w-8" />
        </div>
      </div>

      {/* Кнопки управления слайдером (По центру под карточками) */}
      <div className="flex justify-center gap-4 mt-6 px-4">
        <button
          onClick={() => scrollSlider("left")}
          disabled={!canScrollLeft}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-[#FFDD2D] hover:bg-[#FFDD2D] hover:text-black disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scrollSlider("right")}
          disabled={!canScrollRight}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-[#FFDD2D] hover:bg-[#FFDD2D] hover:text-black disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

    </section>
  );
}