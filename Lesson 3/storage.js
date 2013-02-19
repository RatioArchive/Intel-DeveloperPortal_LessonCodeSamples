$(function() {

	$('#PushStorage').on('click', function(e) {

		window.localStorage['inteldemo'] = 'yo, wassup gangsta foo';

		$('#Storage').prepend('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Success!</strong> Check your local storage!</div>');

	});

});