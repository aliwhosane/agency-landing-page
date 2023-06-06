import React from "react";
import MoreInfo from "@/components/MoreInfo";
import ContactSection from "@/components/ContactSection";

const EntertainmentPage = () => {
  return (
    <div className="w-full h-screen  bg-black">
      <div className="bg-black pt-16 p-8 min-h-fit w-full">
        <section className="flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
          <h1 className="text-2xl font-bold font-Lexend mb-4">
            Corporate Entertainment
          </h1>
          <p className="font-Lexend self-start md:text-lg md:w-2/3 md:self-center">
            Boring meetings? Say goodbye to them! Our storytelling and poetry
            will breathe life into your office spaces, off-sites, and events.
            Get ready to experience an immersive world of words, leaving your
            team with a sense of excitement and inspiration!
          </p>
        </section>
        <MoreInfo />
        <ContactSection />
      </div>
    </div>
  );
};

export default EntertainmentPage;
