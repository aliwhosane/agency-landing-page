import QuoteSection from "@/components/QuoteSection";
import CompanySection from "@/components/CompanySection";
import ServiceSection from "@/components/ServiceSection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <div className=" h-full">
      <QuoteSection />
      <CompanySection />
      <ServiceSection />
      <PartnerSection />
      <ContactSection />
    </div>
  );
}
