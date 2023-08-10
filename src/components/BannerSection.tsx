"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

const BannerSection = () => {
  const handleScroll = () => {};
  return (
    <div className="basic">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="basic__title">
          Find, Book, or Rent a Writer -- quickly & easily!
        </h1>
        {/* <p className="basic_subtitle">We provide services</p> */}
        <CustomButton
          title="Contact Us"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="basic__image-container">
        <div className="basic__image">
          {/* <Image
            src="/main-bg.png"
            alt="hero"
            fill
            className="object-contain"
          /> */}
        </div>
        <div className="basic__image-overlay" />
      </div>
    </div>
  );
};

export default BannerSection;
