
/*
13 UDACITY
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanil";
var vessel = "bowl";
var toppings = "peanuts";

if((flavor === "chocolate" || flavor === "vanilla") && (vessel === "cone" || vessel === "bowl")  && (toppings === "sprinkles" || toppings === "peanuts")) {
 
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}















/*
12
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
// var balance = 0;
// var checkBalance = false;
// var isActive = true;

// your code goes here 12 - QUIZ on adacity - works fine but not passing all tests
// if (checkBalance === true){
//   if (isActive === true && balance > 0){
//     console.log(`Your balance is $${balance}.`);
//   }else if(!isActive){
//     console.log(`Your account is no longer active.`);
//   }else if(isActive && balance === 0){
//     console.log("Your account is empty.")
//   }else if(isActive && balance < 0){
//     console.log("Your balance is negative.  Please contact the bank.")
//   }
// }else{
//   console.log("Thank you and have a nice day!")
// }




// var firstName = "Katie";
// var interest = "animals";
// var hobby = "cook";


// var awesomeMessage = "Hi, my name is " + firstName + "." + " I love " + interest + "." + " In my spare time, I like to " + hobby + ".";
// console.log(awesomeMessage);
