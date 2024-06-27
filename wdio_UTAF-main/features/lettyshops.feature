Feature: The Lettyshops Application

  Scenario: As a user, I can log in to the application
    Given that I am navigating to the login page of the Lettyshops.com application
    When I log in with the username and password provided
    Then I search for an item
    Then the user navigates to the Store page
    Then the user modifies the Account Page
# Then the user logs out
