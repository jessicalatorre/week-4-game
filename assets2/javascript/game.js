
//step one with jQuery: ready your document
$(document).ready(() => {

  // When creating declaring a variable, there's not JQuery syntax. Just use JS.  
  var computerNumber = 0;
  var number = 0;
  var numberOptions =[]; //everytime a crystal is pressed this will be add to the counter
  var playerCounter =0;
  var wins =0;
  var losses =0;
  
  var blue = 0; 
  var green = 1;
  var red = 2;
  var yellow = 3;
  var crystals = $('#crystal-div');
  
  //random number selected by comptuer & variable declared
  var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19; //highest number goes first
 //taking the value via jQuery assigned to randomNumber var & placing it on div id in html
  $('#number-to-match').text(randomNumber);
  console.log(randomNumber);
  
  var crystalNumber = Math.floor(Math.random() * (13 - 1)) + 1; //pay attention to numbers

    $("#number-to-match").text(computerNumber); //use JQuery to assign number to crystal
    // Next we create a for loop to create crystals for every numberOption.
    
                  //reset function
                  var reset = function () {
                  randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
                  playerCounter = 0; //reset player counter back to 0
                  imageCrystal = Math.floor(Math.random() * (13 - 1)) + 1; //need to reset all four crystal values to randomly generate new number
                  }
  
                  if (playerCounter === computerNumber) {
                    wins++;
                    $('#numberWins').text("Wins: " + wins);
                    alert("Yessss! You Won!"); //this alert appears 4 times because its' in my for loop function
                    reset ();
                  }
                  else if (playerCounter >= computerNumber) {
                    losses++;
                    $('#numberLosses').text("Losses: " + losses);
                    alert("You lost. Try again!");
                    reset ();
                  }
  
                  // alert("New score: " + playerCounter);
                });