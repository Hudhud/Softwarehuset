Feature: Create permanent activity
  # Description: The employee creates a permanent activity
  # Actors: Employee
 
  Scenario: Employee wants to create a permanent activity
    Given that an employee  provides his ID "abcd"
    And provides a start date week 40 of 2019 for the permanent activity
    And provides an end date week 42 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system creates the permanent activity

  Scenario: Employee enters wrong ID
    Given that an employee provides wrong ID "abcd"
    And provides a start date week 40 of 2019 for the permanent activity
    And provides an end date week 42 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid ID"

  Scenario: Employee provides a start week that occurs after the end week date for the permanent activity
    Given that an employee  provides his ID "abcd"
    And provides a start date week 3 of 2019 for the permanent activity
    And provides an end date week 1 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "End date must be later than start date"

  Scenario: Employee provides a week that does not exist in that particular year
    Given that an employee  provides his ID "abcd"
    And provides a start date week 55 of 2019 for the permanent activity
    And provides an end date week 56 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid week of year"

  Scenario: Employee provides a year that is in the past
    Given that an employee  provides his ID "abcd"
    And provides a start date week 5 of 2016 for the permanent activity
    And provides an end date week 6 of 2017 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid year"

  Scenario: Employee provides weeks, which are in the past
    Given that an employee  provides his ID "abcd"
    And provides a start date week 5 of 2019 for the permanent activity
    And provides an end date week 6 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid week(s). The start week and end week must be in the present or future"
