

eventListeners();
// lista de proyectos
var listaProyectos = document.querySelector('ul#proyectos');

function eventListeners() {
    // boton para crear proyecto
    document.querySelector('.crear-proyecto a').addEventListener('click', nuevoProyecto);
}

function nuevoProyecto(e) {
    e.preventDefault();
    console.log('Presionaste un nuevo proyecto');

    // Crea un <input> para el nombre del nuevo proyecto
    var nuevoProyecto = document.createElement('li');
    nuevoProyecto.innerHTML = '<input type="text" id="nuevo-proyecto">';
    listaProyectos.appendChild(nuevoProyecto);

    // seleccionar el ID con el nuevoProyecto
    var inputNuevoProyecto = document.querySelector('#nuevo-proyecto');

    // al presionar enter crear el proyecto

    inputNuevoProyecto.addEventListener('keypress', function (e) {
        var tecla = e.which || e.keyCode;

        if (tecla === 13) {
            guardarProyectosDB(inputNuevoProyecto.value);
            listaProyectos.removeChild(nuevoProyecto);
        }
    });

}


function guardarProyectosDB(nombreProyecto){
    // Inyectar el
    var nuevoProyecto = document.createElement('li');
    nuevoProyecto.innerHTML = `  
    <a href="#">
        ${nombreProyecto}
    </a>
    `;
    listaProyectos.appendChild(nuevoProyecto);
}