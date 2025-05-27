const{Login} = require('./Login');


class POMmanager {
    constructor(page) {
      this.page = page;
      this.login = new Login(this.page);
    }

    getLoginPage() {
        return this.login;
    }
    
}module.exports = { POMmanager };