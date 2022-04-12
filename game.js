
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var stareted = false;
var level = 0;

var userClickedPattern = [];


$(".btn").click(function() {


  
    var userChosenColour = $(this).attr("id");
  
  
    userClickedPattern.push(userChosenColour);
    
  
    console.log(userClickedPattern);

    playSound(userChosenColour);
    animate(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });
  function checkAnswer(currentLevel){
     
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
      
        if (userClickedPattern.length === gamePattern.length){
  
         
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
        playSound("wrong");

       
  
        $("body").addClass("game-over");
        setTimeout(() => {
          $("body").removeClass("game-over")
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
        
      }
  }

  $(document).keypress(function(){
    if(!stareted){
      $("#level-title").text("Level "+ level);
      nextSequence();
      stareted = true;
      
    }
  })

function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
 
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 
  playSound(randomChosenColour);
  level++;
  $("#level-title").text("Level "+ level);
  
}

function playSound(namee) {
    var audio = new Audio("sounds/" + namee + ".mp3");
  audio.play();
}

function animate(currentcolor){
  $("."+currentcolor).addClass("pressed");
  setTimeout(() => {
    $("."+currentcolor).removeClass("pressed")
  }, 100);
}

function startOver(){
  level =0;
  gamePattern = [];
  stareted = false;
}








