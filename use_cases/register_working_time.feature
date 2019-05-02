Feature: Register working time
##    Description: An employee registers his/her working time
##    Actors: Employee
#
Scenario: Register working time for an activity
     Given that an employee  provides his ID "abcd" 
     And the employee provides the activity with ID 
     And the employee provides his working time "5" hours
     When the employee wants to register his working time for the activity
     Then the employee has registered his working time

Scenario: Employee enters wrong ID
     Given that an employee provides wrong ID "abcd"  
	  And the employee provides the activity with ID 
     And the employee provides his working time "5" hours
     When the employee wants to register his working time for the activity
     Then the system provides an error message "Invalid ID"

Scenario: Employee does not enter working time for an activity
     Given that an employee  provides his ID "abcd"
	  And the employee provides the activity with ID 
     And the employee does not provide his working time
     When the employee wants to register his working time for the activity
     Then the system provides an error message "Invalid working hours"

Scenario: Employee enters wrong activity ID
     Given  that an employee  provides his ID "abcd"  
	  And the employee provides wrong activity ID "abcd"
     And the employee provides his working time "5" hours
     When the employee wants to register his working time for the activity
     Then the system provides an error message "Invalid activity ID"
