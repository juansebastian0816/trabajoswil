function encontrarNumeroMasPequeno(arreglo) {
    if (arreglo.length === 0) {
        throw new Error("El arreglo no puede estar vacío.");
    }

    return Math.min(...arreglo);
}

function obtenerYEncontrarNumeroMasPequenoDelUsuario() {
    // Solicita al usuario que ingrese una lista de números separados por comas
    const entrada = prompt("Ingresa una lista de números separados por comas (por ejemplo, 10,5,8,12,-3,7):");

    // Convierte la entrada en un arreglo de números
    const arregloDeNumeros = entrada.split(',')
                                    .map(num => parseFloat(num.trim()))
                                    .filter(num => !isNaN(num)); // Filtra los valores que no son números

    try {
        // Encuentra el número más pequeño usando la función encontrarNumeroMasPequeno
        const numeroMasPequeno = encontrarNumeroMasPequeno(arregloDeNumeros);

        // Muestra el resultado al usuario
        alert(`El número más pequeño es: ${numeroMasPequeno}`);
    } catch (error) {
        // Muestra un mensaje de error si el arreglo está vacío
        alert(error.message);
    }
}

// Llama a la función para iniciar el proceso
obtenerYEncontrarNumeroMasPequenoDelUsuario();
