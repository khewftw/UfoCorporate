import { Phone } from "lucide-react";
import { ContactActions } from "@/components/blocks/ContactActions";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact-links";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
  { label: "Команда", href: "#team" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full !border-b !border-gray-100 !bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-3 py-4 md:px-6 md:py-4 lg:px-8">
        <a
          href="#"
          className="-ml-1 flex min-w-0 shrink items-center gap-2.5 rounded-xl transition-opacity hover:opacity-90 sm:gap-3"
          aria-label="Юридическая компания Уральского федерального округа"
        >
          <img
            src="/logos/vector.svg"
            alt="Логотип УФО-ЦЕНТР"
            className="h-12 w-auto shrink-0 md:h-14"
          />
          <span className="max-w-[9.5rem] text-[10px] font-bold uppercase leading-tight tracking-wide !text-[#111827] sm:max-w-[11rem] sm:text-xs md:max-w-xs md:text-sm">
            юридическая компания уральского федерального округа
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-base font-medium !text-[#111827] transition-colors hover:!text-[#6B7280]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 text-base font-semibold !text-[#111827] xl:flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <ContactActions compact />
        </div>
      </div>
    </header>
  );
}
