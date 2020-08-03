'use strict'
import { app, protocol, BrowserWindow,ipcMain } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';
const isDevelopment = process.env.NODE_ENV !== 'production';

const winURL = isDevelopment ? process.env.WEBPACK_DEV_SERVER_URL: `file://${__dirname}/index.html`;
let win;
let subWindow;
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
function createSubWindow(vueName){
subWindow= new BrowserWindow({
  width: 800,
  height: 600,
  frame:true,
  webPreferences: {
    nodeIntegration:true
  }
})
subWindow.loadURL(winURL+'#/sub/'+vueName);
subWindow.on('closed', () => { subWindow = null })
if (!process.env.IS_TEST) subWindow.webContents.openDevTools();
}
function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 600,
    frame:false,
    transparent: true,
    resizable:false,
    webPreferences: {
      nodeIntegration:true
    }
  })
  win.loadURL(winURL)
  if (!process.env.IS_TEST) win.webContents.openDevTools();
  if(!isDevelopment)createProtocol('app');
  win.on('closed', () => {
    win = null
  })
}
ipcMain.on('createSubWindow', (e,data)=>{
  createSubWindow(data);
}

)
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
