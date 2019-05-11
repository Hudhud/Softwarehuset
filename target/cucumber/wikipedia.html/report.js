$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\assign_an_employee_to_activity.feature");
formatter.feature({
  "name": "Assign an employee to activity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Project manager wants to assign an employee, who is already assigned to 20 activities, to an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee with ID \"abcd\" is already assigned to 20 activities",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheEmployeeWithIDIsAlreadyAssignedToActivities(String,Integer)"
});
formatter.result({
  "error_message": "exceptions.OperationNotAllowedException: The employee is already assigned to 20 activities\r\n\tat main.Softwarehuset.assignEmployeeToActivity(Softwarehuset.java:263)\r\n\tat tests.ProjectManagerSteps.thatTheEmployeeWithIDIsAlreadyAssignedToActivities(ProjectManagerSteps.java:172)\r\n\tat ✽.that the employee with ID \"abcd\" is already assigned to 20 activities(use_cases\\assign_an_employee_to_activity.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the project manager wants to assign the employee to another activity",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.theProjectManagerWantsToAssignTheEmployeeToAnotherActivity()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system provides an error message \"The employee is already assigned to 20 activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});