import React, { useRef, useState } from "react";
import Context from "../context/provider";
import { convertirNumeroEnPalabras, separarNumeroConComas, setFecha  ,setFechaColilla} from "../context/storage";
import InputComponent from "../components/InputComponent";
// git config --global user.email
// git config --global user.email



const Print = () => {

  const context = Context();
  const [alertas, setAlerta] = useState({
    motivoValido:false,
    monto: false,
    clientName: false,
    montoValido: false,
    montoMaximo: false,
 
  });
  const [values, setValues] = useState({
    motivo: "",
    monto: "",
    clientName: "",
  });

  //context?.setArea("PrintArea")
  const checkAllCampos = (e) => {
    
    
    setAlerta({ ...alertas, clientName: false, montoValido: false ,montoMaximo: false });

    const userValue = e.target.name;
    const value = e.target.value;




  
    
    if (userValue == "monto") {
      if(value.length > 7){
     
        setAlerta({ ...alertas, montoMaximo: true });
     

        
      }
   
   

      const regex = /^\d{0,7}(\.\d{0,2})?$/;

      if (!regex.test(value)) {
        e.target.value = values.monto.slice(0, value.length - 1 );
        
      } 
     


    
      


     }

    setValues({ ...values, [userValue]: value });
  };
  const sendValues = () => {
    

    if (values.clientName.length < 3) {
      setAlerta({ ...alertas, clientName: true });
    } else if (values.monto == "") {
      setAlerta({ ...alertas, montoValido: true });
    }else if (values.clientName.length < 2 ){
      setAlerta({ ...alertas, motivoValido: true });
    }







    

    if (values.clientName.length < 3) {
      setAlerta({ ...alertas, clientName: true });
    } else if (values.monto == "") {
      setAlerta({ ...alertas, montoValido: true });
    } else {

      let cantidadSinCero = ''
      let centavosReales = '00'
      if (values.monto.includes('.')) {
        console.log("La cadena contiene un punto.");
       
        if (values.monto[values.monto.length-1].length == 1){
          const part = values.monto.split('.');
        cantidadSinCero = part[0]
        centavosReales = part[1].length == 1?`0${ part[1]}`:part[1]
        
        }else if (values.monto[values.monto.length-1] == '.'){
          console.log("termina en punto"+values.monto.slice(0 ,values.monto.length-1))
        }else{
          const part = values.monto.split('.');
       
        if (values.monto[values.monto.length-1].length == 1){
          const part = values.monto.split('.');
        cantidadSinCero = part[0]
        centavosReales = part[1].length == 1?`0${ part[1]}`:part[1]
        
        }else if (values.monto[values.monto.length-1] == '.'){
          console.log("termina en punto"+values.monto.slice(0 ,values.monto.length-1))
        }else{
          const part = values.monto.split('.');
        cantidadSinCero = part[0]
        centavosReales = part[1].slice(0,2)

        }
        

        }
        
        
      } else {
        cantidadSinCero = values.monto
        
        
      }
     
      const realValue = {
        Fecha:setFecha() ,
        FechaColilla:setFechaColilla(),
        CantidadColilla:`$${separarNumeroConComas(cantidadSinCero)}.${centavosReales} ` ,
        NombreCliente: values.clientName.charAt(0).toUpperCase() +values.clientName.slice(1) ,
        CantidadColilla:`$${separarNumeroConComas(cantidadSinCero)}.${centavosReales} ` ,
        NombreCliente: values.clientName.charAt(0).toUpperCase() +values.clientName.slice(1) ,
        ID:Math.floor(Math.random() * (1900 + 9990) ),
        motivo:values.motivo.charAt(0).toUpperCase() +values.motivo.slice(1)+"." ,
        active:true,
        Cantidad: `${separarNumeroConComas(cantidadSinCero)}.${centavosReales} `,
       
        DetalleCantidad: `${convertirNumeroEnPalabras(cantidadSinCero)} con ${centavosReales}/100 `
      };   
     
      context?.setDataToShow(realValue)
      context?.setArea("PrintArea")
    }
  };

  return (
    <main
      className={` ${
        context?.area == "Print" ? " " : "hidden"
      }  z-10 relative bg-white w-[860px] h-full shadow-xl m-auto      justify-between px-12 pt-6`}
    
    >
     
      <h2 className="itemsToDisappear w-full text-center font-bold mb-2 text-xl text-indigo-600">
        Vista previa
      </h2>

      
      <div className="   h-12 text-red-500 mb-4 text-[12px] ">
        <p
          className={`text-red-500 text-[12px] ${
            alertas.clientName ? "" : "hidden"
          }`}
        >
          Ingresa un nombre de cliente!
        </p>
        <p
          className={`text-red-500 text-[12px] ${
            alertas.motivoValido ? "" : "hidden"
          }`}
        >
          Ingresa un motivo!
        </p>

        <p
          className={`text-red-500 text-[12px] ${
            alertas.montoValido ? "" : "hidden"
          }`}
        >
          Ingresa un monto valido!
        </p>
        <p
          className={`text-red-500 text-[12px] ${
            alertas.montoMaximo ? "" : "hidden"
          }`}
        >
          La cantidad maxima es 9,999,999!
        </p>
        <p
          className={`text-red-500 text-[12px] ${
            alertas.montoMaximo ? "" : "hidden"
          }`}
        >
          La cantidad maxima es 9,999,999!
        </p>

        <p id="mensajeErrorCheckeGuardado">
          Todavia no as guardado como se vera el cheque!
        </p>
      </div>
      {/* form  */}
      {/* <FormularioCheck checkAllCampos={checkAllCampos}/> */}
      <Form checkAllCampos={checkAllCampos} sendValues={sendValues}/>
     
      <div className="absolute bottom-0 z-20  left-6 h-24 flex flex-row justify-center items-center gap-12 bg-white max-w-[760px] w-screen m-auto">
        {/* Print */}
        <div
          onClick={sendValues}
          className="inline-block rotate-180 rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
        >
          <span className="sr-only"> Print </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-printer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
            <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Print;



const Form = ({checkAllCampos ,sendValues}) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null)]; // Puedes agregar más useRef para más inputs
  const inputDetails = [ {name:'clientName',placeholder:"Nombre del cliente"}, {name:'motivo',placeholder:"Motivo de pago" }, {name:'monto',placeholder:"Cantidad a pagar" }]

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
      if (index === inputRefs.length - 1) {
        sendValues()
        inputRefs.forEach(ref =>{
          ref.current.value = '' || null
        })
        
        event.target.form.dispatchEvent(new Event('submit')); // Enviar el formulario
      } else {
        const nextIndex = (index + 1) % inputRefs.length; // Calcular el índice del próximo input
        inputRefs[nextIndex].current && inputRefs[nextIndex].current.focus(); // Enfocar el próximo input
      }
    }
  };

// type="text"
  return (
    <form className="flex w-full gap-8 flex-col   " onSubmit={()=>console.log("se dio summier")}>


      {inputRefs.map((inputRef, index) => (
          <InputComponent key={index} inputDetails={inputDetails} index={index} checkAllCampos={checkAllCampos} inputRef={inputRef} handleKeyDown={handleKeyDown}/>
      ))}



    </form>
  );
};

