const mobx = require('mobx');
const { user } = require('./store');

class UserInformation {
    constructor() {
        mobx.autorun(() => {
            this.render(user.name);
        });

        this.render(user.admin);
    }

    render(value) {
        const element = document.getElementById('user-information');

        element.innerHTML = value;
    }
}

module.exports = UserInformation;
