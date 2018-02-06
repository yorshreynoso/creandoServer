var http = require("http");

var manejador = function (solicitud, respuesta) {
    console.log("se ejeuta en cada peticion");
    respuesta.end("terminamos nuestra peticion");  //termina la conexion

};
var servidor = http.createServer(manejador);

servidor.listen(8080);


/*para corerlo tenemos que cargar node.js en la terminal
 nos situamos en nuestro directorio donde esta hello.js
 ejectuamos   node hello.js
 listo
 la razon por la que se ejecutan dos veces la consola es 
 porque uno es la peticion por la pagina web y la otra es lapeticion para el icono que aparece */

