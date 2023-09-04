"use client";
import Image from "next/image";
import { StatsProps } from "../../types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BrandStatistic = ({ stats }: StatsProps) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Percentage of the component that's visible
  });
  return (
    <>
      {stats.map(({ image, title, value }) => (
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          key={`${title}_${value}`}
          className="flex flex-row justify-start"
        >
          <div className=" rounded-xl bg-salmon-pink-default p-5 justify-center align-middle items-center">
            <Image
              alt={image}
              width={75}
              height={75}
              src={image}
              className=" grayscale-100"
            />
          </div>
          <div className="flex flex-col">
            <p className="stat__subtitle">{title}</p>
            <p className="stat__title">{value}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default BrandStatistic;
