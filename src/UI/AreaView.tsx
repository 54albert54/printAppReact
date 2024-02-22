import Context from "../context/provider";

export default function AreaView({children,area}){
    const context = Context();


   return(
    <main className={` ${
        context?.area == area ? "z-20" : "z-0 hidden"
      } relative bg-backGround w-[860px] h-[520px] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6`}>
        {children}
      </main>

   ) 
}