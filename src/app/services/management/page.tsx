import React from "react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const ManagementPage = () => {
  return (
    <div className="bg-black pt-16 p-8 min-h-fit  w-full">
      <section className="flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 p-5 pb-10">
        <h1 className="text-4xl font-bold font-Lexend mb-6">
          Artist Management
        </h1>
        <p className="font-Lexend text-lg self-start md:self-center md:w-2/3">
          They say poets and storytellers are like unicorns, but we know where
          to find them! Our artist management team exclusively represents the
          most talented storytellers and poets in the industry, providing you
          access to their unique voices and stories.
        </p>
      </section>
      <section className="flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-10">
        <h1 className="text-4xl font-bold font-Lexend mb-4">Our Artists</h1>
        <div className="flex flex-col md:flex-row text-center items-center justify-center text-white pb-12 md:w-2/3">
          <div className="flex flex-1 flex-col flex-grow justify-center items-center text-center text-white font-Lexend">
            <h1 className="text-xl font-bold m-2 mb-1">Amandeep Singh</h1>
            <a href="#" className="flex justify-center items-center my-6">
              <Image
                alt="amandeep image"
                src="/mcdonalds.svg"
                width={128}
                height={128}
              />
            </a>
          </div>
          <div className="flex justify-center items-center text-left flex-1">
            <p className="text-sm md:text-lg text-white">
              A master storyteller and accomplished writer whose captivating
              tales have reached an astounding 20 million people online. His
              exquisite storytelling has garnered him a plethora of admirers,
              and he has been featured by notable media outlets such as Netflix,
              Buzzfeed India, Aaj Tak, Being Indian, and The Indian Express.
              <br />
              <br />
              Amandeep&rsquo;s enchanting performances have graced prestigious
              festivals across India, including Jashn-e-rekhta.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse text-center items-center justify-center text-white pb-6 md:w-2/3">
          <div className="flex flex-1 flex-col flex-grow justify-center items-center text-center text-white font-Lexend">
            <h1 className="text-xl font-bold m-2 mb-1">Mehak Mirza Prabhu</h1>
            <a href="#" className="flex justify-center items-center my-6">
              <Image
                alt="mehak image"
                src="/mcdonalds.svg"
                width={128}
                height={128}
              />
            </a>
          </div>
          <div className="flex justify-center items-center text-left flex-1">
            <p className="text-sm md:text-lg text-white">
              Mehak, founder of storytelling school &rdquo;Jhumritalaiya&ldquo;
              and, the life transformation program &rdquo;Detangle.life&ldquo;,
              is a storyteller, poet, writer and a certified life coach. She has
              mentored over 500 students across the globe. She has written
              scripts for short films and web-series for various media &
              productions houses and OTT platforms.
              <br />
              <br />
              She is renowned for her innovativeness in the art of storytelling
              through voice modulation and becoming various characters making
              her a powerhouse performer.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ManagementPage;
