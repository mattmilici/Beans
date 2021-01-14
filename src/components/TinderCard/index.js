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

function Simple() {
	const characters = db;
	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
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
			<h1>React Tinder Card</h1>
			<div className="cardContainer w-8/12 h-64 flex items-center justify-center m-auto">
				{characters.map((character) => (
					<TinderCard
						className="swipe absolute flex items-center justify-center w-6/12 h-56 text-white text-lg"
						shadow-xl
						key={character.name}
						onSwipe={(dir) => swiped(dir, character.name)}
						onCardLeftScreen={() => outOfFrame(character.name)}
					>
						<div
							style={{ backgroundImage: "url(" + character.url + ")" }}
							className="relative bg-center bg-cover flex items-center justify-center w-6/12 h-56"
						>
							<h3>{character.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
			{lastDirection ? (
				<h2 className="infoText w-full h-5 flex justify-center flex">
					You swiped {lastDirection}
				</h2>
			) : (
				<h2 className="infoText w-full h-5 flex justify-center flex" />
			)}
		</div>
	);
}

export default Simple;
