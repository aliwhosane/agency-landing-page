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
      {/* <section className="flex flex-col md:flex-row justify-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <div className="flex flex-1 flex-col flex-grow justify-center items-center text-center text-white font-Lexend">
          <h1 className="text-xl font-bold m-2 mb-1">
            Mc Donalds X Tape A Tale
          </h1>
          <p className="text-sm text-yellow-50 m-4 mt-0">
            10 MN CUPS OF MCCAFE HAPPINESS
          </p>
          <a href="#" className="flex justify-center items-center my-6">
            <Image
              alt="McD logo"
              src="/mcdonalds.svg"
              width={128}
              height={128}
            />
          </a>
        </div>
        <div className="flex justify-center items-center text-left flex-1">
          <p className="text-sm md:text-lg text-white">
            Tape A Tale collaborated with McCafe, to celebrate International
            Coffee Day in honor of McCafe&rsquo;s milestone achievement of
            selling 10 million cups of coffee and hence 10 million times of
            happiness.
            <br />
            <br />
            To mark this occasion, Tape A Tale wrote and published a special
            video on its YouTube channel, featuring talented storyteller Sainee
            Raj. The collaboration between Tape A Tale and McCafe added a unique
            and creative element to the celebration, bringing together the art
            of storytelling and the love of coffee.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row-reverse justify-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <div className="flex flex-col justify-center items-center text-center text-white font-Lexend">
          <h1 className="text-xl font-bold m-2 mb-1">
            Netflix India X Tape A Tale
          </h1>
          <p className="text-sm text-yellow-50 m-4 mt-0">
            MUMBAI KI ANKAHI KAHANIYA
          </p>
          <a href="#" className="flex justify-center items-center my-6">
            <Image
              alt="Netflix logo"
              src="/netflix.svg"
              width={128}
              height={128}
            />
          </a>
        </div>
        <div className="flex justify-center items-center text-left flex-1">
          <p className="text-sm md:text-lg text-white">
            Tape a Tale is proud to have collaborated with Netflix India for
            their series Ankahi Kahaniya. We had the privilege of assisting them
            in curating and writing a conversation that featured prominent
            personalities such as Ashwiny Iyer Tiwari, Abhishek Banerjee, and
            Varun Grover, and was based on the untold stories of Mumbai.
            <br />
            <br />
            Our talented writers&rsquo; community worked tirelessly to come up
            with engaging content that kept the conversation going. We are
            delighted to have been part of such an innovative project that
            highlights the rich cultural diversity of Mumbai. At Tape a Tale, we
            are committed to curating stories that leave a lasting impact, and
            our partnership with Netflix India is a testament to that.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <div className="flex flex-col justify-center items-center text-center text-white font-Lexend">
          <h1 className="text-xl font-bold m-2 mb-1">
            Sweet Truth X Tape A Tale
          </h1>
          <p className="text-sm text-yellow-50 m-4 mt-0">JAR OF LOVE</p>
          <a href="#" className="flex justify-center items-center my-6">
            <Image
              alt="Sweet Truth Logo"
              src="/swttruth.png"
              width={128}
              height={128}
            />
          </a>
        </div>
        <div className="flex justify-center items-center text-left flex-1">
          <p className="text-sm  md:text-lg text-white">
            Tape a Tale brought the perfect blend of sweetness and storytelling
            for the dessert company Sweet Truth. The writers community curated 8
            soul-stirring love story performed by the storyteller like Mehak
            Mirza Prabhu and Helly Shah amongst others.
            <br />
            <br />
            To further promote the brand, Tape a Tale organized an event that
            showcased Jar of Love. The event was a hit and received a lot of
            attention on social media. With this unique marketing strategy,
            Sweet Truth was able to reach a wider audience and increase its
            brand awareness. The collaboration with Tape a tale gave Sweet Truth
            a fresh perspective and helped them connect with their audience
            better.
          </p>
        </div>
      </section> */}
      <ContactSection />
    </div>
  );
};

export default BrandPage;
