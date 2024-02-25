
// import configApp from "../config/index.js"



//if (configApp.idDev){
 const { ipcRenderer} = window.require('electron')
//}

//const { ipcRenderer } = window.require('electron');
import { channels } from '../../../constants.js';


const sendData=(datos)=>{

  ipcRenderer.send(channels.GET_DATA, { newDado: datos });



}


const getData = ()=>{

  
  let response ;
     // Listen for the event
     ipcRenderer.on(channels.GET_DATA, async ( _ ,arg) => {
    
      
      
      response = arg
   
    });
    
    return response
}

const putData=(datos)=>{

   ipcRenderer.send(channels.PUT_DATA, { newDado: datos });



}

const db ={
  sendData,
  getData,
  putData
}

export default db;