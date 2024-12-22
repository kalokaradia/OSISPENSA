import BlogDetails from "@/components/blog-details";
import Wrapper from "@/layouts/Wrapper";
import { log } from "console";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Blog OSISPENSA",
	description:
		"Blog dari OSIS SMP N 1 Purworejo: Kegiatan, program, dan inspirasi siswa terbaik.",
};

export default function index({ params }: { params: { idx: string } }) {
	return (
		<Wrapper>
			<BlogDetails slugBlog={params.idx} />
		</Wrapper>
	);
}
