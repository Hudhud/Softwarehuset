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
  "name": "that the project manager provides his id \"asd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.that_the_project_manager_provides_his_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides the ID \"2019000001\" for a project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.provides_the_ID_for_a_project(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a name \"firstAct\" for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.provides_a_name_for_the_activity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the project manager creates an activity",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectManagerSteps.the_project_manager_creates_an_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system creates an activity with a consecutive number",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectManagerSteps.the_system_creates_an_activity_with_a_consecutive_number()"
});
formatter.result({
  "status": "passed"
});
});