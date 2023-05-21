import Image from "next/image";
import React, { useState } from "react";
import {AreaChart} from "../AreaChart";
import { animated, useInView } from '@react-spring/web';

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
      delay: 100
    }),

  );
  const series = [
    [1560367503640, 255],
    [1561240478356, 253],
    [1562667395668, 250],
    [1568085173224, 248],
    [1569009084753, 245],
    [1573566502518, 250],
    [1576130800659, 259],
    [1576550309458, 261],
    [1577302898950, 268],
    [1581077658928, 270],
    [1582522376464, 275],
    [1584137599597, 278],
    [1586491668079, 278],
    [1593034143767, 260],
    [1594401221915, 265],
    [1595081177216, 260],
    [1598450813927, 250],
    [1599769733136, 259],
    [1600989730908, 259],
    [1601406708006, 268],
    [1603811259256, 270],
    [1606584523017, 275],
    [1606744914430, 264],
    [1609257121552, 258],
    [1610559698803, 250],
    [1610862494193, 248],
    [1615543890680, 243],
    [1618332604158, 240],
    [1619324495638, 239],
    [1628328705057, 235],
    [1629938054987, 237],
    [1630999324334, 230],
    [1632012507566, 223],
    [1632943290855, 223],
    [1638094777105, 221],
    [1639557677818, 221],
    [1640899205929, 223],
    [1649478513517, 229],
    [1649610387659, 238],
    [1650286556434, 240],
    [1650370944476, 245],
    [1651040280471, 260],
    [1653215191904, 268],
    [1661451532930, 269],
    [1662749309015, 270],
    [1670036313694, 271],
    [1671713259258, 275],
    [1676382242156, 278],
    [1681124003299, 274],
    [1682874616587, 260],];
  const strategies = {
    title: 'Multiples Valuation',
    series,
    returns: 31.53,
    sharpie: 0.04,
    maxDD: 8.55
  };
  const options = {
    chart: {
      type: 'area',
      width: "380px",
      defaultLocale: 'ru',
      locales: [require('apexcharts/dist/locales/ru.json')],
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        show: false
        // autoSelected: 'zoom'
      },
      animations: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: 'transparent',
    },
    colors: ['#884BD4'],
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['rgba(136, 75, 212, 0)', 'rgba(136, 75, 212, 0.25)'],
        shadeIntensity: 1,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    yaxis: {
      tickAmount: 6,
      title: {
        style: {
          fontSize: '10px',
          fontWeight: 400,
          fontFamily: 'Roboto',
          color: '#9795AD',
        }
      },
      labels: {
        showDuplicates: false,
        formatter: (value: string) => "$" + value
      }
    },
    xaxis: {
      tickAmount: 6,
      labels: {
        format: 'yyyy',
        style: {
          colors: ['#9795AD'],
          fontSize: '10px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      axisBorder: {
        show: false
      },
      type: 'datetime',
      title: {
        text: undefined,
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '10px',
          fontWeight: 400,
          fontFamily: 'Roboto',
          color: '#9795AD',
        },
      },
      axisTicks: {
        show: false
      },
    },
  };
  return (
    <animated.div ref={ref} style={springs}>
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
                className={`text-base hover:text-linkColor ml-6 text-${isActive === index ? "linkColor" : "greyColor"
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
          <div className="w-[421px] ">
            <h3 className="text-lightBlack font-semibold text-2xl">Common Strategies</h3>
            <AreaChart strategies={strategies} isSmall={false} />
            <AreaChart strategies={strategies} isSmall={false} />
          </div>
        </div>
      </section>
    </animated.div>
  );
};
