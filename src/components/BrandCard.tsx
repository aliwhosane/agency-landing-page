import Image from "next/image";
import { BrandCardProps } from "../../types";
import Link from "next/link";

const BrandCard = ({ name, image, desc, link }: BrandCardProps) => {
  return (
    <Link href={link}>
      <div className="brand-card group group-hover:shadow-lg">
        {/* <p className="flex mt-6 text-[32] font-extrabold"></p> */}
        <div className="relative w-full h-40 my-3">
          <Image
            src={image}
            fill
            priority
            alt={name}
            className="object-contain self-center p-4 grayscale-100 group-hover:grayscale-0 "
          />
        </div>
        <div className="brand-card__content justify-center">
          <h2 className="brand-card__content-title self-center ">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
