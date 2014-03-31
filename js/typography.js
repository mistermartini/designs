$( function () {

  // flowtype typography
  $('body').flowtype({
     minimum   : 500,
     maximum   : 1600,
     minFont   : 12,
     maxFont   : 36,
    });

  /*Google Font Select*/

  /*
  $('#googlefont').fontselect().change(function(){

    // replace + signs with spaces for css
    var font = $(this).val().replace(/\+/g, ' ');

    // split font into family and weight
    font = font.split(':');

    // set family on paragraphs
    $('p').css('font-family', font[0]);
  });*/

});



