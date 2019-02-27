function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

$(document).ready(function(){
  $("#overlay").click(function(){
    $('#blink').fadeOut(100, function(){
      $('#blink').fadeIn(100, function(){
        $('#blink').fadeOut(100, function(){
          $('#blink').fadeIn(100, function(){
            $('#overlay_content').fadeOut(1000, function(){
            $("#overlay").fadeOut(1500)
            })
          })
        })
      })
    })
  })
});

window.sr = ScrollReveal();
sr.reveal('#logo');