import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PopUpFilter from "../components/FilterPopUp";

import { ItemBase } from "../../../types/item";

import "../styles/MediaPage.css";

// This function returns an anonymous function ( That returns a React html element )
//
// Arguments :
//
// - sectionName : String that is used for determining the path other than any labels relative to this page
// - ListElementComponent : The ListElement component specific for the elements rapresented
// - filterOptions : The options displayed in the filter choice popUp 
// TODO: (FILTERS IMPLEMENTED TERRIBLY, FIX THIS : THEY ARE THE SAME FIELDS CONTAINED IN T)

export function createGeneralPage<T extends ItemBase>(options: {
	sectionName: string;
	ListElementComponent: React.FC<T & { ctr: number }>;
	filterOptions: Record<string, any>;
}) {
	// Save the options passed to the function to a constant
	const { sectionName, ListElementComponent, filterOptions } = options;

	// Create a path based on the sectionName, converting it to lowercase
	const path = "/" + sectionName.toLowerCase();

	// Return an anonymous function that returns a React component
	return () => {

		// State to hold the list of elements fetched from the API
		const [elemList, setElemList] = useState<T[]>([]);
		const [isPopupOpen, setIsPopupOpen] = useState(false);
		const [selectedFilters, setSelectedFilters] = useState<
			Record<string, string>
		>({});

		// Function to fetch elements from the API based on the section name and filters
		const fetchElements = async (
			apiName: string,
			filters: Record<string, string> = {}
		) => {
			const requestOptions = {
				method: "GET",
			};

			const queryParams = new URLSearchParams(filters).toString();
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
			const elems = await fetchElements(
				sectionName.toLowerCase(),
				selectedFilters
			);
			if (elems) {
				setElemList(elems);
			}
		};

		// Function to handle applying filters from the filter pop-up
		const handleApplyFilters = (filters: Record<string, string>) => {
			setSelectedFilters(filters);
		};

		// Use useEffect to fetch elements when the component mounts or when selectedFilters change
		useEffect(() => {
			getElems();
		}, [selectedFilters]);


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
						<p>
							Press <span>/</span> to search
						</p>
						<p className="sep"></p>
						<button onClick={() => setIsPopupOpen(true)}>Filter</button>
						<button>Sort</button>
					</div>
				</div>

				<div className="media-page">
					{elemList.map((item, index) => (
						<ListElementComponent key={item._id} {...item} ctr={index + 1} />
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
