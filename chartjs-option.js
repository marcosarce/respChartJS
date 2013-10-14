/*
	Author : Arif Setyawan

	This function must used together with ChartJS. Or it must 
	load chartjs first before this menu to be work
*/

function respChart(selector, data, options){

	// Define default option for line chart
	var option = {
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

	// check if the option is override to exact options 
	// (bar, pie and other)
	if (options == false || options == null){
		options = option;
	} 

	// get selector by context
	var ctx = selector.get(0).getContext("2d");
	// pointing parent container to make chart js inherit its width
	var $container = $(selector).parent();
	var $canvas = $(selector);
	// get canvas' original aspect ratio
	var aspectRatio = $canvas.width()/$canvas.height();

	// enable resizing matter
	$(window).resize( generateChart );

	// this function produce the responsive Chart JS
	function generateChart(){
		// resize chart to container width maintaining original aspect ratio
		var ww = selector.attr('width', $container.width()).attr('height', $container.width()/aspectRatio);
		// Initiate new chart or Redraw
		new Chart(ctx).Line(data, options);
	};

	// run function - render chart at first load
	generateChart();

}

