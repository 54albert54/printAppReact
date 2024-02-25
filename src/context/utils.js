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
  const posiciones = ["", "mil", "millones", "mil millones"]; // Puedes extender este arreglo para números más grandes si es necesario

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

  if (resultado[2]?.includes('uno millones')){
   resultado[2]= 'un millón'
    
  }
  if (resultado[1]?.length < 5){
    resultado[1] = " "
  }

  

  
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

  const add0=(date) =>( date < 10 ? `0${date}`:date )
  

  return `${add0(dia)} ${add0(mes)} ${año}`
}

export function setFechaColilla(){
  const fechaActual = new Date();

  // Obtener el día, mes y año de la fecha actual
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // El mes es devuelto en base 0 (enero es 0)
  const año = fechaActual.getFullYear();
  const add0=(date) =>( date < 10 ? `0${date}`:date )

  return `${add0(dia)}/${add0(mes)}/${año}`

}
