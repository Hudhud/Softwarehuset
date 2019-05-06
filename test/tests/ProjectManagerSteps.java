package tests;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import employee.Employee;
import exceptions.ErrorMessageHolder;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;

public class ProjectManagerSteps {
	private Softwarehuset softwarehuset;
	private ErrorMessageHolder errorMessageHolder;
	private String activityName, projectId, pmId;
	private int startYear, startWeek, endYear, endWeek;
	private Employee employee, employee2;
	private int expectedWorkload;

	public ProjectManagerSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder) throws Exception {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		softwarehuset.generateEmployees();
		employee = softwarehuset.getEmployeeList().get(0);
		employee2 = softwarehuset.getEmployeeList().get(1);
		softwarehuset.addProjectToProjectList("TestProject2", employee, 50, 2019);
		softwarehuset.choosePM(employee.getEmployeeID(), "ceo",
				softwarehuset.getProjectsFromProjectList().get(0).getId());
	}

	// from create-a-new-activity.feature

	@Given("that the project manager provides the ID {string} for a project")
	public void thatTheProjectManagerProvidesTheIDForAProject(String string) {
		this.pmId = employee.getEmployeeID();
		projectId = softwarehuset.getProjectsFromProjectList().get(0).getId();
	}

	@Given("provides a name {string} for the activity")
	public void provides_a_name_for_the_activity(String activityName) {
		this.activityName = activityName;
	}

	@Given("provides start week {int} of {int}")
	public void providesStartWeekOf(Integer startWeek, Integer startYear) {
		this.startWeek = startWeek;
		this.startYear = startYear;
	}

	@Given("provides end week {int} of {int}")
	public void providesEndWeekOf(Integer endWeek, Integer endYear) {
		this.endWeek = endWeek;
		this.endYear = endYear;
	}

	@Given("provides {int} hours as the expected workload for the activity")
	public void providesHoursAsTheExpectedWorkloadForTheActivity(Integer expectedWorkload) {
		this.expectedWorkload = expectedWorkload;
	}

	@When("the project manager creates an activity")
	public void the_project_manager_creates_an_activity() throws Exception {

		try {
			softwarehuset.createAct(activityName, projectId, expectedWorkload, pmId, startYear, endYear, startWeek,
					endWeek);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the system creates an activity with a consecutive number")
	public void the_system_creates_an_activity_with_a_consecutive_number() {
		assertTrue(softwarehuset.getActivitiesFromActivityList(projectId).size() > 0);

	}

	@Given("that the project manager provides the ID {string} for a project, which has not been created")
	public void thatTheProjectManagerProvidesTheIDForAProjectWhichHasNotBeenCreated(String projectId) {
		this.pmId = employee.getEmployeeID();
		this.projectId = projectId;
	}

	@Given("provides a name {string} for the activity, which already exists")
	public void providesANameForTheActivityWhichAlreadyExists(String activityName) throws Exception {
		softwarehuset.createAct(activityName, projectId, 1, pmId, 2019, 2019, 42, 43);
		this.activityName = activityName;
	}

	@Given("provides no name for the activity")
	public void providesNoNameForTheActivity() {
		this.activityName = null;
	}

	@Given("provides no the expected workload in hours for the activity")
	public void providesNoTheExpectedWorkloadInHoursForTheActivity() {
		expectedWorkload = 0;
	}

	// from assign_an_employee_to_activity.feature

	@Given("that the employee with ID {string} is vacant")
	public void that_the_employee_with_ID_is_vacant(String string) {
		// the employee is already initialized
	}

	@When("the project manager wants to add an employee to an activity")
	public void the_project_manager_wants_to_add_an_employee_to_an_activity() throws OperationNotAllowedException {
		this.pmId = employee.getEmployeeID();
		softwarehuset.assignEmployeeToActivity(employee2, softwarehuset.searchForPMById(pmId));
	}

	@Then("the system assigns the employee to the activity")
	public void the_system_assigns_the_employee_to_the_activity() {
		assertTrue(softwarehuset.searchForEmployeeById(employee2.getEmployeeID()).getActivityAmount() > 0);
	}

	@Given("that the employee with ID {string} is already assigned to {int} activities")
	public void thatTheEmployeeWithIDIsAlreadyAssignedToActivities(String string, Integer activitiesAmount)
			throws OperationNotAllowedException {
		this.pmId = employee.getEmployeeID();
		for (int i = 0; i < 20; i++) {
			softwarehuset.assignEmployeeToActivity(employee2, softwarehuset.searchForPMById(pmId));
		}

	}

	@When("the project manager wants to assign the employee to another activity")
	public void theProjectManagerWantsToAssignTheEmployeeToAnotherActivity() throws OperationNotAllowedException {
		try {
			softwarehuset.assignEmployeeToActivity(employee2, softwarehuset.searchForPMById(pmId));
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("an employee without a project manager ID wants to assign the employee to another activity")
	public void anEmployeeWithoutAProjectManagerIDWantsToAssignTheEmployeeToAnotherActivity()
			throws OperationNotAllowedException {
		try {
			softwarehuset.assignEmployeeToActivity(employee, softwarehuset.searchForPMById(employee2.getEmployeeID()));
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	// from control_porject_time.feature

//	@Given("that the project manager provides expected start time week {int} of {int} for an activity")
//	public void thatTheProjectManagerProvidesExpectedStartTimeWeekOfForAnActivity(Integer int1, Integer int2) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("that the project manager provides expected end time week {int} of {int} for an activity")
//	public void thatTheProjectManagerProvidesExpectedEndTimeWeekOfForAnActivity(Integer int1, Integer int2) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("the project manager sets the start week and end week for an activity")
//	public void theProjectManagerSetsTheStartWeekAndEndWeekForAnActivity() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Then("the system assigns the start week and end week to that activity")
//	public void theSystemAssignsTheStartWeekAndEndWeekToThatActivity() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("that a project manager provides wrong ID {string}")
//	public void thatAProjectManagerProvidesWrongID(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("the project manager sets the start week and end week for the activity")
//	public void theProjectManagerSetsTheStartWeekAndEndWeekForTheActivity() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("that a project manager provides a start date week {int} of {int} for the activity")
//	public void thatAProjectManagerProvidesAStartDateWeekOfForTheActivity(Integer int1, Integer int2) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("the project manager creates a activity")
//	public void theProjectManagerCreatesAActivity() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}

}
