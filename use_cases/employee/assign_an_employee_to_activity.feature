#Feature: Assign an employee to activity 
## Description: The project manager assigns an employee to activity 
## Actors: Project manager
#
#Scenario: Assign employee, who is vacant, to an activity
#     Given that the employee with ID "abcd" is vacant 
#      And the project manager is signed in
#     When the project manager wants to add an employee to an activity
#     Then the employee is assigned to the activity
#
#Scenario: Assign employee, who is not vacant, to an activity
#     Given that the employee with ID "abcd" is not vacant 
#                      And the project manager is signed in
#     When the project manager wants to add an employee to an activity
#     Then the project manager gets an error "Employee is not vacant"
#
#Scenario: Project manager wants to assign an employee, who is already assigned to 20 activities in one week
#    Given that the employee with ID "abcd" is assigned to 20 activities in one week
#    And there are no permanent activities included
#    When the project manager wants to assign the employee to another activity in the same week
#    Then the project manager gets the error "The employee is already assigned to 20 activities in the given week."
