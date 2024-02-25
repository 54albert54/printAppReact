
import AreaView from "../UI/AreaView";
import MainTitle from "../UI/MainTitle";
import {Area} from '../context/types.ts'



const MyPendietes =()=>{


  return(
    <AreaView area={Area.PENDIENTE}>
      <MainTitle title={'Pendientes'}/>
       {/* <div>
      
      <p>[-] </p>

    </div>
    <div>
      <p>se puede agregar como opciones</p>
      <p>-{'>'}Definir motivo mensaje:  por default</p>
     
    </div> */}
     
    </AreaView>
    )
};

export default MyPendietes; 