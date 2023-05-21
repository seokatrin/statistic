import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Image from 'next/image';

// interface AriaCartProps {
// 	strategies: import('@/types').Strategies;
// 	isSmall: boolean;
// }

export const AreaChart = ({ strategies, isSmall = false } ) => {
	const options = {
		chart: {
			type: "area",
			width: isSmall ? "100px" : "380px",
			defaultLocale: 'ru',
			locales: [require('apexcharts/dist/locales/ru.json')],
			zoom: {
				type: 'y',
				enabled: true,
				autoScaleYaxis: true
			},
			toolbar: {
				show: false
				// autoSelected: 'zoom'
			},
			animations: {
				enabled: true
			},
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
				show: isSmall ? false : true,
				showDuplicates: false,
				formatter: (value) => "$" + value
			}
		},
		xaxis: {
			tickAmount: 6,
			labels: {
				show: isSmall ? false : true,
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
			dataLabels: {
				enabled: false,
			}
		},
	};
	const ChartSeries = [{
		name: '',
		data: strategies.series
	}];

	return (
		<div className={`max-w-[${isSmall ? "180px" : "421px" }] mt-6 rounded border-1 border-[#EAECF0] pt-6 `}>
			<h4 className={`text-lightBlack font-semibold ${isSmall ? "text-sm" : "text-base"} px-4`}>{strategies.title}</h4>
			<Chart options={options} series={ChartSeries} type="area" height={isSmall ? 100 : 170} width={isSmall ? 180 : 420} />
			<div className={`flex justify-around px-4 flex-${isSmall ?  "col" : "row"}`}>
				<div className={`${isSmall ? "flex justify-between items-center mt-3" : ""}`}>
					<p className='text-xs text-lightGrey'>5y Returns</p>
					<p className={`${isSmall ? "text-xs" : "text-base" } text-[#120F35] ${isSmall ? "" : "pt-[8px]"}`}>{strategies.returns}%</p>
				</div>
				<div className={`${isSmall ? "flex justify-between items-center mt-3" : ""}`}>
					<p className='text-xs text-lightGrey'>Sharpie</p>
					<p className={`${isSmall ? "text-xs" : "text-base" } text-[#120F35] ${isSmall ? "" : "pt-[8px]"}`}>{strategies.sharpie}%</p>
				</div>
				<div className={`${isSmall ? "flex justify-between items-center mt-3" : ""}`}>
					<p className='text-xs text-lightGrey'>Max DD</p>
					<p className={`${isSmall ? "text-xs" : "text-base" } text-[#120F35] ${isSmall ? "" : "pt-[8px]"}`}>{strategies.maxDD}%</p>
				</div>
			</div>
			<div className='flex border-t-1 border-[#EAECF0] mt-4 w-full px-[4px]'>
				<div className={`py-[18px] flex justify-center items-center ${isSmall ? "pr-[5px]" :"w-[50%] border-r-1 border-[#EAECF0]"} cursor-pointer hover:bg-[#FAFAFF]`}>
					<Image
						src="/bx_analyse.svg"
						alt="analise"
						width={isSmall ? 12 : 20}
						height={isSmall ? 12 : 20}
					/>
					<p className={`text-[#475467] ml-[5px] text-${isSmall ? "xs": "md"}`}>Analyse</p>
				</div>
				<div className={`py-[18px] flex justify-center items-center ${isSmall ? "w-auto" : "w-[50%]"} cursor-pointer hover:bg-[#FAFAFF]`}>
					<Image
						src="/plus.svg"
						alt="analise"
						width={isSmall ? 12 : 20}
						height={isSmall ? 12 : 20}
					/>
					<p className={`text-[#475467] ml-[5px] text-${isSmall ? "xs": "md"}`}>Add to Portfolio</p>
				</div>
			</div>
		</div>


	);
};

