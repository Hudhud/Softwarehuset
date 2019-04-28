$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases\\create_a_permanent_activity.feature");
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
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:06:3 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(Integer,Integer,Integer)"
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
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:01:1 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(Integer,Integer,Integer)"
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
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:05:05 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(Integer,Integer,Integer)"
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
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:05:5 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(Integer,Integer,Integer)"
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
  "location": "EmployeeSteps.providesAStartDateForThePermanentActivity(Integer,Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides an end date 2019:05:5 for the permanent activity",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeSteps.providesAnEndDateForThePermanentActivity(Integer,Integer,Integer)"
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
});