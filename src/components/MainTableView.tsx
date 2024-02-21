import { useEffect, useState } from "react";
import CellViews from "./CellViews";
import Context from "../context/provider";

export default function MainTableView (){
    const context = Context();
    const [allData , setData ] = useState (context?.data)

    useEffect(()=>{
        console.log('se agrego uno nuevo');
        setData(context?.data)

    },[context?.data ])

    return(
        
            <section className="border-indigo-500 border rounded-md overflow-hidden p-[1px] bg-gray-400 min-h-[30%] max-h-[82%]">
                <ul className="  w-full flex flex-row justify-between  border shadow-sm font-semibold text-sm bg-white py-1 pl-6 ">
                   
                   
                    <li className="w-[50px] ">{'^'}</li>
                    <li className="w-[60px] ">ID</li>
                    <li className="w-[125px] ">Fecha</li>
                    <li className="w-[150px]  ">Nombre</li>
                    <li className="w-[120px] relative left-4 "><p>Monto</p></li>
                    <li className="w-[100px] flex relative right-1  justify-end  ">Activo</li>
                    <li className="w-[360px] pl-6 ">Motivo</li>
                    
                </ul>
                <div className=" overflow-scroll border-t-2 border-indigo-500  scroll-smooth h-full">
                {
                    allData?.map(( data , i)=>(
                        <CellViews key={i+data.ID} element={data}  idx={i} />
                    ))
                }
                </div>
                

            </section>


        
    )
}