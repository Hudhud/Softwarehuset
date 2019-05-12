Feature: Assign an employee to activity

  # Description: The project manager assigns an employee to activity
  # Actors: Project manager
  
  Scenario: Assign employee, who is vacant, to an activity
    Given that a project manager provides the employee with ID "abcd", who is vacant
    And that provides the name of the activity
    When the project manager wants to add an employee to an activity
    Then the system assigns the employee to the activity

  Scenario: Assign employee, who is not vacant, to an activity
    Given that a project manager provides the employee with ID "abcd", who is not vacant
    And that provides the name of the activity
    When the project manager wants to add an employee to an activity
    Then the system provides an error message "Employee is not vacant"

  Scenario: Project manager wants to assign an employee, who is already assigned to 20 activities, to an activity
  Given that the employee with ID "abcd" is already assigned to 20 activities
  When the project manager wants to assign the employee to another activity
  Then the system provides an error message "The employee is already assigned to 20 activities"
  
  Scenario: Employee without valid project manager ID wants to assign an employee to an activity
    Given that a project manager provides the employee with ID "abcd", who is vacant
    And that provides the name of the activity
    When an employee without a project manager ID wants to assign the employee to another activity
    Then the system provides an error message "Please enter a valid project manager ID"

  Scenario: Project manager wants to assign an employee to an activity with deadline exceeded
    Given that a project manager provides the employee with ID "abcd", who is vacant
    And that provides the name of the activity
    When the project manager wants to add an employee to an activity with deadline exceeded
    Then the system provides an error message "The deadline for this activity has passed. You cannot assign an employee to it"
