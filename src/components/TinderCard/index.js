import React, { useState, useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";

import TinderCard from "react-tinder-card";
import Summary from "../Summary/index.js";
import BeanTracker from "../BeanTracker/index.js";

import WorkImg from "./images/work.jpg";
import EatImg from "./images/eat.jpg";
import FamilyImg from "./images/family.jpg";
import FitnessImg from "./images/fitness.jpg";
import FriendsImg from "./images/friends.jpg";
import OverallImg from "./images/overall.jpg";

import { PageContext } from "../../PageContext";

const db = [
	{
		name: "Overall",
		url: OverallImg,
	},
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
	const { finalCard, setfinalCard } = useContext(PageContext);

	const [GoodArray, setGoodArray] = useState([]);
	const [BadArray, setBadArray] = useState([]);

	///figure out how to remove this global variable
	var GoodArrayHolder = [];
	var BadArrayHolder = [];

	const swiped = (direction, nameToDelete) => {
		if (direction === "left") {
			BadArrayHolder.push(nameToDelete);
			setBadArray(BadArrayHolder);
		} else {
			GoodArrayHolder.push(nameToDelete);
			setGoodArray(GoodArrayHolder);
		}
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
		setLastName(nameToDelete);
		if (nameToDelete === "Overall") {
			setfinalCard(true);
		}
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div>
			{finalCard ? (
				<Summary />
			) : (
				<div>
					<link
						href="https://fonts.googleapis.com/css?family=Damion&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
						rel="stylesheet"
					/>
					<div className="mt-4 mb-6 border-b-2 mx-3">
						<Moment
							className="block text-3xl"
							format="dddd "
							element="span"
						></Moment>
						<Moment
							className="block text-3xl"
							format="MMMM d, YYYY"
							element="span"
						></Moment>
					</div>
					<h1 className="text-black text-2xl mb-2">Daily Beans</h1>
					<div className="cardContainer w-11/12 md:w-6/12 h-64 flex items-center justify-center m-auto">
						{characters.map((character) => (
							<TinderCard
								className="swipe absolute flex items-center justify-center w-10/12 md:w-64 h-64 text-white text-lg shadow-4xl"
								shadow-xl
								key={character.name}
								onSwipe={(dir) => swiped(dir, character.name)}
								onCardLeftScreen={() => outOfFrame(character.name)}
							>
								<div
									style={{ backgroundImage: "url(" + character.url + ")" }}
									className="relative rounded-lg bg-center bg-cover flex items-center justify-center w-10/12 md:w-64 h-64 "
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
					<BeanTracker GoodArray={GoodArray} BadArray={BadArray} />
				</div>
			)}
		</div>
	);
}

export default TinderApp;
