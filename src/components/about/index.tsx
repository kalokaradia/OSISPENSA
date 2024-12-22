import React from "react";
import HeaderOne from "@/layouts/headers/HeaderHome";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import FeatureHomeOne from "../homes/home/ProgramOSIS";
import AboutHomeOne from "../homes/home/TentangKetuaOSIS";
import CounterHomeOne from "../homes/home/DataSpensa";
import InstructorsHomeOne from "../homes/home/StrukturOrganisasiOSIS";

export default function About() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="About Us" subtitle="About Us" />
			<FeatureHomeOne />
			<AboutHomeOne />
			<CounterHomeOne />
			<InstructorsHomeOne style_2={true} />
			<FooterOne />
		</>
	);
}
