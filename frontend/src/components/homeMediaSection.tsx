import React from "react";
import "../styles/homeMediaSect.css";
import { ReactComponent as SvgCounterDot } from "../assets/counterDot.svg";

const HomeMediaSect = ({
	children,
	sectionName,
	itemsFound,
}: {
	children: React.ReactNode;
	sectionName: string;
	itemsFound: number;
}) => {
	return (
		<div className="home-media-sect sect-support">
			<div className="sect-header ">
				<div className="sect-title-space">
					<h1 className="sect-title">{sectionName}</h1>
					<h3 className="sect-found">
						{" "}
						Found {itemsFound} <b>active</b> {sectionName}
					</h3>
				</div>
				{/* <button className="filter-button">Filter</button> */}
			</div>
			{children}
		</div>
	);
};

export default HomeMediaSect;
