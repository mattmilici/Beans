import React, { useState, useContext } from "react";
import MetricCard from "../MetricCard/index";
import { PageContext } from "../../PageContext";
import SevenDayForecastCard from "../SevenDayForecastCard/index";

function Summary() {
	const { finalCard, setfinalCard } = useContext(PageContext);

	function test() {
		setfinalCard(false);
	}
	return (
		<div>
			<div className=" my-2 mx-2 md:my-10 md:mx-16">
				<div className="pb-4">
					<h1 className="text-left text-4xl">Welcome</h1>
					<h1 className="text-left text-4xl">Matt</h1>
				</div>
				<div className="flex justify-end py-6 px-4">
					<div className="pb-4  w-1/2 h-34 w-24 rounded-full ">
						<h1 className=" text-6xl w-full text-right">83%</h1>
						<div className="flex justify-end">
							<h1 className="text-right text-md w-5/6">Swipe right rate</h1>
						</div>
					</div>
				</div>
				<div className="bg-gray-500 rounded-2xl pt-1">
					<div>
						<h1 className="mt-4 text-2xl text-white">Current Streaks</h1>
					</div>
					<div className="pb-3">
						<MetricCard MetricName="Overall Streak" Bean="14 days!" />
						<MetricCard MetricName="Best Bean" Bean="Relationship" />
						<MetricCard MetricName="Worst Bean" Bean="Work" />
					</div>
				</div>
			</div>
			<div className="mb-12">
				<div className="my-6 m-auto flex-shrink-0 rounded-md">
					<h1 className="test-3xl pb-3">You've got some Beans waiting</h1>
					<button
						onClick={test}
						type="button"
						className="w-1/2 m-auto bg-indigo-600 px-4 py-2 border border-transparent rounded-md shadow-lg flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-indigo-500 sm:w-auto sm:inline-flex"
					>
						Today's Beans
					</button>
				</div>
			</div>
			<SevenDayForecastCard />
		</div>
	);
}

export default Summary;
