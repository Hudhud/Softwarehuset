$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\create_a_new_activity.feature");
formatter.feature({
  "name": "Create a new activity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "create an activity for a project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager is signed in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "provides the ID 123 for a project",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "provides a name \"firstAct\" for the activity",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager creates an activity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the system creates an activity with a consecutive number",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("use_cases\\create_a_new_project.feature");
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
formatter.match({
  "location": "EmployeeSteps.thatANameForTheProjectIsProvided(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new project is created",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.a_new_project_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system creates a project with the provided name \"Project_1\" and a consecutive number",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemCreatesAProjectWithTheProvidedNameAndAConsecutiveNumber(String)"
});
formatter.result({
  "status": "passed"
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
  "location": "EmployeeSteps.thatANameForTheProjectIsNotProvided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new project is created",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.a_new_project_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"The project has no name. Please choose a name for the project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases\\to_be_PM.feature");
formatter.feature({
  "name": "Choose an employee to be a project manager",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Choose an employee to be a project manager",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the CEO provides his id \"ceo\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CEOSteps.theCEOProvidesHisId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides the project id \"2019000001\" along with the project name \"TestProject1\"",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.providesTheProjectIdAlongWithTheProjectName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee with the ID \"abcd\" exists",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.theEmployeeWithTheIDExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the CEO chooses an employee with an ID \"abcd\" to be a project manager for the project with the ID \"2019000001\"",
  "keyword": "When "
});
formatter.match({
  "location": "CEOSteps.theCEOChoosesAnEmployeeWithAnIDToBeAProjectManagerForTheProjectWithTheID(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system makes the employee a project manager",
  "keyword": "Then "
});
formatter.match({
  "location": "CEOSteps.theSystemMakesTheEmployeeAProjectManager()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Choose an employee to be a project manager when the employee does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the CEO provides his id \"ceo\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CEOSteps.theCEOProvidesHisId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides the project id \"2019000001\" along with the project name \"TestProject1\"",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.providesTheProjectIdAlongWithTheProjectName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee with the ID \"abcd\" does not exist",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.theEmployeeWithTheIDDoesNotExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the CEO chooses an employee with an ID \"abcd\" to be a project manager for the project with the ID \"2019000001\"",
  "keyword": "When "
});
formatter.match({
  "location": "CEOSteps.theCEOChoosesAnEmployeeWithAnIDToBeAProjectManagerForTheProjectWithTheID(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"This employee does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Choose an employee to be a project manager when a wrong CEO id is provided",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that a wrong CEO id \"aaa\" is provided",
  "keyword": "Given "
});
formatter.match({
  "location": "CEOSteps.thatAWrongCEOIdIsProvided(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides the project id \"2019000001\" along with the project name \"TestProject1\"",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.providesTheProjectIdAlongWithTheProjectName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee with the ID \"abcd\" exists",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.theEmployeeWithTheIDExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the CEO chooses an employee with an ID \"abcd\" to be a project manager for the project with the ID \"2019000001\"",
  "keyword": "When "
});
formatter.match({
  "location": "CEOSteps.theCEOChoosesAnEmployeeWithAnIDToBeAProjectManagerForTheProjectWithTheID(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"This operation can only be performed by the CEO\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
});