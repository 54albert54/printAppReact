import useContext from "../context/provider";
import { useEffect, useState } from "react";

import ShowImgBlank from "../components/ShowImgBlank";
import MenuButtons from "../UI/MenuButton";
import PrintReferencias from "../components/PrintReferencias";
import AreaView from "../UI/AreaView";
// import configApp from "../context/config"
 import db from '../context/db/mySql.js'
 import {Area} from '../context/types.ts'


let pressEnter = 0;
const PrintArea = () => {
  const context = useContext();
  const [readyToPrint, setReadyToPrint] = useState(false);
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

  // const reformData = (newData)=>{

  //   const dataToSave = {
  //     checkId:context.nextID,
  //     clientName: newData.NombreCliente,
  //     amount: newData.Cantidad,
  //     reason: newData.motivo,
  //     dateCreated: newData.FechaColilla,
  //     isActive: 1,
  //   };

  //   context?.saveDataInArchive(dataToSave)
  // }

  useEffect(() => {
    if (context.area === Area.PRINT_AREA) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [context.area]);

  const sendToPrint = () => {
    if (context?.dataToShow.Cantidad) {
      setReadyToPrint(true)
       
      setTimeout(()=>{

         window.print()
        db.putData(context?.dataToShow)
        //  reformData(context?.dataToShow)
        context?.setDataToShow({
          centavos: "",
          monto: "",
          clientName: "",
        });
        context?.setArea(Area.HOME);
        setTimeout(() => {
         
        
          setReadyToPrint(false)
        }, 300);


      },500)
     
    } else {
      context?.setArea(Area.LLENAR);
    }
  };

  const goBack = () => {
    context?.setArea(Area.LLENAR);
  


  };
  const buttonForPrintArea = [
    {
      title: "Back",
      action: goBack,
    },
    {
      title: "Print",
      action: sendToPrint,
    },
  ];

  return (
    <AreaView area={"PrintArea"} fullScreen>
    <div className=" relative w-[720px] h-[320px]">
      <PrintReferencias styleRef={styleRef} />
      
    </div>


      <div className={`absolute ${readyToPrint ? "hidden" : ""}`}>
        <div className="relative  top-[360px] left-48 ">
          <MenuButtons allButtons={buttonForPrintArea} />
        </div>
        <ShowImgBlank />
      </div>
    </AreaView>
  );
};

export default PrintArea;

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
