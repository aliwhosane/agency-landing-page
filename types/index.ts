export interface ServiceCardProps {
    link: string;
    image: string;
    name: string;
    desc?: string;
  };

  export interface BrandCardProps {
    name: string;
    image: string;
    desc: string;
    stats?: StatType;
    sections?:BrandDetailsType;
    link: string;
  }

  export interface StatType {
    image: string;
    title: string;
    value: string;
  }

  export interface StatsProps {
    stats:StatType[];
  }

  export interface BrandDetailsType {
    title: string;
    text:string;
  }

  export interface BrandDetailsProps {
    details: BrandDetailsType[];
  }