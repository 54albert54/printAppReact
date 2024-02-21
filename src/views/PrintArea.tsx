import Context from "../context/provider";
import imagenMuestra from "../../public/access/BanReservasBlank.jpeg";

const SliceDate = ({date}) =>{
  
  const dataParts = date?.split(' ') //.map(ele => `<p>${ele}</p>`).join(" ");

  return (
    <div className="relative  w-[200px] flex justify-between">
    {
      dataParts?.map((ele) =>(
        <p key={ele}>{ele}</p>
      ))
    }
    </div>
  )
}


const PrintArea =()=>{
  const context = Context();

  const styleRef = (element)=>{
  
    switch (element) {
      case 'ID':
        return 'text-[20px]  '
        break;
      case 'Fecha':
        return ' !w-[100px] '
        break;
      case 'DetalleCantidad':
        return 'w-[700px]'
        break;
      case 'NombreCliente':
        return 'w-[400px]'
        break;
      case 'motivo':
        return 'w-[370px] '
        break;
      case 'CantidadColilla':
        return ' flex flex-row  w-[80px] '
        break;
      case 'Cantidad':
        return ''
        break;
      case 'FechaColilla':
        return 'w-[700px] ml-4'
        break;
    
      default:
        return 'bg-blue-500'
        break;
    }
  
  }
  const sendToPrint = ()=>{
    context?.setArea("Home")
    //window.print()

    console.log(context?.data)

    context?.saveDataInArchive(context?.dataToShow)


  }
 


  return(
    <section className={`
    ${
      context?.area == "PrintArea" ? " " : "hidden"
    }
     absolute bg-white z-10 h-[90%] w-screen  md:w-[90%]  min-w-[720px] min-h-[320px] flex justify-center `}>
      <div>
      <ul className="mt-6  absolute top-1 left-4 flex">
            <li>
              <button
                onClick={() => context?.setArea("Home")}
                className={`flex w-[100px] ml-8 bg-gray-200  justify-start rounded-lg hover:bg-gray-200 px-8 py-2 text-sm font-medium text-gray-700`}
              >
                Back
              </button>
      </li>
      <li>
              <button
                onClick={sendToPrint}
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
             
            }} className={`absolute ${styleRef(element.name)}`}> <p className="  flex justify-start ">
            {element.name == 'Fecha' ?  <SliceDate date={context?.dataToShow[element.name]}/>  : context?.dataToShow[element.name]} 
            
            </p>
            </div>
             
             )
          ))
        }
      </div>

        <section>
        <img
        className="  z-10  w-[720px] h-[320px]"
        id="imgMuestra"
        src={imagenMuestra}
        alt="hola"
      />
        </section>



      
    </section>
    )
};

export default PrintArea; 