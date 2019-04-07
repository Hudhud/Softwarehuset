Feature: create a new project 
# Description: the project manager or employee creates a new project
# Actors: Employee or project manager 

Scenario: Create a new project 
	Given that a name for the project is provided 
	When a new project is created 
	Then the system creates a project with the provided name and a consecutive number. 
	
Scenario: Create a new project without name 
	Given that a name for the project is not provided 
	When the project manager creates a new project 
	Then the system provides an error message “The project has no name. Please choose a name for the project” 
	