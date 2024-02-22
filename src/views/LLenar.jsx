import { useEffect, useState } from "react";
import Context from "../context/provider";
import AreaView from "../UI/AreaView"
import MainTitle from "../UI/MainTitle"




import {
  convertirNumeroEnPalabras,
  separarNumeroConComas,
  setFecha,
  setFechaColilla,
} from "../context/utils";

import AlarmaLlenar from "../components/AlarmaLlenar";
import IconButton from "../UI/IconButton";
import FormCheck from "../components/FormCheck";


const Llenar = () => {
 
  const context = Context();
  const [alertas, setAlerta] = useState({
    motivoValido: false,
    monto: false,
    clientName: false,
    montoValido: false,
    montoMaximo: false,
    inicioCero: false,
  });
  const [values, setValues] = useState({
    motivo: "",
    monto: "",
    clientName: "",
  });




  const checkAllCampos = (e) => {

    setAlerta({
      ...alertas,
      clientName: false,
      montoValido: false,
      montoMaximo: false,
      inicioCero: false,
    });

    const userValue = e.target.name;
    const value = e.target.value;
    //por si se borrar todo no quede guardado
    if (value.length < 1 ){
      setValues({ ...values, [userValue]: ''});
    }
 

    if (userValue == "monto") {
      if (value.length > 7) {
        setAlerta({ ...alertas, montoMaximo: true });
      }
      if (e.target.value == "0" || e.target.value == ".") {
        values.monto = "";
        e.target.value = ""; //values.monto.slice(0, value.length - 1 );
        setAlerta({ ...alertas, inicioCero: true });
      }

      const regex = /^\d{0,7}(\.\d{0,2})?$/;
      if (!regex.test(value)) {
        e.target.value = values.monto.slice(0, value.length - 1);
      }
    }
    setValues({ ...values, [userValue]: value });
  };
  const sendValues = () => {
    if (values.clientName.length < 3) {
      setAlerta({ ...alertas, clientName: true });
    } else if (values.monto == "") {
      setAlerta({ ...alertas, montoValido: true });
    } else if (values.clientName.length < 2) {
      setAlerta({ ...alertas, motivoValido: true });
    }

    if (values.clientName.length < 3) {
      setAlerta({ ...alertas, clientName: true });
    } else if (values.monto == "") {
      setAlerta({ ...alertas, montoValido: true });
    } else {
      let cantidadSinCero = "";
      let centavosReales = "00";

      if (values.monto.includes(".")) {
        if (values.monto[values.monto.length - 1].length == 1) {
          const part = values.monto.split(".");
          cantidadSinCero = part[0];
          centavosReales = part[1].length == 1 ? `0${part[1]}` : part[1];
        } else if (values.monto[values.monto.length - 1] == ".") {
          console.log(
            "termina en punto" + values.monto.slice(0, values.monto.length - 1)
          );
        } else {
          const part = values.monto.split(".");
          cantidadSinCero = part[0];
          centavosReales = part[1].slice(0, 2);
        }
      } else {
        cantidadSinCero = values.monto;
        setValues({ ...values, motivo: "" });
      }

      const motivoDefault =
        values.motivo == "" ? "No ingresaste motivo" : values.motivo;
      const realValue = {
        Fecha: setFecha(),
        FechaColilla: setFechaColilla(),
        CantidadColilla: `$${separarNumeroConComas(
          cantidadSinCero
        )}.${centavosReales} `,
        NombreCliente:
          values.clientName.charAt(0).toUpperCase() +
          values.clientName.slice(1),
        ID: Math.floor(Math.random() * (1900 + 9990)),
        motivo:
          motivoDefault.charAt(0).toUpperCase() + motivoDefault.slice(1) + ".",
        active: true,
        Cantidad: `${separarNumeroConComas(
          cantidadSinCero
        )}.${centavosReales} `,

        DetalleCantidad: `${convertirNumeroEnPalabras(
          cantidadSinCero
        )} con ${centavosReales}/100 `,
      };
      setValues({
        motivo: "",
        monto: "",
        clientName: "",
      })

      context?.setDataToShow(realValue);
      context?.setArea("PrintArea");
    }
  };

  const AllAlerts = [
    {
      show: alertas.clientName,
      title: "Ingresa un nombre de cliente!",
    },
    {
      show: alertas.motivoValido,
      title: "Ingresa un motivo!",
    },
    {
      show: alertas.montoValido,
      title: "Ingresa un monto valido!",
    },
    {
      show: alertas.montoMaximo,
      title: "La cantidad maxima es 9,999,999!",
    },
    {
      show: alertas.inicioCero,
      title: "Debes ingresar un numero!",
    },
  ];

  return (
    <AreaView area={"Llenar"}>
      <MainTitle title={'Edita'}/>

      <AlarmaLlenar alerts={AllAlerts} />

      <FormCheck
     
        checkAllCampos={checkAllCampos}
        sendValues={sendValues}
      />

      <div className="absolute bottom-0 z-20   left-6 h-24 flex flex-row justify-center items-center gap-12  max-w-[760px] w-screen m-auto">
        <IconButton action={sendValues} title={"Print"} />
      </div>
      </AreaView>
  );
};

export default Llenar;
