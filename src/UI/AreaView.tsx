import { useEffect, useState } from "react";
import Context from "../context/provider";

export default function AreaView({children,area,fullScren=false }){

    const context = Context();
    const [isVisible , setIsVisible ] = useState(false)


    useEffect(()=>{

    
      context.area == area ? setIsVisible(true) : setIsVisible(false)
      
    },[context.area])



   return(
    <main className={` ${isVisible ? "z-20" : "z-0 hidden" 
      }      ${fullScren?'absolute  bg-white z-10 h-[90%]  w-screen flex justify-center':'relative bg-backGround w-[860px] h-[520px] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6'}`}>
        {children}
      </main>

   ) 
}