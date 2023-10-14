"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import NavButton from "@/components/NavButton";
import HamburgerMenu from "./icons/HamburgerMenu";
import CloseButton from "./icons/CloseButton";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  function closeMenu() {
    setMenuVisible(false);
  }

  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            src={"/logo-black.png"}
            alt="logo"
            className="md:cursor-pointer h-9"
          />
          <div
            className="text-3xl md:hidden"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {menuVisible ? <CloseButton /> : <HamburgerMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li onClick={() => setMenuVisible(false)}>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks toggleMenu={setMenuVisible} />
        </ul>
        <div className="md:block hidden">
          <NavButton />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 z-40
      duration-500 ${menuVisible ? "left-0" : "left-[100%]"}
      `}
        >
          <li onClick={() => setMenuVisible(false)}>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks toggleMenu={setMenuVisible} />
          <div className="py-5">
            <NavButton />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
