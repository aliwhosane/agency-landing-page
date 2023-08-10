import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className=" sticky top-0 z-10 bg-primary-blue-100 backdrop-filter backdrop-blur-lg bg-opacity-90 border-b border-white">
      <nav className="max-w-[1440px] flex mx-auto justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={`/logo-black.png`}
            alt="logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>
      </nav>
    </nav>
  );
};

export default Header;
