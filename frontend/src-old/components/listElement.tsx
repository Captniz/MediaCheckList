import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/listElement.css";
import { ReactComponent as SvgCounterDot } from "../assets/counterDot.svg";
import { ReactComponent as SvgAddPage } from "../assets/addPage.svg";
import { ReactComponent as SvgSeparator } from "../assets/separator.svg";
import CircularProgressBar from "./circularProgressBar";

const ListElement = ({
	defaultClass,
	totUnits,
	completedUnits,
	status,
	genre,
	saga,
}: {
	defaultClass: string;
	totUnits: number;
	completedUnits: number;
	status: string;
	genre: string;
	saga: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation(); // Get current URL path

	// Define an explicit mapping of paths to colors
	const pathColors: Record<string, string> = {
		"/games": "games",
		"/anime": "anime",
		"/movies": "movies",
		"/books": "books",
		"/music": "music",
		"/sports": "sports",
	};
	// Use a fallback color if the pathname isn't in the mapping
	const cssClass = pathColors[location.pathname] || defaultClass;

	const statusColors: Record<string, string> = {
		Active: cssClass,
		"On Hold": "on-hold",
		Dropped: "dropped",
		Planned: "planned",
		Completed: "completed",
	};

	const statusClass = statusColors[status] || "";

	return (
		<div>
			<div className={"list-element " + cssClass}>
				<div className="left-side-container">
					<div className="counter-containter">
						<p className="counter-num">1</p>
						<button
							className="collapse-button"
							style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
							onClick={() => setIsOpen(!isOpen)}
						>
							<SvgCounterDot className={cssClass + " counter-dot"} />
						</button>
					</div>
					<div className="title-space">
						<h1 className="title">Book 1</h1>
						<p className="author">Pippo</p>
					</div>
				</div>
				<div className="center-container">
					<div className="progress-counter">
						<button onClick={() => {}}>
							<SvgAddPage className={cssClass + " add-page"} />
						</button>
						<div className="progress-num">
							<span>{completedUnits}</span>
							<span>/</span>
							<span>{totUnits}</span>
						</div>
						<CircularProgressBar progress={40} cssClass={cssClass} />
					</div>
					<div className="status-field-container">
						<span className="field-tag">Status</span>
						<span className={"status " + statusClass}>{status}</span>
					</div>
				</div>
				<div className="right-side-container">
					<div className="element-field-container">
						<span className="field-tag">Genre</span>
						<span className="field">{genre}</span>
					</div>
					<div className="element-field-container">
						<span className="field-tag">Saga</span>
						<span className="field">{saga}</span>
					</div>
				</div>
			</div>
			<div
				style={{
					maxHeight: isOpen ? 300 : 0,
					paddingBottom: isOpen ? "1vw" : 0,
					paddingTop: isOpen ? "1vw" : 0,
					overflow: "hidden",
					transition: "max-height 0.2s ease-in",
				}}
				className="dropdown-container"
			>
				<img className="dropdown-image" src="/test.jpg" alt="bho" />
				<div className="dropdown-central-info">
					<div className="central-info">
						<span className="big-title">Title</span>
						<div className="subtitle-container">
							<span className="big-author">Author Name</span>
							<SvgSeparator className={cssClass + " separator"} />
							<span className="big-date">1/1/1970</span>
						</div>
						<div className="buttons-container">
							<button className={defaultClass + " action-button"}>
								Modify
							</button>
							<button className={defaultClass + " action-button"}>Open</button>
						</div>
					</div>
					<div className="description-area">desc here</div>
					
				</div>
				<div className="dropdown-right-info"></div>
			</div>
		</div>
	);
};

export default ListElement;
