


// Recuperar la cadena JSON del localStorage
const objetoStringRecuperado = localStorage.getItem('check/V1');
// Convertir la cadena JSON de nuevo a un objeto JavaScript
const objetoRecuperado = JSON.parse(objetoStringRecuperado);

 // Debería mostrar el objeto original







const refDateNewDir = {
  name:'Fecha',
  Left:'215', 
  Top:'0',
}
const refDateColillaNewDir = {
  name:'FechaColilla',
  Left:'115', 
  Top:'50',
}
const refDateNewMotivo= {
  name:'motivo',
  Left:'0', 
  Top:'50',
}

const refIDNewDir = {
   name:'ID',
  Left:'159', 
  Top:'0'
}
const refMountNewDir = {
  name:'Cantidad',
  Left:'460', 
  Top:'0'
}
const refMountColillaNewDir = {
  name:'CantidadColilla',
  Left:'260', 
  Top:'50'
}

const refShowMountNewDir = {
   name:'DetalleCantidad',
  Left:'0', 
  Top:'0'
}
const refClientNameNewDir = {
   name:'NombreCliente',
  Left:'300', 
  Top:'0'
}
 let data

if (objetoRecuperado){


    const savedRef = objetoRecuperado.map((element ) =>
    {
      const ref = {
        name:element.name,
       Left:element.Left, 
       Top:element.Top
     }
    return ref
      
     
    })

    data = savedRef


}else{
  data   = [refDateNewDir ,refIDNewDir ,refMountNewDir  ,refShowMountNewDir , refClientNameNewDir ,refDateNewMotivo , refMountColillaNewDir , refDateColillaNewDir]




}


export const referencias = data


export const pruebaCheck = [
  {
    Fecha: "12/12/2024",
    FechaColilla: "12/12/2900",
    CantidadColilla: "123.00",
    NombreCliente: "Jon Carter",
    ID: 1000,
    motivo: "mensale para probar esto de preba",
    Cantidad: "23.00",
    active: false,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "12/12/2024",
    FechaColilla: "12/12/2900",
    CantidadColilla: "123.00",
    NombreCliente: "Ana maria ",
    ID: 1020,
    motivo: "mensale para probar esto de preba",
    Cantidad: "123.00",
    active: false,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "11/12/2024",
    FechaColilla: "11/12/2900",
    CantidadColilla: "123.00",
    NombreCliente: "Mike maria ",
    ID: 1035,
    motivo: "mensale para probar esto de preba",
    Cantidad: "99.00",
    active: true,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "11/12/2024",
    FechaColilla: "11/12/2900",
    CantidadColilla: "123.00",
    NombreCliente: "mario castas",
    ID: 1033,
    motivo: "mensale para probar esto de preba",
    Cantidad: "499.00",
    active: true,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "11/12/2024",
    FechaColilla: "11/12/2900",
    CantidadColilla: "123.00",
    NombreCliente: "josefa",
    ID: 10443,
    motivo: "mensale para probar esto de preba",
    Cantidad: "49.00",
    active: true,
    DetalleCantidad: "mas letras de los numeros",
  },
];



