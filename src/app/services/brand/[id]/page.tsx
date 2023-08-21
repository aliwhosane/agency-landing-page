import Image from "next/image";
import { BrandColaborations } from "../../../../../constants";
import BrandStatistic from "@/components/BrandStatistic";
import { BrandDetailsType, StatType, StatsProps } from "../../../../../types";
import BrandDetails from "@/components/BrandDetails";

const BrandDetailPage = ({ params }: { params: { id: string } }) => {
  const { name, link, desc, id, stats, sections } = BrandColaborations.filter(
    (item) => item.id == params.id,
  )[0];
  const propsForStatistics = stats as StatType[];
  return (
    <section className="p-16 lg:w-2/3">
      <h1 className="stat__brand-title text-salmon-pink-default mb-4">
        {name}
      </h1>
      <div className="flex gap-12 flex-col lg:flex-row">
        <BrandStatistic stats={propsForStatistics} />
      </div>
      <p className="basic__para mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum,
        atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi
        iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque
        harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero
        sequi
      </p>
      <BrandDetails details={sections as BrandDetailsType[]} />
    </section>
  );
};

export default BrandDetailPage;
