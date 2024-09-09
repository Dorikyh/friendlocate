import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-dark"
    >


      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-5xl font-extrabold sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight bg-gradient-to-r from-primary to-amber-700 bg-clip-text text-transparent">
                FriendLocate
              </h1>
              <p className="mb-6 leading-relaxed text-gray-500 dark:text-body-color-dark sm:text-lg md:text-xl">
                Localizacion segura para todos
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/dashboard"
                  className="flex items-center rounded-xl bg-primary px-8 py-4 text-2xl text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  <MdSpaceDashboard className="mr-2 text-2xl" />
                  Panel 
                </Link>
                <Link
                  href="/equipo"
                  className="flex items-center rounded-xl bg-gray-500 bg-opacity-50 dark:text-white px-8 py-4 text-base font-semibold text-dark duration-300 ease-in-out hover:bg-black/90 bg-white/10 hover:bg-white/5"
                >
                  <FaUser className="mr-2 text-xl" />
                  Equipo 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;