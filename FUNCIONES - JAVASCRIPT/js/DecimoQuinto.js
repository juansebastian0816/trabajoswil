function contarFrecuencia(arreglo) {
    return arreglo.reduce((frecuencias, elemento) => {
        // Si el elemento ya está en el objeto, incrementa su cuenta
        if (frecuencias[elemento]) {
            frecuencias[elemento] += 1;
        } else {
            // Si el elemento no está en el objeto, añádelo con una cuenta de 1
            frecuencias[elemento] = 1;
        }
        return frecuencias;
    }, {}); // Inicializa el objeto de frecuencias vacío
}

function obtenerYContarFrecuenciasDelUsuario() {
    // Solicita al usuario que ingrese una lista de elementos separados por comas
    const entrada = prompt("Ingresa una lista de elementos separados por comas (por ejemplo, manzana,banana,manzana,pera,banana):");

    // Convierte la entrada en un arreglo de elementos
    const arregloDeElementos = entrada.split(',')
                                      .map(elemento => elemento.trim());

    // Cuenta las frecuencias usando la función contarFrecuencia
    const frecuencias = contarFrecuencia(arregloDeElementos);

    // Muestra el resultado al usuario
    alert(`Frecuencias de los elementos:\n${JSON.stringify(frecuencias, null, 2)}`);
}

// Llama a la función para iniciar el proceso
obtenerYContarFrecuenciasDelUsuario();
