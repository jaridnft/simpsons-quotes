$(document).ready(function() {
  var audio = new Audio("../../assets/simpsons-intro.wav");
  // audio.play();

  $.ajax({
    method: "get",
    url: "https://thesimpsonsquoteapi.glitch.me/quotes"
  })
    .done(function(data) {
      $(".quote").html(`"${data[0].quote}"`);
      $(".author").html(`&mdash; ${data[0].character}`);
      $(".character").attr("src", data[0].image);
      console.log(data);
    })
    .fail(function(err) {
      console.log(err);
    });
});
