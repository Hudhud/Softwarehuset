$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases/employee/assign_an_employee_to_activity.feature");
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager is signed in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager wants to add an employee to an activity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee is assigned to the activity",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Assign employee, who is not vacant, to an activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee with ID \"abcd\" is not vacant",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager is signed in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager wants to add an employee to an activity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager gets an error \"Employee is not vacant\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Project manager wants to assign an employee, who is already assigned to 20 activities in one week",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee with ID \"abcd\" is assigned to 20 activities in one week",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "there are no permanent activities included",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager wants to assign the employee to another activity in the same week",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the project manager gets the error \"The employee is already assigned to 20 activities in the given week.\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("use_cases/employee/choose_employee_to_be_a_project_manager.feature");
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
  "name": "the admin  is signed in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the admin chooses an employee with an ID \"abcd\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee with the \"abcd\" ID exists",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the system add the employee to project managers’ list",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Choose an employee to be a project manager when the employee doesn’t exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the admin  is signed in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the admin chooses an employee with an ID \"abcd\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee with the \"abcd\" ID doesn’t exist",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the system provides an error message \"This employee doesn’t exist, Please choose another employee.\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("use_cases/employee/create_a_new_activity.feature");
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
  "name": "that the project manager provides the ID 123 for a project",
  "keyword": "Given "
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
formatter.scenario({
  "name": "a project with the provided ID does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the project manager provides the ID of a project, which has not been created",
  "keyword": "Given "
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
  "name": "the system provides an error message \"A project with the given ID does not exist\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("use_cases/employee/create_a_new_project.feature");
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a new project is created",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the system creates a project with the provided name and a consecutive number.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "the project manager creates a new project",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the system provides an error message \"The project has no name. Please choose a name for the project\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("use_cases/employee/create_a_permanent_activity.feature");
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
  "name": "that employee  with ID \"abcd\" provides information about the time period of the permanent activity",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the permanent activity is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Employee does not provide any information about the time period of the permanent activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that employee with ID \"abcd\" does not provide any information about the time period of the permanent activity",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee creates a permanent activity",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee gets an error \"You must fill out the time period of the activity\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("use_cases/employee/register_working_time.feature");
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
  "name": "that the employee with ID \"abcd\" is signed in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee provides information about his/her working time",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee wants to register his/her working time for an activity with ID 222",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee has registered his/her working time",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Employee enters wrong ID",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the employee with ID \"abcd\" is not signed in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee signs in with a wrong ID",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the employee gets an error \"Invalid ID\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});