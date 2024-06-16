Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "contactkkiran@gmail.com"
    And User enter the password as "Varma@143"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "Dummy@gmail.com"
    Given User enter the password as "Dummy"
    When User click on the login button
    But Login should fail and should show error message
