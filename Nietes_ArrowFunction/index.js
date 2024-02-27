// Create an activity folder inside the s02
const activityFolder = 's02/activity';

// Create a for loop application using the arrow function
const forLoopApplication = () => {
  // Prompt user for input
  let userInput = prompt("Enter a number:");
  
  // Stretch goal: use while loop to ask again
  while (userInput !== null) {
    
    let number = Number(userInput); 
  
    // Output message: The number you provided is [value]
    console.log(`The number you provided is ${number}`);
    
    // If the number is less or equal to 50, terminate the loop
    if (number <= 50) {
      // Output message: The current value is at [value]. Terminating the loop
      console.log(`The current value is at ${number}. Terminating the loop`);
      break;
    }
    
    // If the value is divisible by 10, skip printing the number
    if (number % 10 === 0) {
      // Output message: The number is divisible by 10. Skipping the number
      console.log(`The number is divisible by 10. Skipping the number`);

      // If the value is divisible by 5, print the number
    } else if (number % 5 === 0) {
      // Output message: The current value is [value] is divisible by five
      console.log(`The current value is ${number} and is divisible by five`);
    }
    
    // Prompt user for input again
    userInput = prompt("Enter a number:");
  }
};


forLoopApplication();
