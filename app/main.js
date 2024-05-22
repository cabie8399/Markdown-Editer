const { app, BrowserWindow } = require('electron')
const path = require('path')
// const isDev = require('electron-is-dev');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 900
    })

    // 開發階段直接與 React 連線
    mainWindow.loadURL('http://localhost:3000/');
    // 開啟 DevTools.
    mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})