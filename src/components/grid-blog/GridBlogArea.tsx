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

export default function GridBlogArea() {
	return (
		<section className="blog bstyle-2 section-padding">
			<div className="container">
				<div className="row">
					{blogPosts.map((post, index) => (
						<div
							className="col-xl-4 col-md-6 col-12 wow fadeIn"
							key={index}
						>
							<div className="blog-item">
								<div className="blog-image">
									<img
										src={post.image}
										alt="image"
										className={"blog-image"}
									/>
								</div>
								<div className="blog-content">
									<div className="bmeta">
										<span>
											<i className="bx bx-time-five"></i>{" "}
											{post.date}
										</span>
										<span className="bcat">
											<a href="#">{post.category}</a>
										</span>
									</div>
									<h3>
										<Link href={post.link}>
											{post.title}
										</Link>
									</h3>
									<Link href={post.link} className="bbtn">
										Explore More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
