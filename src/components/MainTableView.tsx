import { useEffect, useState } from "react";
import CellViews from "./CellViews";
import Context from "../context/provider";
import { TCheckList } from "../context/types";
//const { ipcRenderer } = window.require('electron');
import { channels } from '../../constants.js';
import db from '../context/db/mySql.js'
//  import configApp from "../context/config"


//  let ipcRenderer
//  if (configApp.idDev){
const { ipcRenderer }= window.require('electron')
//  }
export default function MainTableView() {
    const context = Context() 
    // const [allData, setAllData] = useState<[TDataToShow]>(context.data)
    const [dataDB, setDataDB] = useState<null | TCheckList[]>([]) ;
    

    
    useEffect(()=>{

        //  if (configApp.idDev){
        db.sendData('mera prueba')
        ipcRenderer.on(channels.GET_DATA, async ( _ ,arg) => {
            context.calculateNextID(arg)
            setDataDB(arg) 
         });

         return () => {
            ipcRenderer.removeAllListeners();
         };
        // }else{
        //     context?.calculateNextID(context.data)
        //     setDataDB(context.data)   
        
            
      
          
         
        //   // Clean the listener after the component is dismounted
         
        // }

    },[context?.area])






//! Para cuando se esta en local
    // useEffect(() => {

    //     setAllData(context?.data)

    // }, [context?.data])


    return (
        <MainTableHeater data={dataDB} />
    )
}

function MainTableHeater({ data }) {

    return (
        <section className="border-black border rounded-md overflow-hidden p-[1px] bg-gray-400  ">

            <ul className="  w-full flex flex-row justify-between  border shadow-sm font-semibold text-sm bg-white py-1 pl-6 ">
                <li className="w-[50px] ">{'^'}</li>
                <li className="w-[60px] ">ID</li>
                <li className="w-[125px] ">Fecha</li>
                <li className="w-[150px]  ">Nombre</li>
                <li className="w-[120px] relative left-4 "><p>Monto</p></li>
                <li className="w-[100px] flex relative right-1  justify-end  ">Activo</li>
                <li className="w-[360px] pl-6 ">Motivo</li>

            </ul>
            <div className=" overflow-y-scroll overflow-x-hidden h-[92%] border-t-2 border-gray-500 scroll-smooth ">
                {
                    data?.map((data, i) => (
                        <CellViews key={i + data.ID} element={data} idx={i} />
                    ))
                }

            </div>
        </section>

    )
}