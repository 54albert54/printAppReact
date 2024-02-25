
import configApp from "../config/index.js"
let ipcRenderer

if (configApp.idDev){
  ipcRenderer = window.require('electron');
}

//const { ipcRenderer } = window.require('electron');
import { channels } from '../../../constants.js';


const sendData=(datos)=>{

  const response =  ipcRenderer.send(channels.GET_DATA, { newDado: datos });
   console.log('response',response);


}


const getData = ()=>{
  console.log('desde get data');
  
  let response ;
     // Listen for the event
     ipcRenderer.on(channels.GET_DATA, async ( _ ,arg) => {
    
      console.log('desde adentro');
      
      response = arg
   
    });
    console.log('desde get data',response);
    return response
}

const putData=(datos)=>{

  const response =  ipcRenderer.send(channels.PUT_DATA, { newDado: datos });
   console.log('response',response);


}

const db ={
  sendData,
  getData,
  putData
}

export default db;