import React, { useEffect, useState } from "react";
import "../styles/Selection.css";

type SelectionProps = {
	tag: string;
	data: any;
	onFilterChange: (key: string, op: string, value: string) => void;
};

const Selection = ({ tag, data, onFilterChange }: SelectionProps) => {
	const [selectedValue, setSelectedValue] = useState("");
	const [operator, setOperator] = useState("eq");
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (typeof data === "number") {
			if (inputValue !== "") {
				onFilterChange(tag, `__${operator}`, inputValue);
			}
		} else if (typeof data === "string") {
			if (selectedValue !== "") {
				onFilterChange(tag, "", selectedValue);
			}
		} else {
			// array or enum
			if (selectedValue !== "") {
				onFilterChange(tag, "", selectedValue);
			}
		}
	}, [selectedValue, operator, inputValue]);

	// --- Render logic ---

	if (typeof data === "string") {
		return (
			<div className="selection-container">
				<p className="selection-tag">{tag}</p>
				<input
					type="text"
					className="selection-input"
					placeholder={data}
					onChange={(e) => setSelectedValue(e.target.value)}
				/>
			</div>
		);
	}

	if (typeof data === "number") {
		return (
			<div className="selection-container">
				<p className="selection-tag">{tag}</p>
				<select
					value={operator}
					onChange={(e) => setOperator(e.target.value)}
					className="option-select"
				>
					<option value="eq">==</option>
					<option value="gt">&gt;</option>
					<option value="lt">&lt;</option>
					<option value="ne">!=</option>
				</select>
				<input
					type="number"
					className="selection-input"
					placeholder={data.toString()}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</div>
		);
	}

	// array or enum object
	return (
		<div className="selection-container">
			<p className="selection-tag">{tag}</p>
			<select
				value={selectedValue}
				onChange={(e) => setSelectedValue(e.target.value)}
				className="option-select"
			>
				<option value="">-- Select --</option>
				{Object.entries(data as string[]).map(([index, val]) => (
					<option key={index} value={val}>
						{val}
					</option>
				))}
			</select>
		</div>
	);
};

export default Selection;
