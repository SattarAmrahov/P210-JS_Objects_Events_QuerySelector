let input = prompt("Please enter number");

let output = factorial(input);
console.log(output);


function factorial(inputNumber) {

    if (!isNaN(inputNumber)) {
        console.log(inputNumber);
        let result = 1;
        for (let i = 2; i <= inputNumber; i++) {
            result *= i;
        }
        return result;
    }

    return "Input is not a number";
}