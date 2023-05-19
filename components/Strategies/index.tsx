import Image from "next/image";
import React from "react";

export const Strategies = () => {
  const portfoliolist = [
    "Strategy Quality",
    "Best Leverage",
    "Optimal Hedging",
    "Compare Strategies",
  ];
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
// bg-analize bg-bottom
