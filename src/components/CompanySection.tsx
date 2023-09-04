"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CompanySection = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // Percentage of the component that's visible
  });
  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.75 }}
      id="whoarewe"
    >
      <section className="flex flex-col justify-center m-8">
        <div className="relative  mb-4 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-2xl mx-auto border  border-black-300 border-2 bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <Image
              src="/tat_logo_main.png"
              width={540}
              height={303}
              alt="tailwind logo"
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Superhost
              </div> */}
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              WHO ARE WE?
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              Tape A Tale is a dynamic storytelling platform that has built a
              vibrant community of writers, poets, and storytellers on YouTube.
              Since launching in 2017, the channel has become a leading platform
              for personal stories, showcasing the unique experiences of people
              from all walks of life.
              <br />
              <br />
              Through its engaging content and growing subscriber base of 2.5
              million, Tape A Tale has been able to leverage its reach on
              YouTube to create a large and diverse offline community as well.
              With over 1000+ storytelling events hosted across the country,
              Tape A Tale has been able to bring its mission of storytelling to
              life, inspiring audiences from Jalandhar to Mumbai.
              <br /> <br />
              In addition to its thriving community, Tape A Tale has also become
              a trusted partner for brands looking to connect with audiences
              through engaging storytelling. The platform has collaborated with
              a range of notable brands, including Zomato, Behrouz Biryani,
              Tinder, OkCupid, ITC Vivel, Amazon Kindle, Sweet Truth, and MSD,
              to create successful brand campaigns.
              <br /> <br />
              With its commitment to authenticity and creativity, Tape A Tale
              has become a go-to platform for anyone looking to connect with a
              diverse community through the power of storytelling.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CompanySection;
