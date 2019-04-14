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
  "name": "that a name \"Project_1\" for the project is provided",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a new project is created",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.a_new_project_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system creates a project with the provided name \"Project_1\" and a consecutive number.",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemCreatesAProjectWithTheProvidedNameAndAConsecutiveNumber(String)"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a new project is created",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.a_new_project_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system provides an error message \"The project has no name. Please choose a name for the project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});