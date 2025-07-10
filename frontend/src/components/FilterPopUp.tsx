// FilterPopUp.tsx

import React, { useEffect, useRef, useState } from "react";
import Selection from "./Selection";
import "../styles/PopUp.css";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	filtersOptions: Record<string, any>;
	onApplyFilters: (filters: Record<string, string>) => void;
};

const PopUpFilter: React.FC<Props> = ({
	isOpen,
	onClose,
	filtersOptions,
	onApplyFilters,
}) => {
	const popupRef = useRef<HTMLDivElement | null>(null);
	const [filter, setFilter] = useState<
		Record<string, { op: string; value: string }>
	>({});

	// Close on "Esc" key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	// Close on outside click
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	//Close and submit on "Enter" key
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				const finalFilters: Record<string, string> = {};

				Object.entries(filter).forEach(([tag, { op, value }]) => {
					if (value.trim() !== "") {
						const key = op === "eq" ? tag : `${tag}${op}`;
						finalFilters[key] = value;
					}
				});

				onApplyFilters(finalFilters);
				setFilter({});
				onClose();
			}
		};

		const popupElement = popupRef.current;
		popupElement?.addEventListener("keydown", handleKeyDown);

		return () => {
			popupElement?.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, filter, onApplyFilters, onClose]);

	useEffect(() => {
		if (isOpen && popupRef.current) {
			popupRef.current.focus();
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className="popup-container">
			<div ref={popupRef} className="popup-window" tabIndex={-1}>
				<h2 className="text-xl font-bold mb-4">Filtering Options</h2>
				<div>
					{Object.entries(filtersOptions).map(([key, value]) => (
						<Selection
							tag={key}
							data={value}
							onFilterChange={(key: string, op: string, value: string) => {
								console.log(`Filter changed: ${key} ${op} ${value}`);
								setFilter((prev) => ({
									...prev,
									[key]: { op, value },
								}));
							}}
						/>
					))}
				</div>
				<button
					onClick={() => {
						if (onApplyFilters) {
							const finalFilters: Record<string, string> = {};

							Object.entries(filter).forEach(([tag, { op, value }]) => {
								if (value.trim() !== "") {
									const key = op === "eq" ? tag : `${tag}${op}`;
									finalFilters[key] = value;
								}
							});

							onApplyFilters(finalFilters);
							setFilter({}); // Reset filters after applying
						}
						onClose(); // optional: close after applying
					}}
					className="submit-button"
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default PopUpFilter;
