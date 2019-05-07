$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\register_working_time.feature");
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
  "name": "Employee enters an illegal value (a String) for working time for an activity",
  "description": "",
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
  "name": "Employee enters a value, which is equal to or less than 0.0 for working time for an activity",
  "description": "",
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
  "name": "Employee wants to register working time for an activity with deadline exceeded",
  "description": "",
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
});