import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import PopUpFilter from "../components/FilterPopUp";

import { ItemBase } from "../../../types/item";

import "../styles/MediaPage.css";

// ?This function returns an anonymous function ( That returns a React html element )

// Arguments :
// - ListElementComponent : The ListElement component specific for the elements rapresented
// - filterOptions : The options displayed in the filter choice popUp

export function createGeneralPage<T extends ItemBase>(options: {
	// Name of the section, used for the title, labels and path
	sectionName: string;

	// Component that will be used to render each element in the list
	ListElementComponent: React.FC<
		T & {
			ctr: number;
			onIncrement: (id: string, field: string, value: number) => void;
		}
	>;

	// Options for the filter pop-up, containing the filters to be applied
	filterOptions: Record<string, any>;
}) {
	// Save the options passed to the function to a constant
	const { sectionName, ListElementComponent, filterOptions } = options;

	// Create a path based on the sectionName, converting it to lowercase
	const path = "/" + sectionName.toLowerCase();

	// Create an API name based on the sectionName, converting it to lowercase
	const apiName = sectionName.toLowerCase();

	// Return an anonymous function that returns a React component
	return () => {
		//===== STATE MANAGEMENT =====//

		// State to hold the list of elements fetched from the API
		const [elemList, setElemList] = useState<T[]>([]);

		// State to manage the visibility of the filter pop-up
		const [isPopupOpen, setIsPopupOpen] = useState(false);

		// State to hold the selected filters from the filter pop-up
		const [selectedFilters, setSelectedFilters] = useState<
			Record<string, string>
		>({});

		// State to hold the search query entered by the user
		const [searchQuery, setSearchQuery] = useState("");

		//===== EFFECTS AND EVENT HANDLERS =====//

		// Ref to the search input element to manage focus and blur
		const searchInputRef = useRef<HTMLInputElement>(null);

		// Effect to handle the "/" key press to focus the search input
		useEffect(() => {
			const handleSlashKey = (e: KeyboardEvent) => {
				// Ignore if typing inside an input already
				const isTyping =
					(e.target as HTMLElement).tagName === "INPUT" ||
					(e.target as HTMLElement).tagName === "TEXTAREA" ||
					(e.target as HTMLElement).isContentEditable;

				if (e.key === "/" && !isTyping) {
					e.preventDefault(); // Prevent browser search
					searchInputRef.current?.focus();
				}
			};

			document.addEventListener("keydown", handleSlashKey);
			return () => document.removeEventListener("keydown", handleSlashKey);
		}, []);

		// Effect to handle the Escape key to clear search and unfocus input
		useEffect(() => {
			const handleEscapeKey = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					if (document.activeElement === searchInputRef.current) {
						setSearchQuery(""); // Clear search
						searchInputRef.current?.blur(); // Unfocus input
					}
				}
			};

			document.addEventListener("keydown", handleEscapeKey);
			return () => document.removeEventListener("keydown", handleEscapeKey);
		}, []);

		// Function to fetch elements from the API based on the section name and filters
		const fetchElements = async (filters: Record<string, string> = {}) => {
			const requestOptions = {
				method: "GET",
			};

			const params = { ...filters };
			if (searchQuery.trim() !== "") {
				params["title"] = searchQuery;
			}

			const queryParams = new URLSearchParams(params).toString();

			const url = `/api/${apiName}/search?${queryParams}`;

			console.log("Fetching from URL:", url);
			const response: Response = await fetch(url, requestOptions);
			const data = await response.json();

			if (response.ok) {
				return data.elements;
			} else {
				console.error(`Error fetching ${sectionName}:`, data);
				return null;
			}
		};

		// Function to get elements when the component mounts or when filters change
		const getElems = async () => {
			const elems = await fetchElements(selectedFilters);
			if (elems) {
				setElemList(elems);
			}
		};

		// Function to handle applying filters from the filter pop-up
		const handleApplyFilters = async (filters: Record<string, string>) => {
			setSelectedFilters(filters);
		};

		// Use useEffect to fetch elements when the component mounts or when selectedFilters change
		useEffect(() => {
			getElems();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [selectedFilters, searchQuery]);

		const handleAddPage = async (
			id: string,
			_field: string,
			incValue: number
		) => {
			const url = `/api/${apiName}/${id}/increment`;

			const requestOptions = {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					field: _field,
					value: incValue,
				}),
			};

			try {
				const response: Response = await fetch(url, requestOptions);
				const data = await response.json();

				if (response.ok) {
					console.log(`${_field} incremented successfully`, data);
					if (_field === "readPages" || _field === "pages") {
						setElemList((prev) =>
							prev.map((el) =>
								el._id === id
									? {
											...el,
											[_field]: (el as any)[_field] + incValue,
									  }
									: el
							)
						);
					}
					return data.elements; // or just return `data` depending on your structure
				} else {
					console.error(`Error incrementing ${_field}:`, data);
					return null;
				}
			} catch (err) {
				console.error("Request failed:", err);
				return null;
			}
		};

		//===== RENDERING =====//
		return (
			<div className="home">
				<Navbar title={sectionName} path={path} />
				<div className="page-header">
					<div className="page-title-space">
						<h1 className="page-title">{sectionName}</h1>
						<h3 className="page-found">
							Found <i>{elemList.length || 0}</i> {sectionName}
						</h3>
					</div>
					<div className="page-filters">
						<input
							type="text"
							placeholder="Press / to search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							ref={searchInputRef}
							className="search-input"
						/>
						<p className="sep"></p>
						<button onClick={() => setIsPopupOpen(true)}>Filter</button>
						<button>Sort</button>
					</div>
				</div>

				<div className="media-page">
					{elemList.map((item, index) => (
						<ListElementComponent
							key={item._id}
							{...item}
							ctr={index + 1}
							onIncrement={handleAddPage}
						/>
					))}
				</div>

				<PopUpFilter
					isOpen={isPopupOpen}
					onClose={() => setIsPopupOpen(false)}
					onApplyFilters={handleApplyFilters}
					filtersOptions={filterOptions}
				/>
			</div>
		);
	};
}
