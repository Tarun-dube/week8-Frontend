const prompt = require("prompt-sync")(); // Import prompt-sync

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to handle user input and conversion
function temperatureConverter() {
    console.log("Temperature Conversion: Choose an option");
    console.log("1: Convert Celsius to Fahrenheit");
    console.log("2: Convert Fahrenheit to Celsius");

    let choice = parseInt(prompt("Enter your choice (1 or 2): "));

    switch (choice) {
        case 1: // Celsius to Fahrenheit
            let celsius = parseFloat(prompt("Enter temperature in Celsius (0°C to 100°C): "));
            if (celsius < 0 || celsius > 100) {
                console.log("Invalid input! Enter a value between 0°C and 100°C.");
            } else {
                let fahrenheit = celsiusToFahrenheit(celsius);
                console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
            }
            break;

        case 2: // Fahrenheit to Celsius
            let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit (32°F to 212°F): "));
            if (fahrenheit < 32 || fahrenheit > 212) {
                console.log("Invalid input! Enter a value between 32°F and 212°F.");
            } else {
                let celsius = fahrenheitToCelsius(fahrenheit);
                console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
            }
            break;

        default:
            console.log("Invalid choice! Please enter 1 or 2.");
    }
}

// Run the temperature conversion program
temperatureConverter();
