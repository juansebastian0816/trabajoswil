function sumarTodosLosNumeros(arreglo) {
    return arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
}

function obtenerYSumarNumerosDelUsuario() {
    // Solicita al usuario que ingrese una lista de números separados por comas
    const entrada = prompt("Ingresa una lista de números separados por comas (por ejemplo, 1,2,3,4,5):");

    // Convierte la entrada en un arreglo de números
    const arregloDeNumeros = entrada.split(',')
                                    .map(num => parseFloat(num.trim()))
                                    .filter(num => !isNaN(num)); // Filtra los valores que no son números

    // Suma los números usando la función sumarTodosLosNumeros
    const suma = sumarTodosLosNumeros(arregloDeNumeros);

    // Muestra el resultado al usuario
    alert(`La suma de los números es: ${suma}`);
}

// Llama a la función para iniciar el proceso
obtenerYSumarNumerosDelUsuario();
