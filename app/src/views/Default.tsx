
import MainTitle from "../UI/MainTitle.tsx";
import AreaView from "../UI/AreaView.tsx";
import { useEffect, useState} from "react";
import db from '../context/db/mySql.js'
import { channels } from '../context/constants.js';
import configApp from "../context/config"



import { Area, TCheckList } from "../context/types.ts";
// const { ipcRenderer } = window.require('electron');
  let ipcRenderer:any
if (configApp.isDev){
   ipcRenderer = window.require('electron').ipcRenderer;
}



const Default =()=>{
  const [mjs, setMjs] = useState('jo.a');
  const [data, setData] = useState<null | TCheckList[]>([]) ;
  const getData = () => {
    db.sendData('')
    setMjs("desde otro archivo")
  };
 
  useEffect(() => {
    if (configApp.isDev){
    ipcRenderer.on(channels.GET_DATA, async ( _ ,arg) => {
    
    
      
      setData(arg) 
   
    });
    }
      

    
   
    // Clean the listener after the component is dismounted
    return () => {
      configApp.isDev &&  ipcRenderer.removeAllListeners();
    };
  }, []);
  

  return(
    <AreaView area={Area.DEFAULT}>
    
      <MainTitle title={'Default'}/>
      <p>desde mi default</p>
      <p>-{mjs}-</p>
      {
        data?.map(ele =>(
          <p key={ele?.checkId}>{ele?.clientName}</p>
        ))
      }
      <button onClick={getData}>Get data</button>
    

    </AreaView>
    )
};

export default Default; 



