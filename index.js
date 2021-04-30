$(document).ready(function () {
  // set padding for header content when hamburger menu opened
  var counter = 0;
  $("#Hbtn").on("click", function () {
    if (counter == 0) {
      $(".pt-h").css("padding-top", "10vw");
      counter++;
    } else if (counter == 1) {
      $(".pt-h").css("padding-top", "0");
      counter = 0;
    }
  });
});
