var gamepattern=[];
var userclickpattern=[];
var buttoncolor =["blue","red","green","yellow"];
var level=0;
var started =flase;


$(document).keypress(function(){
   if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextsequence()
  {
    level++;
     $("#level-title").text("Level " + level);
    var randomnumber =Math.floor(Math.random()*4);
    var randomchosencolor=buttoncolor[randomnumber];
  gamepattern.push(randomchosencolor);

  $("#" + randomchosencolor).fadeIn(80).fadeOut(80).fadeIn(80);
  playsound(randomchosencolor);
  }

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userclickpattern.push(userChosenColour);

  playsound(userChosenColour);
  animatepress(userChosenColour);
});


  function playsound(name)
  {
  var audio= new Audio("sounds/"+ name+".mp3");
  audio.play();
  }


  function animatepress(currentcolor)
  {
    $("#" + currentcolor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
  }
