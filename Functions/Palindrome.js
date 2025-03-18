
// Function to check if a number is a palindrome
function isPalindrome(num) {
    let originalNum = num.toString();
    let reversedNum = originalNum.split("").reverse().join("");
    return originalNum === reversedNum;
}

// Function to check if two numbers are palindromes
function checkPalindromes(num1, num2) {
    let result1 = isPalindrome(num1) ? "is a Palindrome" : "is NOT a Palindrome";
    let result2 = isPalindrome(num2) ? "is a Palindrome" : "is NOT a Palindrome";

    console.log(`${num1} ${result1}`);
    console.log(`${num2} ${result2}`);
}

// Example usage
checkPalindromes(121, 789);
checkPalindromes(123, 4554);
