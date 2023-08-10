import Image from "next/image";
import Link from "next/link";
import { ServiceCardProps } from "../../types";

const ServiceCard = ({ image, desc, name, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <Link href={link}>
        <div className="service-card__content">
          <h2 className="service-card__content-title">{name}</h2>
        </div>
        <p className="flex mt-6 text-[32] font-extrabold"></p>
        <div className="relative w-full h-40 my-3">
          <Image
            src={image}
            width={50}
            height={50}
            priority
            alt={name}
            className=" self-center p-12"
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
    </div>
  );
};

export default ServiceCard;
