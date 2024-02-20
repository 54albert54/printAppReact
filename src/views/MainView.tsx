import SideBar from "../components/SideBar";
import Defaul from "./Defaul";

import EditCheck from "./Editar";
import Home from "./Home";
import Print from "./LLenar";
import PrintArea from "./PrintArea";

const MainView =()=>{


  return(
    <>
     <PrintArea/>
      
    <section className="flex flex-row w-auto mx-auto">
     
      <SideBar/>
      <section>
       

        <EditCheck/>
        <Home/>
        <Print/>
        {/* <Defaul/> */}
        

      </section>
     
    </section>
    </>
    )
};

export default MainView; 