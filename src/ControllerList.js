const Devices = require('./Devices');

class ControllerList extends Devices {
    constructor(props) {
        super({
            id: 'controller-list',
            deviceType: 'controllers',
            ...props,
        });
    }
}

module.exports = ControllerList;
