import Context from "../context/provider";
import { useEffect, useState } from "react";

import SliceDate from "../components/SliceDate";
import CustomButton from "../UI/CustomButton";
import ShowImgBlank from "../components/ShowImgBlank";



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

  return (
    <section
      className={`
    ${isVisible ? " " : "hidden"}
     absolute ease-in duration-300 bg-white z-10 h-[90%]  w-screen flex justify-center `}
    >
   
        <ul className="mt-6  absolute top-1 left-4 flex">
          <li>
            <CustomButton title={'Back'} action={() => context?.setArea("Home")}/>
        
          </li>
          <li>
          <CustomButton title={'Print'} action={sendToPrint}/>
            
          </li>
        </ul>
     
      <div className="relative top-[-30px] left-8 z-20 t bg-red-800 w-400  ">
        {context?.references.map((element, id) => (
          <div
            key={id}
            style={{
              top: element.Top + "px",
              left: element.Left - 25 + "px",
              transition: "background-color 0.3s ease",
            }}
            className={`absolute ${styleRef(element.name)}`}
          >
            {" "}
            <p className="  flex justify-start ">
              {element.name == "Fecha" ? (
                <SliceDate date={context?.dataToShow[element.name]} />
              ) : (
                context?.dataToShow[element.name]
              )}
            </p>
          </div>
        ))}
      </div>

        <ShowImgBlank/>
      
    </section>
  );
};

export default PrintArea;
