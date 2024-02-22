import Context from "../context/provider";
import { useEffect, useState } from "react";

import SliceDate from "../components/SliceDate";
import CustomButton from "../UI/CustomButton";
import ShowImgBlank from "../components/ShowImgBlank";
import MenuButtons from "../UI/MenuButton";
import PrintReferencias from "../components/PrintReferencias";



let pressEnter = 0;
const PrintArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const context = Context();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (pressEnter > 0) {
        sendToPrint();

        pressEnter = 0;
      } else {
        pressEnter++;
      }
    }
  };

  useEffect(() => {
    context.area == "PrintArea" ? setIsVisible(true) : setIsVisible(false);

    if (context.area === "PrintArea") {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [context.area]);

  const styleRef = (element: string) => {
    switch (element) {
      case "ID":
        return "text-[20px]  ";
        break;
      case "Fecha":
        return " !w-[100px] ";
        break;
      case "DetalleCantidad":
        return "w-[700px]";
        break;
      case "NombreCliente":
        return "w-[400px]";
        break;
      case "motivo":
        return "w-[370px] ";
        break;
      case "CantidadColilla":
        return " flex flex-row  w-[80px] ";
        break;
      case "Cantidad":
        return "";
        break;
      case "FechaColilla":
        return "w-[700px] ml-4";
        break;

      default:
        return "bg-blue-500";
        break;
    }
  };
  const sendToPrint = () => {
    context?.setArea("Home");
    //window.print()

    context?.saveDataInArchive(context?.dataToShow);
  };
  const goBack = ()=>{
    context?.setArea("Home")

  }
  const buttonForPrintArea = [
    {
      title:'Back',
      action:goBack
    },
    {
      title:'Print',
      action:sendToPrint
    }

  ]

  return (
    <section
      className={`
    ${isVisible ? " " : "hidden"}
     absolute ease-in duration-300 bg-white z-10 h-[90%]  w-screen flex justify-center `}
    >
      <MenuButtons allButtons={buttonForPrintArea} />
   
     <PrintReferencias styleRef={styleRef}/>
   

        <ShowImgBlank/>
      
    </section>
  )
}

export default PrintArea;
