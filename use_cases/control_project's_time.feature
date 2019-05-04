Feature: Control the time for project and activities

  #Description: The project manager provides the start time and end time for the activities for a project
  #Actors: Project manager
  
  Scenario: Project manager provides the start week and end week on an activity for a project
    Given that the project manager provides expected start time week 25 of 2019 for an activity
    Given that the project manager provides expected start time week 27 of 2019 for an activity
    When the project manager sets the start week and end week for an activity
    Then the system assigns the start week and end week to that activity

  Scenario: Project manager enters wrong ID
    Given that a project manager provides wrong ID "abcd"
    And provides a start date week 40 of 2019 for the permanent activity
    And provides an end date week 42 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid ID"

  Scenario: Project manager provides a start week that occurs after the end week date for the permanent activity
    Given that a project manager provides his ID "abcd"
    And provides a start date week 3 of 2019 for the permanent activity
    And provides an end date week 1 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "End date must be later than start date"

  Scenario: Project manager provides a week that does not exist in that particular year
    Given that a project manager provides his ID "abcd"
    And provides a start date week 55 of 2019 for the permanent activity
    And provides an end date week 56 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid week of year"

  Scenario: Project manager provides a year that is in the past
    Given that a project manager provides his ID "abcd"
    And provides a start date week 5 of 2016 for the permanent activity
    And provides an end date week 6 of 2017 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid year"

  Scenario: Project manager provides weeks, which are in the past
    Given that a project manager provides his ID "abcd"
    And provides a start date week 5 of 2019 for the permanent activity
    And provides an end date week 6 of 2019 for the permanent activity
    When the employee creates a permanent activity
    Then the system provides an error message "Invalid week(s). The start week and end week must be in the present or future"
#Scenario:  End time is stated on the activity
  #Given the project manager provides expected end time for an activity
  #	   When an activity is created
#	   Then the system assigns the expected end time to that activity
#
#Scenario: Start time for project
#	   Given that the project manager provides an activity for a project
#	   When the first activity starts
#	   Then the project starts
#
#Scenario: End time for project
#	   Given the project manager provides an activity for a project
#	   When the last activity finishes 
#	   Then the project ends
#
#Scenario: The project manager sets the date for the end time before the start time
#	   Given the project manager sets an end time before the start time
#	   When an activity is created
#Then  the system provides an error message “The end time cannot be prior to the start time”
