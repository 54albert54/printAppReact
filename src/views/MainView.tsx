import ModalAlert from "../components/ModalAlert";
import SideBar from "../components/SideBar";
import Default from "./Default";

import EditCheck from "./Editar";
import Home from "./Home";
import LLenar from "./LLenar";
import PrintArea from "./PrintArea";

const MainView =()=>{


  return(
    <>
    {/*//TODO terminar de ajustar el alerta para la app */}
    {/* <ModalAlert/> */}
     <PrintArea/> 
      
    <section className="flex flex-row justify-center h-screen p-20 ">
     
      <SideBar/>
      <section>
       

        <EditCheck/>
        <Home/>
        <LLenar/>
        {/* <Default/> */}
        

      </section>
     
    </section>
    </>
    )
};

export default MainView; 