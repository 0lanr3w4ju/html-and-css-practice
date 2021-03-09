// Write a JavaScript program to check two given numbers and return
// true if one of the number is 50 or if their sum is 50.

num = parseInt(prompt("Enter first number: "));
num1 = parseInt(prompt("Enter second number: "));

checkForFifty(num, num1)

function checkForFifty(num, num1) {
    document.write("<h2>Question One</h2>");
    if (num == 50) {
        document.write("<h3>first number is equals to fifty!</h3>"); 
    } else if (num1 == 50) {
        document.write("<h3>second number is equals to fifty!</h3>"); 
    } else if (num + num1 == 50) {
        document.write("<h3>summation of first number and second number is equals to fifty!</h3>"); 
    } else {
        document.write("<h3>False!</h3>"); 
    }
}

