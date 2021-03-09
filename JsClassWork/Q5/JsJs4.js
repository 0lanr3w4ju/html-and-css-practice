// Write a function addWithSubcharge that adds two amounts with
// subcharge. For each amount less than or equal to 10, the subcharge
// is 1. For each amount greater than 10, the subcharge is 2.

num = parseInt(prompt("Enter first amount: "));
num1 = parseInt(prompt("Enter second amount: "));

subcharge = 0;

function addWithSubcharge(num, num1) {
    document.write("<h2>Question Five</h2>");

    if (num <= 10) {
        subcharge += 1;
    } else if (num > 10) {
        subcharge += 2;
    }

    if (num1 <= 10) {
        subcharge += 1;
    } else if (num1 > 10) {
        subcharge += 2;
    }

    return subcharge;
}

document.write("<h3>subcharge: </h3>", addWithSubcharge(num, num1));