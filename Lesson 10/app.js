document.addEventListener('DOMContentLoaded', function() {

	var paper
	  , image
	  , transformerOptions
	  , transformer
	  , ww = window.innerWidth
	  , wh = window.innerHeight;

	// Create full page svg canvas elem
	paper = Raphael(
		0,  // x
		0,  // y
		ww, // width
		wh  // height
	);

	// Creates image half the page size in the middle of the page
	image = paper.image(
		'logo.svg',
		ww / 4,
		wh / 4,
		ww / 2,
		wh / 2
	).attr({cursor:'move'});

	// here's the settings that comic director uses on it's svg canvas items
	transformerOptions = {
		keepRatio:  ['axisX','axisY'],
	        draw:       ['image'],
	        scale:      ['axisX', null],
	        rotate:     ['axisX', null],
	        drag:       [null, 'self'],
	        attrs: {
	            cursor: "pointer"
	        }
	}

	// set transform ability on the image with our options
	transformer = paper.freeTransform(image, transformerOptions);

});
