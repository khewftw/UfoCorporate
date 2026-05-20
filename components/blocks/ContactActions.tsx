import { ds } from "@/lib/design-system";
import { MAX_MESSENGER_URL } from "@/lib/contact-links";

type ContactActionsProps = {
  /** Компактный вариант для шапки (MAX — иконка) */
  compact?: boolean;
  className?: string;
};

const maxLinkProps = {
  href: MAX_MESSENGER_URL,
  target: MAX_MESSENGER_URL === "#" ? undefined : ("_blank" as const),
  rel: MAX_MESSENGER_URL === "#" ? undefined : "noopener noreferrer",
};

function MaxMessengerIconButton() {
  return (
    <a
      {...maxLinkProps}
      aria-label="Написать в MAX"
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-opacity hover:opacity-80 sm:h-11 sm:w-11"
    >
      <img src="/MAX.svg" alt="" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
    </a>
  );
}

function MaxMessengerTextButton() {
  return (
    <a {...maxLinkProps} className={ds.btnSecondary}>
      Написать в MAX
    </a>
  );
}

export function ContactActions({ compact = false, className = "" }: ContactActionsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <button
        type="button"
        className={
          compact
            ? "rounded-xl !bg-[#FFDD2D] px-4 py-2.5 text-sm font-semibold !text-[#111827] transition-colors hover:!bg-[#f5d22a] sm:px-6 sm:text-base"
            : ds.btnPrimary
        }
      >
        Заказать звонок
      </button>
      {compact ? <MaxMessengerIconButton /> : <MaxMessengerTextButton />}
    </div>
  );
}
