Feature: Invalid Login

  Scenario: Invalid Login scenario
    Given I open the login page
    When I enter valid username <username> and Invalid password <password>
    Then I should see the error popup

    Examples:
      | username | password |
      | Admin    | admin    |