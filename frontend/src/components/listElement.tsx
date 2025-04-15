import { useState } from "react";
import "../styles/listElement.css";
import { ReactComponent as SvgCounterDot } from "../assets/counterDot.svg";
import { ReactComponent as SvgAddPage } from "../assets/addPage.svg";
import { ReactComponent as SvgSeparator } from "../assets/separator.svg";
import CircularProgressBar from "./circularProgressBar";
import ReactMarkdown from 'react-markdown';

const ListElement = ({
	totUnits,
	completedUnits,
	status,
	genre,
	saga,
	notes
}: {
	totUnits: number;
	completedUnits: number;
	status: string;
	genre: string;
	saga: string;
	notes: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const statusColors: Record<string, string> = {
		Active: "active",
		"On Hold": "on-hold",
		Dropped: "dropped",
		Planned: "planned",
		Completed: "completed",
	};

	const statusClass = statusColors[status] || "";

	return (
		<div
			className="element-container"
			style={{ height: isOpen ? "40vh" : "5vh" }}
		>
			<div className="list-element" style={{ height: isOpen ? "5vh" : "100%" }}>
				<div className="left-side-container">
					<div className="counter-containter">
						<p className="counter-num">1</p>
						<button
							className="collapse-button"
							style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
							onClick={() => setIsOpen(!isOpen)}
						>
							<SvgCounterDot className="counter-dot" />
						</button>
					</div>
					<div className="title-space">
						<h1 className="title">Horus Rising</h1>
						<p className="author">Inio Asano</p>
					</div>
				</div>
				<div className="center-container">
					<div className="progress-counter">
						<button onClick={() => {}}>
							<SvgAddPage className=" add-page" />
						</button>
						<div className="progress-num">
							<span>{completedUnits}</span>
							<span>/</span>
							<span>{totUnits}</span>
						</div>
						<CircularProgressBar
							progress={(completedUnits / totUnits) * 100}
							cssClass="circ-progress"
						/>
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
					height: isOpen ? "31vh" : "0%",
					paddingBottom: isOpen ? "1vw" : 0,
					paddingTop: isOpen ? "1vw" : 0,
					overflow: "hidden",
				}}
				className="dropdown-container"
			>
				<div className="container-left-info">
					<img className="dropdown-image" src="/test.jpg" alt="bho" />
					<div className="container-central-info">
						<div className="central-info">
							<span className="big-title">Horus Rising</span>
							<div className="subtitle-container">
								<span className="big-author">Author Name</span>
								<SvgSeparator className=" separator" />
								<span className="big-date">1/1/1970</span>
							</div>
							<div className="buttons-container">
								<button className=" action-button">Modify</button>
								<button className=" action-button">Open</button>
							</div>
						</div>
						<div className="description-area">
							Under the benevolent leadership of the Immortal Emperor the
							Imperium of Man has stretched out across the galaxy. On the eve of
							victory, the Emperor leaves the front lines, entrusting the great
							crusade to his favorite son, Horus. Promoted to Warmaster, the
							idealistic Horus tries to carry out the Emperor'sgrand design, all
							the while the seeds of heresy and rebellion have been sowed
							amongst his brothers.
						</div>
					</div>
				</div>
				<div className="container-right-info">
					<p className="notes-tag">Notes</p>
					<div className="notes-container">
						<ReactMarkdown>
							{notes}
						</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListElement;
