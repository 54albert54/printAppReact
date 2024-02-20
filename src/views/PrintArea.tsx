import Context from "../context/provider";
import imagenMuestra from "../../public/access/BanReservasBlank.jpeg";

const PrintArea =()=>{
  const context = Context();
 
  

  return(
    <section className={`
    ${
      context?.area == "PrintArea" ? " " : "hidden"
    }
     absolute bg-white z-10 h-[90%]  w-screen flex justify-center `}>
      <div>
      <ul className="mt-6  absolute top-1 left-4 flex">
            <li>
              <button
                onClick={() => context?.setArea("Home")}
                className={`flex w-[100px] ml-8 ${
                  context?.area == "PrintArea" ? "bg-gray-200 " : ""
                }  justify-start rounded-lg hover:bg-gray-200 px-8 py-2 text-sm font-medium text-gray-700`}
              >
                Back
              </button>
      </li>
      <li>
              <button
                onClick={() => window.print()}
                className={`flex w-[100px] ml-8 ${
                  context?.area == "PrintArea" ? "bg-gray-200 " : ""
                }  justify-start rounded-lg hover:bg-gray-200 px-8 py-2 text-sm font-medium text-gray-700`}
              >
                Print
              </button>
      </li>
      </ul>

      </div>
      <div className="relative top-[-30px] left-8 z-20 t bg-red-800 w-400  ">
        {
          context?.references.map((element, id)=>(
            (<div key={id}   style={{
     
      
              
              
              top: element.Top + 'px',
              left: (element.Left - 25) + 'px',
              transition: 'background-color 0.3s ease',
              // cursor: isDragging ? 'grabbing' : 'grab',
             
            }} className={`absolute w-[700px]    ${element.name == 'FechaColilla' ? "text-sm left-4   ":""} `}> <p className="  flex justify-start ">{context?.dataToShow[element.name]} </p>
            </div>
             
             )
          ))
        }
      </div>

        <section>
        <img
        className="  z-40 w-[720px] h-[320px"
        id="imgMuestra"
        src={imagenMuestra}
        alt="hola"
      />
        </section>



      
    </section>
    )
};

export default PrintArea; 