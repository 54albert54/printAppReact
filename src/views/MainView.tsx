
import SideBar from "../components/SideBar";
import Default from "./Default";



import EditCheck from "./Editar";
import Home from "./Home";
import LLenar from "./LLenar";
import Login from "./Login";
import MyPendietes from "./MyPedientes";
import PrintArea from "./PrintArea";

const MainView =()=>{



  return(
    <>
    {/*//TODO terminar de ajustar el alerta para la app */}
    {/* <ModalAlert/> */}
     <PrintArea/> 
     <Login/>
      
    <section className="flex flex-row justify-center h-screen  overflow-hidden pt-6 px-20 ">
     
      <SideBar/>
      <section>
       

        <EditCheck/>
        <Home/>
        <LLenar/>
        <MyPendietes/>
        <Default/>
        
        

      </section>
     
    </section>
    </>
    )
};

export default MainView; 