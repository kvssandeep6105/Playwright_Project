const{Given, When, Then} = require('@cucumber/cucumber');
const{ POMmanager } = require('../../POM/POMmanager');
const playwright = require('@playwright/test');
let pomManager 

Given('I am on the signup page', { timeout: 100 * 1000 }, async function () {

   pomManager = new POMmanager(this.page);
   this.login = await pomManager.getLoginPage();
   await this.login.goTo();
   await this.login.clickLoginButton();

});

When('I enter a new {string} and {string}', { timeout: 100 * 1000 }, async function (username, Email) {
   pomManager = new POMmanager(this.page);
   this.login = await pomManager.getLoginPage();
   await this.login.enterSignupName(username);
   await this.login.enterSignupEmail(Email);
   await this.login.clickSignupButton();

});
When('I enter a invalid {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
   pomManager = new POMmanager(this.page);
   this.login = await pomManager.getLoginPage();
   await this.login.enterUserName(username);
   await this.login.enterPassword(password);
   await this.login.clickSubmitButton();
});
Then('I should see an error message {string}', async function (errorMessage) {
   pomManager = new POMmanager(this.page);
   this.login = await pomManager.getLoginPage();
   const actualErrorMessage = await this.login.getErrorMessage();
   if (actualErrorMessage.includes(errorMessage)) {
      console.log(`Error message is displayed as expected: ${actualErrorMessage}`);
   }
   else {
      throw new Error(`Expected error message "${errorMessage}" but got "${actualErrorMessage}"`);
   }
});   