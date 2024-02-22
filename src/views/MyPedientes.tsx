
import MainTitle from "../UI/MainTitle";
import Context from "../context/provider";


const MyPendietes =()=>{
  const context = Context();

  return(
    <main className={` ${
      context?.area == "Pedientes" ? "z-20" : "z-0 hidden"
    } relative bg-backGround w-[860px] h-[520px] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6`}>
      <MainTitle title={'Pendientessss'}/>
       <div>
      
      <p>[] conectar  base de datos</p>
      <p>[] hacer y el login</p>
      <p>[X] hacer componente Titilo para todas la areas</p>
      <p>[X] Crear componente de menu de PrintArea</p>
      <p>[X] tray tu split more PrintArea</p>
    </div>
    <div>
      <p>se puede agregar como opciones</p>
      <p>-{'>'}Definir motivo mensaje:  por default</p>
     
    </div>
     
    </main>
    )
};

export default MyPendietes; 