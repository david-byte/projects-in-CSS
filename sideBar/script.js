$(document).ready(function () {

    $(".sub-btn").on("click", function () {
      $(this).next(".sub-menu").slideToggle(); 
      $(this).find(".dropdown").toggleClass("rotate")
    });
});