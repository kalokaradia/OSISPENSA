import { notFound } from "next/navigation";

// Type for a single blog post
interface BlogPost {
	slug: string;
	image: string;
	title: string;
	content: string[];
	prev: string | null;
	next: string | null;
	date: string;
	author: string;
}

// Blog posts array with explicit type
const blogPosts: BlogPost[] = [
	{
		slug: "outbound-demaji",
		image: "/my-assets/img/kegiatan/outbound-demaji.jpg",
		title: "Serunya Outbound OSIS di Demaji Ecopark",
		content: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui facilis molestias ab quasi repellendus nobis, incidunt, doloribus repudiandae consequatur repellat. Laborum corporis modi exercitationem ea excepturi eveniet repellendus corrupti, autem, iusto odio impedit doloremque saepe facere dignissimos ab, at sapiente repudiandae aut quibusdam nisi?",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit nulla ea? Quas neque officiis sed animi numquam a laborum consectetur quibusdam magnam reprehenderit? Officiis, quia reprehenderit? Vitae laborum, omnis quaerat obcaecati sint molestiae suscipit, ab veniam odit beatae praesentium.",
		],
		prev: null,
		next: "kegiatan-classmeet-jeda-semester-ta-2425",
		date: "22 Des, 2024",
		author: "Kaloka Radia Nanda",
	},
	{
		slug: "kegiatan-classmeet-jeda-semester-ta-2425",
		image: "/my-assets/img/kegiatan/sepakbola-classmeet.jpg",
		title: "Seru dan Penuh Semangat Kegiatan Class Meet di SMP N 1 Purworejo",
		content: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto commodi nihil error quo, iste ipsa at ad sed praesentium ex et, laborum alias nisi. Ut et dolore dolor culpa expedita, aspernatur, quas odit eligendi saepe ratione consectetur minima minus libero, eos magnam hic voluptates repudiandae labore officiis laboriosam nemo. Voluptatem.",
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quas aut enim, voluptatum a vero fuga repellendus cum recusandae molestias rem, veniam quia temporibus sapiente doloribus nihil reprehenderit! Expedita esse consectetur possimus totam itaque!",
		],
		prev: "outbound-demaji",
		next: null,
		date: "23 Des, 2024", // Added date for consistency
		author: "Kaloka Radia Nanda", // Added author for consistency
	},
];

// Type for the BlogDetails component props
interface BlogDetailsProps {
	params: { slug: string };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
	// Find the post by slug
	const post = blogPosts.find((p) => p.slug === params.slug);

	if (!post) return notFound();

	return (
		<section className="blog-details section-padding">
			<div className="container">
				<div className="row">
					<div className=" wow fadeIn">
						<div className="post-inner">
							<div className="post-image blog-main-image">
								<img
									src={post.image}
									alt={post.title}
									className="rounded  shadow"
								/>
							</div>
							<div className="entry-content">
								<h1 className="mb-3">{post.title}</h1>
								<p>
									<i className="bx bx-calendar text-primary"></i>{" "}
									{post.date}
								</p>
								<p>
									<i className="bx bx-user text-primary"></i>{" "}
									{post.author}
								</p>
								<hr />
								{post.content.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>
							<div className="post-nav pnavigation">
								{post.prev && (
									<a
										href={`/blog-details/${post.prev}`}
										className="prev-pro"
									>
										Previous Post
									</a>
								)}
								{post.next && (
									<a
										href={`/blog-details/${post.next}`}
										className="next-pro"
									>
										Next Post
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
