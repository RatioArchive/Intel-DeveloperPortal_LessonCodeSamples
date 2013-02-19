$(function() {

  var getDataBtn        = $('#getCameraData'),
      video             = document.getElementById('cameraVideo'),
      canvas            = document.getElementById('cameraCanvas'),
      ctx               = canvas.getContext('2d'),
      localMediaStream  = null;

  video.on('click', function(e) {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      $('#cameraImg').src = canvas.toDataURL('image/webp');
    }
  });

  getDataBtn.on('click', function(e) {
    navigator.webkitGetUserMedia({video: true}, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
    });
  });

});