$(function() {
	$('#GetLocation').on('click', function() {

		navigator.geolocation.getCurrentPosition( 

			function(position) {

				var latitude 	= position.coords.latitude,
		  			longitude 	= position.coords.longitude,
		  			altitude 	= position.coords.altitude,
		  			accuracy 	= position.coords.accuracy,
		  			heading 	= position.coords.heading,
		  			speed 		= position.coords.speed,
		  			timestamp 	= position.timestamp;

		  			// ready to do cool stuff!

	  			$('#GPS').prepend(
					'<div class="alert alert-info"> \
						<button type="button" class="close" data-dismiss="alert">&times;</button> \
						<strong>Location Requested!</strong> Your latitude: '+latitude+', longitude: '+longitude+'. \
					</div>');

			}, 
			
			function(error) {
				console.log('error: ' + error);
			}
			
		);

	});
});