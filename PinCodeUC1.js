function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}

// Test Cases
console.log(validatePinCode("400088")); //true (Valid)

