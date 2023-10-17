import React from "react";
import { ContactSection } from "@/components";
import Image from "next/image";
import { BrandColaborations } from "../../../../constants";
import BrandCard from "@/components/BrandCard";

const BrandPage = () => {
  return (
    <div className="min-h-fit w-full">
      <section className=" bg-salmon-pink-default lg:py-24 lg:px-24 flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="basic__title font-bold font-Lexend mb-4">
          Brand Collaborations
        </h1>
        <p className="basic__subtitle font-Lexend self-start mx-6 text">
          From ideation to execution, we&rsquo;ll handle it all! We&rsquo;ll
          work with you to create unique and engaging brand campaigns that tell
          your story and connect with your audience.{" "}
          <span className="hidden md:inline">
            Our team of experts will ensure that every detail is taken care of,
            leaving you free to focus on what you do best - running your
            business.
          </span>
        </p>
      </section>
      <section>
        <div className="home__services-wrapper p-16">
          {BrandColaborations.map(({ name, image, desc, link }) => (
            <div key={name}>
              <BrandCard name={name} image={image} desc={desc} link={link} />
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default BrandPage;
