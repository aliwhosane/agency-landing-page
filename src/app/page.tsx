import { CompanySection, ContactSection, ServiceSection } from "@/components";
import CarouselSection from "@/components/CarouselSection";
import TellerSection from "@/components/TellerSection";
import Image from "next/image";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div id="home"></div>
      <div className=" flex flex-col items-center justify-center md:min-h-[500]">
        {/* <h1 className="text-2xl font-bold mb-4">React Image Slider with Framer Motion</h1> */}
        <div className="w-full h-full">
          <CarouselSection />
        </div>
      </div>
      <div
        className="md:mt-12 mt-4 padding-x padding-y max-width"
        id="discover"
      >
        <div className="home__text-container">
          <div id="service"></div>
          <h1 className="text-4xl font-extrabold">SERVICES</h1>
          <p>What do we do?</p>
        </div>
        <ServiceSection />
        <div className="home__text-container">
          <div id="service"></div>
          <h1 className="text-4xl font-extrabold self-center">
            Our world of Artists
          </h1>
        </div>
        <TellerSection />
        <CompanySection />
        <div id="contact"></div>
        <ContactSection />
      </div>
    </div>
  );
}
