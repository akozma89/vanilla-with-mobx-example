const mobx = require('mobx');
const store = require('./store');

class DevicesList {
    constructor(props) {
        const { deviceType, id } = props;

        this.target = document.getElementById(id);

        mobx.autorun(() => {
            this.deviceList = store.devices[deviceType];

            this.render();
        });

        this.render();
    }

    render() {
        this.target.innerHTML = '';
        this.deviceList.forEach(device => {
            const deviceElement = document.createElement('li');

            deviceElement.textContent = device;

            this.target.appendChild(deviceElement);
        });
    }
}

module.exports = DevicesList;
