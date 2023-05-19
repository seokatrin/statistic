import Image from "next/image";
import React, { useState } from "react";

export const Articles = () => {
  const [isActive, setIsActive] = useState(0);
  const navList = [
    "Value",
    "Momentum",
    "Low beta",
    "Growth",
    "Asset Allocation",
    "Covered Call",
    "Market timing",
    "Technical",
    "Special Cases",
    "Capital Sizing",
  ];
  return (
    <section className="pt-6 max-w-screen-xl mx-auto mt-[84px] bg-white border-1 border-[#EAECF0] rounded-xl shadow p-8">
      <h2 className="text-lightBlack font-semibold text-[40px]">
        Investment Strategy Groups
      </h2>
      <p className="text-greyColor text-base leading-7 m-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu.
      </p>
      <nav className="rounded border-1 border-[#EAECF0] flex mt-[40px] h-[45px] justify-between shadow">
        <ul className=" flex items-center">
          {navList.map((list, index) => (
            <li
              className={`text-base hover:text-linkColor ml-6 text-${
                isActive === index ? "linkColor" : "greyColor"
              } font-semibold cursor-pointer`}
              key={index}
              onClick={() => setIsActive(index)}
            >
              {list}
            </li>
          ))}
        </ul>
        <div className="flex w-[80px] border-l-1 border-[#EAECF0]">
          <button className="w-[40px] flex justify-center items-center hover:bg-linkColor transition delay-200">
            <Image src="/prev.svg" alt="prev" width={8} height={14} />
          </button>
          <button className="w-[40px] flex justify-center items-center hover:bg-linkColor transition delay-200">
            <Image src="/next_i.svg" alt="next" width={8} height={14} />
          </button>
        </div>
      </nav>
    </section>
  );
};
