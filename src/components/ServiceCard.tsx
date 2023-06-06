import React from "react";
import Image from "next/image";
import Link from "next/link";
type ServiceCardProps = {
  link: string;
  image: string;
  name: string;
};
const ServiceCard = ({ link, image, name }: ServiceCardProps) => {
  return (
    <div className=" my-8 grid mx-auto p-4 justify-center items-center rounded hover:bg-white bg-gray-200 duration-300 hover:-translate-y-1">
      <Link href={link}>
        <div className="w-full h-3/5 justify-center items-center flex">
          <Image src={image} width={200} height={200} alt="service images" />
        </div>

        <div className="p-5 w-full flex justify-center items-center">
          <p className="text-lg font-bold leading-relaxed text-gray-800 mx-auto">
            {name}
          </p>
          {/* <small className="leading-5 text-gray-500 dark:text-gray-400"></small> */}
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
