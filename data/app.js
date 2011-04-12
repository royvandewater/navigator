$("#form").submit(function(e){
  e.preventDefault();
  postMessage($("#search").val());
  $('#search').val('');
});

onMessage = function onMessage(message) {
  $('#search').focus();
}
