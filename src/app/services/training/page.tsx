import React from "react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const TrainingPage = () => {
  return (
    <>
      <section className=" bg-mint-default lg:py-24 lg:px-24 flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="basic__title font-bold font-Lexend mb-4">
          Training Writers
        </h1>
        <p className="basic__subtitle font-Lexend self-start mx-6 text">
          Writing isn&apos;t just about putting words on paper. It&apos;s about
          capturing the essence of the brand and connecting with your audience.
          Our team of experienced mentors and writers will teach you how to
          write stories that resonate with your target audience, whether
          it&apos;s for platforms, events, ads, or brands.
        </p>
      </section>
      <section className="flex flex-col justify-center antialiased  text-gray-200 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a className="relative block group" href="#0">
              <div
                className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <Image
                  alt="story circle"
                  src="/storycircle.png"
                  fill
                  className=" object-contain"
                />
              </figure>
            </a>
            <div>
              <header>
                <div className="mb-3">
                  <ul className="flex flex-wrap text-xs font-medium -m-1">
                    <li className="m-1">
                      <a
                        className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Storytelling
                      </a>
                    </li>
                    <li className="m-1">
                      <a
                        className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Script Writing
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    className="text-black transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Learning the skill of writing from those who inspire you
                  </a>
                </h3>
              </header>
              <p className="text-lg text-gray-800 flex-grow">
                Story Circle by Tape A Tale is a 3 month long storytelling and
                writing program where you get to learn the ins and outs of
                storytelling from your very favorite storytellers and writers,
                accompanied by feedback on your work from professionals and your
                very own Story Circle peers. This enthralling community has
                access to weekly open mics and TAT parties.
                <br />
                <br />
                On top of all this, they get to attend monthly webinars and
                workshops featuring the founders of Tape A Tale, along with your
                dearest writers. The best members also stand a chance to get
                featured on Tape A Tale. And what more, you ask? You get to
                become a certified Story Circle Graduate in just 3 months with a
                thrilling graduation ceremony!
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* { <section className="flex flex-col md:flex-row justify-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
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
      </section>} */}
      <ContactSection />
    </>
  );
};

export default TrainingPage;
