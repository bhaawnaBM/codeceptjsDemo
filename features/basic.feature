Feature: Login
  Verify Login

  Scenario: Perform Login operations
    Given I navigate to the application
    When I login with username and password
      | UserName | Password |
      | admin    | password |
    And I submit my credentials
    Then I should see loggedIn
