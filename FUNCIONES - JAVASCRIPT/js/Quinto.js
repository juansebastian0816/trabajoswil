function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Solicitar los tres números al usuario
const entrada1 = prompt("Introduce el primer número:");
const entrada2 = prompt("Introduce el segundo número:");
const entrada3 = prompt("Introduce el tercer número:");

// Convertir las entradas a números
const numero1 = parseFloat(entrada1);
const numero2 = parseFloat(entrada2);
const numero3 = parseFloat(entrada3);

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Por favor, introduce números válidos.");
} else {
    const mayor = mayorDeTres(numero1, numero2, numero3);
    console.log(`El número mayor entre ${numero1}, ${numero2} y ${numero3} es ${mayor}.`);
}