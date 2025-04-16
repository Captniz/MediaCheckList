import ListElement from "../components/ListElement";
import Navbar from "../components/Navbar";
import "../styles/MediaPage.css";

const Books = ({ sectionName }: { sectionName: string }) => {
	const tmpItemsFound: number = 100;
	const filters: string = "1 - 100 Pages";
	const path = "/" + sectionName.toLowerCase();

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
			<div className="media-page">
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Active"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={
						"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"
					}
				/>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Active"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={
						"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"
					}
				/>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Active"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={
						"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"
					}
				/>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Active"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={
						"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"
					}
				/>
			</div>
		</div>
	);
};

export default Books;
