import { useEffect , useState } from "react";
import InputComponent from "./InputComponent";
import Context from "../context/provider"

const FormCheck = ({formFor,inputRefs,inputDetails, checkAllCampos, sendValues  ,password}) => {
  
  
  
  
  
  const [isVisible , setIsVisible ] = useState(false)
  const context = Context();


    useEffect(()=>{

    
      context.area == formFor ? setIsVisible(true) : setIsVisible(false)
      
    },[context.area])
  
  
  
  
  
 

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
    >
      {inputRefs.map((inputRef, index) => (
        <InputComponent
          key={index}
          inputDetails={inputDetails}
          index={index}
          checkAllCampos={checkAllCampos}
          inputRef={inputRef}
          handleKeyDown={handleKeyDown}
          password={password}
        />
      ))}
    </form>
  );
};

export default FormCheck;
