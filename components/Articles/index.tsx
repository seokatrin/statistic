import Image from "next/image";
import React, { useState } from "react";
import AreaChart from "../AreaChart";

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
  const series = [
    {
      "x": "02.01.19",
      "y": "205"
    },
    {
      "x": "03.01.19",
      "y": "222"
    },
    {
      "x": "06.01.19",
      "y": "211"
    },
    {
      "x": "02.01.20",
      "y": "239"
    },
    {
      "x": "05.01.20",
      "y": "217"
    },
    {
      "x": "10.01.20",
      "y": "265"
    },
    {
      "x": "02.01.21",
      "y": "260"
    },
    {
      "x": "04.01.21",
      "y": "222"
    },
    {
      "x": "05.01.21",
      "y": "256"
    },
    {
      "x": "06.01.21",
      "y": "277"
    },
    {
      "x": "11.01.21",
      "y": "269"
    },
    {
      "x": "02.01.22",
      "y": "231"
    },
    {
      "x": "03.01.22",
      "y": "225"
    },
    {
      "x": "04.01.22",
      "y": "276"
    },
    {
      "x": "05.01.22",
      "y": "244"
    },
    {
      "x": "02.01.23",
      "y": "258"
    },
    {
      "x": "03.01.23",
      "y": "224"
    },
    {
      "x": "05.01.23",
      "y": "252"
    },
    {
      "x": "06.01.23",
      "y": "263"
    },
    {
      "x": "07.01.23",
      "y": "229"
    }]
    const strategies = {
      title: 'Multiples Valuation',
      series,
      returns: 31.53,
      sharpie: 0.04,
      maxDD: 8.55
    }
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
      <div className="flex justify-between mt-10">
        
        <div className="w-auto"></div>
        <AreaChart strategies={strategies} />
      </div>
    </section>
  );
};
