var chart;

var imageChart = possibleImages;

function intializeChart() {
	var chartProperties = {
		title:{
			text: "Product Voting Results"
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
			type: "bar",
			dataPoints: imageChart
		}
		]
	};
   chart = new CanvasJS.Chart("voting-results", chartProperties);
}

window.addEventListener("load", intializeChart);
