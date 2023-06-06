"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CompanySection = () => {
  return (
    <div className=" min-h-[50vh] px-6 py-2 flex items-center justify-around mx-auto bg-black border-b-2 border-yellow-50">
      <div className="flex flex-col-reverse md:flex-row justify-center space-x-10 overflow-hidden ">
        <motion.div
          initial={{ opacity: 0.5, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          className=" flex-1 justify-center"
        >
          <h3 className="font-bold font-Lexend text-white text-3xl p-4">
            WHO ARE WE?
          </h3>
          <p className="text-lg text-white p-4">
            Tape A Tale is a dynamic storytelling platform that has built a
            vibrant community of writers, poets, and storytellers on YouTube.
            Since launching in 2017, the channel has become a leading platform
            for personal stories, showcasing the unique experiences of people
            from all walks of life.
            <br />
            <br />
            Through its engaging content and growing subscriber base of 2.5
            million, Tape A Tale has been able to leverage its reach on YouTube
            to create a large and diverse offline community as well. With over
            1000+ storytelling events hosted across the country, Tape A Tale has
            been able to bring its mission of storytelling to life, inspiring
            audiences from Jalandhar to Mumbai.
            <br /> <br />
            In addition to its thriving community, Tape A Tale has also become a
            trusted partner for brands looking to connect with audiences through
            engaging storytelling. The platform has collaborated with a range of
            notable brands, including Zomato, Behrouz Biryani, Tinder, OkCupid,
            ITC Vivel, Amazon Kindle, Sweet Truth, and MSD, to create successful
            brand campaigns.
            <br /> <br />
            With its commitment to authenticity and creativity, Tape A Tale has
            become a go-to platform for anyone looking to connect with a diverse
            community through the power of storytelling.
          </p>
        </motion.div>
        <div className="flex-1 justify-center p-8">
          <motion.div
            initial={{ opacity: 0.5, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <Image
              src={"/main.jpeg"}
              width={240}
              height={362}
              className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="teller image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
