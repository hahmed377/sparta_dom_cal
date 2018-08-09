
 function buttonClick() {
   var num1 = 0;

 }
// create reference for array
 var buttons = document.getElementsByClassName('buttonNum');
 //loop over all buttons and add event listener
for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function(){
    document.getElementById("screen").innerHTML = "";
    display.innerHTML += this.innerHTML;

  });
}
var display = document.getElementById("screen");
