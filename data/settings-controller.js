$("#form").submit(function(e){
  e.preventDefault();
  postMessage($("#form").serializeArray());
});
