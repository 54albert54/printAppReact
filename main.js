import { ipcMain } from "electron";

import dataBase from "./db/mySql.js";
import { channels } from "./constants.js";
import initialWindows from "./mainWindows.js";

initialWindows();
// import db from "./server/BD/mySql.js";
// import runServer from './serverApi.js';

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
    amount: parseFloat(newDado.Cantidad),
    reason: newDado.motivo,
    dateCreated: newDado.FechaColilla,
    isActive: 1,
  };
  dataBase.insert(dataToSave)
	
	getData()
 
  //getData(event)
});

getData();

console.log(parseFloat("1234.55"));
