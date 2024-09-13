function duplicarValores(arreglo) {
    return arreglo.map(numero => numero * 2);
}

function obtenerYDuplicarValoresDelUsuario() {
    // Solicita al usuario que ingrese una lista de números separados por comas
    const entrada = prompt("Ingresa una lista de números separados por comas (por ejemplo, 1,2,3,4,5):");

    // Convierte la entrada en un arreglo de números
    const arregloDeNumeros = entrada.split(',')
                                    .map(num => parseFloat(num.trim()))
                                    .filter(num => !isNaN(num)); // Filtra los valores que no son números

    // Duplica los valores usando la función duplicarValores
    const numerosDuplicados = duplicarValores(arregloDeNumeros);

    // Muestra el resultado al usuario
    alert(`Los números duplicados son: ${numerosDuplicados.join(', ')}`);
}

// Llama a la función para iniciar el proceso
obtenerYDuplicarValoresDelUsuario();
