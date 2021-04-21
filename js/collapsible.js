$(function() {
    $("#toggle").click(function() {
      $("#wrapper").toggleClass('open'); /* <-- toggle the application of the open class on click */
    });

    $("#toggle-premium").click(function() {
      $("#wrapper-premium").toggleClass('open'); /* <-- toggle the application of the open class on click */
    });

    $("#toggle-bussiness").click(function() {
      $("#wrapper-bussiness").toggleClass('open'); /* <-- toggle the application of the open class on click */
    });
  });
