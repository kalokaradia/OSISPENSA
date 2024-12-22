"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Data kegiatan OSIS
const kegiatanData = [
	{
		id: 1,
		judul: "Outbound Seru di Demaji Ecopark",
		gambar: "/my-assets/img/kegiatan/outbound-demaji.jpg",
		deskripsi:
			"Kegiatan outbound untuk meningkatkan kerjasama tim di Demaji Ecopark. Kegiatan outbound ini diikuti oleh peserta LDK dan DIANPINRU SMP N 1 Purworejo.",
		tanggal: "23 November 2024",
		lokasi: "Demaji Ecopark, Purworejo",
		peserta: "60 Siswa",
	},
	{
		id: 2,
		judul: "Rapat Persiapan Class Meeting",
		gambar: "my-assets/img/kegiatan/rapat-classmeeting.jpg",
		deskripsi:
			"Rapat persiapan yang dilakukan oleh OSIS SMP N 1 Purworejo untuk merencanakan dan mempersiapkan serangkaian kegiatan menarik dalam rangka Class Meeting.",
		tanggal: "13 Desember 2024",
		lokasi: "Aula SMP N 1 Purworejo",
		peserta: "35 Siswa",
	},
	{
		id: 3,
		judul: "Kegiatan Class Meeting",
		gambar: "my-assets/img/kegiatan/sepakbola-classmeet.JPG",
		deskripsi:
			"Class Meeting adalah serangkaian kegiatan yang diadakan oleh OSIS SMP N 1 Purworejo sebagai ajang untuk mempererat hubungan antar siswa dan mengembangkan kreativitas.",
		tanggal: "17 - 20 Desember 2024",
		lokasi: "SMP N 1 Purworejo",
		peserta: "Seluruh Siswa",
	},
];

export default function KegiatanOSIS() {
	return (
		<section className="kegiatan-osis">
			<div className="container">
				<div className="row">
					<div className="col-12 wow fadeInUp">
						<div className="section-title">
							<span>
								Kegiatan-Kegiatan Terbaru OSIS SMP N 1 Purworejo
							</span>
							<h2>Rangkaian Kegiatan OSIS Kami</h2>
						</div>
					</div>

					<div className="col-12 wow fadeIn">
						<div className="kegiatan-slider owl-carousel owl-loaded owl-drag">
							<Swiper
								slidesPerView={3}
								spaceBetween={30}
								loop={true}
								pagination={{ clickable: true }}
								modules={[Autoplay, Navigation]}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								navigation={{
									nextEl: ".owl-next",
									prevEl: ".owl-prev",
								}}
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
								className="kegiatan-slider owl-carousel owl-loaded owl-drag"
							>
								{kegiatanData.map((kegiatan) => (
									<SwiperSlide
										key={kegiatan.id}
										className="single-kegiatan"
									>
										<div className="kegiatan-img">
											<img
												src={kegiatan.gambar}
												alt={kegiatan.judul}
												className="rounded  shadow"
											/>
										</div>

										<div className="kegiatan-content mt-5">
											<h3>{kegiatan.judul}</h3>
											<p>{kegiatan.deskripsi}</p>
											<div className="kegiatan-meta">
												<div className="meta-item">
													<i className="bx bx-calendar text-primary"></i>
													{kegiatan.tanggal}
												</div>
												<div className="meta-item">
													<i className="bx bx-location-plus text-primary"></i>
													{kegiatan.lokasi}
												</div>
												<div className="meta-item">
													<i className="bx bx-user text-primary"></i>
													{kegiatan.peserta}
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
