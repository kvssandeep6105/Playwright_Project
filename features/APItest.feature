Feature: API Testing
  Scenario: Validate API response
    Given the API endpoint is "https://api.example.com/data"
    When I send a GET request
    Then the response status code should be 200
    And the response body should contain "success"
    And the response time should be less than 2000 milliseconds