var chart;

var imageChart = possibleImages;

function intializeChart() {
	var chartProperties = {
		title:{
			text: "Product Voting Results"
		},
		axisY:{
				labelFontSize: 20,
		},
		axisX:{
				labelFontSize: 20,
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
