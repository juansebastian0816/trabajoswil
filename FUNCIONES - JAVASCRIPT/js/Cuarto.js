function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Solicitar el número al usuario
const entrada = prompt("Introduce un número para calcular su factorial:");
const numero = parseInt(entrada, 10);

if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
} else {
    console.log(`El factorial de ${numero} es ${factorial(numero)}.`);
}
