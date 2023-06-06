import React from "react";
import ContactSection from "@/components/ContactSection";

const WorkshopPage = () => {
  return (
    <div className="bg-black pt-16 p-8 min-h-fit  w-full">
      <section className="flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 p-5 pb-10">
        <h1 className="text-4xl font-bold font-Lexend mb-6">
          Corporate Workshop
        </h1>
        <p className="font-Lexend text-lg self-start md:self-center md:w-2/3">
          Ready to unleash the power of storytelling in your business?
          We&rsquo;ll train your employees to captivate audiences and craft
          compelling narratives. The result? A workforce that is confident,
          persuasive, and equipped to communicate effectively with clients,
          customers, and colleagues.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          1. STORYTELLING AS AN ARTFORM
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <ul className="font-Lexend self-start">
            <li className=" pb-2 text-lg">
              a) Some of our finest storytellers narrate stories for the
              attendees to unwind and get inspired.
            </li>
            <li className="pb-2 text-lg">
              b) This session is followed by a workshop that takes them through
              the basics of storytelling. This session will dive deep into how
              the idea, characters, plot, structure came about.
            </li>
            <li className="pb-2 text-lg">
              c) The next one hour will be an immersive session where the
              participants will write their own stories.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          2. STORYTELLING TO UNLEASH YOUR CREATIVITY
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <ul className="font-Lexend self-start">
            <li className="pb-2 text-lg">
              a) Ever felt a creative block or creative dry spell? If the answer
              is yes, then this workshop is just for you. This session, through
              the use of tools and exercises will help you understand yourself
              better.
            </li>
            <li className="pb-2 text-lg">
              b) It will aid you with writing tools to help you get better at
              what you do by finding your unique voice.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          3. STORYTELLING FOR YOUR MENTAL HEALTH
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <ul className="font-Lexend self-start">
            <li className="pb-2 text-lg">
              a) Art can be therapeutic they say, and turns out, it&rsquo;s
              true! This session will be an interactive session loaded with
              games, exercises, tasks to help you unwind.
            </li>
            <li className="pb-2 text-lg">
              b) In this therapeutic session, participants will be encouraged to
              write and tell their stories.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          4. STORYTELLING TO PITCH BETTER
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <ul className="font-Lexend self-start">
            <li className="pb-2 text-lg">
              a) If you or one your teammates is done with boring pitches and
              wants to learn how to make to pitch your ideas better using
              creative storytelling tools, this is the workshop for you.
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center my-4 text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="text-2xl font-bold font-Lexend mb-4 text-orange-300">
          5. STORYTELLING FOR SALES & COMMUNICATION
        </h1>
        <div className="flex flex-col justify-center items-center text-left flex-1 md:w-2/3">
          <ul className="font-Lexend self-start">
            <li className="pb-2 text-lg">
              a) Everything is selling something in the marketplace, how do you
              stand out with you are selling? learn to tell the story of your
              product better.
            </li>
            <li className="pb-2 text-lg">
              b) Communication is key for anything. This workshops weaves in
              elements of storytelling to make your communication stronger.
            </li>
          </ul>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default WorkshopPage;
