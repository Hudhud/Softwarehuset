Feature: Choose an employee to be a project manager
Description: The admin chooses an employee to be a project manager
Actors: Admin (CEO) 

#Main scenario
Scenario:  Choose an employee to be a project manager 
    Given the admin  is signed in
 	When the admin chooses an employee with an ID "abcd" 
	And the employee with the "abcd" ID exists
 	Then the system add the employee to project managers list

#Fail scenario
Scenario:  Choose an employee to be a project manager when the employee doesnot exist
    Given the admin  is signed in
 	When the admin chooses an employee with an ID "abcd"
	And the employee with the "abcd" ID doesnot exist 
 	Then the system provides an error message "This employee doesnot exist, Please choose another employee."
