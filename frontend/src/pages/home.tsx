import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ListElement from "../components/listElement";

const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <ListElement defaultClass="books" totUnits={100} completedUnits={10} status="Planned" genre={"Genre 1"} saga={"Saga 1"}/>
        <ListElement defaultClass="books" totUnits={100} completedUnits={10} status="Planned" genre={"Genre 1"} saga={"Saga 1"}/>
        <ListElement defaultClass="books" totUnits={100} completedUnits={10} status="Planned" genre={"Genre 1"} saga={"Saga 1"}/>
        <ListElement defaultClass="books" totUnits={100} completedUnits={10} status="Planned" genre={"Genre 1"} saga={"Saga 1"}/>
    </div>
  );
};

export default Home;