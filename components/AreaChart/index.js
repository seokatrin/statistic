import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import PropTypes from 'prop-types';
import Image from 'next/image';

const AreaChart = ({ strategies }) => {
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
				formatter: (value) => "$" + value
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
	const ChartSeries = [{
		name: '',
		data: strategies.series
	}];

	return (
		<div className="max-w-[421px] ml-10 rounded border-1 border-[#EAECF0] pt-6 ">
			<h4 className='text-lightBlack font-semibold text-base px-4'>{strategies.title}</h4>
			<Chart options={options} series={ChartSeries} type="area" height={170} width={380} />
			<div className='flex justify-around px-4'>
				<div>
					<p className='text-xs text-lightGrey'>5y Returns</p>
					<p className='text-base text-[#120F35] pt-[8px]'>{strategies.returns}</p>
				</div>
				<div>
					<p className='text-xs text-lightGrey'>Sharpie</p>
					<p className='text-base text-[#120F35] pt-[8px]'>{strategies.sharpie}</p>
				</div>
				<div className='flex flex-col items-center justify-center w-[104px]'>
					<p className='text-xs text-lightGrey'>Max DD</p>
					<p className='text-base text-[#120F35] pt-[8px]'>{strategies.maxDD}</p>
				</div>
			</div>
			<div className='flex border-t-1 border-[#EAECF0] mt-4'>
				<div className="py-[18px] flex justify-center w-[50%] border-r-1 border-[#EAECF0]">
					<Image
						src="/bx_analyse.svg"
						alt="analise"
						width={20}
						height={20}
					/>
					<p className='text-[#475467] ml-[5px] text-md'>Analyse</p>
				</div>
				<div className="py-[18px] flex justify-center w-[50%] ">
					<Image
						src="/plus.svg"
						alt="analise"
						width={20}
						height={20}
					/>
					<p className='text-[#475467] ml-[5px] text-md'>Add to Portfolio</p>
				</div>
			</div>
		</div>


	);
};


export default AreaChart;