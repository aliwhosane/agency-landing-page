import React from "react";
import ContactSection from "@/components/ContactSection";

const WritingPage = () => {
  return (
    <div className="bg-black pt-16 p-8 min-h-fit  w-full">
      <section className="flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 p-5 pb-10">
        <h1 className="text-4xl font-bold font-Lexend mb-6">Writing For You</h1>
        <p className="font-Lexend text-lg self-start md:self-center md:w-2/3">
          Got a story to tell but don&rsquo;t know how to say it? Let us do the
          talking! We&rsquo;ll craft compelling copy that perfectly captures
          your brand&rsquo;s voice, leaving your customers wanting more. Whether
          it&rsquo;s blogs, articles, or web copy, we&rsquo;ve got you covered.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          EIGHT APP X TAPE A TALE
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <p className="text-sm md:text-lg text-white">
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
            collaboration, Tape a Tale added another feather to its cap and took
            the art of storytelling to new heights.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          AMAZON PRIME X TAPE A TALE
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <p className="text-sm md:text-lg text-white">
            Tape a Tale&rsquo;s writers, Kopal Khanna and Mehak Mirza Prabhu,
            recently collaborated with Amazon India&rsquo;s team of writers for
            an upcoming series on Amazon Prime Video.
            <br />
            <br />
            With their expertise in storytelling, Kopal and Mehak brought a
            unique flavor to the series, set to release later this year. The
            collaboration promises to deliver captivating and engaging content
            that will keep the viewers hooked to their screens. Stay tuned for
            more updates on this exciting collaboration!
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          BEHROUZ X TAPE A TALE
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <p className="text-sm md:text-lg text-white">
            Tape a Tale&rsquo;s talented writers were able to deliver a
            mouth-watering marketing campaign for Behrouz Biryani, a well-known
            brand in the food industry. Our team created 12 videos showcasing
            the irresistible taste and aroma of Behrouz Biryani, along with a
            collection of beautiful shayaris to promote their delicious biryanis
            on Instagram.
            <br />
            <br />
            Our unique approach to content creation helped the brand to
            effectively reach its target audience and generate a buzz among food
            lovers across the country. We take pride in delivering top-quality
            content that not only engages the audience but also delivers the
            brand&rsquo;s message effectively.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default WritingPage;
