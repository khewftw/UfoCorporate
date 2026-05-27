import type { Metadata } from "next";
import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { MilitaryLanding } from "@/components/landing/military/MilitaryLanding";

export const metadata: Metadata = {
  title:
    "Военный юрист: СВО, выплаты, ВВК и призыв — Москва и МО | УФО-ЦЕНТР",
  description:
    "Помощь военного юриста: выплаты до 6 млн ₽, оспаривание ВВК, защита по СОЧ. Бесплатная консультация, договор и оплата после результата.",
};

export default function MilitaryLawPage() {
  return (
    <>
      <Header />
      <MilitaryLanding />
      <Footer />
    </>
  );
}
