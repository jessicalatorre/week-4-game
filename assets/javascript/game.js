
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
  
  var randomNumber;
  var playerCounter =0;
  var wins =0;
  var losses =0;

  // var blue;
  // var red;
  // var green;
  // var yellow;
  
  //declared variable to store value after computer randomly generated number betweeen 20-120(randomNumber)
  var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19; //highest number goes first
  //taking the value via jQuery assigned to randomNumber var & placing it on div id in html
  console.log('random: ' + randomNumber); //after commenting out other comments, added more specificity to understand what we're veiwing inthe console

  $('#number-to-match').text(randomNumber);

    //below I'm declaring variables for cystals to store value when random number btwn 1-12 is created  
  var blue = Math.floor(Math.random() * (13 - 1)) + 1;
      // console.log(blue);
  var green = Math.floor(Math.random() * (13 - 1)) + 1;
      // console.log(green);
  var red = Math.floor(Math.random () *(13 - 1)) + 1;
      // console.log(red);
  var yellow = Math.floor(Math.random () * (13 - 1)) + 1;
      // console.log(yellow);

  function reset(){
  console.log("reset");
  playerCounter = 0; //reset player counter back to 0
  randomNumber = Math.floor(Math.random() * (121 - 19)) + 19; //reset computer to randomly generate number
  // $('#number-to-match').text(randomNumber);
  console.log('new random: ' + randomNumber)
  //need to reset all four crystal values to randomly generate new number
 blue = Math.floor(Math.random() * (13-1)) +1; 
 green = Math.floor(Math.random() * (13 - 1)) + 1;
 red = Math.floor(Math.random () * (13 - 1)) + 1; 
 yellow = Math.floor(Math.random () * (13 -1)) + 1;
  }

  // four onclick events for each crystal using jQuery
  $("#blue").on('click', function () {
  playerCounter = playerCounter + blue;
  // console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases

  //Added conditional statements for winning and losing; will repeat for green, red, and yellow crystals

    if (playerCounter === randomNumber) {
        wins++; //incrementally increase wins
        $('#wins').text("Wins: " + wins);
        // alert("Yessss! You Won!");
        reset();
      }
      else if(playerCounter > randomNumber) {
        losses++;
        $('#losses').text("Losses: " + losses);
        // alert("Be Brave! Try Again!");
        reset();
      }
    })

 $("#green").on('click', function () {
  playerCounter = playerCounter + green; // this takes the playerCounter(Player's Score) & adds it the value of green which is the randomly created value of the green crytsal (see line 35)
  // console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases

  //Add conditional statements for winning and losing
      if (playerCounter === randomNumber) {
        wins++;
        $('#wins').text("Wins: " + wins);
        // alert("Yessss! You Won!");
        reset();
      }
      else if(playerCounter > randomNumber) {
        losses++; //incrementally increase losses
        $('#losses').text("Losses: " + losses);
        // alert("Be Brave! Try Again!");
        reset();
      }
    })
    
  $("#red").on('click', function () {
  playerCounter = playerCounter + red;
  // console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases
        
      if (playerCounter === randomNumber) {
      wins++;
      $('#wins').text("Wins: " + wins);
      // alert("Yessss! You Won!");
      reset();
      }
      else if(playerCounter > randomNumber) {
      losses++;
      $('#losses').text("Losses: " + losses);
      // alert("Be Brave! Try Again!"); 
      reset();
      }
    })
  $("#yellow").on('click', function () {
  playerCounter = playerCounter + yellow;
  // console.log(playerCounter); //You'll see the player number in console 
  $('#player-score').text(playerCounter); // at this point, each time blue crystal is clicked, the player score increases


          if (playerCounter === randomNumber) {
            wins++; //incrementally increase wins
            $('#wins').text("Wins: " + wins);
            // alert("Yessss! You Won!");
            reset();
          }
          else if(playerCounter > randomNumber) {
            losses++; //incrementally increase losses
            $('#losses').text("Losses: " + losses);
            // alert("Be Brave! Try Again!");
            reset();
          }
        })
      })

              