import { useEffect, useState } from "react";
import MainTableView from "../components/MainTableView";
import Context from "../context/provider";


const Home =()=>{
  const [isVisible , setIsVisible ] = useState(false)
  const context = Context();

  useEffect(()=>{

    
    context.area == 'Home' ? setIsVisible(true) : setIsVisible(false)
    
  },[context.area])

  return(
    <main className={` ${isVisible ? " " :'hidden'}
     
     relative ease-in duration-300 bg-backGround w-[860px] h-[520px] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6`}>
      <h2 className="itemsToDisappear w-full text-center font-bold pb-20 text-xl text-indigo-600" >Estas en Home</h2>

      <MainTableView/>
    </main>
    )
};

export default Home; 