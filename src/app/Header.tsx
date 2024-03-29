"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const burgers = useRef<NodeListOf<Element> | null>(null);
  const menus = useRef<NodeListOf<Element> | null>(null);
  const closes = useRef<NodeListOf<Element> | null>(null);
  const backdrops = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    burgers.current = document.querySelectorAll(".navbar-burger");
    menus.current = document.querySelectorAll(".navbar-menu");
    closes.current = document.querySelectorAll(".navbar-close");
    backdrops.current = document.querySelectorAll(".navbar-backdrop");

    const toggleMenu = () => {
      if (menus.current) {
        for (let menu of [...menus.current]) {
          menu.classList.toggle("hidden");
        }
      }
      setMenuVisible(!menuVisible);
    };

    burgers.current?.forEach((burger) => {
      burger.addEventListener("click", toggleMenu);
    });

    closes.current?.forEach((close) => {
      close.addEventListener("click", toggleMenu);
    });

    backdrops.current?.forEach((backdrop) => {
      backdrop.addEventListener("click", toggleMenu);
    });

    // Cleanup event listeners on component unmount
    return () => {
      burgers.current?.forEach((burger) => {
        burger.removeEventListener("click", toggleMenu);
      });

      closes.current?.forEach((close) => {
        close.removeEventListener("click", toggleMenu);
      });

      backdrops.current?.forEach((backdrop) => {
        backdrop.removeEventListener("click", toggleMenu);
      });
    };
  }, [menuVisible]);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={`/logo-black.png`}
            alt="logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>
        <div className="lg:hidden">
          <div className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </div>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="https://tapeatale.vercel.app/#home"
            >
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="https://tapeatale.vercel.app/#whoarewe"
            >
              Who Are We
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="https://tapeatale.vercel.app/#service"
            >
              Services
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm  text-gray-400 hover:text-gray-500 "
              href="https://tapeatale.vercel.app/#contact"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a> */}
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image
                src={`/logo-black.png`}
                alt="logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="https://tapeatale.vercel.app/#home"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="https://tapeatale.vercel.app/#whoarewe"
                >
                  Who Are We
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="https://tapeatale.vercel.app/#service"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="https://tapeatale.vercel.app/#contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            {/* <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div> */}
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
      {/* <nav className=" sticky top-0 z-10 bg-primary-blue-100 backdrop-filter backdrop-blur-lg bg-opacity-90 border-b border-white">
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
    </nav> */}
    </>
  );
};

export default Header;
