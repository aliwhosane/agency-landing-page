import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className=" sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-90 border-b border-gray-800">
      <div className=" max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* <span className=" text-2xl font-semibold text-gray-200">Logo</span> */}
          <Link href={`/`}>
            {" "}
            <Image
              src={"/logo.png"}
              height={30}
              width={100}
              alt="Tape A Tale"
            />
          </Link>
          <div className="flex space-x-4 text-gray-200">
            <Link href={`/`}> Who We Are</Link>
            <Link href={`/`}>Services</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
