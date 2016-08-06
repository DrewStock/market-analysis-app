var chart2;

var marketerChart = blah;

function intializeMarketerChart() {
	var chartProperties = {
		title:{
			text: "Voting Results - All Sessions"
		},
		axisY:{
				interval: 5,
				labelFontSize: 16,
		},
		axisX:{
				interval: 1,
				labelFontSize: 16,
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: marketerChart
		}
		]
	};
   chart2 = new CanvasJS.Chart("marketer-results", chartProperties);
}

window.addEventListener("load", intializeMarketerChart);
