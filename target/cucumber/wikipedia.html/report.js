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
  "name": "that the project manager provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProject(String)"
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
  "name": "provides start week 39 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 45 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides 5 hours as the expected workload for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesHoursAsTheExpectedWorkloadForTheActivity(Integer)"
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
formatter.scenario({
  "name": "a project with the provided ID does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID \"222222\" for a project, which has not been created",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProjectWhichHasNotBeenCreated(String)"
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
  "name": "provides start week 39 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 45 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides 5 hours as the expected workload for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesHoursAsTheExpectedWorkloadForTheActivity(Integer)"
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
  "error_message": "java.lang.NullPointerException\r\n\tat main.Softwarehuset.createAct(Softwarehuset.java:144)\r\n\tat tests.ProjectManagerSteps.the_project_manager_creates_an_activity(ProjectManagerSteps.java:69)\r\n\tat ✽.the project manager creates an activity(use_cases\\create_a_new_activity.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the system provides an error message \"A project with provided ID does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "the provided activity name already exists",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a name \"firstAct\" for the activity, which already exists",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesANameForTheActivityWhichAlreadyExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides start week 39 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 45 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides 5 hours as the expected workload for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesHoursAsTheExpectedWorkloadForTheActivity(Integer)"
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
  "name": "the system provides an error message \"The name already exists\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create an activity without the expected workload",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProject(String)"
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
  "name": "provides start week 39 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 45 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides no the expected workload in hours for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesNoTheExpectedWorkloadInHoursForTheActivity()"
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
  "name": "the system provides an error message \"Please enter the expected workload in hours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create an activity without a name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides no name for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesNoNameForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides start week 39 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 45 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides 5 hours as the expected workload for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesHoursAsTheExpectedWorkloadForTheActivity(Integer)"
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
  "name": "the system provides an error message \"Please type a name for the activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create an activity with an end week, which exceeds the project\u0027s deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProject(String)"
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
  "name": "provides start week 39 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 41 of 2022",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides 5 hours as the expected workload for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesHoursAsTheExpectedWorkloadForTheActivity(Integer)"
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
  "name": "the system provides an error message \"Please choose an end week number that is before deadline\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cPlease choose an end week number that is before deadline\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat tests.EmployeeSteps.theSystemProvidesAnErrorMessage(EmployeeSteps.java:83)\r\n\tat ✽.the system provides an error message \"Please choose an end week number that is before deadline\"(use_cases\\create_a_new_activity.feature:57)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "create an activity with an start week, which exceeds the project\u0027s deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatTheProjectManagerProvidesTheIDForAProject(String)"
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
  "name": "provides start week 49 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 51 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesEndWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides 5 hours as the expected workload for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesHoursAsTheExpectedWorkloadForTheActivity(Integer)"
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
  "name": "the system provides an error message \"Please choose a start week number that is before deadline\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cPlease choose a start week number that is before deadline\u003e but was:\u003cnull\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat tests.EmployeeSteps.theSystemProvidesAnErrorMessage(EmployeeSteps.java:83)\r\n\tat ✽.the system provides an error message \"Please choose a start week number that is before deadline\"(use_cases\\create_a_new_activity.feature:66)\r\n",
  "status": "failed"
});
});