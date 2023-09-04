"use client";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerSection = () => {
  const handleScroll = () => {};
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // Percentage of the component that's visible
  });
  return (
    <div className="basic">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="basic__title">
          Where tales meet powerful brand strategies.
        </h1>
        {/* <p className="basic_subtitle">We provide services</p> */}
        <Link href={"#contact"}>
          <CustomButton
            title="Contact Us"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </Link>
      </div>
      <div className="basic__image-container">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -75 }}
          transition={{ duration: 0.5 }}
          className="basic__image"
        >
          <Image
            src="/main-bg.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </motion.div>
        <div className="basic__image-overlay" />
      </div>
    </div>
  );
};

export default BannerSection;
