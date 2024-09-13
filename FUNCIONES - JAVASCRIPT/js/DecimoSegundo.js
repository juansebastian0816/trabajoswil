function filtrarPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}

function obtenerYFiltrarParesDelUsuario() {
    // Solicita al usuario que ingrese una lista de números separados por comas
    const entrada = prompt("Ingresa una lista de números separados por comas (por ejemplo, 1,2,3,4,5,6):");

    // Convierte la entrada en un arreglo de números
    const arregloDeNumeros = entrada.split(',')
                                    .map(num => parseFloat(num.trim()))
                                    .filter(num => !isNaN(num)); // Filtra los valores que no son números

    // Filtra los números pares usando la función filtrarPares
    const numerosPares = filtrarPares(arregloDeNumeros);

    // Muestra el resultado al usuario
    alert(`Los números pares son: ${numerosPares.join(', ')}`);
}

// Llama a la función para iniciar el proceso
obtenerYFiltrarParesDelUsuario();
