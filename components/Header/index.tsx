import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const links = [
    {
      link: "dashboard",
      title: "Dashboard",
    },
    {
      link: "strategies",
      title: "Strategies",
    },
    {
      link: "analyzer",
      title: "Analyzer",
    },
    {
      link: "community",
      title: "Community",
    },
  ];
  return (
    <header className="fixed bg-darker min-w-full h-20 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center min-h-full ">
        <Image
          src="/stratfinder.svg"
          alt="Stratfinder Logo"
          className="dark:invert"
          width={157}
          height={24}
          priority
        />
        <ul className="flex justify-between items-center text-menuText font-semibold text-sm">
          {links.map(({ link, title }) => (
            <Link
              href="/dashboard"
              key={link}
              className="border-transparent border-b-2 text-white hover:border-white mr-6 transition-all duration-300"
            >
              {title}
            </Link>
          ))}
        </ul>
        <button className="bg-lilac px-5 py-2.5 text-white hover:bg-white hover:text-lilac duration-300 font-semibold text-base w-[185px]">
          Sign Up For Free
        </button>
      </div>
    </header>
  );
};
