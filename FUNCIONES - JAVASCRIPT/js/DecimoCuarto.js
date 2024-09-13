function convertirAStrings(personas) {
    return personas.map(persona => `Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}

function obtenerYConvertirPersonasDelUsuario() {
    // Solicita al usuario que ingrese una lista de personas en formato JSON
    const entrada = prompt("Ingresa una lista de personas en formato JSON (por ejemplo, [{\"nombre\": \"Alice\", \"edad\": 30}, {\"nombre\": \"Bob\", \"edad\": 25}]):");

    try {
        // Convierte la cadena JSON en un arreglo de objetos
        const arregloDePersonas = JSON.parse(entrada);

        // Verifica que el arreglo de personas sea un arreglo
        if (!Array.isArray(arregloDePersonas)) {
            throw new Error("La entrada no es un arreglo válido.");
        }

        // Convierte los objetos a cadenas en el formato deseado
        const cadenas = convertirAStrings(arregloDePersonas);

        // Muestra el resultado al usuario
        alert(`Las personas son:\n${cadenas.join('\n')}`);
    } catch (error) {
        // Muestra un mensaje de error si la entrada no es válida
        alert(`Error: ${error.message}`);
    }
}

// Llama a la función para iniciar el proceso
obtenerYConvertirPersonasDelUsuario();
