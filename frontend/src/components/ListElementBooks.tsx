import { useState } from "react";
import "../styles/ListElement.css";
import { ReactComponent as SvgCounterDot } from "../assets/counterDot.svg";
import { ReactComponent as SvgAddPage } from "../assets/addPage.svg";
import { ReactComponent as SvgSeparator } from "../assets/separator.svg";
import CircularProgressBar from "./CircularProgressBar";
import ReactMarkdown from "react-markdown";

import { FC } from "react";
import { Book } from "../../../types/item";

type ListElementProps = Book & { ctr: number };

const ListElement: FC<ListElementProps> = (props) => {
	const {
		title,
		author,
		genre,
		status,
		saga,
		releaseDate,
		description,
		notes,
		pages,
		readPages,
		ctr
	} = props;

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
						<p className="counter-num">{ctr}</p>
						<button
							className="collapse-button"
							style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
							onClick={() => setIsOpen(!isOpen)}
						>
							<SvgCounterDot className="counter-dot" />
						</button>
					</div>
					<div className="title-space">
						<h1 className="title">{title}</h1>
						<p className="author">{author}</p>
					</div>
				</div>
				<div className="center-container">
					<div className="progress-counter">
						<button onClick={() => {}}>
							<SvgAddPage className=" add-page" />
						</button>
						<div className="progress-num">
							<span>{readPages}</span>
							<span>/</span>
							<span>{pages}</span>
							<span className="type-tag">Pages</span>
						</div>
						<CircularProgressBar
							progress={(readPages / pages) * 100}
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
					height: isOpen ? "33vh" : "0%",
					paddingBottom: isOpen ? "1vh" : 0,
					paddingTop: isOpen ? "1vh" : 0,
					overflow: "hidden",
				}}
				className="dropdown-container"
			>
				<div className="container-left-info">
					<img className="dropdown-image" src="/test.jpg" alt="bho" />
					<div className="container-central-info">
						<div className="central-info">
							<span className="big-title">{title}</span>
							<div className="subtitle-container">
								<span className="big-author">{author}</span>
								<SvgSeparator className=" separator" />
								<span className="big-date">{releaseDate.toString()}</span>
							</div>
							<div className="buttons-container">
								<button className=" action-button">Modify</button>
								<button className=" action-button">Open</button>
							</div>
						</div>
						<p className="description-tag">Description</p>
						<div className="description-area">{description}</div>
					</div>
				</div>
				<div className="container-right-info">
					<p className="notes-tag">Notes</p>
					<div className="notes-container">
						<ReactMarkdown>{notes}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListElement;
