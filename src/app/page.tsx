import { BasicSection, BannerSection, ServiceSection } from "@/components";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <BannerSection />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">SERVICES</h1>
          <p>What do we do?</p>
        </div>
        <ServiceSection />
      </div>
    </div>
  );
}
