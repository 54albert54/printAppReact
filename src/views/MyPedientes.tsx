
import Context from "../context/provider";


const MyPendietes =()=>{
  const context = Context();

  return(
    <main className={` ${
      context?.area == "Pedientes" ? "z-20" : "z-0 hidden"
    } relative bg-backGround w-[860px] h-[520px] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6`}>
      <h2 className="itemsToDisappear w-full text-center font-bold pb-20 text-xl text-indigo-600" >Mis Pendietes</h2>
    <div>
      <p>[] Filtrar los ceros en la cantidad  a pointer</p>
      <p>[] Hacer que cuando este en el area de printar detecte el Enter</p>
      <p>[] Seperar los componentes en statesLess</p>
      <p>[] Diferenciar las referencias con colores</p>
    </div>
    <div>
      <p>se puede hacer</p>
      <p>[] Definir mensaje:motvio por defaul</p>
     
    </div>
     
    </main>
    )
};

export default MyPendietes; 