$( window ).load(function() {
  var widthHeader = $( 'header' ).width();
    $.keyframe.define([{
        name: 'rotate',
        '0%': {'left':'0', 'transform':'rotate(0)'},
        '20%': {'left':(widthHeader - widthHeader * 0.553 - 80 ) + 'px', 'transform':'rotate(180deg)'},
        '60%': {'left':(widthHeader * (-1) + widthHeader * 0.553 + 80) + 'px', 'transform':'rotate(-180deg)'},
        '100%': {'left':'0', 'transform':'rotate(0)'},
      }]);
});
