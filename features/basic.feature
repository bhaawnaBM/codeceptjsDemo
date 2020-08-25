Feature: login to github and lookup for the project
  Verify project lookup

  Scenario: Perform lookup operations
    Given I navigate to github main page
    When I search for my demo project
    Then I should see the project displayed
    And I navigate to the project repo page
