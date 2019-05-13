$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\assign_an_employee_to_activity.feature");
formatter.feature({
  "name": "Assign an employee to activity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Employee without valid project manager ID wants to assign an employee to an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee with ID \"abcd\" is vacant",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.that_the_employee_with_ID_is_vacant(String)"
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
  "name": "that the employee with ID \"abcd\" is vacant",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.that_the_employee_with_ID_is_vacant(String)"
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
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat tests.ProjectManagerSteps.theProjectManagerWantsToAddAnEmployeeToAnActivityWithDeadlineExceeded(ProjectManagerSteps.java:184)\r\n\tat ✽.the project manager wants to add an employee to an activity with deadline exceeded(use_cases\\assign_an_employee_to_activity.feature:27)\r\n",
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
formatter.uri("use_cases\\create_a_new_activity.feature");
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
  "location": "ProjectManagerSteps.theSystemCreatesAnActivityWithAConsecutiveNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets the start time for the project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.setsTheStartTimeForTheProject()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create an activity for a project, which already has one or more activities",
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
  "name": "provides a name \"firstAct2\" for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.provides_a_name_for_the_activity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides start week 38 of 2019",
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
  "location": "ProjectManagerSteps.theSystemCreatesAnActivityWithAConsecutiveNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "updates the start time for the project if the new activity\u0027s start time is earlier than the existing",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.updatesTheStartTimeForTheProjectIfTheNewActivitySStartTimeIsEarlierThanTheExisting()"
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
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"A project with provided ID does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "provides end week 52 of 2022",
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
  "status": "passed"
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
  "name": "provides start week 51 of 2019",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesStartWeekOf(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides end week 52 of 2019",
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
  "status": "passed"
});
formatter.scenario({
  "name": "Employee without valid project manager ID wants to create a new activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee without a valid ID \"abcd\" provides the ID \"2019000001\" for a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectManagerSteps.thatAnEmployeeWithoutAValidIDProvidesTheIDForAProject(String,String)"
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
  "name": "provides end week 45 of 2022",
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
  "name": "create an activity for a project in the past",
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
  "name": "provides start week 10 of 2019",
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
  "name": "the system provides an error message \"Start week can\u0027t be in the past\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases\\create_a_new_project.feature");
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
formatter.uri("use_cases\\create_a_permanent_activity.feature");
formatter.feature({
  "name": "Create permanent activity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Employee wants to create a permanent activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 40 of 2019 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 42 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system creates the permanent activity",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemCreatesThePermanentActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee enters wrong ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides wrong ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesWrongID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a start week 42 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 43 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid ID\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Employee provides a start week that occurs after the end week for the permanent activity ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 3 of 2019 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 1 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Start week must be before end week\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee provides a week that does not exist in that particular year",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 55 of 2019 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 56 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid week of year\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee provides a time that is in the past",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 5 of 2016 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 6 of 2017 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid time. The time can not be in the past\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee provides an end year that is before the start year",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 45 of 2020 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 45 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"End year must be after start year\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee wants to create a permanent activity in the past",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 10 of 2019 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 42 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.the_employee_creates_a_permanent_activity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Start week can\u0027t be in the past\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Employee wants to create a permanent activiy while being assigned to an activity ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a start week 40 of 2019 for the permanent activity",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end week 42 of 2019 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.provides_an_end_week_of_for_the_permanent_activity(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity, which overlaps with an activty he is assigned to",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the system provides an error message \"You are already assigned to an activity in the given period\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("use_cases\\register_working_time.feature");
formatter.feature({
  "name": "Register working time",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register working time for an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides his ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesHisID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the employee provides the activity with a name",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"2.0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee has registered his working time",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeHasRegisteredHisWorkingTime()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register working time for an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides wrong ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesWrongID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the employee provides the activity with a name",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"2.0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid ID\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee does not enter working time for an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee does not enter an activity name",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatTheEmployeeDoesNotEnterAnActivityName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee does not provide his working time",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeDoesNotProvideHisWorkingTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid working hours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee enters a non-existing activity name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee provides a wrong activity name \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesAWrongActivityName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"2.0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Unknown activity name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee does not enter an activity name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee does not enter an activity name",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatTheEmployeeDoesNotEnterAnActivityName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"2.0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Please provide activity name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Employee enters an illegal value (a String) for working time for an activity ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee provides the activity with a name",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"bb\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Not a number. Please provide a number value\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Employee enters a value, which is equal to or less than 0.0 for working time for an activity ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee provides the activity with a name",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"0.0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid working hours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Employee wants to register working time for an activity with deadline exceeded ",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee provides the activity with a name",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesTheNameOfTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee provides his working time \"2.0\" hours",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeProvidesHisWorkingTimeHours(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the activity\u0027s deadline is exceeded",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.theActivitySDeadlineIsExceeded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee wants to register his working time for the activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeWantsToRegisterHisWorkingTimeForTheActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Activity deadline is exceeded. You cannot register time on this activity\"",
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
  "name": "the CEO provides the project id \"2019000001\" along with the project name \"TestProject1\"",
  "keyword": "Given "
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
  "name": "the CEO provides the project id \"2019000001\" along with the project name \"TestProject1\"",
  "keyword": "Given "
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
  "name": "Choose an employee to be a project manager for a project whose deadline has passed",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the CEO provides the project id \"2019000001\" along with the project name \"TestProject1\" whose deadline has passed",
  "keyword": "Given "
});
formatter.match({
  "location": "CEOSteps.theCEOProvidesTheProjectIdAlongWithTheProjectNameWhoseDeadlineHasPassed(String,String)"
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
  "name": "the system provides an error message \"The deadline for this project has passed\"",
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
  "name": "the fake CEO provides the project id \"2019000001\" along with the project name \"TestProject1\"",
  "keyword": "And "
});
formatter.match({
  "location": "CEOSteps.theFakeCEOProvidesTheProjectIdAlongWithTheProjectName(String,String)"
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
formatter.scenario({
  "name": "Choose an employee to be a project manager for non-existing project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the CEO provides the project id \"abcd\" along with the project name \"TestProject1\"",
  "keyword": "Given "
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
  "name": "the system provides an error message \"This project does not exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
});