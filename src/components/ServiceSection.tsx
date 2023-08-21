"use client";
import ServiceCard from "./ServiceCard";
import { Services } from "../../constants";

const ServiceSection = () => {
  return (
    <section className="m-4">
      <div className="home__services-wrapper">
        {Services.map(({ name, link, desc, image }) => (
          <div key={link}>
            <ServiceCard name={name} link={link} image={image} desc={desc} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
