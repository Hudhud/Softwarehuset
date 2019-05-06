$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\create_a_new_project.feature");
formatter.feature({
  "name": "Create a new project",
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
  "name": "provides end week 50 of 2019 for the deadline",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesEndWeekOfForTheDeadline(Integer,Integer)"
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
formatter.scenario({
  "name": "Create several new projects",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that names \"Project_1\" \"Project_2\" \"Project_3\" for the projects are provided",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatNamesForTheProjectsAreProvided(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 50 of 2019 for the deadline of the first project, end week 50 of 2019 for the deadline of the second project, end week 50 of 2019 for the deadline of the third project",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesEndWeekOfForTheDeadlineOfTheFirstProjectEndWeekOfForTheDeadlineOfTheSecondProjectEndWeekOfForTheDeadlineOfTheThirdProject(Integer,Integer,Integer,Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "three new projects are created",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.threeNewProjectsAreCreated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system creates three projects with the provided names \"Project_1\" \"Project_2\" \"Project_3\" and  consecutive numbers",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemCreatesThreeProjectsWithTheProvidedNamesAndConsecutiveNumbers(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The provided deadline is in the past",
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
  "name": "provides end week 50 of 2018 for the deadline",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesEndWeekOfForTheDeadline(Integer,Integer)"
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
  "name": "the system provides an error message \"Invalid year. The provided year is in the past\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The provided end week is in the past",
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
  "name": "provides end week 10 of 2019 for the deadline",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesEndWeekOfForTheDeadline(Integer,Integer)"
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
  "name": "the system provides an error message \"Invalid week. The provided week is in the past\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The provided week does not exist the particular year",
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
  "name": "provides end week 53 of 2019 for the deadline",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesEndWeekOfForTheDeadline(Integer,Integer)"
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
  "name": "the system provides an error message \"Invalid week of year. There are only 52 weeks in a year\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
});