
class SignUp {
    constructor(page) {
    
        this.page = page;
        this.loginButton = page.locator("a[href*='/login']");
        this.signupName = page.locator("input[data-qa='signup-name']");
        this.signupEmail = page.locator("input[data-qa='signup-email']");
        this.signupButton = page.locator("button[data-qa='signup-button']");
        this.userName = page.locator("input[data-qa='login-email']");
        this.password = page.locator("input[data-qa='login-password']");
        this.submitButton = page.locator("button[data-qa='login-button']");
        this.errorMessage = page.locator("p[style*='color: red;']");
        this.accountInformationTitle = page.locator(".title.text-center");   
        // Account Information Fields
        this.maleRadioButton = page.locator("input[value='Mr']");
        this.femaleRadioButton = page.locator("input[value='Mrs']");
        this.signupPassword = page.locator("#password");
        this.dateOfBirth = page.locator("#days");
        this.monthOfBirth = page.locator("#months");
        this.yearOfBirth = page.locator("#years");
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.companyName = page.locator("#company");
        this.address1 = page.locator("#address1");
        this.address2 = page.locator("#address2");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipCode = page.locator("#zipcode");
        this.mobileNumber = page.locator("#mobile_number");
        this.createAccountButton = page.locator("button[data-qa='create-account']");

    }

    async goTo() {
        await this.page.goto("https://www.automationexercise.com/");
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }
    async enterUserName(username) {
        await this.userName.fill(username);
    }
    async enterPassword(password) {
        await this.password.fill(password);
    }
    async clickSubmitButton() {
        await this.submitButton.click();
    }
    async enterSignupName(username) {
        await this.signupName.fill(username);
    }
    async enterSignupEmail(Email) {
        await this.signupEmail.fill(Email);
    }
    async clickSignupButton() {
        await this.signupButton.click();
       
    }
    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
    async getAccountInformationTitle() {
        return await this.accountInformationTitle.nth(0).textContent();
    } 
    async selectFemaleRadioButton() {
        await this.femaleRadioButton.click();
    }
    async selectMaleRadibutton() {
        await this.maleRadioButton.click();
    }
    async enterSignupPassword(password) {
        await this.signupPassword.fill(password);
    }
   async selectDateOfBirth(day, month, year) {
        await this.dateOfBirth.selectOption(day);
        await this.monthOfBirth.selectOption(month);
        await this.yearOfBirth.selectOption(year);
    }
    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }
    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    }
    async enterCompanyName(companyName) {
        await this.companyName.fill(companyName);
    }
    async enterAddress1(address1) {
        await this.address1.fill(address1);
    }
    async enterAddress2(address2) {
        await this.address2.fill(address2);
    }
    async selectCountry(country) {
        await this.country.selectOption(country);
    }
    async enterState(state) {
        await this.state.fill(state);
    }
    async enterCity(city) {
        await this.city.fill(city);
    }
    async enterZipCode(zipCode) {
        await this.zipCode.fill(zipCode);
    }
    async enterMobileNumber(mobileNumber) {
        await this.mobileNumber.fill(mobileNumber);
    }
    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }
    async fillAccountInformation(data) {
        await this.enterFirstName(data.firstName);
        await this.enterLastName(data.lastName);
        await this.enterCompanyName(data.companyName);
        await this.enterAddress1(data.address1);
        await this.enterAddress2(data.address2);
        await this.selectCountry(data.country);
        await this.enterState(data.state);
        await this.enterCity(data.city);
        await this.enterZipCode(data.zipCode);
        await this.enterMobileNumber(data.mobileNumber);
    }
}module.exports = { SignUp };

