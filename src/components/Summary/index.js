import React, { useState } from "react";
import MetricCard from "../MetricCard/index";

function Summary() {
	return (
		<div className=" my-2 mx-2 md:my-10 md:mx-16">
			<div>
				<h1 className="text-left text-4xl">Nice work!</h1>
				<h1 className="text-left text-4xl">Matt</h1>
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
