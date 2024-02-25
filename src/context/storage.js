// Recuperar la cadena JSON del localStorage
const objetoStringRecuperado = localStorage.getItem("check/V1");
// Convertir la cadena JSON de nuevo a un objeto JavaScript
const objetoRecuperado = JSON.parse(objetoStringRecuperado);

// Debería mostrar el objeto original

const refDateNewDir = {
  name: "Fecha",
  Left: "215",
  Top: "0",
};
const refDateColillaNewDir = {
  name: "FechaColilla",
  Left: "115",
  Top: "50",
};
const refDateNewMotivo = {
  name: "motivo",
  Left: "0",
  Top: "50",
};

const refIDNewDir = {
  name: "ID",
  Left: "159",
  Top: "0",
};
const refMountNewDir = {
  name: "Cantidad",
  Left: "460",
  Top: "0",
};
const refMountColillaNewDir = {
  name: "CantidadColilla",
  Left: "260",
  Top: "50",
};

const refShowMountNewDir = {
  name: "DetalleCantidad",
  Left: "0",
  Top: "0",
};
const refClientNameNewDir = {
  name: "NombreCliente",
  Left: "300",
  Top: "0",
};
let data;

if (objetoRecuperado) {
  const savedRef = objetoRecuperado?.map((element) => {
    const ref = {
      name: element.name,
      Left: element.Left,
      Top: element.Top,
    };
    return ref;
  });

  data = savedRef;
} else {
  data = [
    refDateNewDir,
    refIDNewDir,
    refMountNewDir,
    refShowMountNewDir,
    refClientNameNewDir,
    refDateNewMotivo,
    refMountColillaNewDir,
    refDateColillaNewDir,
  ];
}

export const referencias = data;

export const pruebaCheck = [
  {
    Fecha: "12/12/2024",
    dateCreated: "12/12/2900",
    amount: "123.00",
    clientName: "Jon Carter",
    checkId: 1000,
    reason: "mensale para probar esto de preba",
    Cantidad: "23.00",
    isActive: false,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "12/12/2024",
    dateCreated: "12/12/2900",
    amount: "123.00",
    clientName: "Ana maria ",
    checkId: 1020,
    reason: "mensale para probar esto de preba",
    Cantidad: "123.00",
    isActive: false,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "11/12/2024",
    dateCreated: "11/12/2900",
    amount: "123.00",
    clientName: "Mike maria ",
    checkId: 1035,
    reason: "mensale para probar esto de preba",
    Cantidad: "99.00",
    isActive: true,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "11/12/2024",
    dateCreated: "11/12/2900",
    amount: "123.00",
    clientName: "mario castas",
    checkId: 1038,
    reason: "mensale para probar esto de preba",
    Cantidad: "499.00",
    isActive: true,
    DetalleCantidad: "mas letras de los numeros",
  },
  {
    Fecha: "11/12/2024",
    dateCreated: "11/12/2900",
    amount: "123.00",
    clientName: "josefa",
    checkId: 1037,
    reason: "mensale para probar esto de preba",
    Cantidad: "49.00",
    isActive: true,
    DetalleCantidad: "mas letras de los numeros",
  },
];

