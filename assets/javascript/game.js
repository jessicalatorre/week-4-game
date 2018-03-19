//Psuedo Code: We want the computer to randomly select a number between 19-120 that will be shown in browser at the start of each game. 
//There will be 4 crystals and each will have a value that isn't displayed
//players will click on each crystal to increase his/her score
//When the player's score matches the computer's random number (score), the player wins 1 round, a "You won!" displays on browser, and the game resets.
//If the player's score is greater than the computer's score, the player loses one round, display in browser shows "You lost, but keep trying!" and the game resets.


//step one with jQuery: ready your document
$(document).ready(() => {
var computerNumber = 0;
var number = 0;
var numberOptions =[]; //everytime a crystal is pressed this will be add to the counter

var randomNumber = function() {
  return Math.floor(Math.random() * (121 - 19)) + 19; //highest number goes first
}
//when you call the function it must be outside of the orginal function and it must be assigned to different variable
computerNumber = randomNumber();
console.log(computerNumber);

//add another function that randomly assigns numbers to each of the four crystals (number between 1-12);
//use jQuery to assign
//for loop and assign to each one of crystal variables 4 different times

var crystalNumber = function() {
  return Math.floor(Math.random() * (13 - 1)) + 1; //pay attention to numbers
}
  $("#number-to-guess").text(computerNumber); //use JQuery to assign number to crystal
  // Next we create a for loop to create crystals for every numberOption.

  for (var i = 0; i < 4; i++) { //we need to get 4 numbers to put them in an arry
      number = crystalNumber(); // be sure to make number variable global the same way we did for computer Number var after it was reassigned from randomNumber.
      numberOptions.push(number); //after we have the randomly created number and we push it into the number options array. This will happen each time the for loop runs.
      console.log(numberOptions[i]); //be sure to include the index and close the for loop
    }
   
    // Each imageCrystal will be given a src link to the crystal image
    for (var i = 0; i < numberOptions.length; i++) { // since this is repetitive cycle until we use all the numbers in the array, we create another for loop to assign the number to the crystals
      var imageCrystal = $("<img>"); //using Jquery to add an image tag and assigning it to newly created imageCrystal
      imageCrystal.addClass("crystal-image"); //added class call crystal 

      if( i ===blue){
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")

      } else if (i ===green){
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")

      } else if(i === red){
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")

      } else if (i===yellow){
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
      }
    );
    
  
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.

    crystals.append(imageCrystal);
  // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }
  });

// });