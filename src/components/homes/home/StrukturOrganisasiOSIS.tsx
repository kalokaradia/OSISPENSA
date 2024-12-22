import React from "react";

type Props = {
	style_2?: boolean;
	style_3?: boolean;
};

export default function StrukturOrganisasiOSIS({ style_2, style_3 }: Props) {
	return (
		<>
			<section
				className={`instructors ${
					style_3 ? "instyle-2 pb120" : "section-padding"
				} ${style_2 ? "instyle-2" : ""}`}
			>
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-md-8 wow fadeInUp">
							<div className="section-title">
								<span>
									Struktur Organisasi OSIS SMP N 1 Purworejo
								</span>
								<h2>
									Mengenal Sosok Inspiratif di Balik OSIS Kami
								</h2>
							</div>
						</div>

						<div className="col-xl-4 col-md-4 align-self-center text-end title_btn wow fadeIn">
							<a href="#" className="bg_btn bt">
								View All
							</a>
						</div>

						<div className="col-xl-3 col-md-6 col-12 wow fadeIn">
							<div className="single-instructor">
								<div className="inimage">
									<img
										src="assets/img/instructor/1.png"
										alt=""
									/>
									<span className="sicon">
										<a href="#">
											<i className="bx bx-plus"></i>
										</a>
									</span>
									<div className="social-link">
										<ul>
											<li>
												<a href="#" className="fb_bg">
													<i className="bx bxl-facebook"></i>
												</a>
											</li>

											<li>
												<a href="#" className="tw_bg">
													<i className="bx bxl-twitter"></i>
												</a>
											</li>

											<li>
												<a href="#" className="li_bg">
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="inbottom">
									<h3>
										<a href="#">Rasya Daffa A.</a>
									</h3>
									<span className="designation">
										Ketua OSIS
									</span>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-md-6 col-12 wow fadeIn">
							<div className="single-instructor">
								<div className="inimage">
									<img
										src="assets/img/instructor/2.png"
										alt=""
									/>
									<span className="sicon">
										<a href="#">
											<i className="bx bx-plus"></i>
										</a>
									</span>
									<div className="social-link">
										<ul>
											<li>
												<a href="#" className="fb_bg">
													<i className="bx bxl-facebook"></i>
												</a>
											</li>

											<li>
												<a href="#" className="tw_bg">
													<i className="bx bxl-twitter"></i>
												</a>
											</li>

											<li>
												<a href="#" className="li_bg">
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="inbottom">
									<h3>
										<a href="#">Ananta Lathifa A.</a>
									</h3>
									<span className="designation">
										Wakil Ketua OSIS
									</span>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-md-6 col-12 wow fadeIn">
							<div className="single-instructor">
								<div className="inimage">
									<img
										src="assets/img/instructor/3.png"
										alt=""
									/>
									<span className="sicon">
										<a href="#">
											<i className="bx bx-plus"></i>
										</a>
									</span>
									<div className="social-link">
										<ul>
											<li>
												<a href="#" className="fb_bg">
													<i className="bx bxl-facebook"></i>
												</a>
											</li>

											<li>
												<a href="#" className="tw_bg">
													<i className="bx bxl-twitter"></i>
												</a>
											</li>

											<li>
												<a href="#" className="li_bg">
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="inbottom">
									<h3>
										<a href="#">...</a>
									</h3>
									<span className="designation">
										Sekretaris OSIS
									</span>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-md-6 col-12 wow fadeIn">
							<div className="single-instructor">
								<div className="inimage">
									<img
										src="assets/img/instructor/4.png"
										alt=""
									/>
									<span className="sicon">
										<a href="#">
											<i className="bx bx-plus"></i>
										</a>
									</span>
									<div className="social-link">
										<ul>
											<li>
												<a href="#" className="fb_bg">
													<i className="bx bxl-facebook"></i>
												</a>
											</li>

											<li>
												<a href="#" className="tw_bg">
													<i className="bx bxl-twitter"></i>
												</a>
											</li>

											<li>
												<a href="#" className="li_bg">
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className="inbottom">
									<h3>
										<a href="#">...</a>
									</h3>
									<span className="designation">
										Bendahara OSIS
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
