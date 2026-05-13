import { Phone } from "lucide-react";

const navItems = ["Услуги", "Отзывы", "Контакты"];

export function Header() {
  return (
    // sticky top-0 и z-50 приклеивают хедер к потолку поверх всего остального
    <header className="sticky top-0 z-50 w-full !border-b !border-gray-100 !bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl transition-opacity hover:opacity-90"
          aria-label="УФО-ЦЕНТР"
        >
          <img
            src="/ufo-logo.svg"
            alt="Логотип УФО-ЦЕНТР"
            className="h-10 w-auto md:h-12"
          />
          <span className="text-base font-bold tracking-tight !text-[#111827] md:text-lg">
            УФО-ЦЕНТР
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium !text-[#111827] transition-colors hover:!text-[#6B7280]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="tel:88003330288"
            className="hidden items-center gap-2 text-sm font-semibold !text-[#111827] lg:flex"
          >
            <Phone className="h-4 w-4" />
            8 800 333-02-88
          </a>
          {/* Сделали rounded-xl, чтобы убрать эффект "таблетки" */}
          <button
            type="button"
            className="rounded-xl !bg-[#FFDD2D] px-6 py-2.5 text-sm font-semibold !text-[#111827] transition-colors hover:!bg-[#f5d22a]"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}