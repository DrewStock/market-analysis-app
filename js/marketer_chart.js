var chart2;

var marketerChart = marketerTotals;

function intializeMarketerChart() {
	var chartProperties = {
		title:{
			text: "Voting Results - All Sessions"
		},
		axisY:{
				interval: 10,
				labelFontSize: 16,
		},
		axisX:{
				interval: 1,
				labelFontSize: 16,
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "bar",
			dataPoints: marketerChart
		}
		]
	};
   chart2 = new CanvasJS.Chart("marketer-results", chartProperties);
}

window.addEventListener("load", intializeMarketerChart);
