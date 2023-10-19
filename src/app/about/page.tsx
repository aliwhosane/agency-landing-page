import { CompanySection, ContactSection } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="min-h-fit w-full">
      <section className=" bg-black lg:py-24 lg:px-24 flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="basic__title font-bold font-Lexend mb-4">About Us</h1>
      </section>
      <CompanySection />
      <ContactSection />
    </div>
  );
};

export default page;
