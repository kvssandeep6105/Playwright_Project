
class Login {
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
}module.exports = { Login };

