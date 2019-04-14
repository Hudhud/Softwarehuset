Feature: create a new project 
# Description: the project manager or employee creates a new project
# Actors: Employee or project manager 

Scenario: Create a new project 
	Given that a name "Project_1" for the project is provided 
	When a new project is created 
	Then the system creates a project with the provided name "Project_1" and a consecutive number 
	
Scenario: Create a new project without name 
	Given that a name for the project is not provided 
	When a new project is created 
	Then the system provides an error message "The project has no name. Please choose a name for the project"
	