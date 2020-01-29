const mobx = require('mobx');

const user = mobx.observable({
    admin: true,
    name: 'John Doe',
});

const devices = mobx.observable({
    controllers: ['CTRL1'],
    lamps: ['Lamp1', "Lamp2"],
});

module.exports = {
    user,
    devices,
};
