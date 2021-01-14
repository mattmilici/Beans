import React, { useState } from "react";

function HistoricalCard(props) {
	return (
		<div className="w-6/12 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
			<div>
				<h1>Monday</h1>
				<h1>Overall: Good day!</h1>
				<h1>Swiped Right: Work, Family, Friends</h1>
				<h1>Swiped Left: Fitness, Eating</h1>
			</div>
		</div>
	);
}

export default HistoricalCard;
