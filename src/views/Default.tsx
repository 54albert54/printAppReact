import { useEffect, useState } from "react";
import Context from "../context/provider";
import MainTitle from "../UI/MainTitle";


const Default =()=>{
  const [isVisible , setIsVisible ] = useState(false)
  const context = Context();

  useEffect(()=>{

    
    context.area == 'Default' ? setIsVisible(true) : setIsVisible(false)
    
  },[context.area])

  return(
    <main className={` ${isVisible ? " " :'hidden'}
     relative ease-in duration-300 bg-backGround w-[860px] h-[520px] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6`}>
      <MainTitle title={'Default'}/>

    </main>
    )
};

export default Default; 

