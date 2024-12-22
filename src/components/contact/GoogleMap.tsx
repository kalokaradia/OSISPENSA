import React from "react";

export default function GoogleMap() {
	return (
		<>
			<section className="google_map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.4157827055097!2d110.0032905218632!3d-7.71924628309584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aebcda1372f75%3A0x25e0674fa1f6f5f8!2sSMP%20Negeri%201%20Purworejo!5e0!3m2!1sid!2sid!4v1734862252899!5m2!1sid!2sid"
					width="600"
					height="450"
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>
		</>
	);
}
