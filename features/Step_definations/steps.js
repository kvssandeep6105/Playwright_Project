const{Given, When, Then} = require('@cucumber/cucumber');
const{ POMmanager } = require('../../POM/POMmanager');
const playwright = require('@playwright/test');
// const { expect } = require('../../playwright.config');
const {test, expect} = require('@playwright/test');
let pomManager 

Given('I am on the signup page', { timeout: 100 * 1000 }, async function () {

   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   await this.signUp.goTo();
   await this.signUp.clickLoginButton();

});

When('I enter a new {string} and {string}', { timeout: 100 * 1000 }, async function (username, Email) {
   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   await this.signUp.enterSignupName(username);
   await this.signUp.enterSignupEmail(Email);
   await this.signUp.clickSignupButton();

});
When('I enter a invalid {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   await this.signUp.enterUserName(username);
   await this.signUp.enterPassword(password);
   await this.signUp.clickSubmitButton();
});
Then('I should see an error message {string}', async function (errorMessage) {
   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   const actualErrorMessage = await this.signUp.getErrorMessage();
   if (actualErrorMessage.includes(errorMessage)) {
      console.log(`Error message is displayed as expected: ${actualErrorMessage}`);
   }
   else {
      throw new Error(`Expected error message "${errorMessage}" but got "${actualErrorMessage}"`);
   }
});   


Then('I should see the {string} page', async function (AccountInformation) {
   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   const actualTitle = await this.signUp.getAccountInformationTitle();
   expect(actualTitle.includes(AccountInformation)).toBeTruthy();
   console.log(`Account information page is displayed as expected: ${actualTitle}`);
});

When('I Need to enter the account information',{ timeout: 100 * 1000 }, async function (dataTable) {
   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   const data = dataTable.rowsHash();
   await this.signUp.selectFemaleRadioButton();
   await this.signUp.enterSignupPassword(data.password);
   await this.signUp.selectDateOfBirth(data.day, data.month, data.year);
   await this.signUp.enterFirstName(data.firstName);
   await this.signUp.enterLastName(data.lastName);
   await this.signUp.enterCompanyName(data.companyName);
   await this.signUp.enterAddress1(data.address1);
   await this.signUp.enterAddress2(data.address2);
   await this.signUp.selectCountry(data.country);
   await this.signUp.enterState(data.state);
   await this.signUp.enterCity(data.city);
   await this.signUp.enterZipCode(data.zipCode);
   await this.signUp.enterMobileNumber(data.mobileNumber);
   console.log("Account information entered successfully.");
   // Add a delay to see the entered information before taking the screenshot
   await this.signUp.clickCreateAccountButton();
   console.log("Account information entered successfully.");
   await this.page.waitForTimeout(5000); // Wait for 5 seconds to see the result
   await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
   console.log("Screenshot taken and saved as screenshot.png");
   await this.page.close(); // Close the page after taking the screenshot
   console.log("Page closed after taking the screenshot");
});

When('I enter a valid {string} and {string}', async function (username, password) {
   pomManager = new POMmanager(this.page);
   this.signUp = await pomManager.getSignUpPage();
   await this.signUp.enterUserName(username);
   await this.signUp.enterPassword(password);
   await this.signUp.clickSubmitButton();
});
 
When('I add a {string} to the cart',{ timeout: 100 * 1000 },async function (product) {
  pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   await this.dashboardPage.clickPlusIcon();
   await this.dashboardPage.clickProductDomain();
   await this.dashboardPage.searchProductAddCart(product);
  
   
});   

Then('I should see the popup {string}', async function (message) {
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   const actualMessage = await this.dashboardPage.getConfirmationPopupText();
   expect(actualMessage.includes(message)).toBeTruthy();
   console.log(`Confirmation popup is displayed as expected: ${actualMessage}`);
  


});
When('I proceed to the cart', async function () {
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   return this.dashboardPage.clickCartButton();
});

Then('I should see the {string} in the cart',{ timeout: 100 * 1000 }, async function (product) {
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   const cartDescription = await this.dashboardPage.getCartDescription();
   expect(cartDescription.includes(product)).toBeTruthy();
   console.log(`Product "${product}" is present in the cart: ${cartDescription}`);
});

When('I proceed to checkout', async function () {
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   await this.dashboardPage.clickCheckoutButton();
});


When('I place the order',{ timeout: 100 * 1000 }, async function () {
  
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   await this.dashboardPage.clickPlaceOrderButton();
});

When('I enter the payment details',{ timeout: 100 * 1000 }, async function (dataTable) {
   
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   const data = dataTable.rowsHash();
   await this.dashboardPage.enterNameOnCard(data.cardHolderName);
   await this.dashboardPage.enterCardNumber(data.cardNumber);
   await this.dashboardPage.enterCVC(data.cvv);
   await this.dashboardPage.enterExpirationMonth(data.expiryMonth);
   await this.dashboardPage.enterExpirationYear(data.expiryYear);

});

When('I confirm the order', async function () {
  
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   await this.dashboardPage.clickPayAndConfirmOrderButton();
});


Then('I should see the order confirmation page {string}',{ timeout: 100 * 1000 },async function (confirmationmessage) {
   pomManager = new POMmanager(this.page);
   this.dashboardPage = await pomManager.getDashboardPage();
   const orderSuccessTitle = await this.dashboardPage.getOrderConfirmationMessage();
   expect (orderSuccessTitle.includes(confirmationmessage)).toBeTruthy();
   console.log(`Order confirmation message is displayed as expected: ${orderSuccessTitle}`);
});