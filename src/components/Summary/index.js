import React, { useState } from "react";
import MetricCard from "../MetricCard/index";

function Summary() {
	return (
		<div className=" my-2 mx-2 md:my-10 md:mx-16">
			<h1 className="text-left text-6xl">Welcome Matt</h1>
			<MetricCard MetricName="Overall Streak" Bean="14 days!" />
			<MetricCard MetricName="Best Bean" Bean="Relationship" />
			<MetricCard MetricName="Worst Bean" Bean="Work" />
		</div>
	);
}

export default Summary;
