Feature: E-commerce website login

  @loginInvalid
  Scenario Outline: Signup in with Invalid credentials
    Given I am on the signup page
    When I enter a invalid "<username>" and "<password>"
    Then I should see an error message "<errorMessage>"

    Examples:
      | username                          | password     | errorMessage                         |
      | Saisandeepkunapureddy12@gmail.com | SandeeP@6105 | Your email or password is incorrect! |

  @Signup
  Scenario Outline: Signup in with New credentials
    Given I am on the signup page
    When I enter a new "<username>" and "<Email>"
    Then I should see the "<AccountInformation>" page
    When I Need to enter the account information
      | fieldName    | value               |
      | gender       | male                |
      | password     | SandeeP@6105        |
      | day          |                  22 |
      | month        | October             |
      | year         |                1992 |
      | firstName    | Sandeep             |
      | lastName     | Kunapureddy         |
      | companyName  | Sandeep Enterprises |
      | address1     |         123 Main St |
      | address2     | Apt 4B              |
      | country      | United States       |
      | state        | California          |
      | city         | San Francisco       |
      | zipCode      |               94105 |
      | mobileNumber |          1628658995 |

    Examples:
      | username | Email                             | AccountInformation        |
      | SandeeP  | Saisandeepkunapureddy24@gmail.com | Enter Account Information |

  @OrderCreation
  Scenario Outline: Create an order with valid credentials
    Given I am on the signup page
    When I enter a valid "<username>" and "<password>"
    And I add a product to the cart
    Then I should see the product in my cart
    When I proceed to checkout
    Then I should see the order confirmation page

    Examples:
      | username                          | password     |
      | Saisandeepkunapureddy09@gmail.com | SandeeP@6105 |
