import HeaderOne from "@/layouts/headers/HeaderHome";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import InstructorsHomeOne from "../homes/home/StrukturOrganisasiOSIS";
import FooterOne from "@/layouts/footers/FooterOne";

export default function Instructors() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Instructors" subtitle="Instructors" />
			<InstructorsHomeOne />
			<InstructorsHomeOne style_2={true} style_3={true} />
			<FooterOne />
		</>
	);
}
