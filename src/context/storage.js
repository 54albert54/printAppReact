


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

export function convertirNumeroEnPalabras(numero) {
  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const decenas = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const decenasX = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];
  const posiciones = ["", "mil", "millón", "mil millones"]; // Puedes extender este arreglo para números más grandes si es necesario

  const grupoTresDigitos = (str) => {
    const num = parseInt(str);
    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;
    let result = "";

    if (c > 0) {
      if (c === 1 && d === 0 && u === 0) {
        result += "cien";
      } else {
        result += centenas[c];
      }
    }

    if (d === 1 && u > 0) {
      result += " " + decenas[u];
    } else {
      result += " " + decenasX[d];
      if (d !== 0 && u !== 0) {
        result += " y";
      }
      if (u > 0) result += " " + unidades[u];
    }

    return result.trim();
  };

  const partes = [];
  while (numero.length > 0) {
    partes.push(numero.slice(-3).padStart(3, "0"));
    numero = numero.slice(0, -3);
  }
  partes.reverse();

  const resultado = partes.reverse().map((parte, idx) => {
    const partePalabras = grupoTresDigitos(parte);
    return partePalabras + " " + posiciones[idx];
  });

  return resultado.reverse().join(" ").trim();
}

export function separarNumeroConComas(num){


  const newNum = []
  for (let i = 1 ; i < num.length + 1 ; i ++){
    const idx = num.length - i
    newNum.push(num[i-1])
    if (idx == 3 | idx == 6 ){
      newNum.push(',')
    }
  }
  
  const result = newNum.join("")
  return result
  
  }

export function setFecha(){
  const fechaActual = new Date();

  // Obtener el día, mes y año de la fecha actual
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // El mes es devuelto en base 0 (enero es 0)
  const año = fechaActual.getFullYear();

  return `${dia} ${mes} ${año}`
}

export function setFechaColilla(){
  const fechaActual = new Date();

  // Obtener el día, mes y año de la fecha actual
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // El mes es devuelto en base 0 (enero es 0)
  const año = fechaActual.getFullYear();

  return `${dia}/${mes}/${año}`

}


