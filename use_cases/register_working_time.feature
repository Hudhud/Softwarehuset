#Feature: Register working time
##    Description: An employee registers his/her working time
##    Actors: Employee
#
#Scenario: Register working time for an activity
#     Given that the employee with ID "abcd" is signed in
#     And the employee provides information about his/her working time 
#     When the employee wants to register his/her working time for an activity with ID 222
#     Then the employee has registered his/her working time
#     
#Scenario: Employee enters wrong ID
#     Given that the employee with ID "abcd" is not signed in 
#     When the employee signs in with a wrong ID
#     Then the employee gets an error "Invalid ID"
