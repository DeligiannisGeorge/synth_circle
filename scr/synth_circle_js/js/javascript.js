$( window ).load(function() {
  var manolis = $( 'header' ).width();
    $.keyframe.define([{
        name: 'rotate',
        '0%': {'left':'0', 'transform':'rotate(0)'},
        '20%': {'left':(manolis - manolis * 0.553 - 80 ) + 'px', 'transform':'rotate(180deg)'},
        '60%': {'left':(manolis * (-1) + manolis * 0.553 + 80) + 'px', 'transform':'rotate(-180deg)'},
        '100%': {'left':'0', 'transform':'rotate(0)'},
      }]);
});


var a = 3;
var b;

var add = function (){
  var a = 5;
  console.log(a);
  console.log(b);
}
add();
console.log(a);

for (var i = 0; i < array.length; i++) {
  array[i]
}
