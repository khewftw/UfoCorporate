"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { ds } from "@/lib/design-system";

type MilitaryConsultationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function MilitaryConsultationModal({
  open,
  onClose,
}: MilitaryConsultationModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка формы
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
      className="fixed inset-0 z-[100] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-4 backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center"
    >
      {open ? (
        <div
          role="document"
          className="relative w-full max-w-[850px] overflow-hidden rounded-[32px] bg-white text-left shadow-2xl transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-md transition-colors hover:bg-gray-100 hover:text-[#111827] focus:outline-none sm:right-6 sm:top-6"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Левая колонка с фото (скрыта на мобилках) */}
            <div className="hidden md:block md:col-span-2 relative bg-gray-100">
              <img
                src="/real photos/IMG_20260504_095611_088.jpg"
                alt="Военный юрист"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-[#FFDD2D]">
                  Дежурный юрист
                </p>
                <p className="mt-2 text-[20px] font-bold leading-snug">
                  Отвечу на все вопросы и оценю шансы на успех
                </p>
              </div>
            </div>

            {/* Правая колонка с формой */}
            <div className="p-8 sm:p-10 md:col-span-3">
              <h3 className="pr-8 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
                Бесплатная оценка ситуации
              </h3>
              <p className={`${ds.bodySm} mt-3 !text-gray-600`}>
                Оставьте номер телефона. Юрист перезвонит вам в течение 15 минут,
                чтобы разобрать вашу проблему и предложить решение.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="modal-name" className="sr-only">
                    Имя
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${ds.input} !bg-[#F7F8FA] !text-[#111827] focus:!bg-white focus:!ring-[#FFDD2D]/50 border border-transparent focus:border-gray-200`}
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="sr-only">
                    Телефон
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="Ваш телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`${ds.input} !bg-[#F7F8FA] !text-[#111827] focus:!bg-white focus:!ring-[#FFDD2D]/50 border border-transparent focus:border-gray-200`}
                  />
                </div>

                <button
                  type="submit"
                  className={`${ds.btnPrimary} mt-2 w-full shadow-lg shadow-[#FFDD2D]/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFDD2D]/30`}
                >
                  Получить консультацию
                </button>

                <p className="mt-4 text-center text-xs font-medium text-gray-400">
                  Оставляя заявку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
