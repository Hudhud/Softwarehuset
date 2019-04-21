$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\to_be_PM.feature");
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
  "name": "provides the project id \"2019000001\"",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.providesTheProjectId(String)"
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
});