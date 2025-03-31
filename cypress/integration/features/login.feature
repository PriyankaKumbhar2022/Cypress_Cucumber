Feature: Login

  Scenario: Successful Login
    Given I open the login page
    When I enter valid username and password
    Then I should see the dashboard

    # Examples:
    #   | username | password |
    #   | Admin    | admin12  |
    #   | Admin    | admin123 |