import React from "react";

type Props = {
	style_2?: boolean;
};

export default function ProgramOSIS({ style_2 }: Props) {
	return (
		<>
			<section
				className={`features section-padding ${
					style_2 ? "fstyle-2" : ""
				}`}
			>
				<div className="container">
					<div className="row">
						<div className="col-12 wow fadeInUp">
							<div className="section-title text-center">
								<span>Program Sekolah</span>
								<h2>Inovasi dan Program Sekolah Kami</h2>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
							<div className="feature-item">
								<div className="fea-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
									</svg>
								</div>
								<h3>Meningkatkan Prestasi di Semua Bidang</h3>
								<p>
									OSISPENSA mendukung siswa meraih prestasi di
									akademik, seni, olahraga, dan kepemimpinan
									melalui program yang mengembangkan potensi
									mereka.
								</p>
								<span className="fnumber">01</span>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
							<div className="feature-item">
								<div className="fea-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z" />
									</svg>
								</div>
								<h3>Program Peduli Lingkungan</h3>
								<p>
									Program ini bertujuan untuk meningkatkan
									kesadaran siswa dalam menjaga kebersihan dan
									kelestarian lingkungan melalui kegiatan
									seperti bersih-bersih, penghijauan, dan
									pengurangan sampah plastik.
								</p>
								<span className="fnumber">02</span>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
							<div className="feature-item">
								<div className="fea-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512"
									>
										<path d="M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512l325.2 0 75 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z" />
									</svg>
								</div>
								<h3>Kegiatan Pelestarian Budaya Lokal</h3>
								<p>
									Program ini bertujuan untuk memperkenalkan
									dan melestarikan budaya lokal melalui
									kegiatan seperti pelatihan tarian
									tradisional, musik daerah, dan pameran
									kerajinan tangan khas daerah.
								</p>
								<span className="fnumber">03</span>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
							<div className="feature-item">
								<div className="fea-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
									</svg>
								</div>
								<h3>Program Sekolah Sehat</h3>
								<p>
									Program Sekolah Sehat OSISPENSA fokus pada
									penerapan pola makan sehat untuk mendukung
									kesehatan jasmani siswa, dengan edukasi
									tentang gizi seimbang dan makanan bergizi.
								</p>
								<span className="fnumber">04</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
