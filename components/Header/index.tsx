import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
  const links = [
    {
      link: "/",
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
  const router = useRouter();
  return (
    <header className="fixed  bg-[#2c2c5c] min-w-full h-20 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center min-h-full ">
        <Link href="/">
          <Image
            src="/stratfinder.svg"
            alt="Stratfinder Logo"
            width={157}
            height={24}
            priority
          />
        </Link>
        <ul className="flex justify-between items-center text-menuText font-semibold text-sm ">
          {links.map(({ link, title }, index) => (<li key={link} className="relative h-[26px]  mr-6">
            <Link
              href={link}
              className={`border-transparent border-b-2 text-white  transition-all duration-300 
              hover:before:content-[''] before:block before:w-[32px] before:h-[4px] hover:before:bg-lilac before:absolute before:top-[100%] before:left-[50%] 
              before:translate-x-[-50%] ${(router.pathname == "/" && index === 0) ? "before:bg-lilac" : ""}
              `}
            >
              {title}
            </Link>
          </li>
          ))}
        </ul>
        <button className="bg-lilac px-5 py-2.5 text-white hover:bg-white hover:text-lilac duration-300 font-semibold text-base w-[185px]">
          Sign Up For Free
        </button>
      </div>
    </header>
  );
};

function Line() {
  return <div></div>;
}