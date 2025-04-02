import React from "react";
import "../styles/homeMediaSect.css";
import { ReactComponent as SvgCounterDot } from "../assets/counterDot.svg";

const HomeMediaSect = ({
	children,
	defaultCss,
	itemsFound,
}: {
	children: React.ReactNode;
	defaultCss: string;
	itemsFound: number;
}) => {
	return (
		<div className={defaultCss + "-home-media-sect sect-support"}>
			<div className="sect-header ">
				<div className="sect-title-space">
					<SvgCounterDot className="sect-close-dot" />
					<h1 className="sect-title">{defaultCss}</h1>
					<h3 className="sect-found">
						{" "}
						Found {itemsFound} {defaultCss}
					</h3>
				</div>
				<button className={defaultCss + " filter-button"}>Filter</button>
			</div>
			{children}
		</div>
	);
};

export default HomeMediaSect;
