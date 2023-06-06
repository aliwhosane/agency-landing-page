import React from "react";
import Link from "next/link";

const MoreInfo = () => {
  return (
    <section className="flex flex-col text-center items-center justify-center text-white p-10">
      <h1 className=" text-3xl font-Lexend font-extabold">
        More Info coming soon...
      </h1>
      <Link href={"/"}>
        <p className=" underline cursor-pointer">back to home page</p>
      </Link>
    </section>
  );
};

export default MoreInfo;
