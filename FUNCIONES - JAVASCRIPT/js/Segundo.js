function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}


const entrada = prompt("Introduce un número para determinar si es par o impar:");
const numero = parseInt(entrada, 10);

if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
} else {
    console.log("El número es " + esParOImpar(numero));
}