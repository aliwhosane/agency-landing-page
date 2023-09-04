"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ServiceCardProps } from "../../types";

const ServiceCard = ({ image, desc, name, link }: ServiceCardProps) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Percentage of the component that's visible
  });
  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.75 }}
      className="service-card group"
    >
      <Link href={link}>
        <div className="service-card__content">
          <h2 className="service-card__content-title">{name}</h2>
        </div>
        <p className="flex mt-6 text-[32] font-extrabold"></p>
        <div className="relative w-full h-40 ">
          <Image
            src={image}
            fill
            priority
            alt={name}
            className=" self-center object-contain"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              {/* <Image
            src={"steering-wheel.svg"}
            width={20}
            height={20}
            alt="steering"
          /> */}
              <p className="text-[14px]">{desc}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
