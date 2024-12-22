import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderHome";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

export default function Contact() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Contact Us" subtitle="Contact Us" />
			<ContactForm />
			<GoogleMap />
			<FooterOne />
		</>
	);
}
