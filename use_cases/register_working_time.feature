Feature: Register working time

# Author: Tala

  #    Description: An employee registers his/her working time
  #    Actors: Employee
  Scenario: Register working time for an activity
    Given that an employee provides his ID "abcd"
    And that the employee provides the activity with a name
    And the employee provides his working time "2.0" hours
    When the employee wants to register his working time for the activity
    Then the employee has registered his working time

  Scenario: Register working time for an activity while having a wrong ID
    Given that an employee provides wrong ID "abcd"
    And the employee provides his working time "2.0" hours
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Invalid ID"

  Scenario: Employee does not enter working time for an activity
    Given that an employee provides his ID "abcd"
    And the employee does not provide his working time
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Invalid working hours"

  Scenario: Employee enters a non-existing activity name
    Given that an employee provides a wrong activity name "abcd"
    And the employee provides his working time "2.0" hours
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Unknown activity name"

  Scenario: Employee wants to register working time for an activity with deadline exceeded
    Given that the employee provides the activity with a name
    And the employee provides his working time "2.0" hours
    And the activity's deadline is exceeded
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Activity deadline is exceeded. You cannot register time on this activity"

  Scenario: Employee does not enter an activity name
    Given that the employee does not enter an activity name
    And the employee provides his working time "2.0" hours
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Please provide activity name"

  Scenario: Employee enters an illegal value (a String) for working time for an activity
    Given that the employee provides the activity with a name
    And the employee provides his working time "bb" hours
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Not a number. Please provide a number value"

  Scenario: Employee enters a value, which is equal to or less than 0.0 for working time for an activity
    Given that the employee provides the activity with a name
    And the employee provides his working time "0.0" hours
    When the employee wants to register his working time for the activity
    Then the system provides an error message "Invalid working hours"
