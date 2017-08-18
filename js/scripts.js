$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
      event.preventDefault();

      var number = parseInt($("input#number").val());
      counter()
    console.log (number);
    });
  });

var counter= function (number) {
  for (var i=1; i<=16; i++){
     if ((i%3===0)&& (i%5===0)) {
      alert("ping pong");

    }else if (i%5===0) {
      alert("pong");

    }else if (i%3===0){

      alert('ping');
    }else {
      alert(i);
    }


  }


};
