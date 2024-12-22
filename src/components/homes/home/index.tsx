import React from "react";
import HeaderHome from "@/layouts/headers/HeaderHome";
import HeroHomeOne from "./HeroHomeOne";
import ProgramOSIS from "./ProgramOSIS";
import TentangKetuaOSIS from "./TentangKetuaOSIS";
import DataSpensa from "./DataSpensa";
import KegiatanOSIS from "./KegiatanOSIS";
import EkstrakulikulerSpensa from "./EkstrakulikulerSpensa";
import ProsesKerjaOSIS from "./ProsesKerjaOSIS";
import StrukturOrganisasiOSIS from "./StrukturOrganisasiOSIS";
import VideoProfilSpensa from "./VideoProfilSpensa";
import AnggotaOSIS from "./AnggotaOSIS";
import BrandHomeOne from "./BrandHomeOne";
import BlogHome from "./BlogHome";
import FooterOne from "@/layouts/footers/FooterOne";

export default function HomeOne() {
	return (
		<>
			<HeaderHome />
			<HeroHomeOne />
			<ProgramOSIS />
			<TentangKetuaOSIS />
			<DataSpensa />
			<KegiatanOSIS />
			<EkstrakulikulerSpensa />
			<ProsesKerjaOSIS />
			<StrukturOrganisasiOSIS />
			<VideoProfilSpensa />
			<AnggotaOSIS />
			{/* <BrandHomeOne /> */}
			<BlogHome />
			<FooterOne />
		</>
	);
}
