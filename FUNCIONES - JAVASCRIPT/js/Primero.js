function sumaDosNumeros(num1, num2) {
    return num1 + num2;
}

// Solicitar dos números al usuario
const entrada1 = prompt("Introduce el primer número:");
const entrada2 = prompt("Introduce el segundo número:");

const numero1 = parseFloat(entrada1); // Convertir la entrada a un número flotante
const numero2 = parseFloat(entrada2); // Convertir la entrada a un número flotante

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, introduce números válidos.");
} else {
    const resultado = sumaDosNumeros(numero1, numero2);
    console.log("La suma de los dos números es: " + resultado);
}