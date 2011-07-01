$("#form").submit(function(e){
  e.preventDefault();
  postMessage($("#search").val());
  $('#search').val('');
});

self.on('message', function onMessage(message) {
  $('#search').focus();
});
