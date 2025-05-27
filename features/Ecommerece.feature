Feature: E-commerce website login

  @loginInvalid 
  Scenario Outline: Signup in with Invalid credentials
    Given I am on the signup page
    When I enter a invalid "<username>" and "<password>"
    Then I should see an error message "<errorMessage>"

    Examples:
      | username                          | password     |errorMessage|
      | Saisandeepkunapureddy12@gmail.com | SandeeP@6105 ||
  
  @Signup
  Scenario Outline: Signup in with New credentials
    Given I am on the signup page
    When I enter a new "<username>" and "<Email>"

    Examples:
      | username | Email                             |
      | SandeeP  | Saisandeepkunapureddy22@gmail.com |
