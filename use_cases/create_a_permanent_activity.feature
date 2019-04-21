#Feature: Create permanent activity
## Description: The project manager or employee creates a permanent activity
## Actors: Project manager / Employee
#
## Main Scenario
#Scenario: Employee wants to create a permanent activity
#    Given that employee  with ID "abcd" provides information about the time period of the permanent activity
#    When the employee creates a permanent activity
#    Then the permanent activity is created 
#
## Fail Scenario
#Scenario: Employee does not provide any information about the time period of the permanent activity
#    Given that employee with ID "abcd" does not provide any information about the time period of the permanent activity
#    When the employee creates a permanent activity
#    Then the employee gets an error "You must fill out the time period of the activity" 
