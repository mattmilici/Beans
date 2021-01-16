import React, { useState } from "react";
import Tinder from "./components/TinderCard/index";
import SevenDayForecastCard from "./components/SevenDayForecastCard/index";
import Navbar from "./components/Navbar/index";
import "./App.css";

import { PageContext } from "./PageContext.js";

function App() {
	const [finalCard, setfinalCard] = useState(true);

	return (
		<div className="App">
			<Navbar />

			<PageContext.Provider value={{ finalCard, setfinalCard }}>
				<Tinder />
			</PageContext.Provider>

			<SevenDayForecastCard />
		</div>
	);
}

export default App;
