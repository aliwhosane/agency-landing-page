import Image from "next/image";
import { StatsProps } from "../../types";

const BrandStatistic = ({ stats }: StatsProps) => {
  return (
    <>
      {stats.map(({ image, title, value }) => (
        <div key={`${title}_${value}`} className="flex flex-row justify-start">
          <div className=" rounded-xl bg-salmon-pink-default p-5 justify-center align-middle items-center">
            <Image
              alt={image}
              width={75}
              height={75}
              src={"/views.svg"}
              className=" grayscale-100"
            />
          </div>
          <div className="flex flex-col">
            <p className="stat__subtitle">{title}</p>
            <p className="stat__title">{value}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandStatistic;
