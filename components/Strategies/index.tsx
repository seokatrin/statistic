import Image from "next/image";
import React from "react";
import AreaChart from "../AreaChart";

export const Strategies = () => {
  const portfoliolist = [
    "Strategy Quality",
    "Best Leverage",
    "Optimal Hedging",
    "Compare Strategies",
  ];
  // const series = [
  //   // { x: "2023-04-16",y: 11424},
  //   { y: 200, x: "2020-04-17" },
  //   { y: 223, x: "2021-04-18" },
  //   {y: 258, x: "2021-04-26"},
  //   { y: 240, x: "2021-04-30" },
  //   { y: 280, x: "2022-04-19" },
  //   { y: 260, x: "2022-04-20" },
  //   { y: 220, x: "2022-04-21" },
  //   { y: 280, x: "2023-04-22" },
  //   // { y: 23148, x: "2023-04-23" },
  //   // {y: 23148, x: "2023-04-23"},
  //   // {y: 22459, x: "2023-04-24"},
  //   // {y: 20635, x: "2023-04-25"},
  //   // {y: 24680, x: "2023-04-26"},
  //   // {y: 24934, x: "2023-04-27"},
  //   // {y: 34276, x: "2023-04-28"},
  //   // {y: 29207, x: "2023-04-29"},
  //   // {y: 24657, x: "2023-04-30"},
  //   // {y: 22563, x: "2023-05-01"},
  //   // {y: 17145, x: "2023-05-02"},
  //   // {y: 17518, x: "2023-05-03"},
  //   // {y: 15281, x: "2023-05-04"},
  //   // {y: 17534, x: "2023-05-05"},
  //   // {y: 17465, x: "2023-05-06"},
  //   // {y: 15576, x: "2023-05-07"},
  // ];
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
    }
    
    // {
    //   "x": "2023-06-04",
    //   "y": "220"
    // },
    // {
    //   "x": "2022-33-22",
    //   "y": "266"
    // },
    // {
    //   "x": "2022-01-06",
    //   "y": "240"
    // },
    // {
    //   "x": "2020-14-15",
    //   "y": "249"
    // },
    // {
    //   "x": "2022-53-03",
    //   "y": "254"
    // },
    // {
    //   "x": "2020-10-19",
    //   "y": "232"
    // },
    // {
    //   "x": "2023-16-13",
    //   "y": "271"
    // },
    // {
    //   "x": "2023-32-14",
    //   "y": "280"
    // },
    // {
    //   "x": "2019-20-19",
    //   "y": "209"
    // },
  ]
  return (
    <section className="pt-6 max-w-screen-xl mx-auto">
      <div className="max-w-full flex justify-center">
        <div className="p-6 border-1 border-[#EAECF0] rounded-xl w-[1236px] bg-white shadow">
          <h2 className="text-lightBlack font-semibold text-[40px]">
            Top Strategies
          </h2>
          <p className="text-greyColor text-base leading-7 m-2.5">
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
            amet. Pellentesque commodo lacus at sodales sodales. Quisque
            sagittis orci ut diam condimentum, vel euismod erat placerat. In
            iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="ml-6 rounded-xl w-[420px] bg-white pt-[40px]  border-1 border-[#EAECF0] text-lightBlack shadow">
          <div className="pl-[40px]">
            <p className="font-semibold text-[40px]">Analyze Your Portfolio</p>
            <ul className="font-normal text-base mt-7">
              {portfoliolist.map((list, index) => (
                <li className="mt-5 flex" key={index}>
                  <Image
                    src="/ok.svg"
                    className="mr-[19px]"
                    alt="ok"
                    width={24}
                    height={24}
                  />
                  {list}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/analize.svg"
              alt="Analyze Your Portfolioi"
              className="dark:invert"
              width={420}
              height={206}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

