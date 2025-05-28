const{SignUp} = require('./SignUp');


class POMmanager {
    constructor(page) {
      this.page = page;
      this.signUp = new SignUp(this.page);
    }

    getSignUpPage() {
        return this.signUp;
    }
    
}module.exports = { POMmanager };