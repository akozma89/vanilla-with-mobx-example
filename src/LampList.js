const Devices = require('./Devices');

class LampList extends Devices {
    constructor(props) {
        super({
            id: 'lamp-list',
            deviceType: 'lamps',
            ...props,
        });
    }
}

module.exports = LampList;
