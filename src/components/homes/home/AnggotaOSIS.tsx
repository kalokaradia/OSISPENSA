"use client";
import React, { useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const dataAnggota = [
	{ name: "Rasya DaffaA.", tugas: "Ketua OSIS", gambar: "" },
	{ name: "Ananta Lathifa A.", tugas: "Wakil Ketua OSIS", gambar: "" },
	{ name: "Panji", tugas: "", gambar: "" },
	{ name: "Gita", tugas: "", gambar: "" },
	{ name: "Kevin", tugas: "", gambar: "" },
	{ name: "Rafika", tugas: "", gambar: "" },
	{ name: "Kaloka Radia Nanda", tugas: "Sekbid IT", gambar: "" },
	{ name: "Falah Yorissan Akbar", tugas: "Sekbid Olahraga", gambar: "" },
	{ name: "Danish Setya Nafisa", tugas: "", gambar: "" },
	{ name: "Juninda Rahma Sari", tugas: "", gambar: "" },
];

export default function AnggotaOSIS() {
	return (
		<>
			<section className="review section-padding">
				<div className="container">
					<div className="row">
						<div className="col-10 wow fadeInUp">
							<div className="section-title">
								<span>Anggota OSIS SMP N 1 Purworejo</span>
								<h2>Mengenal Anggota OSIS SMP N 1 Purworejo</h2>
							</div>
						</div>

						<div className="col-xl-12 wow fadeIn">
							<div className="review-slider owl-carousel owl-loaded owl-drag">
								<Swiper
									slidesPerView={3}
									spaceBetween={30}
									loop={true}
									pagination={{
										el: ".owl-dots",
										clickable: true,
									}}
									modules={[Autoplay, Navigation, Pagination]}
									navigation={{
										nextEl: ".owl-next",
										prevEl: ".owl-prev",
									}}
									autoplay={{
										delay: 3000,
										disableOnInteraction: false,
									}}
									centeredSlides={true}
									breakpoints={{
										0: {
											slidesPerView: 1,
										},
										768: {
											slidesPerView: 2,
										},
										1200: {
											slidesPerView: 3,
										},
									}}
									className="owl-stage-outer"
								>
									{dataAnggota.map((anggota, index) => (
										<SwiperSlide
											key={index}
											className="owl-item"
											style={{
												width: "408.667px",
												marginRight: "35px",
											}}
										>
											<div className="review-item">
												<div className="rimage">
													<img
														src={anggota.gambar}
														alt={`Review oleh ${anggota.name}`}
													/>
												</div>

												<div className="rev-content">
													<h4>{anggota.name}</h4>
													<p>{anggota.tugas}</p>
												</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>

								<div className="owl-nav">
									<button
										type="button"
										role="presentation"
										className="owl-prev"
									>
										<i className="bx bx-chevrons-left"></i>
									</button>
									<button
										type="button"
										role="presentation"
										className="owl-next"
									>
										<i className="bx bx-chevrons-right"></i>
									</button>
								</div>

								<div className="owl-dots"></div>
							</div>
						</div>
					</div>
				</div>

				<ul className="circles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</section>
		</>
	);
}
