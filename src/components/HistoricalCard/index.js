import React, { useState } from "react";

function HistoricalCard(props) {
	return (
		<div className="w-8/12 md:w-6/12 h-64 bg-gray-200 rounded-lg flex items-center justify-center m-auto">
			<div>
				<h1 className="text-2xl font-bold">{props.day}</h1>
				<h1 className="">
					Overall: <span className="text-2xl">{props.overall}</span>
				</h1>
				<h1 className="text-4xl">
					{props.PercentageGood} <span className="text-2xl">Good!</span>{" "}
				</h1>
			</div>
		</div>
	);
}

export default HistoricalCard;
