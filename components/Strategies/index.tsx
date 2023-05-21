import Image from "next/image";
import React, { useState } from "react";

import { Swiper as Slider, SwiperSlide } from 'swiper/react';
import { animated, useInView } from '@react-spring/web';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from "swiper";
import { AreaChart } from '../AreaChart';

export const Strategies = () => {
  const portfoliolist = [
    "Strategy Quality",
    "Best Leverage",
    "Optimal Hedging",
    "Compare Strategies",
  ];

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      delay: 200
    })

  );  

  const series = [
    [1561377266788, 275],
    [1561494503747, 276],
    [1562828310620, 261],
    [1565714971327, 250],
    [1567774393040, 240],
    [1567908696979, 241],
    [1568873492186, 240],
    [1569442320409, 258],
    [1573889267996, 235],
    [1588471592802, 250],
    [1592320363319, 265],
    [1593852047698, 248],
    [1596673370357, 264],
    [1602765200836, 240],
    [1606485003027, 245],
    [1606650757474, 231],
    [1607292780166, 232],
    [1608761448001, 237],
    [1608994754263, 228],
    [1610924777482, 225],
    [1612469691380, 226],
    [1612977077525, 240],
    [1613002424805, 248],
    [1614035173365, 240],
    [1615703156294, 249],
    [1618368406615, 259],
    [1619147093977, 268],
    [1620660507520, 243],
    [1622080636725, 245],
    [1622594036271, 250],
    [1632316002740, 248],
    [1632362889707, 271],
    [1633161414285, 273],
    [1634734089302, 260],
    [1639136977439, 245],
    [1641956204593, 268],
    [1643993471042, 236],
    [1646516288828, 235],
    [1649770694624, 228],
    [1651686097769, 229],
    [1652645771455, 221],
    [1661780907956, 245],
    [1662506505842, 249],
    [1665063971028, 239],
    [1667207720487, 244],
    [1675656374153, 278],
    [1676407718163, 270],
    [1680174502776, 250],
    [1680288183528, 248],
    [1683789231462, 236]
  ]
 
  const strategies = {
    title: 'Multiples Valuation',
    series,
    returns: 31.53,
    sharpie: 0.04,
    maxDD: 8.55
  };
  const [swiperI, setSwiperInstance] = useState<any>(null);

  return (
    <section className="pt-6 max-w-screen-xl mx-auto">
      <animated.div ref={ref} style={springs}>
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
            <div className="flex justify-between px-6">
              <button onClick={() => swiperI && swiperI.slidePrev()} >
                <Image
                  src="/prev-icon.svg"
                  alt="prev"
                  width={24}
                  height={24}
                  className="hover:opacity-70"

                />
              </button>
              <div className="w-[752px]">
                <Slider
                  modules={[Navigation, Pagination, A11y]}
                  navigation
                  spaceBetween={10}
                  slidesPerView={4}
                  onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                  <SwiperSlide><AreaChart strategies={strategies} isSmall /></SwiperSlide>
                  <SwiperSlide><AreaChart strategies={strategies} isSmall /></SwiperSlide>
                  <SwiperSlide><AreaChart strategies={strategies} isSmall /></SwiperSlide>
                  <SwiperSlide><AreaChart strategies={strategies} isSmall /></SwiperSlide>
                  <SwiperSlide><AreaChart strategies={strategies} isSmall /></SwiperSlide>
                </Slider>
              </div>

              <button onClick={() => swiperI && swiperI.slideNext()} >
                <Image
                  src="/next-icon.svg"
                  alt="next"
                  width={24}
                  height={24}
                  className="hover:opacity-70"
                />
              </button>
            </div>

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
                width={420}
                height={206}
              />
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

