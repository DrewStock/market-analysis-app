var chart;

var imageChart = possibleImages;

function intializeChart() {
	var chartProperties = {
		title:{
			text: "Voting Results - Current Session"
		},
		axisY:{
				interval: 1,
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
			dataPoints: imageChart
		}
		]
	};
   chart = new CanvasJS.Chart("voting-results", chartProperties);
}

window.addEventListener("load", intializeChart);
