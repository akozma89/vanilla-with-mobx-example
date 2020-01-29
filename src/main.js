const mobx = require('mobx');
const store = require('./store');
const UserInformation = require('./UserInformation');
const ControllerList = require('./ControllerList');
const LampList = require('./LampList');

window.onload = function() {
    mobx.autorun(() => {
        console.log(store.user);
        console.log(store.devices);
    });

    new UserInformation();
    new ControllerList();
    new LampList();

    setTimeout(() => {
        store.user.name = 'János Doe';
        store.devices.controllers.push('CTRL2');
        store.devices.lamps.pop();
    }, 5000);
};
