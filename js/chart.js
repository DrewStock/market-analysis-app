var chart;

var imageChart = possibleImages;
// [
//    { label: "apple",  y: 10  },
//    { label: "orange", y: 15  },
//    { label: "banana", y: 25  },
//    { label: "mango",  y: 30  },
//    { label: "grape",  y: 28  }
// ];

function intializeChart() {
	var chartProperties = {
		title:{
			text: "My First Chart in CanvasJS"
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
	// chart.render();
}

window.addEventListener("load", intializeChart);
