/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
var numBottles = prompt ("How many bottles of beer on the wall?");
var bottles = "bottles";
while (numBottles > 0){
  console.log (numBottles + " " + "bottles of beer on the wall");
  console.log (numBottles + " " + "bottles of beer");
  console.log ("Take one down and pass it around,");
  numBottles = numBottles - 1;
 if (numBottles === 1){
    bottles = "bottle"
  }
  if (numBottles === 0){
    console.log("No more bottles of beer on the wall!");
  } else {
    console.log(numBottles + " " + bottles + " of beer on the wall!");
  }
}