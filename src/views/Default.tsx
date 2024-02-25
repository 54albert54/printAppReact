
import MainTitle from "../UI/MainTitle.js";
import AreaView from "../UI/AreaView.js";
import { useEffect, useState} from "react";
import db from '../context/db/mySql.js'
import { channels } from '../../constants.js';
import configApp from "../context/config"
import {Area} from '../context/types.ts'


import { TCheckList } from "../context/types.js";
// const { ipcRenderer } = window.require('electron');
  let ipcRenderer
if (configApp.isDev){
   ipcRenderer = window.require('electron');
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
    
      console.log('desde adentro');
      
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



