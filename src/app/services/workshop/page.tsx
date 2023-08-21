import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const WorkshopPage = () => {
  return (
    <>
      <section className=" bg-pale-orange-default lg:py-24 lg:px-24 flex flex-col text-center items-center justify-center text-white border-b-2 border-b-yellow-50 pb-3">
        <h1 className="basic__title font-bold font-Lexend mb-4">
          Corporate Workshop
        </h1>
        <p className="basic__subtitle font-Lexend self-start mx-6 text">
          Ready to unleash the power of storytelling in your business?
          We&apos;ll train your employees to captivate audiences and craft
          compelling narratives.
          <span className="hidden md:inline">
            The result? A workforce that is confident, persuasive, and equipped
            to communicate effectively with clients, customers, and colleagues.
          </span>
        </p>
      </section>
      {/* ARTFORM */}
      <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              STORYTELLING AS
              <span className="text-4xl sm:text-5xl text-pale-orange-default">
                AN ARTFORM
              </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white my-2">
              a) Some of our finest storytellers narrate stories for the
              attendees to unwind and get inspired.
            </p>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white  mb-2">
              b) This session is followed by a workshop that takes them through
              the basics of storytelling. This session will dive deep into how
              the idea, characters, plot, structure came about.
            </p>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              c) The next one hour will be an immersive session where the
              participants will write their own stories.
            </p>
            <div className="flex mt-8">
              {/* <a
                href="#"
                className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
              >
                Get started
              </a> */}
              <a
                href="#"
                className="px-4 py-2 text-pale-orange-default uppercase bg-transparent border-2 border-pale-orange-defaultpink-500 rounded-lg dark:text-white hover:bg-pale-orange-default hover:text-white text-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <Image
              alt="image"
              fill
              src="/art.png"
              className="max-w-xs m-auto md:max-w-sm object-contain"
            />
          </div>
        </div>
      </section>
      {/* Creativity */}
      <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex flex-row-reverse px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              STORYTELLING TO
              <span className="text-4xl sm:text-5xl text-pale-orange-default">
                UNLEASH YOUR CREATIVITY
              </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white my-2">
              a) Ever felt a creative block or creative dry spell? If the answer
              is yes, then this workshop is just for you. This session, through
              the use of tools and exercises will help you understand yourself
              better.
            </p>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              b) It will aid you with writing tools to help you get better at
              what you do by finding your unique voice.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 text-pale-orange-default uppercase bg-transparent border-2 border-pale-orange-default rounded-lg dark:text-white hover:bg-pale-orange-default hover:text-white text-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <Image
              alt="image"
              fill
              src="/creativity.png"
              className="max-w-xs m-auto md:max-w-sm object-contain"
            />
          </div>
        </div>
      </section>
      {/* YOUR MENTAL HEALTH  */}
      <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              STORYTELLING FOR
              <span className="text-4xl sm:text-5xl text-pale-orange-default">
                YOUR MENTAL HEALTH
              </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white my-2">
              a) Art can be therapeutic they say, and turns out, it&rsquo;s
              true! This session will be an interactive session loaded with
              games, exercises, tasks to help you unwind.
            </p>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              b) In this therapeutic session, participants will be encouraged to
              write and tell their stories.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 text-pale-orange-default uppercase bg-transparent border-2 border-pale-orange-default rounded-lg dark:text-white hover:bg-pale-orange-default hover:text-white text-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <Image
              alt="image"
              fill
              src="/mental_health.png"
              className="max-w-xs m-auto md:max-w-sm object-contain"
            />
          </div>
        </div>
      </section>
      {/* PITCH BETTER */}
      <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex flex-row-reverse px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              STORYTELLING TO
              <span className="text-4xl sm:text-5xl text-pale-orange-default">
                PITCH BETTER
              </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white mt-2">
              a) If you or one your teammates is done with boring pitches and
              wants to learn how to make to pitch your ideas better using
              creative storytelling tools, this is the workshop for you.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 text-pale-orange-default uppercase bg-transparent border-2 border-pale-orange-default rounded-lg dark:text-white hover:bg-pale-orange-default hover:text-white text-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <Image
              alt="image"
              fill
              src="/pitch.png"
              className="max-w-xs m-auto md:max-w-sm object-contain"
            />
          </div>
        </div>
      </section>
      {/*  SALES & COMMUNICATION  */}
      <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              STORYTELLING FOR
              <span className="text-4xl sm:text-5xl text-pale-orange-default">
                SALES & COMMUNICATION
              </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white my-2">
              a) Everything is selling something in the marketplace, how do you
              stand out with you are selling? learn to tell the story of your
              product better.
            </p>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              b) Communication is key for anything. This workshops weaves in
              elements of storytelling to make your communication stronger.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="px-4 py-2 text-pale-orange-default uppercase bg-transparent border-2 border-pale-orange-default rounded-lg dark:text-white hover:bg-pale-orange-default hover:text-white text-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <Image
              alt="image"
              fill
              src="/salesman.png"
              className="max-w-xs m-auto md:max-w-sm"
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default WorkshopPage;
