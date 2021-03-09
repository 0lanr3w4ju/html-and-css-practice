// Write a JavaScript program to compute the sum and product of
// an array of integers.

let array = new Array();

bool = true;

document.write("<h2>Question Ten</h2>");

do {
    num = parseInt(prompt("Enter number or -1 to break: "));

    if (num != -1) {
        array.push(num);
    } else {
        bool = false;
    }
} while (bool);

let sum = 0;
let product = 1;
for (let number in array) { 
    sum += array[number];
    product *= array[number];
}

document.write("<h3>sum of elements in array: </h3>", sum);
document.write("<h3>product of elements in array: </h3>", product);