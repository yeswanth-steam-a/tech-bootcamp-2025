// Problem 1: Simple Array Sum Calculator

function calculateArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function processNumbers() {
    const numbers = [1, 2, 3, 4, 5];
    const result = calculateArraySum(numbers);
    console.log("Sum of numbers:", result);
}


