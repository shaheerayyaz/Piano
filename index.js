for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonPressed = this.innerHTML;
    audio(buttonPressed);
    addStyle(buttonPressed);
  });
}

document.addEventListener("keydown", function (Event) {
  var buttonPressed = Event.key;
  audio(buttonPressed);
  addStyle(buttonPressed);
});

function audio(buttonPressed) {
  switch (buttonPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonPressed);
  }
}

function addStyle(buttonPressed) {
  document.querySelector("." + buttonPressed).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + buttonPressed).classList.remove("pressed");
  }, 100);
}
//jquery
$(document).keydown(function(Event){
  $("h1").text(Event.key);
  setTimeout(function (){
    $("h1").text("🎶 Piano 🎶");
  }, 1000)
});

var buttonClicked;
$(".drum").click(function() {
  buttonClicked = $(this).text();
  $("h1").text(buttonClicked);
  setTimeout(function (){
    $("h1").text("🎶 Piano 🎶");
  }, 1000)
})