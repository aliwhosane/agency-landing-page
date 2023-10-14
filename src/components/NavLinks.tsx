import VerticalSeperator from "@/app/icons/VerticalSeperator";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { HeaderLinks } from "../../constants";
import ChevronDown from "@/app/icons/ChevronDown";
import ChevronUp from "@/app/icons/ChevronUp";

type NavlinkProps = {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
};

const NavLinks = ({ toggleMenu }: NavlinkProps) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const links = HeaderLinks;
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => toggleMenu(false)}
            >
              <Link href={link.link}>{link.name}</Link>
              {/* <span className="text-xl md:hidden inline">
                {heading === link.name ? <ChevronUp /> : <ChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ChevronDown />
              </span> */}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-2">
                    {link.sublinks?.map((slink) => (
                      <div key={slink.name}>
                        <li
                          onClick={() => toggleMenu(false)}
                          className="text-sm text-gray-600 my-2.5"
                        >
                          <Link
                            href={slink.link}
                            className="hover:text-primary"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div>
            {/* sublinks */}
            {link.sublinks?.map((slinks) => (
              <div key={slinks.name}>
                <div>
                  <div className={"md:hidden"}>
                    <li
                      onClick={() => toggleMenu(false)}
                      className="py-3 pl-14"
                    >
                      <Link href={slinks.link}>{slinks.name}</Link>
                    </li>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
