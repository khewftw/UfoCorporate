"use client";

import { useEffect, useState } from "react";
import { AboutSection } from "@/components/blocks/AboutSection";
import { MilitaryCases } from "@/components/landing/military/MilitaryCases";
import { MilitaryHero } from "@/components/landing/military/MilitaryHero";
import { MilitaryLeadForm } from "@/components/landing/military/MilitaryLeadForm";
import { MilitaryPainRelief } from "@/components/landing/military/MilitaryPainRelief";
import { MilitarySteps } from "@/components/landing/military/MilitarySteps";
import { MilitaryConsultationModal } from "@/components/landing/military/MilitaryConsultationModal";

export function MilitaryLanding() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#F7F8FA] text-[#111827]">
      <MilitaryHero onConsultation={() => setModalOpen(true)} />
      <MilitaryPainRelief onConsultation={() => setModalOpen(true)} />
      <AboutSection variant="light" />
      <MilitarySteps onConsultation={() => setModalOpen(true)} />
      <MilitaryLeadForm />
      <MilitaryCases onConsultation={() => setModalOpen(true)} />

      <MilitaryConsultationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
