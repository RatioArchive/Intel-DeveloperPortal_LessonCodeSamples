$(function() {

	$('#PushStorage').on('click', function(e) {

		var inputVal = $('#StorageDemoInput').val();
		window.localStorage['inteldemo'] = inputVal;

		$('#Storage').prepend(
			'<div class="alert alert-success"> \
				<button type="button" class="close" data-dismiss="alert">&times;</button> \
				<strong>Success!</strong> Check your local storage! ' + inputVal + ' is in there! \
			</div>');

	});

});