import { useEffect, useState } from "react";

import Context from "../context/provider";
import { TCheckList } from "../context/types";

import { channels } from '../context/constants.js';
import db from '../context/db/mySql.js'
  import configApp from "../context/config"
import { MainTableHeater } from "./MainTableHeater";

  let ipcRenderer
 if (configApp.idDev){
 ipcRenderer = window.require('electron').ipcRenderer
  }
export default function MainTableView() {
    const context = Context() 
    // const [allData, setAllData] = useState<[TDataToShow]>(context.data)
    const [dataDB, setDataDB] = useState<null | TCheckList[]>([]) ;
    

    
    useEffect(()=>{

          if (configApp.idDev){
        db.sendData('mera prueba')
        ipcRenderer.on(channels.GET_DATA, async ( _ ,arg) => {
            context.calculateNextID(arg)
            setDataDB(arg) 
         });

         return () => {
            ipcRenderer.removeAllListeners();
         };
        }else{
            context?.calculateNextID(context.data)
            setDataDB(context.data)   
        
            
        }
  

    },[context?.area])



    return (
        <MainTableHeater data={dataDB} />
    )
}

