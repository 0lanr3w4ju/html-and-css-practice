// Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.

let array = new Array();

bool = true;

document.write("<h2>Question Eight</h2>");

do {
    num = parseInt(prompt("Enter number or -1 to break: "));

    if (num != -1) {
        array.push(num);
    } else {
        bool = false;
    }
} while (bool);

document.write("<h3>first element: </h3>", array.shift());