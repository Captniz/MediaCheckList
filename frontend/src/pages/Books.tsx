import Navbar from "../components/Navbar";
import "../styles/MediaPage.css";

const Books = () => {
	const tmpItemsFound: number = 100;
	const filters: string = "1 - 100 Pages";
	const sectionName: string = "Books";
	const path: string = "/" + sectionName.toLowerCase();

	return (
		<div className="home">
			<Navbar title={sectionName} path={path} />
			<div className="page-header ">
				<div className="page-title-space">
					<h1 className="page-title">{sectionName}</h1>
					<h3 className="page-found">
						{" "}
						Found <i>{tmpItemsFound}</i> <b>{filters}</b> {sectionName}
					</h3>
				</div>
				<div className="page-filters">
					<p>
						Press <span>/</span> to search
					</p>
					<p className="sep"></p>
					<button>Filter</button>
					<button>Sort</button>
				</div>
			</div>
			<div className="media-page">{/* Elements */}</div>
		</div>
	);
};

export default Books;
