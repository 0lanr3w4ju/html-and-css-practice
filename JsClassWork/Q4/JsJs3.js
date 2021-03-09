// Write a function toArray that takes 2 values and returns these
// values in an array.

num = parseInt(prompt("Enter first number: "));
num1 = parseInt(prompt("Enter second number: "));

function toArray(num, num1) {
    document.write("<h2>Question Four</h2>");

    let array = new Array(num, num1);   
    return array;
}

document.write("<h3>new array: </h3>", toArray(num, num1));

