
var counter= function (number) {
  for (var i=1; i<=number; i++){
     if ((i%3===0)&& (i%5===0)) {
      $("#outputList").append("<li> ping pong </li>");


    }else if (i%5===0) {
      $("#outputList").append("<li> pong</li>");;

    }else if (i%3===0){

      $("#outputList").append("<li> ping</li>");
    }else {
      $("#outputList").append("<li>" +i+ " </li>");
    }


  }


};



$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    counter(number)

  });
});
