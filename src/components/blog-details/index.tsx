import React from "react";
import HeaderOne from "@/layouts/headers/HeaderHome";
import Breadcrumb from "../common/Breadcrumb";
import BlogDetailsArea from "./BlogDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";

export default function BlogDetails({ slugBlog }: { slugBlog: string }) {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Blog Details" subtitle="Blog Details" />
			<BlogDetailsArea
				params={{
					slug: slugBlog,
				}}
			/>
			<FooterOne />
		</>
	);
}
