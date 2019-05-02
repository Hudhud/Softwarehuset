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

public class EmployeeSteps {
	private Softwarehuset softwarehuset;
	private String projectName, projectName_1, projectName_2,activityID,workingHours;
	private ErrorMessageHolder errorMessageHolder;
	private List<Employee> employeeList;
	private Employee employee, employee1;
	private int startYear, startMonth, startDay, endYear, endMonth, endDay;

	
	public EmployeeSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder) throws Exception {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		this.employeeList = softwarehuset.generateEmployees();
		employee = softwarehuset.getEmployeeList().get(0);
		softwarehuset.addProjectToProjectList("TestProject2", employee);
		softwarehuset.choosePM(employee.getEmployeeID(), "ceo",
				softwarehuset.getProjectsFromProjectList().get(0).getId());
	}

	// from create-a-new-project.feature

	@Given("that a name {string} for the project is provided")
	public void thatANameForTheProjectIsProvided(String projectName) {
		this.projectName = projectName;
	}

	@When("a new project is created")
	public void a_new_project_is_created() throws Exception {
		try {
			softwarehuset.addProjectToProjectList(projectName, employeeList.get(0));
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
	public void theSystemProvidesAnErrorMessage(String errorMessage) throws Exception {
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
			softwarehuset.addProjectToProjectList(projectName, employeeList.get(0));
			softwarehuset.addProjectToProjectList(projectName_1, employeeList.get(0));
			softwarehuset.addProjectToProjectList(projectName_2, employeeList.get(0));
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

	@Given("that an employee  provides his ID {string}")
	public void thatAnEmployeeProvidesHisID(String ID) {

		employee = softwarehuset.getEmployeeList().get(0);
		ID = employee.getEmployeeID();
		assertTrue(softwarehuset.getEmployeeList().contains(softwarehuset.searchForEmployeeById(ID)));
	}

	@Given("provides a start date {int}:{int}:{int} for the permanent activity")
	public void providesAStartDateForThePermanentActivity(int year, int month, int day) {
		startYear = year;
		startMonth = month;
		startDay = day;
	}

	@Given("provides an end date {int}:{int}:{int} for the permanent activity")
	public void providesAnEndDateForThePermanentActivity(int year, int month, int day) {
		endYear = year;
		endMonth = month;
		endDay = day;
	}

	@When("the employee creates a permanent activity")
	public void theEmployeeCreatesAPermanentActivity() throws OperationNotAllowedException {
		try {
			softwarehuset.createPermanentActivity(startYear, startMonth, startDay, endYear, endMonth, endDay, employee);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}

	}

	@Then("the system creates the permanent activity")
	public void theSystemCreatesThePermanentActivity() {
		assertTrue(softwarehuset.getEmployeePermanentActivities(employee).size() > 0);
	}

	@Given("does not provide a start date for the permanent activity")
	public void doesNotProvideAStartDateForThePermanentActivity() {

	}

	@Given("does not provide an end date for the permanent activity")
	public void doesNotProvideAnEndDateForThePermanentActivity() {

	}
	//Register working time 

	@Given("the employee provides the activity with ID")
	public void theEmployeeProvidesTheActivityWithID() throws Exception {
		try {
			softwarehuset.createAct("activity1", "2019000001", softwarehuset.getProjectManagerList().get(0).getEmployeeID());
			activityID = softwarehuset.getActivitiesFromActivityList("2019000001").get(0).getName();
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
		softwarehuset.registerWorkingTime(activityID, workingHours, employee);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the employee has registered his working time")
	public void theEmployeeHasRegisteredHisWorkingTime() {
		System.out.println(employee.getActivityWorkingHoursList().size());
		assertTrue(employee.getActivityWorkingHoursList().size() > 0);
	}
	
	@Given("that an employee provides wrong ID {string}")
	public void thatAnEmployeeProvidesWrongID(String employeeID) throws Exception {
		try {
			employee = new Employee(employeeID);
			softwarehuset.createAct("activity1", "2019000001", softwarehuset.getProjectManagerList().get(0).getEmployeeID());
			activityID = softwarehuset.getActivitiesFromActivityList("2019000001").get(0).getName();
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@Given("the employee does not provide his working time")
	public void theEmployeeDoesNotProvideHisWorkingTime() {
		workingHours = null;
	}
	
	@Given("the employee provides wrong activity ID {string}")
	public void theEmployeeProvidesWrongActivityID(String activityID) throws Exception {
		try {
			this.activityID = activityID;
			softwarehuset.createAct("activity1", "2019000001", softwarehuset.getProjectManagerList().get(0).getEmployeeID());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
}
