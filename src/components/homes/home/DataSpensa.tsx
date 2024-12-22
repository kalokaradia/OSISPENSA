"use client";
import Count from "@/components/common/Count";
import React from "react";

interface CounterType {
	id: number;
	count: number;
	title: string;
	icon: string;
}

const counter_data: CounterType[] = [
	{
		id: 1,
		count: 576,
		title: `Total Siswa`,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#0D5FF9" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>`,
	},
	{
		id: 2,
		count: 45,
		title: `PTK`,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 448 512"><path fill="#0D5FF9" d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>`,
	},
	{
		id: 3,
		count: 34,
		title: `Guru`,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#0D5FF9" d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>`,
	},
	{
		id: 4,
		count: 11,
		title: `Tendik`,
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0D5FF9" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg>`,
	},
];

export default function DataSpensa() {
	return (
		<>
			<section className="counter-up section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12 wow fadeInUp">
							<div className="counter-title text-center">
								<h2>
									Data PTK dan PD{" "}
									<span>SMP N 1 Purworejo</span>
								</h2>
							</div>
						</div>
						{counter_data.map((item, i) => (
							<div
								key={i}
								className="col-xl-3 col-md-6 col-12 wow fadeIn"
							>
								<div className="counter-item">
									<div
										className="cicon"
										dangerouslySetInnerHTML={{
											__html: item.icon,
										}}
									></div>
									<h4>
										<Count number={item.count} />
									</h4>
									<p>{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
