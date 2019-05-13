Feature: Create permanent activity 
# Description: The employee creates a permanent activity
# Actors: Employee

Scenario: Employee wants to create a permanent activity 
	Given that an employee provides a start week 40 of 2019 for the permanent activity 
	And provides an end week 42 of 2019 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system creates the permanent activity 
	
Scenario: Employee enters wrong ID 
	Given that an employee provides a wrong ID "abcd" 
	And provides a start week 42 of 2019 for the permanent activity 
	And provides an end week 43 of 2019 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system provides an error message "Invalid ID" 
	
Scenario: Employee provides a start week that occurs after the end week for the permanent activity 
	Given that an employee provides a start week 3 of 2019 for the permanent activity 
	And provides an end week 1 of 2019 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system provides an error message "Start week must be before end week" 
	
Scenario: Employee provides a week that does not exist in that particular year 
	Given that an employee provides a start week 55 of 2019 for the permanent activity 
	And provides an end week 56 of 2019 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system provides an error message "Invalid week of year" 
	
Scenario: Employee provides a time that is in the past 
	Given that an employee provides a start week 5 of 2016 for the permanent activity 
	And provides an end week 6 of 2017 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system provides an error message "Invalid time. The time can not be in the past" 
	
Scenario: Employee provides an end year that is before the start year 
	Given that an employee provides a start week 45 of 2020 for the permanent activity 
	And provides an end week 45 of 2019 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system provides an error message "End year must be after start year" 
	
Scenario: Employee wants to create a permanent activity in the past 
	Given that an employee provides a start week 10 of 2019 for the permanent activity 
	And provides an end week 42 of 2019 for the permanent activity 
	When the employee creates a permanent activity 
	Then the system provides an error message "Start week can't be in the past" 
	
Scenario: Employee wants to create a permanent activiy while being assigned to an activity 
	Given that an employee provides a start week 40 of 2019 for the permanent activity 
	And provides an end week 42 of 2019 for the permanent activity 
	When the employee creates a permanent activity, which overlaps with an activty he is assigned to
	Then the system provides an error message "You are already assigned to an activity in the given period" 
