Feature: Create a new activity 
#
#Description: The project manager creates an activity for a project
#Actors: Project manager
Scenario: create an activity for a project 
	Given that the project manager provides the ID "2019000001" for a project 
	And provides a name "firstAct" for the activity 
	And provides start week 39 of 2019
	And provides end week 45 of 2019
	And provides 5 hours as the expected workload for the activity 
	When the project manager creates an activity 
	Then the system creates an activity with a consecutive number 
	
Scenario: a project with the provided ID does not exist 
	Given that the project manager provides the ID "222222" for a project, which has not been created 
	And provides a name "firstAct" for the activity 
	And provides start week 39 of 2019
	And provides end week 45 of 2019
	And provides 5 hours as the expected workload for the activity 
	When the project manager creates an activity 
	Then the system provides an error message "A project with provided ID does not exist" 
	
Scenario: the provided activity name already exists 
	Given that the project manager provides the ID "2019000001" for a project 
	And provides a name "firstAct" for the activity, which already exists 
	And provides start week 39 of 2019
	And provides end week 45 of 2019
	And provides 5 hours as the expected workload for the activity 
	When the project manager creates an activity 
	Then the system provides an error message "The name already exists" 
	
Scenario: create an activity without the expected workload 
	Given that the project manager provides the ID "2019000001" for a project 
	And provides a name "firstAct" for the activity 
	And provides start week 39 of 2019
	And provides end week 45 of 2019
	And provides no the expected workload in hours for the activity 
	When the project manager creates an activity 
	Then the system provides an error message "Please enter the expected workload in hours" 
	
Scenario: create an activity without a name 
	Given that the project manager provides the ID "2019000001" for a project 
	And provides no name for the activity 
	And provides start week 39 of 2019
	And provides end week 45 of 2019
	And provides 5 hours as the expected workload for the activity 
	When the project manager creates an activity 
	Then the system provides an error message "Please type a name for the activity" 
	
Scenario: create an activity with an end week, which exceeds the project's deadline
	Given that the project manager provides the ID "2019000001" for a project 
	And provides a name "firstAct" for the activity 
	And provides start week 39 of 2019
	And provides end week 41 of 2022
	And provides 5 hours as the expected workload for the activity 
	When the project manager creates an activity 
	Then the system provides an error message "Please choose an end week number that is before deadline" 

Scenario: create an activity with an start week, which exceeds the project's deadline
	Given that the project manager provides the ID "2019000001" for a project 
	And provides a name "firstAct" for the activity 
	And provides start week 49 of 2019
	And provides end week 51 of 2019
	And provides 5 hours as the expected workload for the activity 
	When the project manager creates an activity 
	Then the system provides an error message "Please choose a start week number that is before deadline" 
	
