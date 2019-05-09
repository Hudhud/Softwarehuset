Feature: Create a new project 
# Description: the project manager or employee creates a new project
# Actors: Employee or project manager

Scenario: Create a new project 
	Given that a name "Project_1" for the project is provided 
	And provides end week 50 of 2019 for the deadline 
	When a new project is created 
	Then the system creates a project with the provided name "Project_1" and a consecutive number 
	
Scenario: Create a new project without name 
	Given that a name for the project is not provided 
	When a new project is created 
	Then the system provides an error message "The project has no name. Please choose a name for the project" 
	
Scenario: Create several new projects 
	Given that names "Project_1" "Project_2" "Project_3" for the projects are provided 
	And provides end week 50 of 2019 for the deadline of the first project, end week 50 of 2019 for the deadline of the second project, end week 50 of 2019 for the deadline of the third project 
	When three new projects are created 
	Then the system creates three projects with the provided names "Project_1" "Project_2" "Project_3" and  consecutive numbers 
	
Scenario: The provided deadline is in the past 
	Given that a name "Project_1" for the project is provided 
	And provides end week 50 of 2018 for the deadline 
	When a new project is created 
	Then the system provides an error message "Invalid year. The provided year is in the past" 
	
Scenario: The provided end week is in the past 
	Given that a name "Project_1" for the project is provided 
	And provides end week 10 of 2019 for the deadline 
	When a new project is created 
	Then the system provides an error message "Invalid week. The provided week is in the past" 
	
Scenario: The provided week does not exist the particular year 
	Given that a name "Project_1" for the project is provided 
	And provides end week 53 of 2019 for the deadline 
	When a new project is created 
	Then the system provides an error message "Invalid week of year. There are only 52 weeks in a year" 
	
	
