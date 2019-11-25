const { ipcRenderer } = require('electron');

const data = {
    message: 'Olá',
    someData: 'Electron!'
};

const btn01 = document.getElementById('btn01');

btn01.addEventListener('click', e => {

    ipcRenderer.send('main-action', data);
});