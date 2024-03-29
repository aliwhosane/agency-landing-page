import Image from "next/image";
import { footerLinks } from "../../constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-5 border-t border-gray-100 bg-primary-blue-100">
      <div className="flex max-md:flex-col flex-wrap gap-5 justify-between px-6 py-10 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={30}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Tape A Tale 2023
            <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Tape A Tale. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
