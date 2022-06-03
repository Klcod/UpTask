
eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);
}


function validarRegistro(e) {
    e.preventDefault();

    var usuario = document.querySelector('#usuario').value,
        password = document.querySelector('#password').value,
        tipo = document.querySelector('#tipo').value;

        if(usuario === '' || password === '') {
            // La validación falló
            swal({
                type: 'error',
                title: 'Error!',
                text: 'Ambos campos son obligatorios!'
            })
        } else {
            // Ambos campos son correctos, mandar ejecutar Ajax

            // datos que se envian al servidor
            var datos = new FormData();
            datos.append('usuario', usuario);
            datos.append('password', password);
            datos.append('accion', tipo);

            // Crear el llamado a ajax
            var xhr = new XMLHttpRequest();

            // abrir la conexión.
            xhr.open('POST', 'inc/modelos/modelo-admin.php', true);

            // retorno de datos
            xhr.onload = function() {
                if(this.status === 200) {
                    console.log(JSON.parse(xhr.responseText));
                }
            }

            // Enviar la petición
            xhr.send(datos); 
        }
}