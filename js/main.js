$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});
$('table').on('scroll', function () {
    $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
});

//App Sidebar
if(document.getElementById("close-sidebar")){
  document.getElementById("close-sidebar").addEventListener("click", function() {
    document.getElementsByClassName("page-wrapper")[0].classList.toggle("toggled");
  });
}
