Feature: Control the time for project and activities
#
#  #Description: The project manager provides the start time and end time for the activities for a project
#  #Actors: Project manager
#  
#  Scenario: Project manager provides the start week and end week on an activity for a project
#    Given that the project manager provides expected start time week 25 of 2019 for an activity
#    Given that the project manager provides expected end time week 27 of 2019 for an activity
#    When the project manager sets the start week and end week for an activity
#    Then the system assigns the start week and end week to that activity
#
#  Scenario: Project manager enters wrong ID
#    Given that a project manager provides wrong ID "abcd"
#    And provides a start week 40 of 2019 for the activity
#    And provides an end week 42 of 2019 for the activity
#    When the project manager sets the start week and end week for the activity
#    Then the system provides an error message "Invalid ID"
#    
# Scenario: Project manager provides a start week that occurs after the end week for the project
#    Given that a Project manager provides a start week 3 of 2019 for the project
#    And provides an end week 1 of 2019 for the project
#    When the Project manager creates a project
#    Then the system provides an error message "Start week must be before end week"

#  Scenario: Project manager provides a week that does not exist in that particular year
#    Given that an Project manager provides a start week 55 of 2019 for the project
#    And provides an end week 56 of 2019 for the project
#    When the Project manager creates a project
#    Then the system provides an error message "Invalid week of year"
#
#  Scenario: Project manager provides a time that is in the past
#    Given that an Project manager provides a start week 5 of 2016 for the project
#    And provides an end week 6 of 2017 for the project
#    When the Project manager creates a project
#    Then the system provides an error message "Invalid time. The time can not be in the past"
# 
# Scenario: Project manager provides an end year that is before the start year 
#    Given that an Project manager provides a start week 45 of 2020 for the project
#    And provides an end week 45 of 2019 for the project
#    When the Project manager creates a project
#    Then the system provides an error message "End year must be after start year"
# 
#
##  Scenario: Project manager provides a start week that occurs after the end week date for the activity
##    Given that a project manager provides a start date week 3 of 2019 for the activity
##    And provides an end date week 1 of 2019 for the activity
##    When the project manager creates a activity
##    Then the system provides an error message "End date must be later than start date"
##
##  Scenario: Project manager provides a week that does not exist in that particular year
##    Given that a project manager provides a start date week 55 of 2019 for the activity
##    And provides an end date week 56 of 2019 for the activity
##    When the project manager creates an activity
##    Then the system provides an error message "Invalid week of year"
##
##  Scenario: Project manager provides a time that is in the past
##    Given that a project manager provides a start date week 5 of 2016 for the activity
##    And provides an end date week 6 of 2017 for the activity
##    When the project manager creates a activity
##    Then the system provides an error message "End year must be after start year"
