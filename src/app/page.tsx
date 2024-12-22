import HomeOne from "@/components/homes/home";
import React from "react";

import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
export const metadata: Metadata = {
	title: "OFFICIAL WEBSITE OF OSISPENSA",
	description: "Website resmi OSIS SMP N 1 Purworejo",
};

export default function index() {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
}
