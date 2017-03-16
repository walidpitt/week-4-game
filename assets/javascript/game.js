var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var wins = 0;
var losses = 0;
var score = 0;
var crystalValue;
var counter;



function changeCrystalValues(){
  crystalValue = [];
  for(var i = 0; i < 4; i++){
    var randInt = Math.floor(Math.random() * 12) + 1;
    while(crystalValue.indexOf(randInt) > -1)
      randInt = Math.floor(Math.random() * 12) + 1;
    crystalValue[i] = randInt;
  }
}

changeCrystalValues();


$("#random-number").html(randomNumber);
$("#wins").html("Wins<br>" + wins);
$("#losses").html("Losses<br>" + losses);
$("#score").html(score);

$(".crystal").on("click",function(){

  

  
  if(this.value == "0"){
    score += crystalValue[0];
    $("#score").html(score);
  }
  else if(this.value == "1"){
    score += crystalValue[1];
    $("#score").html(score);
  }
  else if(this.value == "2"){
    score += crystalValue[2];
    $("#score").html(score);
  }
  else{
    score += crystalValue[3];
    $("#score").html(score);
  }

 
  if(score > randomNumber){
    userLoses();
  }

  
  else if(score == randomNumber){
    wins++;

     
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    score = 0;
    changeCrystalValues();

    
    $("#random-number").html(randomNumber);
    $("#wins").html("Wins<br>" + wins + "<br><br>You won!");
    $("#losses").html("Losses<br>" + losses);
    $("#score").html(score);

    
  }
});



function userLoses(){
  losses++;

   
  randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  score = 0;
  changeCrystalValues();

  $("#random-number").html(randomNumber);
  $("#wins").html("Wins<br>" + wins);
  $("#losses").html("Losses<br>" + losses + "<br><br>You lost!");
  $("#score").html(score);
}
