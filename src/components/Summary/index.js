import React, { useState } from "react";
import MetricCard from "../MetricCard/index";

function Summary() {
	return (
		<div className=" my-2 mx-2 md:my-10 md:mx-16">
			<div className="pb-4">
				<h1 className="text-left text-4xl">Nice work!</h1>
				<h1 className="text-left text-4xl">Matt</h1>
			</div>
			<div className="mb-12">
				<div className="my-6 m-auto flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
					<h1 className="test-3xl pb-3">You've got some Beans waiting</h1>
					<button
						type="button"
						class="w-1/2 m-auto bg-gray-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
					>
						Today's Beans
					</button>
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
	);
}

export default Summary;
