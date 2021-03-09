// A Sandwich Calculator

// Write a function called sandwich calculator. This should accept one value:
// slicesOfBread The function should return the total number of possible sandwiches based
// on the amount of slices available

// Extend your function so it accepts two values, slicesOfBread and
// slicesOfCheese.

// The function should return the total number of possible sandwiches

document.write("<h2>Question Eleven</h2>");

class SandwichCalculator {
    constructor(slicesOfBread) {
        this.slicesOfBread = slicesOfBread;
    }

    sandwichCalculator() {
        return this.slicesOfBread/2;
    }
}

class SandwichCalculatorWithCheese extends SandwichCalculator {
    constructor(slicesOfBread, slicesOfCheese) {
        super(slicesOfBread);
        this.slicesOfCheese = slicesOfCheese;
    }

    sandwichCalculatorWithCheese() {
        let sandwich = super.sandwichCalculator()
        let result;

        if(sandwich >= this.slicesOfCheese) {
            result = this.slicesOfCheese;
        } else if (sandwich < this.slicesOfCheese) {
            result = sandwich;
        }
        return result;
    }
}

makeSandWich = new SandwichCalculatorWithCheese(10, 10);
document.write("<h3>sandwiches made: </h3>", makeSandWich.sandwichCalculatorWithCheese());