import GridBlog from "@/components/grid-blog";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Grid Blog OSISPENSA",
	description:
		"Temukan informasi terkini dan menarik tentang kegiatan OSIS SMP N 1 Purworejo, dari program inspiratif hingga cerita siswa yang memotivasi.",
};

export default function index() {
	return (
		<Wrapper>
			<GridBlog />
		</Wrapper>
	);
}
