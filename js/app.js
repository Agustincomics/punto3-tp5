/* Crea una web con bootstrap y js, 
que contenga un botón input donde se pueda cargar una tarea 
y un botón que al ser presionado agregue dicha tarea a una lista, 
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */

let botonEnviar = document.getElementById('botonEnviar');
console.log(botonEnviar);
botonEnviar.addEventListener("click", agregar);
let Eboton = document.getElementById("botonEliminar");
Eboton.addEventListener("click", eliminar);

let Etarea = document.getElementById('sector');
console.log(sector);

let tareas = [0];

function agregar() {
    let tarea = document.getElementById("tarea").value;
    tareas.push(tarea);
    let Ntarea = document.createElement("p");
    Ntarea.innerHTML = `${tarea}`;
    console.log(tareas);
    sector.insertBefore(Ntarea, botonEnviar);
    sector.insertBefore(Eboton, botonEnviar);
}

function eliminar(){
    let Etarea = document.getElementById("tareaEliminar").value;
    Etarea = parseInt(Etarea) + 1;
    tareas.splice(Etarea, 1);
    console.log(tareas);
}
