$(document).ready(function(){
  $("#music").hide();
  $("#food").hide();
  $("#movies").hide();
  $("#tv-shows").hide();
  $("#books").hide();
  $("#music_button").click(function() {
    $(".content").css("display", "none");
    $(".music").css("display", "inline-block");
  });
  $("#movies_button").click(function() {
    $(".content").css("display", "none");
    $(".movies").css("display", "inline-block");
  });
  $("#food_button").click(function() {
    $(".content").css("display", "none");
    $(".food").css("display", "inline-block");
  });
   $("#books_button").click(function() {
    $(".content").css("display", "none");
    $(".books").css("display", "inline-block");
  });
  $("#tv-shows_button").click(function() {
    $(".content").css("display", "none");
    $(".tv_shows").css("display", "inline-block");
  });

})

