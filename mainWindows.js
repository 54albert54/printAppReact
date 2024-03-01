import { app, BrowserWindow, Menu } from "electron";

export default function initialWindows() {
  function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      icon: "./build/iconApp.ico", // Ruta al icono
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: false,
      },
    });

    // Load the index.html of the app.
    win.loadFile("./pages/index.html");

    // Open the DevTools.
    //  win.webContents.openDevTools()

    // Exponer la función de impresión al contexto del renderizado

    // End of the file

    // Crea un menú personalizado para la ventana principal
    const mainMenu = Menu.buildFromTemplate([
      {
        label: "Tools",
        submenu: [
          {
            label: "Quit",
            accelerator: process.platform === "darwin" ? " " : "",
            click() {
              // Ignora la solicitud de abrir las herramientas de desarrollo
              app.quit();
            },
          },
        ],
      },
    ]);
    Menu.setApplicationMenu(mainMenu);
  }

  // Deshabilitar las herramientas de desarrollo
  app.commandLine.appendSwitch("disable-dev-tools", "true");

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // This method is equivalent to 'app.on('ready', function())'
  app.whenReady().then(createWindow);

  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the
    // app when the dock icon is clicked and there are no
    // other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // In this file, you can include the rest of your
  // app's specific main process code. You can also
  // put them in separate files and require them here.
}
