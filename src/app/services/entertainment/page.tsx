import React from "react";
import MoreInfo from "@/components/MoreInfo";
import ContactSection from "@/components/ContactSection";

const EntertainmentPage = () => {
  return (
    <>
      <section className=" bg-crayola-blue-default lg:py-24 lg:px-24 flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="basic__title font-bold font-Lexend mb-4">
          Corporate Entertainment
        </h1>
        <p className="basic__subtitle font-Lexend self-start mx-6 text">
          Boring meetings? Say goodbye to them! Our storytelling and poetry will
          breathe life into your office spaces, off-sites, and events.
          <span className="hidden md:inline">
            Get ready to experience an immersive world of words, leaving your
            team with a sense of excitement and inspiration!
          </span>
        </p>
      </section>
      <MoreInfo />
      {/* <div className="w-full h-screen  bg-black">
      <div className="bg-black pt-16 p-8 min-h-fit w-full">
        <MoreInfo />
        <ContactSection />
      </div>
    </div> */}
    </>
  );
};

export default EntertainmentPage;
