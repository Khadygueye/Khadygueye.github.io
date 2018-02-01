$(document).ready(function(){
  $("#Fiction").hide();
  $("#NonFiction").hide();
  $("#AutoBiography").hide();
  $("#SciFi").hide();
  $("#Poetry").hide();
  $(".bc").css("display", "inline-block");
  $("#Fiction_button").click(function() {
    $(".content").css("display", "none");
    $(".Fiction").css("display", "inline-block");
  });
  $("#AutoBio_button").click(function() {
    $(".content").css("display", "none");
    $(".AutoBigraphy").css("display", "inline-block");
  });
  $("#SciFi_button").click(function() {
    $(".content").css("display", "none");
    $(".SciFi").css("display", "inline-block");
  });
   $("#Poetry").click(function() {
    $(".content").css("display", "none");
    $(".books").css("display", "inline-block");
  }};
  $("#tv-shows_button").click(function() {
    $(".content").css("display", "none");
    $(".tv_shows").css("display", "inline-block");
  });

})

