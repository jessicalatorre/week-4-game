
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

//funtions
var randomNumber = function() {
return Math.floor(Math.random() * (121 - 19)) + 19; //highest number goes first
}
computerNumber = randomNumber();//when you call the function it must be outside of the orginal function and it must be assigned to different variable
console.log(computerNumber);

//add another function that randomly assigns numbers to each of the four crystals (number between 1-12);use jQuery to assign & for loop and assign to each one of crystal variables 4 different times

var crystalNumber = function() {
  return Math.floor(Math.random() * (13 - 1)) + 1; //pay attention to numbers
}
  $("#number-to-match").text(computerNumber); //use JQuery to assign number to crystal
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) { //we need to get 4 numbers to put them in an array
      number = crystalNumber(); // be sure to make number variable global the same way we did for computer Number var after it was reassigned from randomNumber.
      numberOptions.push(number); //after we have the randomly created number and we push it into the number options array. This will happen each time the for loop runs.
      console.log(numberOptions[i]); //be sure to include the index and close the for loop
    }
   
    // Each imageCrystal will be given a src link to the crystal image. 
    for (var i = 0; i < numberOptions.length; i++) { // since this is repetitive cycle until we use all the numbers in the array, we create another "for" loop to assign the number to the crystals
        var imageCrystal = $("<img>"); //using Jquery to add an image tag and assigning it to newly created imageCrystal
          imageCrystal.addClass("crystal-image"); //addeded class call "crystal-image"

        if( i ===0){  // each crystal is definded by it's index number, not it's img id. 
          imageCrystal.attr('src', 'assets/images/bluegem.png');
          } else if (i ===1){
          $(imageCrystal).attr('src','assets/images/green.jpg');
          } else if(i ===2){
          imageCrystal.attr('src', 'assets/images/redgem.jpg');
          } else if (i===3){
          imageCrystal.attr('src', 'assets/images/yellowgem.jpg');
          }
          // Each imageCrystal will be given a data attribute called data-crystalValue.
          // This data attribute will be set equal to the array value.
          imageCrystal.attr("data-crystalvalue", numberOptions[i]);

          // Each crystal image (with all it classes and attributes) will get added to the crystal-div (which we declared as var crystals) to the html page.
          crystals.append(imageCrystal); 

        // This time, our click event applies to every single crystal on the page. Not just one.
        crystals.on('click', '.crystal-image', function() {
                // Determining the crystal's value requires us to extract the value from the data attribute.
                // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
                // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
                // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                // We then add the crystalValue to the user's "counter" which is a global variable.

                // Every click, from every crystal adds to the global counter.
                playerCounter += crystalValue;
                //We add the score to the web page using .text
                $('#player-score').text(playerCounter);

                // All of the same game win-lose logic applies. So the rest remains unchanged.

                if (playerCounter === computerNumber) {
                  wins++;
                  $('#numberWins').text("Wins: " + wins);
                }
                else if (playerCounter >= computerNumber) {
                  losses++;
                  $('#numberLosses').text("Losses: " + losses);
                }

                // alert("New score: " + playerCounter);
            }); //ending brace for my onclick fucntion
        } // ending brace for the for loop
}); //ending brace for my document ready