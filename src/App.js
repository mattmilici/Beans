import logo from "./logo.svg";
import Tinder from "./components/TinderCard/index";
import Navbar from "./components/Navbar/index";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Tinder />
		</div>
	);
}

export default App;
