import React from "react";

const TellerSection = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="lg:w-full xl:w-full dark:bg-gray-800">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img
              src="all.png"
              alt=""
              className="rounded-lg shadow-lg dark:bg-gray-500 sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TellerSection;
