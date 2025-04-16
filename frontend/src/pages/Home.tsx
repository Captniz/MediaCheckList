import Navbar from "../components/Navbar";
import ListElement from "../components/ListElement";
import HomeMediaSect from "../components/HomeMediaSection";

const Home = () => {
	return (
		<div className="home">
			<Navbar title="Home" path="/" />
			<HomeMediaSect sectionName="books" itemsFound={100}></HomeMediaSect>
			<HomeMediaSect sectionName="manga" itemsFound={100}></HomeMediaSect>
			<HomeMediaSect sectionName="series" itemsFound={100}></HomeMediaSect>
			<HomeMediaSect sectionName="anime" itemsFound={100}></HomeMediaSect>
			<HomeMediaSect sectionName="games" itemsFound={100}></HomeMediaSect>
			<HomeMediaSect sectionName="movies" itemsFound={100}></HomeMediaSect>
		</div>
	);
};

export default Home;
