$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\assign_an_employee_to_activity.feature");
formatter.feature({
  "name": "Assign an employee to activity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Assign employee, who is vacant, to an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a project manager provides the employee with ID \"abcd\", who is vacant",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatAProjectManagerProvidesTheEmployeeWithIDWhoIsVacant(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that provides the name of the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.thatProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the project manager wants to add an employee to an activity",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.the_project_manager_wants_to_add_an_employee_to_an_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system assigns the employee to the activity",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectManagerSteps.the_system_assigns_the_employee_to_the_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assign employee, who is not vacant, to an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a project manager provides the employee with ID \"abcd\", who is not vacant",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatAProjectManagerProvidesTheEmployeeWithIDWhoIsNotVacant(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that provides the name of the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.thatProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the project manager wants to add an employee to an activity",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.the_project_manager_wants_to_add_an_employee_to_an_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Employee is not vacant\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cEmployee is not vacant\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat tests.EmployeeSteps.theSystemProvidesAnErrorMessage(EmployeeSteps.java:85)\r\n\tat ✽.the system provides an error message \"Employee is not vacant\"(use_cases\\assign_an_employee_to_activity.feature:16)\r\n",
  "status": "failed"
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
  "status": "passed"
});
formatter.step({
  "name": "the project manager wants to assign the employee to another activity",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.theProjectManagerWantsToAssignTheEmployeeToAnotherActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"The employee is already assigned to 20 activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee without valid project manager ID wants to assign an employee to an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a project manager provides the employee with ID \"abcd\", who is vacant",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatAProjectManagerProvidesTheEmployeeWithIDWhoIsVacant(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that provides the name of the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.thatProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an employee without a project manager ID wants to assign the employee to another activity",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.anEmployeeWithoutAProjectManagerIDWantsToAssignTheEmployeeToAnotherActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Please enter a valid project manager ID\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project manager wants to assign an employee to an activity with deadline exceeded",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a project manager provides the employee with ID \"abcd\", who is vacant",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatAProjectManagerProvidesTheEmployeeWithIDWhoIsVacant(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that provides the name of the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.thatProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the project manager wants to add an employee to an activity with deadline exceeded",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.theProjectManagerWantsToAddAnEmployeeToAnActivityWithDeadlineExceeded()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat tests.ProjectManagerSteps.theProjectManagerWantsToAddAnEmployeeToAnActivityWithDeadlineExceeded(ProjectManagerSteps.java:202)\r\n\tat ✽.the project manager wants to add an employee to an activity with deadline exceeded(use_cases\\assign_an_employee_to_activity.feature:32)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "the system provides an error message \"The deadline for this activity has passed. You cannot assign an employee to it\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});