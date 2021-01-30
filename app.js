const fs = require("fs");
const rutaOriginal = "./archivos/";
const nuevaRuta = "./archivos_otros/";
const archivo = "archivo_original.txt";

function copiarArchivo(rutaOriginal, nuevaRuta, archivo) {
    fs.copyFile(rutaOriginal + archivo, nuevaRuta + archivo, (error) => {
        if (error) {
            console.log("Error: Archivo no copiado.");
            throw error;
        } else {
        }
    });
}

function eliminarArchivo(rutaOriginal, archivo) {
    fs.unlink(rutaOriginal + archivo, (error) => {
        if (error) {
            console.log("Error: Archivo no eliminado.");
            throw error;
        } else {
        }
    });
}

function moverArchivo(rutaOriginal, nuevaRuta, archivo) {
    copiarArchivo(rutaOriginal, nuevaRuta, archivo);
    eliminarArchivo(rutaOriginal, archivo);
    console.log("Archivo movido exitosamente.");
}

moverArchivo(rutaOriginal, nuevaRuta, archivo);
