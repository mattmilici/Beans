import logo from "./logo.svg";
import Tinder from "./components/TinderCard/index";
import SevenDayForecastCard from "./components/SevenDayForecastCard/index";
import Navbar from "./components/Navbar/index";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Tinder />
			<SevenDayForecastCard />
		</div>
	);
}

export default App;
