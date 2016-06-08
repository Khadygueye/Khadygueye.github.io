$(document).ready(function() {
      var random_num = Math.floor((Math.random() * 100) + 1);
      //create click event for submit button
      $("#submit").click(function() {
            var guess = $("input[name="
              user_guess "]").val();
            if guess = random_num {
              $("#response").html("<p>You Got It!!</p>");
              else if guess < random_num {
                $("#response").html("<p>You're close. Guess higher.</p>");
                else :
                  $("#response").html("<p>You're close. Guess higher.</p>");

              }
            }
