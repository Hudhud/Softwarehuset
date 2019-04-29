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
formatter.scenario({
  "name": "a project with the provided ID does not exist",
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
  "name": "provides the ID \"222222\" for a project, which has not been created",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesTheIDForAProjectWhichHasNotBeenCreated(String)"
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
  "name": "the provided activity name already exists",
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
  "name": "provides a no name for the activity",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectManagerSteps.providesANoNameForTheActivity()"
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
  "name": "the system provides an error message \"The activity has no name. Please type a name for the activity\"",
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
  "name": "that an employee  provides his ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesHisID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a start date 2019:06:1 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:06:3 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeCreatesAPermanentActivity()"
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
  "name": "Employee provides a start date that occurs after the end date for the permanent activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee  provides his ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesHisID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a start date 2019:07:3 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:01:1 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeCreatesAPermanentActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"End date must be later than start date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee provides a day that does not exist in that particular month",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee  provides his ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesHisID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a start date 2019:02:29 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:05:05 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeCreatesAPermanentActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid day of month\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee provides a year that is in the past",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee  provides his ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesHisID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a start date 2016:05:2 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:05:5 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeCreatesAPermanentActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid year\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeSteps.theSystemProvidesAnErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Employee provides a month that does not exist in the interval between 1 and 12",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that an employee  provides his ID \"abcd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "EmployeeSteps.thatAnEmployeeProvidesHisID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides a start date 2019:13:31 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:05:5 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({
  "location": "EmployeeSteps.theEmployeeCreatesAPermanentActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system provides an error message \"Invalid month\"",
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