"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

export default function HeaderHome() {
	const [open, setOpen] = useState(false);
	const [opneMenu, setOpneMenu] = useState(false);

	return (
		<>
			<header id="navigation">
				<div className="container">
					<div className="row">
						<div className="col-30 left-col align-self-center rk_style">
							<div className="site-logo fw-bold fs-4">
								<Link href="/">
									{/* <img
										src="assets/img/logo.svg"
										alt="Edumon"
									/> */}
									OSISPENSA
								</Link>
							</div>
						</div>

						<div className="col-40 justify-content-center d-flex align-self-center">
							<nav id="main-menu">
								<NavMenu />
							</nav>
						</div>
					</div>
				</div>

				<div
					id="sm_menu_ham"
					className={`${opneMenu ? "open" : ""}`}
					onClick={() => setOpneMenu(!opneMenu)}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<MobileMenu opneMenu={opneMenu} />
			</header>
		</>
	);
}
