"use client";

import React from "react";

export default function ContactForm() {
	return (
		<>
			<section className="contact_us section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 wow fadeIn">
							<div className="contact_content">
								<img
									src="my-assets/img/kegiatan/rapat-classmeeting2.jpg"
									alt="image"
								/>
								<div className="contact_info">
									<div className="row">
										<div className="col-xl-4 col-md-4 ">
											<div className="contact_list">
												<div className="cicon">
													<i className="bx bx-phone-call"></i>
												</div>
												<div className="cinfo_content">
													<h4>For any Query?</h4>
													<p>
														<span>
															(0275) 321 405
														</span>
													</p>
												</div>
											</div>
										</div>

										<div className="col-xl-4 col-md-4">
											<div className="contact_list">
												<div className="cicon">
													<i className="bx bx-envelope"></i>
												</div>
												<div className="cinfo_content">
													<h4>Write email Us</h4>
													<p>
														<span>
															admin@example.com
														</span>
													</p>
												</div>
											</div>
										</div>

										<div className="col-xl-4 col-md-4">
											<div className="contact_list">
												<div className="cicon">
													<i className="bx bx-map"></i>
												</div>
												<div className="cinfo_content">
													<h4>Visit anytime</h4>
													<p>SMP N 1 Purworejo</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-6 wow fadeIn">
							<div className="contact-form align-self-center">
								<div className="section-title">
									<span>Kirimi Kami Pesan</span>
									<h2>Jangan ragu untuk menulis</h2>
								</div>

								<form onSubmit={(e) => e.preventDefault()}>
									<div className="row">
										<div className="col-xl-6">
											<input
												type="text"
												placeholder="Masukkan Nama"
												className="form-control"
											/>
										</div>

										<div className="col-xl-6">
											<input
												type="email"
												placeholder="Masukkan Email"
												className="form-control"
											/>
										</div>

										<div className="col-xl-6">
											<input
												type="text"
												placeholder="Masukkan Subjek"
												className="form-control"
											/>
										</div>

										<div className="col-xl-6">
											<input
												type="text"
												placeholder="Masukkan Telepon"
												className="form-control"
											/>
										</div>

										<div className="col-12">
											<textarea
												placeholder="Masukkan Pesan"
												className="form-control"
											></textarea>
										</div>

										<div className="col-12">
											<input
												type="submit"
												className="bg_btn bt"
												value="Kirim Pesan"
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
