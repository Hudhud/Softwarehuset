Feature: Choose an employee to be a project manager 
#Description: The CEO chooses an employee to be a project manager
#Actors: CEO 

Scenario: Choose an employee to be a project manager 
	Given the CEO provides the project id "2019000001" along with the project name "TestProject1" 
	And the employee with the ID "abcd" exists 
	When the CEO chooses an employee with an ID "abcd" to be a project manager for the project with the ID "2019000001" 
	Then the system makes the employee a project manager 
	
Scenario: Choose an employee to be a project manager when the employee does not exist 
	Given the CEO provides the project id "2019000001" along with the project name "TestProject1" 
	And the employee with the ID "abcd" does not exist 
	When the CEO chooses an employee with an ID "abcd" to be a project manager for the project with the ID "2019000001" 
	Then the system provides an error message "This employee does not exist" 
	
Scenario: Choose an employee to be a project manager when a wrong CEO id is provided 
	Given that a wrong CEO id "aaa" is provided
	And the fake CEO provides the project id "2019000001" along with the project name "TestProject1"
	And the employee with the ID "abcd" exists 
	When the CEO chooses an employee with an ID "abcd" to be a project manager for the project with the ID "2019000001" 
	Then the system provides an error message "This operation can only be performed by the CEO" 
