import React from "react";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

const WritingPage = () => {
  return (
    <>
      <section className=" bg-pink-300 lg:py-24 lg:px-24 flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="basic__title font-bold font-Lexend mb-4">
          Writing For You
        </h1>
        <p className="basic__subtitle font-Lexend self-start mx-6 text">
          Got a story to tell but don&apos;t know how to say it? Let us do the
          talking! We&apos;ll craft compelling copy that perfectly captures your
          brand&apos;s voice, leaving your customers wanting more.
          <span className="hidden md:inline">
            Whether it&apos;s blogs, articles, or web copy, we&apos;ve got you
            covered.
          </span>
        </p>
      </section>
      <section className="flex flex-col justify-center m-8">
        <div className="relative md:w-2/3 mb-4 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-2xl mx-auto border  border-pink-300 border-2 bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <Image
              src="/eight_logo_training.png"
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
              EIGHT APP X TAPE A TALE
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              Tape a Tale collaborated with Eight App, the future of radio, to
              create 20 captivating audio dramas that mesmerized the listeners.
              The talented writers of Tape a Tale spun their magic and brought
              stories to life with the power of voice.
              <br />
              <br />
              To celebrate the art of storytelling, Tape a Tale organized
              Kahanikaar, an event that brought together some of the best
              storytellers of the country. The event was a huge success and
              received much appreciation from the audience. With this
              collaboration, Tape a Tale added another feather to its cap and
              took the art of storytelling to new heights.
            </p>
          </div>
        </div>
        <div className="relative md:w-2/3 mb-4 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border  border-pink-300 border-2 bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <Image
              src="/prime_video_training.png"
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
              AMAZON PRIME X TAPE A TALE
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              Tape a Tale&rsquo;s writers, Kopal Khanna and Mehak Mirza Prabhu,
              recently collaborated with Amazon India&rsquo;s team of writers
              for an upcoming series on Amazon Prime Video.
              <br />
              <br />
              With their expertise in storytelling, Kopal and Mehak brought a
              unique flavor to the series, set to release later this year. The
              collaboration promises to deliver captivating and engaging content
              that will keep the viewers hooked to their screens. Stay tuned for
              more updates on this exciting collaboration!
            </p>
          </div>
        </div>
        <div className="relative md:w-2/3 mb-4 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto  border-pink-300 border-2 bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <Image
              src="/behrouz_training.png"
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
              BEHROUZ X TAPE A TALE
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              Tape a Tale&rsquo;s talented writers were able to deliver a
              mouth-watering marketing campaign for Behrouz Biryani, a
              well-known brand in the food industry. Our team created 12 videos
              showcasing the irresistible taste and aroma of Behrouz Biryani,
              along with a collection of beautiful shayaris to promote their
              delicious biryanis on Instagram.
              <br />
              <br />
              Our unique approach to content creation helped the brand to
              effectively reach its target audience and generate a buzz among
              food lovers across the country. We take pride in delivering
              top-quality content that not only engages the audience but also
              delivers the brand&rsquo;s message effectively.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WritingPage;
