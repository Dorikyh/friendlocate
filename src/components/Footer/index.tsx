"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-6 max-w-[360px] lg:mb-16">
                <Link href="/" className="flex items-center mb-2 inline-block">
                <FaMapLocation className="text-3xl" />
                <p className="ml-4 text-3xl font-extrabold">FriendLocate</p>
                </Link>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Localizacion segura para todos
                </p>
                <div className="flex items-center text-2xl">
                <Link href="" className="mr-4">
                    <FaXTwitter />
                </Link>
                <Link href="" className="mr-4">
                    <FaInstagram />
                  </Link>
                  <Link href="/">
                  <FaGlobeAmericas />
                  </Link>
                
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
          
            </div>
          </div>

          
        </div>
      </footer>
    </>
  );
};

export default Footer;
