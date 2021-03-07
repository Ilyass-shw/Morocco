import React from "react";
import NavBar from "./app/NavBar";
import { FilterBar } from "./features/FilterBar/FilterBar";
import Header from './features/Header/Header.js'
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<div  classeName='App-container'>
		<NavBar />
		<Header/>
		<FilterBar/>
		</div>
	);
}

export default App;
