Feature: create a new project 
# Description: the project manager or employee creates a new project
# Actors: Employee, project manager or administrator 

Scenario: Create a new project 
	Given that a name "Project_1" for the project is provided
	When a new project is created 
	Then the system creates a project with the provided name "Project_1" and a consecutive number 
	
Scenario: Create a new project without name 
	Given that a name for the project is not provided 
	When a new project is created 
	Then the system provides an error message "The project has no name. Please choose a name for the project"
	
Scenario: Create several new projects 
	Given that names "Project_1" "Project_2" "Project_3" for the projects are provided
	When three new projects are created 
	Then the system creates three projects with the provided names "Project_1" "Project_2" "Project_3" and  consecutive numbers 
	