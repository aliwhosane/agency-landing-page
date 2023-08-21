import React from "react";
import { BrandDetailsProps } from "../../types";

const BrandDetails = ({ details }: BrandDetailsProps) => {
  return (
    <>
      {details.map((detail) => (
        <>
          <h2 className="basic__para-title text-salmon-pink-default mb-4">
            {detail.title}
          </h2>
          <p className="basic__para mt-5">{detail.text}</p>
        </>
      ))}
    </>
  );
};

export default BrandDetails;
