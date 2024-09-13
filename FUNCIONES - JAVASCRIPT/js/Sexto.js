function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

const entrada = prompt("Introduce una cadena de texto para revertirla:");
const cadenaRevertida = revertirCadena(entrada);
console.log(`Cadena original: ${entrada}`);
console.log(`Cadena revertida: ${cadenaRevertida}`);
