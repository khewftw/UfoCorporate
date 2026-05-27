"use client";

import { useState } from "react";
import { CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { ds, dsMilLight } from "@/lib/design-system";

export function MilitaryLeadForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="military-lead-form"
      className={`${dsMilLight.sectionBleed} scroll-mt-24 py-20 relative overflow-hidden bg-[#0A0F1A]`}
    >
      {/* Декоративный светящийся эффект на фоне */}
      <div className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[#FFDD2D]/10 blur-[120px]" />

      <div className={`${dsMilLight.container} relative z-10`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть: Оффер */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
              Найдем решение вашей проблемы <span className="text-[#FFDD2D]">в день обращения</span>
            </h2>
            <p className={`${ds.bodyOnDark} text-lg text-gray-400`}>
              Оставьте заявку — дежурный юрист бесплатно изучит ваши документы, оценит риски и подготовит пошаговый план действий.
            </p>
            
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3 text-white/80">
                <ShieldCheck className="text-[#FFDD2D] h-6 w-6" />
                <span>Полная конфиденциальность и адвокатская тайна</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Zap className="text-[#FFDD2D] h-6 w-6" />
                <span>Бесплатная юридическая экспертиза документов</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle className="text-[#FFDD2D] h-6 w-6" />
                <span>Работаем дистанционно по всей России</span>
              </div>
            </div>
          </div>

          {/* Правая часть: Форма */}
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#111827] text-white border border-white/10 rounded-2xl px-6 py-4 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-[#FFDD2D]/50 outline-none transition-all"
              />
              
              <input
                type="tel"
                required
                placeholder="Ваш телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#111827] text-white border border-white/10 rounded-2xl px-6 py-4 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-[#FFDD2D]/50 outline-none transition-all"
              />

              <textarea
                placeholder="Кратко опишите ситуацию..."
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={3}
                className="w-full bg-[#111827] text-white border border-white/10 rounded-2xl px-6 py-4 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-[#FFDD2D]/50 outline-none transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#FFDD2D] text-[#111827] font-bold text-lg py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,221,45,0.3)] mt-2"
              >
                Получить план действий
              </button>
              
              <p className="text-[12px] text-gray-500 text-center mt-2">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}