const {app ,BrowserWindow } = require("electron")
const path = require('path')
const url = require('url')
const  {ipcMain } = require( "electron");
const channels  = require("./constants.js");
const dataBase = require('./db/mySql.js')



const createWindows =()=> {

 const win =new BrowserWindow({
    title:"MiApp",
    width:1200,
    height:800,
    webPreferences: { 
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
      
    } 
  })

  const startUrl = url.format({
    pathname:path.join(__dirname,'./app/build/index.html'),
    protocol:'file',
  })
  // win.loadFile('./appelectron/dist/index.html')
  // win.loadURL('http://localhost:5173/')
 win.loadURL(startUrl)

win.webContents.openDevTools()
}



app.whenReady().then(createWindows)

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
