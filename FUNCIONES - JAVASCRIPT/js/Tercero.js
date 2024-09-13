function celsiusAFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Solicitar la temperatura en grados Celsius al usuario
const entrada = prompt("Introduce la temperatura en grados Celsius:");

const celsius = parseFloat(entrada); // Convertir la entrada a un número flotante

if (isNaN(celsius)) {
    console.log("Por favor, introduce una temperatura válida.");
} else {
    const fahrenheit = celsiusAFahrenheit(celsius);
    console.log(`La temperatura en Fahrenheit es: ${fahrenheit}`);
}