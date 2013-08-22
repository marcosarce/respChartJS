/*
	Author : Arif Setyawan

	This function must used together with ChartJS. Or it must 
	load chartjs first before this menu to be work
*/

function respChart(selector, data){

	var options = {
		scaleOverlay : false,
		scaleOverride : false,
		scaleSteps : null,
		scaleStepWidth : null,
		scaleStartValue : null,
		scaleLineColor : "rgba(0,0,0,.1)",
		scaleLineWidth : 1,
		scaleShowLabels : true,
		scaleLabel : "<%=value%>",
		scaleFontFamily : "'proxima-nova'",
		scaleFontSize : 10,
		scaleFontStyle : "normal",
		scaleFontColor : "#909090",	
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(0,0,0,.05)",
		scaleGridLineWidth : 1,	
		bezierCurve : true,
		pointDot : true,
		pointDotRadius : 3,
		pointDotStrokeWidth : 1,
		datasetStroke : true,
		datasetStrokeWidth : 2,
		datasetFill : true,
		animation : true,
		animationSteps : 60,
		animationEasing : "easeOutQuart",
		onAnimationComplete : null
	}

	var ctx = selector.get(0).getContext("2d");
	var container = $(selector).parent();

	$(window).resize( generateChart );

	function generateChart(){
		var ww = selector.attr('width', $(container).width() );
		new Chart(ctx).Line(data, options);
		console.log(selector.attr('width')+" "+selector.attr('height'));
	};

	// run function
	generateChart();

}

