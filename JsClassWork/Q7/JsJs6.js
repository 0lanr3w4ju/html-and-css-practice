// Write a JavaScript program to compute the sum of the two given
// integers. If the two values are same, then returns triple their sum.

num = parseInt(prompt("Enter first number: "));
num1 = parseInt(prompt("Enter second number: "));

function advanceSumUp(num, num1) {
    document.write("<h2>Question Seven</h2>");

    if (num == num1) {
        result = 3 * (num + num1);
    } else {
        result = num + num1;
    }
    return result;
}

document.write("<h3>result: </h3>", advanceSumUp(num, num1));