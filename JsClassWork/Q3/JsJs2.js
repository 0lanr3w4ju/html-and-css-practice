// Write a JavaScript program to find the area of a scalene triangle
// where lengths of the three of its sides are 5, 6, 7.

let sideOneLenght = parseInt(prompt("Enter side one lenght number: "));
let sideTwoLenght = parseInt(prompt("Enter side two lenght number: "));
let sideThreeLenght = parseInt(prompt("Enter side three lenght number: "));

function findAreaOfScaleneTriangle(sideOneLength, sideTwoLength, sideThreeLength) {
    document.write("<h2>Question Three</h2>");

    let area = (sideOneLength + sideTwoLength + sideThreeLength) / 2
    area = area * ((area - sideOneLenght) * (area - sideTwoLength) * (area - sideThreeLenght))

    return Math.sqrt(area);
}

document.write("<h3>area of Scalene Triangle: </h3>", findAreaOfScaleneTriangle(sideOneLenght, sideTwoLenght, sideThreeLenght));