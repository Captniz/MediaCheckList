import Navbar from "../components/navbar";
import ListElement from "../components/listElement";
import HomeMediaSect from "../components/homeMediaSection";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<ListElement
				totUnits={100}
				completedUnits={50}
				status="On Hold"
				genre={"Genre 1"}
				saga={"Saga 1"}
				notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
			/>
			<ListElement
				totUnits={100}
				completedUnits={50}
				status="On Hold"
				genre={"Genre 1"}
				saga={"Saga 1"}
				notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
			/>
			<ListElement
				totUnits={100}
				completedUnits={50}
				status="On Hold"
				genre={"Genre 1"}
				saga={"Saga 1"}
				notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
			/>
			<HomeMediaSect defaultCss="manga" itemsFound={100}>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="series" itemsFound={100}>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Active"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="anime" itemsFound={100}>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Completed"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="games" itemsFound={100}>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="movies" itemsFound={100}>
				<ListElement
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
					notes={"# Hello Markdown!\nThis is **bold** and this is *italic*.\n- This is a list\n- This is another list\n- This is a third list\n\n[This is a link](https://example.com)\n\n![This is an image](https://example.com/image.png)\n\n```javascript\nconst x = 1;\nconsole.log(x);\n```\n\n> This is a blockquote\n\n---\n\nThis is a horizontal rule.\n"}
				/>
			</HomeMediaSect>
		</div>
	);
};

export default Home;
