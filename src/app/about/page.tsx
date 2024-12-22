import React from "react";

import type { Metadata } from "next";
import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";
export const metadata: Metadata = {
	title: "About OSISPENSA",
	description:
		"Kenali lebih dekat OSISPENSA, organisasi siswa SMP N 1 Purworejo yang berkomitmen untuk menginspirasi, memimpin, dan berkolaborasi. Dengan berbagai kegiatan inovatif dan semangat kepemimpinan, OSISPENSA adalah wujud nyata siswa berprestasi dan peduli.",
};

export default function index() {
	return (
		<Wrapper>
			<About />
		</Wrapper>
	);
}
