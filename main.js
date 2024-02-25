import { ipcMain } from "electron";
import  Store from 'electron-store'
import dataBase from "./db/mySql.js";
import { channels } from "./constants.js";
import initialWindows from "./mainWindows.js";
const store = new Store();



initialWindows();




async function getData(event) {
  const data = await dataBase.list();
  event.sender.send(channels.GET_DATA, data);
}

ipcMain.on(channels.GET_DATA, async (event, arg) => {
  getData(event);
});

ipcMain.on(channels.PUT_DATA, async (event, arg) => {
  const { newDado } = arg;

  const dataToSave = {
    clientName: newDado.NombreCliente,
    amount: newDado.Cantidad,
    reason: newDado.motivo,
    dateCreated: newDado.FechaColilla,
    isActive: 1,
  };
  dataBase.insert(dataToSave)
	
	getData()
 
  //getData(event)
});
//checkData
getData();

ipcMain.on(channels.SET_BD, async (event, arg) => {
  const { newDado } = arg;
 
  
  const objetoString = JSON.stringify(newDado);
  store.set('DataB/V1', objetoString);
  
});
ipcMain.on(channels.PUT_BD, async (event, arg) => {
  const { newDado } = arg;
  


  const objetoStringRecuperado = store.get("DataB/V1");
  let objetoRecuperado = " no hay nada"
  if (objetoStringRecuperado){
    objetoRecuperado = JSON.parse(objetoStringRecuperado);
   
   } // Imprime: valor
  
event.sender.send(channels.PUT_BD, objetoRecuperado);

});


