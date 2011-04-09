$("#form").submit(function(e){
  e.preventDefault();
  postMessage($("#text").val());
});

onMessage = function onMessage(message) {
  console.log("hi");
  $('#text').focus();
}
