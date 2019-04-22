Feature: Create a new activity 
#Description: The project manager creates an activity for a project
#Actors: Project manager

Scenario: create an activity for a project
	Given that the project manager provides his id "asd"
	And provides the ID "2019000001" for a project
	And provides a name "firstAct" for the activity
	When the project manager creates an activity
	Then the system creates an activity with a consecutive number
	
#Scenario: a project with the provided ID does not exist
#	Given that the project manager provides the ID 123 of a project, which has not been created
#	When the project manager creates an activity
#	Then the system provides an error message "A project with provided ID does not exist"	