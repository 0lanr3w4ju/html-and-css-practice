// Write a function rotate that rotates the elements of an array. All
// elements should be moved one position to the left. The 0th element
// should be placed at the end of the array. The rotated array should be
// returned.

// Example: rotate(['a', 'b', 'c']) should
// return ['b', 'c', 'a'].

num = parseInt(prompt("Enter first number: "));
num1 = parseInt(prompt("Enter second number: "));
num2 = parseInt(prompt("Enter third number: "));

let array = new Array(num, num1, num2);   

function rotate(array) {
    document.write("<h2>Question Six</h2>");

    let first = array.shift();
    array.push(first);
    return array;
}

document.write("<h3>rotated array: </h3>", rotate(array));