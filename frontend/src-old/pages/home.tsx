import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ListElement from "../components/listElement";
import HomeMediaSect from "../components/homeMediaSection";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<HomeMediaSect defaultCss="books" itemsFound={100}>
				<ListElement
					defaultClass="books"
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="manga" itemsFound={100}>
				<ListElement
					defaultClass="manga"
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="series" itemsFound={100}>
				<ListElement
					defaultClass="series"
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="anime" itemsFound={100}>
				<ListElement
					defaultClass="anime"
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="games" itemsFound={100}>
				<ListElement
					defaultClass="games"
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
				/>
			</HomeMediaSect>
			<HomeMediaSect defaultCss="movies" itemsFound={100}>
				<ListElement
					defaultClass="movies"
					totUnits={1000}
					completedUnits={100}
					status="Planned"
					genre={"Genre 1"}
					saga={"Saga 1"}
				/>
			</HomeMediaSect>
		</div>
	);
};

export default Home;
