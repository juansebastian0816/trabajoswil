function esPalindromo(palabra) {
    const palabraNormalizada = palabra.replace(/\s+/g, '').toLowerCase();
    const palabraRevertida = palabraNormalizada.split('').reverse().join('');
    return palabraNormalizada === palabraRevertida;
}

// Solicitar la palabra al usuario
const entrada = prompt("Introduce una palabra para verificar si es un palíndromo:");
const resultado = esPalindromo(entrada);

console.log(`¿"${entrada}" es un palíndromo? ${resultado ? 'Sí' : 'No'}`);
