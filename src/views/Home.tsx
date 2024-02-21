import MainTableView from "../components/MainTableView";
import Context from "../context/provider";

// export interface TDataToShow{
//   Fecha:string
//   FechaColilla:string
//   CantidadColilla:string
//   NombreCliente:string
//   ID:number,
//   motivo:string
//   Cantidad:string 
//   DetalleCantidad: 'mas letras de los numeros'

// }

const Home =()=>{
  const context = Context();

  return(
    <main className={` ${
      context?.area == "Home" ? "z-20" : "z-0 hidden"
    } relative bg-backGround w-[860px] h-full z-20 shadow-xl m-auto flex flex-col   px-12 pt-6`}>
      <h2 className="itemsToDisappear w-full text-center font-bold pb-20 text-xl text-indigo-600" >Estas en Home</h2>

      <MainTableView/>
    </main>
    )
};

export default Home; 