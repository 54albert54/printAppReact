import { useEffect, useRef, useState } from "react";
import InputComponent from "./InputComponent";
import Context from "../context/provider"

const FormCheck = ({ checkAllCampos, sendValues }) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null)]; // Puedes agregar más useRef para más inputs
  const [isVisible , setIsVisible ] = useState(false)
  const context = Context();


    useEffect(()=>{

    
      context.area == 'Llenar' ? setIsVisible(true) : setIsVisible(false)
      
    },[context.area])
  
  
  
  
  
  const inputDetails = [
    { name: "clientName", placeholder: "Nombre del cliente" },
    { name: "motivo", placeholder: "Motivo de pago" },
    { name: "monto", placeholder: "Cantidad a pagar" },
  ];

  useEffect(() => {
    inputRefs[0].current.focus();
  }, [isVisible]);
  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
      if (index === inputRefs.length - 1) {
        sendValues();
        inputRefs.forEach((ref) => {
          ref.current.value = "";
        });

        event.target.form.dispatchEvent(new Event("submit")); // Enviar el formulario
      } else {
        const nextIndex = (index + 1) % inputRefs.length; // Calcular el índice del próximo input
        inputRefs[nextIndex].current && inputRefs[nextIndex].current?.focus(); // Enfocar el próximo input
      }
    }
  };

  return (
    <form
      className="flex w-full gap-8 flex-col   "
      onSubmit={() => console.log("se dio summier")}
    >
      {inputRefs.map((inputRef, index) => (
        <InputComponent
          key={index}
          inputDetails={inputDetails}
          index={index}
          checkAllCampos={checkAllCampos}
          inputRef={inputRef}
          handleKeyDown={handleKeyDown}
        />
      ))}
    </form>
  );
};

export default FormCheck;
