$(document).ready(function() {
  const introAudio = new Audio("../../assets/sounds/simpsons-intro.wav");
  introAudio.play();
  const soundClips = ["doh", "excellent", "woohoo", "yes"];
  ajaxCall();
  $(".button").click(() => {
    let soundIndex = Math.floor(Math.random() * 3.99);
    let buttonAudio = new Audio(
      `../../assets/sounds/${soundClips[soundIndex]}.wav`
    );
    buttonAudio.play();
    ajaxCall();
  });
});

function ajaxCall() {
  $.ajax({
    method: "get",
    url: "https://thesimpsonsquoteapi.glitch.me/quotes"
  })
    .done(function(data) {
      $(".quote").html(`"${data[0].quote}"`);
      $(".author").html(`&mdash; ${data[0].character}`);
      $(".character").attr("src", data[0].image);
    })
    .fail(function(err) {
      alert("Something went wrong.");
    });
}
