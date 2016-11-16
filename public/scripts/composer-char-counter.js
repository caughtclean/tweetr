$(function() {
  console.log("DOM loaded!");


  $('.new-tweet textarea').on('keydown',

    function(event) {
      $counter = $(this).parent().children('.counter');
      var newCounterVal = 140 - $(this).val().length;
      $counter.text(newCounterVal);
      if (newCounterVal < 0) {
        $(this).parent().children('.counter').css('color', 'red')

      }
    });

});
