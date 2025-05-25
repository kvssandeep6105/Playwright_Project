const{test,expect,request} = require('@playwright/test');
const { PageObject } = require('../POM/pageObject');
const { Given, When, Then } = require('@cucumber/cucumber');




Given('the API endpoint is {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('I send a GET request', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the response status code should be {int}', function (int) {
    // Then('the response status code should be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the response body should contain {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
Then('the response time should be less than {int} milliseconds', function (int) {
    // Then('the response time should be less than {float} milliseconds', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});