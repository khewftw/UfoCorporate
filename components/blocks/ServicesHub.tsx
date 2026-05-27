"use client";

import Link from "next/link";
import { useState } from "react";
import { ServiceDetailModal } from "@/components/blocks/ServiceDetailModal";
import { ds } from "@/lib/design-system";
import { services } from "@/lib/services-data";

const cardButtonClass =
  "rounded-2xl border border-white/30 bg-black/20 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 group-hover:border-[#FFDD2D]/50 group-hover:bg-[#FFDD2D]/20 group-hover:backdrop-blur-md hover:!border-[#FFDD2D] hover:!bg-[#FFDD2D] hover:!text-[#111827] hover:!shadow-[0_0_24px_rgba(255,221,45,0.6)] hover:scale-105 md:px-6 md:text-base";

export function ServicesHub() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const selectedService =
    services.find((s) => s.id === selectedServiceId) ?? null;

  return (
    <section id="services" className="w-full scroll-mt-24">
      <div className={ds.sectionHeaderGap}>
        <h2 className={ds.h2Section}>Наши ключевые практики</h2>
        <p className={ds.sectionLead}>
          От списания долгов до защиты бизнеса. Выберите вашу проблему, и мы
          предложим готовое правовое решение.
        </p>
      </div>

      <div
        className={`grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${ds.gridGap}`}
      >
        {services.map((service) => (
          <article
            key={service.id}
            className="group relative flex min-h-[380px] w-full flex-col overflow-hidden rounded-[32px] bg-[#111827] p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl md:min-h-[400px]"
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${service.image}')` }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-lg font-bold tracking-tight text-white md:text-xl md:leading-snug">
                {service.title}
              </h3>
              <p className="mt-2 max-w-sm text-base font-medium leading-relaxed text-gray-300">
                {service.shortDescription}
              </p>
            </div>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
              {service.landingHref ? (
                <>
                  <Link href={service.landingHref} className={cardButtonClass}>
                    Подробнее
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className="text-xs font-semibold text-white/70 underline-offset-2 transition-colors hover:text-[#FFDD2D] hover:underline md:text-sm"
                  >
                    Краткий обзор
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={cardButtonClass}
                >
                  Подробнее
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedServiceId(null)}
      />
    </section>
  );
}
