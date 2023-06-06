import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="bg-black dark:bg-black py-10 px-12">
      <h3 className="text-3xl text-bold font-Lexend text-gray-200 text-center">
        WHAT WE DO?
      </h3>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* <template x-for="post in posts"> */}
        <ServiceCard
          link="services/workshop"
          image="/workshop.svg"
          name="Corporate Workshop"
        />
        <ServiceCard
          link="services/management"
          image="/management.svg"
          name="Artist Management"
        />
        <ServiceCard
          link="services/training"
          image="/training.svg"
          name="Training Writers"
        />
        <ServiceCard
          link="services/writing"
          image="/writing.svg"
          name="Writing For You"
        />
        <ServiceCard
          link="services/brand"
          image="/brand.svg"
          name="Brand Collaborations"
        />
        <ServiceCard
          link="services/entertainment"
          image="/entertainent.svg"
          name="Corporate Entertainment"
        />
        {/* </template> */}
      </div>
    </section>
  );
};

export default ServiceSection;
