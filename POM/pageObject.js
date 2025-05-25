
const { test } = require('@playwright/test');

class PageObject {
    constructor(page) {
        if (!page) {
            throw new Error("A valid 'page' instance must be provided to PageObject.");
        }
        this.page = page;
        this.userName = page.locator('#name');
        this.email = page.locator('#email');
        this.agreeTerms = page.locator('#agreeTerms');
        this.formSubmit = page.locator('#form-submit');
    }
}module.exports = { PageObject };

