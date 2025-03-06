function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/; // Allows optional space in the middle
    return pinRegex.test(pin);
}

// Test Cases
console.log(validatePinCode("400088"));    // true (Valid)
console.log(validatePinCode("400 088"));   //  true (Valid with space in the middle)
