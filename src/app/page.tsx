import {
  BannerSection,
  CompanySection,
  ContactSection,
  ServiceSection,
} from "@/components";
import Image from "next/image";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div id="home"></div>
      <BannerSection />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <div id="service"></div>
          <h1 className="text-4xl font-extrabold">SERVICES</h1>
          <p>What do we do?</p>
        </div>
        <ServiceSection />
        <CompanySection />
        <div id="contact"></div>
        <ContactSection />
      </div>
    </div>
  );
}
