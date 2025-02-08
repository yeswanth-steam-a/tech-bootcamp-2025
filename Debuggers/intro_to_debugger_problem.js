// Problem 1: Simple Array Sum Calculator
// This code has multiple bugs for interns to find using basic debugging techniques
function calculateArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {  // Bug 1: <= instead of <
        sum += numbers[i];
    }
    return sum;  // Bug 2: No error handling for empty arrays
}

function processNumbers() {
    const numbers = [1, 2, 3, 4, 5];
    const result = calculateArraySum(numbers);
    console.log("Sum of numbers:", result);  // Will show undefined due to array bounds error
}
