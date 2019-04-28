Feature: Create permanent activity
# Description: The employee creates a permanent activity
# Actors: Employee

Scenario: Employee wants to create a permanent activity
    Given that an employee  provides his ID "abcd" 
    And provides a start date 2019:06:1 for the permanent activity 
    And provides an end date 2019:06:3 for the permanent activity
    When the employee creates a permanent activity
    Then the system creates the permanent activity

Scenario: Employee provides a start date that occurs after the end date for the permanent activity
    Given that an employee  provides his ID "abcd" 
    And provides a start date 2019:07:3 for the permanent activity 
    And provides an end date 2019:01:1 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "End date must be later than start date" 
    
Scenario: Employee provides a day that does not exist in that particular month 
    Given that an employee  provides his ID "abcd" 
    And provides a start date 2019:02:29 for the permanent activity 
    And provides an end date 2019:05:05 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid day of month" 

Scenario: Employee provides a year that is in the past
    Given that an employee  provides his ID "abcd" 
    And provides a start date 2016:05:2 for the permanent activity 
    And provides an end date 2019:05:5 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid year"   
      
Scenario: Employee provides a month that does not exist in the interval between 1 and 12
    Given that an employee  provides his ID "abcd" 
    And provides a start date 2019:13:31 for the permanent activity 
    And provides an end date 2019:05:5 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid month" 
 
