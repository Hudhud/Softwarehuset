package tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import employee.Employee;
import exceptions.ErrorMessageHolder;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import time.MockWeekHolder;

public class EmployeeSteps {
	private Softwarehuset softwarehuset;
	private String projectName, projectName_1, projectName_2, activityName, workingHours;
	private ErrorMessageHolder errorMessageHolder;
	private List<Employee> employeeList;
	private Employee employee;
	private int startWeek, endWeek, endWeek2, endWeek3, startYear, endYear, endYear2, endYear3;
	private MockWeekHolder mockWeekHolder;

	public EmployeeSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder, MockWeekHolder mockWeekHolder) throws Exception {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		this.employeeList = softwarehuset.generateEmployees();
		employee = softwarehuset.getEmployeeList().get(0);
		softwarehuset.addProjectToProjectList("TestProject2", employee, 50, 2019);
//		softwarehuset.choosePM(employee.getEmployeeID(), "ceo",
//		softwarehuset.getProjectsFromProjectList().get(0).getId());
		this.mockWeekHolder = mockWeekHolder;
	}

	// from create-a-new-project.feature

	@Given("that a name {string} for the project is provided")
	public void thatANameForTheProjectIsProvided(String projectName) {
		this.projectName = projectName;
	}

	@Given("provides end week {int} of {int} for the deadline")
	public void providesEndWeekOfForTheDeadline(Integer endWeek, Integer endYear) {
		
		
	    this.endWeek = endWeek;
	    this.endYear = endYear;
	}
	
	@Given("provides end week {int} of {int} for the deadline of the first project, end week {int} of {int} for the deadline of the second project, end week {int} of {int} for the deadline of the third project")
	public void providesEndWeekOfForTheDeadlineOfTheFirstProjectEndWeekOfForTheDeadlineOfTheSecondProjectEndWeekOfForTheDeadlineOfTheThirdProject(Integer endWeek1, Integer endYear1, Integer endWeek2, Integer endYear2, Integer endWeek3, Integer endYear3) {
	    this.endWeek = endWeek1;
	    this.endWeek2 = endWeek2;
	    this.endWeek3 = endWeek3;
	    this.endYear = endYear1;
	    this.endYear2 = endYear2;
	    this.endYear3 = endYear3;

	}
	
	@When("a new project is created")
	public void a_new_project_is_created() throws Exception {
		try {
			softwarehuset.addProjectToProjectList(projectName, employeeList.get(0), endWeek, endYear);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the system creates a project with the provided name {string} and a consecutive number")
	public void theSystemCreatesAProjectWithTheProvidedNameAndAConsecutiveNumber(String projectName) {
		assertTrue(
				softwarehuset.getProjectsFromProjectList().contains(softwarehuset.searchForProjectByName(projectName)));
	}

	@Given("that a name for the project is not provided")
	public void thatANameForTheProjectIsNotProvided() {
		projectName = "";
	}

	@Then("the system provides an error message {string}")
	public void theSystemProvidesAnErrorMessage(String errorMessage) {
		assertEquals(errorMessage, errorMessageHolder.getErrorMessage());
	}

	@Given("that names {string} {string} {string} for the projects are provided")
	public void thatNamesForTheProjectsAreProvided(String projectName, String projectName_1, String projectName_2) {
		this.projectName = projectName;
		this.projectName_1 = projectName_1;
		this.projectName_2 = projectName_2;
	}

	@When("three new projects are created")
	public void threeNewProjectsAreCreated() throws Exception {
		try {
			softwarehuset.addProjectToProjectList(projectName, employeeList.get(0), endWeek, endYear);
			softwarehuset.addProjectToProjectList(projectName_1, employeeList.get(0), endWeek2, endYear2);
			softwarehuset.addProjectToProjectList(projectName_2, employeeList.get(0), endWeek3, endYear3);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the system creates three projects with the provided names {string} {string} {string} and  consecutive numbers")
	public void theSystemCreatesThreeProjectsWithTheProvidedNamesAndConsecutiveNumbers(String projectName,
			String projectName_1, String projectName_2) {
		
		assertTrue(
				softwarehuset.getProjectsFromProjectList().contains(softwarehuset.searchForProjectByName(projectName)));
		assertTrue(softwarehuset.getProjectsFromProjectList()
				.contains(softwarehuset.searchForProjectByName(projectName_1)));
		assertTrue(softwarehuset.getProjectsFromProjectList()
				.contains(softwarehuset.searchForProjectByName(projectName_2)));
	}

//	//from create-a-permanent-activity.feature
	
	@Given("that an employee provides a start week {int} of {int} for the permanent activity")
	public void thatAnEmployeeProvidesAStartWeekOfForThePermanentActivity(Integer startWeek, Integer startYear) {
		this.startWeek = startWeek;
		this.startYear = startYear;
		employee = softwarehuset.getEmployeeList().get(0);
		assertTrue(softwarehuset.getEmployeeList().contains(softwarehuset.searchForEmployeeById(employee.getEmployeeID())));
	}
	
	@Given("provides a start week {int} of {int} for the permanent activity")
	public void providesAStartWeekOfForThePermanentActivity(Integer startWeek, Integer startYear) {
		this.startWeek = startWeek;
		this.startYear = startYear;
	}


	@Given("provides an end week {int} of {int} for the permanent activity")
	public void provides_an_end_week_of_for_the_permanent_activity(Integer endWeek, Integer endYear) {
		this.endWeek = endWeek;
		this.endYear = endYear;
	}

	@When("the employee creates a permanent activity")
	public void the_employee_creates_a_permanent_activity() {
		try {
			softwarehuset.createPermanentActivity(startWeek, endWeek, startYear, endYear, employee);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the system creates the permanent activity")
	public void theSystemCreatesThePermanentActivity() {
		assertTrue(softwarehuset.getEmployeePermanentActivities(employee).size() > 0);
	}

	// Register working time
	
	@Given("that an employee provides his ID {string}")
	public void thatAnEmployeeProvidesHisID(String id) {
	    // employee is already generated
	}

	@Given("that the employee provides the activity with a name")
	public void thatAnEmployeeProvidesTheNameOfTheActivity() throws Exception {
		try {
			softwarehuset.createAct("activity1", "2019000001", 1,
					softwarehuset.getProjectManagerList().get(0).getEmployeeID(), 42, 45, 2019, 2019);
			activityName = softwarehuset.getActivitiesFromActivityList("2019000001").get(0).getName();
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Given("the employee provides his working time {string} hours")
	public void theEmployeeProvidesHisWorkingTimeHours(String workingHours) {
		this.workingHours = workingHours;
	}

	@When("the employee wants to register his working time for the activity")
	public void theEmployeeWantsToRegisterHisWorkingTimeForTheActivity() throws OperationNotAllowedException {
		try {
			softwarehuset.registerWorkingTime(activityName, workingHours, employee);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the employee has registered his working time")
	public void theEmployeeHasRegisteredHisWorkingTime() {
		assertTrue(employee.getActivityWorkingHoursList().size() > 0);
	}

	@Given("that an employee provides wrong ID {string}")
	public void thatAnEmployeeProvidesWrongID(String employeeID) throws Exception {
		try {
			employee = new Employee(employeeID);
			softwarehuset.createAct("activity1", "2019000001", 1,
					softwarehuset.getProjectManagerList().get(0).getEmployeeID(), 42, 45, 2019, 2019);
			activityName = softwarehuset.getActivitiesFromActivityList("2019000001").get(0).getName();
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Given("the employee does not provide his working time")
	public void theEmployeeDoesNotProvideHisWorkingTime() {
	}

	@Given("that an employee provides a wrong activity name {string}")
	public void thatAnEmployeeProvidesAWrongActivityName(String activityName) throws Exception {
		try {
			this.activityName = activityName;
			softwarehuset.createAct("activity1", "2019000001", 5,
					softwarehuset.getProjectManagerList().get(0).getEmployeeID(), 42, 45, 2019, 2019);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Given("that the employee does not enter an activity name")
	public void thatTheEmployeeDoesNotEnterAnActivityName() {

	}
	
	@Given("the activity's deadline is exceeded")
	public void theActivitySDeadlineIsExceeded() {		
	    mockWeekHolder.advancedDateByWeeks(30);
	}
	
	

}
