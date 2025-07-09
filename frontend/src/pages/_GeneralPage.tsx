import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PopUpFilter from "../components/FilterPopUp";

import "../styles/MediaPage.css";

type BaseItem = { _id: string };

export function createGeneralPage<T extends BaseItem>(options: {
	sectionName: string;
	ListElementComponent: React.FC<T & { ctr: number }>;
	filterOptions: Record<string, any>;
}) {
	const { sectionName, ListElementComponent, filterOptions } = options;

	const path = "/" + sectionName.toLowerCase();

	return function GeneralPage() {
		const [elemList, setElemList] = useState<T[]>([]);
		const [isPopupOpen, setIsPopupOpen] = useState(false);
		const [selectedFilters, setSelectedFilters] = useState<
			Record<string, string>
		>({});

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
				console.error("Error fetching books:", data);
				return null;
			}
		};

		const getElems = async () => {
			const elems = await fetchElements(
				sectionName.toLowerCase(),
				selectedFilters
			);
			if (elems) {
				setElemList(elems);
			}
		};

		useEffect(() => {
			getElems();
		}, [selectedFilters]);

		const handleApplyFilters = (filters: Record<string, string>) => {
			setSelectedFilters(filters);
		};

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
