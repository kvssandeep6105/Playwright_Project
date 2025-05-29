const{SignUp} = require('./SignUp');
const {DashboardPage} = require('./DashboardPage')


class POMmanager {
    constructor(page) {
      this.page = page;
      this.signUp = new SignUp(this.page);
      this.dashboardPage = new DashboardPage(this.page);
    }

    getSignUpPage() {
        return this.signUp;
    }
    
    getDashboardPage() {
        return this.dashboardPage;
    }
}module.exports = { POMmanager };