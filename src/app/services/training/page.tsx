import React from "react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const TrainingPage = () => {
  return (
    <div className="bg-black pt-16 p-8 h-screen w-full">
      <section className="flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4">
          Training Writers
        </h1>
        <p className="font-Lexend self-start">
          Writing isn&rsquo;t just about putting words on paper. It&rsquo;s
          about capturing the essence of the brand and connecting with your
          audience. Our team of experienced mentors and writers will teach you
          how to write stories that resonate with your target audience, whether
          it&rsquo;s for platforms, events, ads, or brands.
        </p>
      </section>
      <section className="flex flex-col md:flex-row justify-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <div className="flex flex-1 flex-col flex-grow justify-center items-center text-center text-white font-Lexend">
          <a href="#" className="flex justify-center items-center my-6">
            <Image
              alt="story circle"
              src="/storycircle.png"
              width={256}
              height={128}
            />
          </a>
        </div>
        <div className="flex justify-center items-center text-left flex-1">
          <p className="text-sm md:text-lg text-white">
            Story Circle by Tape A Tale is a 3 month long storytelling and
            writing program where you get to learn the ins and outs of
            storytelling from your very favorite storytellers and writers,
            accompanied by feedback on your work from professionals and your
            very own Story Circle peers. This enthralling community has access
            to weekly open mics and TAT parties.
            <br />
            <br />
            On top of all this, they get to attend monthly webinars and
            workshops featuring the founders of Tape A Tale, along with your
            dearest writers. The best members also stand a chance to get
            featured on Tape A Tale. And what more, you ask? You get to become a
            certified Story Circle Graduate in just 3 months with a thrilling
            graduation ceremony!
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default TrainingPage;
