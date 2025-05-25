Feature: E-commerce website login

  Scenario Outline: Signup in with valid credentials
    Given I am on the signup page
    When I enter a valid username and password
    And I click the signup button
    Then I should be redirected to the Account Informatio page

    Examples:
      | username                 | password |
      | saisandeep6105@gmail.com | Sandeep1 |
