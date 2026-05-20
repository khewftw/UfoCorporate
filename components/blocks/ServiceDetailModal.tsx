"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ContactActions } from "@/components/blocks/ContactActions";
import { ds } from "@/lib/design-system";
import type { Service } from "@/lib/services-data";

type ServiceDetailModalProps = {
  service: Service | null;
  onClose: () => void;
};

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (service) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [service]);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
      className="fixed inset-0 z-[100] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-4 backdrop:bg-black/40 open:flex open:items-center open:justify-center"
    >
      {service ? (
        <div
          role="document"
          className={`${ds.cardBento} relative max-h-[90vh] w-full max-w-lg overflow-y-auto p-6 md:p-8`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-[#111827] transition-colors hover:border-[#FFDD2D] hover:bg-[#FFDD2D]/10"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>

          <h3 className={`${ds.h3Card} pr-12`}>{service.title}</h3>

          <div className="mt-6 space-y-6">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#9CA3AF]">
                О услуге
              </p>
              <p className={ds.body}>{service.fullDescription}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#9CA3AF]">
                Кому подходит
              </p>
              <p className={ds.body}>{service.audience}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <ContactActions className="justify-center sm:justify-start" />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
