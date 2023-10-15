import React from "react";

const TellerSection = () => {
  return (
    <section className="">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="lg:w-full xl:w-full">
          <div className="flex items-center justify-center md:p-8 lg:p-12">
            <img
              src="all.jpg"
              alt=""
              className="rounded-lg shadow-lg sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TellerSection;
