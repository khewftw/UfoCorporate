import { BlogSection } from "@/components/blocks/BlogSection";
import { Footer } from "@/components/blocks/Footer";
import { Header } from "@/components/blocks/Header";
import { HeroSection } from "@/components/blocks/HeroSection";
import { LeadCaptureForm } from "@/components/blocks/LeadCaptureForm";
import { ReviewsSection } from "@/components/blocks/ReviewsSection";
import { ServicesHub } from "@/components/blocks/ServicesHub";
import { TrustIndicators } from "@/components/blocks/TrustIndicators";
import { ds } from "@/lib/design-system";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-1 flex-col font-sans text-[#111827]">
        <Header />
        <HeroSection />
        <div
          className={`mx-auto w-full max-w-7xl ${ds.sectionStack} px-4 py-12 md:px-8 md:py-16`}
        >
          <TrustIndicators />
          <ServicesHub />
          <LeadCaptureForm />
          <BlogSection />
          <ReviewsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
