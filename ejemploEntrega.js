const listaActividades = [
    {
        nombre: "ANTORCHAS BREAK",
        dia: "13 de agosto",
        horario: "18:00hs",
    },
    {
        nombre: "Grupos de hombres y mujeres",
        dia: "20 de agosto",
        horario: "18:30hs",
    },
    {
        nombre: "Visita a Centro Comunitario Renuevo",
        dia: "27 de agosto",
        horario: "19:30hs",
    },
    {
        nombre: "VIGILIA",
        dia: "3 de septiembre",
        horario: "20:00hs",
    },
]

let accion =""
while (accion != "SALIR"){
    accion = prompt("PROXIMAS ACTIVIDADES = VER|AGREGAR|ANOTARSE|BORRAR|SALIR")
    switch (accion){
        case "ANOTARSE":
            anotarseActividad()
            break;
        case "VER":
            verActividad()
            break;
        case "AGREGAR":
            agregarActividad()
            break;
        case "BORRAR":
            borrarActividad()
            break;
        case "SALIR":
            alert("Gracias por visitar www.AntorchasEncendidas.com")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}

function anotarseActividad(){
    let actividadElegida = prompt("Ingrese el nombre de la Actividad")
    const actividadBuscada = listaActividades.find((actividad)=>{
        return actividad.nombre == actividadElegida
    })
    if(actividadBuscada){
        console.log("Te anotaste exitosamente:")
        console.log(actividadBuscada)
    } else {
        console.log("No se encontró la actividad")
    }
}

function verActividad(){
    listaActividades.forEach((actividad)=>{
        alert(`Nombre: ${actividad.nombre} dia: ${actividad.dia} horario: ${actividad.horario}`)
    })
}

function agregarActividad(){
    let nuevoNombre = prompt("Ingrese el nombre de la actividad:")
    let nuevoDia = prompt("Ingrese el dia de la actividad:")
    let nuevoHorario = prompt("Ingrese el horario de la actividad:")

    const nuevaActividad = {
        nombre: nuevoNombre,
        dia: nuevoDia,
        horario: nuevoHorario,
    }

    const actividadBuscada = listaActividades.some((actividad)=>{
        return actividad.nombre == nuevoNombre
    })

    if (actividadBuscada){
        alert("La película ya existe")
    } else {
        listaActividades.push(nuevaActividad)
    }
}

function borrarActividad(){
    let actividadElegida = prompt("Ingrese el nombre de la actividad a borrar")
    let actividadEncontrada = 0

    listaActividades.forEach((actividad,indice)=>{
        if (actividad.nombre == actividadElegida){
            actividadEncontrada = indice
        }
    }) 

    if(actividadEncontrada){
        listaActividades.splice(actividadEncontrada,1)
    } else {
        alert("No se encontró la actividad")
    }
}