
//Pseduo Code: Removed for loop for dynamically creating image attributes and Ids for crystals to reduce complexity
//will create a random number for computer and for cystals
// will create an onclick event for each crystal, so Player Score will update. Goal is to use more JQuery than JS. 
    //will create conditional statement for wins and losses with alerts & will callback reset function
//after win or loss, new random number will be regenerated (reset function will be called back into each of the four crystal functions)

//step one with jQuery: ready your document
$(document).ready(() => {

  // // When creating declaring a variable, there's not JQuery syntax. Just use JS.  
  // var computerNumber = 0;
  // var number = 0;
  // var numberOptions =[]; //everytime a crystal is pressed this will be add to the counter
  
  var playerCounter =0;
  var wins =0;
  var losses =0;
  
  //declaring 4 variables for crystals & randomly creating value to store inside each
  var blue = Math.floor(Math.random() * (13-1)) +1; 
  var green = Math.floor(Math.random() * (13 - 1)) + 1;
  var red = Math.floor(Math.random () *(13 - 1)) + 1;
  var yellow = Math.floor(Math.random () * (13 -1)) + 1;
  
 //random number selected by comptuer & variable declared
  var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19; //highest number goes first
 //taking the value via jQuery assigned to randomNumber var & placing it on div id in html
 console.log(randomNumber);
 $('#number-to-match').text(randomNumber);

  function reset () {
  playerCounter = 0; //reset player counter back to 0
  randomNumber = Math.floor(Math.random() * (121 - 19)) + 19; //reset computer to randomly generate number
  //need to reset all four crystal values to randomly generate new number
  var blue = Math.floor(Math.random() * (13-1)) +1; 
  var green = Math.floor(Math.random() * (13 - 1)) + 1;
  var red = Math.floor(Math.random () *(13 - 1)) + 1;
  var yellow = Math.floor(Math.random () * (13 -1)) + 1;
  }
                 
  // four onclick events for each crystal using jQuery
  $("#blue").on('click', function () {
  playerCounter++; 
  console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases

  //Added conditional statements for winning and losing; will repeat for green, red, and yellow crystals
      if (playerCounter === randomNumber) {
        wins++;
        $('#wins').text("Wins: " + wins);
        alert("Yessss! You Won!");
      }
      else if(playerCounter > randomNumber) {
        losses++;
        $('#losses').text("Losses: " + losses);
        alert("Be Brave! Try Again!");
      }
    })
 $("#green").on('click', function () {
  playerCounter++; 
  console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases

  //Add conditional statements for winning and losing
      if (playerCounter === randomNumber) {
        wins++;
        $('#wins').text("Wins: " + wins);
        alert("Yessss! You Won!");
      }
      else if(playerCounter > randomNumber) {
        losses++;
        $('#losses').text("Losses: " + losses);
        alert("Be Brave! Try Again!");
      }
    })
  $("#red").on('click', function () {
  playerCounter++; 
  console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases
        
      if (playerCounter === randomNumber) {
      wins++;
      $('#wins').text("Wins: " + wins);
      alert("Yessss! You Won!");
      }
      else if(playerCounter > randomNumber) {
      losses++;
      $('#losses').text("Losses: " + losses);
      alert("Be Brave! Try Again!"); 
      }
    })
  $("#yellow").on('click', function () {
  playerCounter++; 
  console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases

          if (playerCounter === randomNumber) {
            wins++;
            $('#wins').text("Wins: " + wins);
            alert("Yessss! You Won!");
          }
          else if(playerCounter > randomNumber) {
            losses++;
            $('#losses').text("Losses: " + losses);
            alert("Be Brave! Try Again!");
          }
        })

})





                  // if (playerCounter === computerNumber) {
                  //   wins++;
                  //   $('#numberWins').text("Wins: " + wins);
                  //   alert("Yessss! You Won!"); //this alert appears 4 times because its' in my for loop function
                  //   reset ();
                  // }
                  // else if (playerCounter >= computerNumber) {
                  //   losses++;
                  //   $('#numberLosses').text("Losses: " + losses);
                  //   alert("You lost. Try again!");
                  //   reset ();
                  // }
  
                  // alert("New score: " + playerCounter);
              