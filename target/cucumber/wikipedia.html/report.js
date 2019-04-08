$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\employee\\create_a_new_project.feature");
formatter.feature({
  "name": "create a new project",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create a new project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a name for the project is provided",
  "keyword": "Given "
});
formatter.match({
  "location": "employeeSteps.thatANameForTheProjectIsProvided()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat tests.employeeSteps.thatANameForTheProjectIsProvided(employeeSteps.java:12)\r\n\tat ✽.that a name for the project is provided(use_cases\\employee\\create_a_new_project.feature:6)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "a new project is created",
  "keyword": "When "
});
formatter.match({
  "location": "employeeSteps.aNewProjectIsCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system creates a project with the provided name and a consecutive number.",
  "keyword": "Then "
});
formatter.match({
  "location": "employeeSteps.theSystemCreatesAProjectWithTheProvidedNameAndAConsecutiveNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Create a new project without name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a name for the project is not provided",
  "keyword": "Given "
});
formatter.match({
  "location": "employeeSteps.thatANameForTheProjectIsNotProvided()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat tests.employeeSteps.thatANameForTheProjectIsNotProvided(employeeSteps.java:30)\r\n\tat ✽.that a name for the project is not provided(use_cases\\employee\\create_a_new_project.feature:11)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "the project manager creates a new project",
  "keyword": "When "
});
formatter.match({
  "location": "employeeSteps.theProjectManagerCreatesANewProject()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system provides an error message �The project has no name. Please choose a name for the project�",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});