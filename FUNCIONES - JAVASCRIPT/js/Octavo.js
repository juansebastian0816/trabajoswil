function contarVocales(cadena) {
    const cadenaMinusc = cadena.toLowerCase();
    const vocales = 'aeiou';
    let contador = 0;
    
    for (let i = 0; i < cadenaMinusc.length; i++) {
        if (vocales.includes(cadenaMinusc[i])) {
            contador++;
        }
    }
    
    return contador;
}

// Solicitar la cadena al usuario
const entrada = prompt("Introduce una cadena de texto para contar las vocales:");
const cantidadVocales = contarVocales(entrada);
console.log(`La cantidad de vocales en "${entrada}" es ${cantidadVocales}.`);
