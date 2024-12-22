import Link from "next/link";
import React from "react";

const blogPosts = [
	{
		id: 1,
		image: "my-assets/img/kegiatan/outbound-demaji.jpg",
		date: "22 Des , 2024",
		category: "Adventure",
		title: "Serunya Outbound OSIS di Demaji Ecopark Bersama Peserta Dianpinru",
		link: "/blog-details/outbound-demaji",
	},
	{
		id: 2,
		image: "my-assets/img/kegiatan/sepakbola-classmeet.jpg",
		date: "22 Des , 2024",
		category: "Sekolah",
		title: "Kegiatan Class Meet SMP N 1 Purworejo",
		link: "kegiatan-classmeet-jeda-semester-ta-2425",
	},
];

export default function BlogHome() {
	return (
		<>
			<section className="blog section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12 wow fadeInUp">
							<div className="section-title text-center">
								<span>
									Blog Terbaru Tentang OSIS SMP N 1 Purworejo
								</span>
								<h2>Temukan Artikel Inspiratif Kami</h2>
							</div>
						</div>

						{blogPosts.map((post) => {
							return (
								<div
									className="col-xl-4 col-md-6 col-12 wow fadeIn"
									key={post.id}
								>
									<div className="blog-item">
										<div className="blog-image">
											<img
												src={`/${post.image}`}
												alt="image"
											/>
										</div>

										<div className="blog-content">
											<div className="bmeta">
												<span>
													<i className="bx bx-time-five"></i>{" "}
													{post.date}
												</span>

												<span className="bcat">
													<span>{post.category}</span>
												</span>
											</div>

											<h3>
												<Link href={post.link}>
													{post.title}
												</Link>
											</h3>
											<Link
												href={post.link}
												className="bbtn"
											>
												Explore More
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
