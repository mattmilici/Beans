import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";

import WorkImg from "./images/work.jpg";
import EatImg from "./images/eat.jpg";
import FamilyImg from "./images/family.jpg";
import FitnessImg from "./images/fitness.jpg";
import FriendsImg from "./images/friends.jpg";

const db = [
	{
		name: "Work",
		url: WorkImg,
	},
	{
		name: "Family",
		url: FamilyImg,
	},
	{
		name: "Health",
		url: FitnessImg,
	},
	{
		name: "Friends",
		url: FriendsImg,
	},
	{
		name: "Eating",
		url: EatImg,
	},
];

function TinderApp() {
	const characters = db;
	const [lastDirection, setLastDirection] = useState();
	const [lastName, setLastName] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
		// setLastName(character.name);
		setLastName(nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div>
			<link
				href="https://fonts.googleapis.com/css?family=Damion&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
				rel="stylesheet"
			/>
			<h1 className="text-black text-4xl">Daily Beans Tracker</h1>
			<div className="cardContainer w-11/12 md:w-8/12 h-64 flex items-center justify-center m-auto">
				{characters.map((character) => (
					<TinderCard
						className="swipe absolute flex items-center justify-center w-10/12 md:w-6/12 h-56 text-white text-lg "
						shadow-xl
						key={character.name}
						onSwipe={(dir) => swiped(dir, character.name)}
						onCardLeftScreen={() => outOfFrame(character.name)}
					>
						<div
							style={{ backgroundImage: "url(" + character.url + ")" }}
							className="relative rounded-lg bg-center bg-cover flex items-center justify-center w-10/12 md:w-8/12 h-56 shadow-2xl"
						>
							<h3 className="text-3xl">{character.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
			{lastDirection ? (
				<h2 className="infoText w-full h-5 flex justify-center flex">
					You swiped {lastDirection} for {lastName}
				</h2>
			) : (
				<h2 className="infoText w-full h-5 flex justify-center flex" />
			)}
		</div>
	);
}

export default TinderApp;
