function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{5}$/; // Ensures exactly 6 digits, starting with 1-9
    return pinRegex.test(pin);
}

// Test Cases
console.log(validatePinCode("A400088"));   //  false (Alphabet at the beginning)

