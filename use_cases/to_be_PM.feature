Feature: Choose an employee to be a project manager
#Description: The CEO chooses an employee to be a project manager
#Actors: CEO 

Scenario:  Choose an employee to be a project manager 
    Given the CEO provides his id "ceo" 
    And provides the project id "Project1" 
   	And the employee with the ID "abcd" exists
 	When the CEO chooses an employee with an ID "abcd" to be a project manager for the project with the ID "TestProject1"
 	Then the system makes the employee a project manager

#Scenario:  Choose an employee to be a project manager when the employee does not exist
#    Given the CEO provides his id "ceo"
#   	And the employee with the ID "abcd" does not exist 
# 	When the CEO chooses an employee with an ID "abcd" to be a project manager for the project with the ID "TestProject1"
# 	Then the system provides an error message "This employee does not exist"
# 	
# Scenario:  Choose an employee to be a project manager when a wrong CEO id is provided
#    Given that a wrong CEO id is provided
#    And the employee with the ID "abcd" exists 
# 	When the CEO chooses an employee with an ID "abcd" to be a project manager for the project with the ID "TestProject1"
# 	Then the system provides an error message "This operation can only be performed by the CEO"
