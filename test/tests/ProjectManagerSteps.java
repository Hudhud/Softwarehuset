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
	private String activityName;
	private String pmId;
	private String projectId;
	private Employee employee, employee2;

	public ProjectManagerSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder) throws Exception {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		softwarehuset.generateEmployees();
		employee = softwarehuset.getEmployeeList().get(0);
		employee2 = softwarehuset.getEmployeeList().get(1);
		softwarehuset.addProjectToProjectList("TestProject2", employee);
		softwarehuset.choosePM(employee.getEmployeeID(), "ceo",
				softwarehuset.getProjectsFromProjectList().get(0).getId());
	}

	// from create-a-new-activity.feature

	@Given("that the project manager provides his id {string}")
	public void that_the_project_manager_provides_his_id(String pmId) throws Exception {

		this.pmId = employee.getEmployeeID();
	}

	@Given("provides the ID {string} for a project")
	public void provides_the_ID_for_a_project(String string) {
		projectId = softwarehuset.getProjectsFromProjectList().get(0).getId();
	}

	@Given("provides a name {string} for the activity")
	public void provides_a_name_for_the_activity(String activityName) {
		this.activityName = activityName;
	}

	@When("the project manager creates an activity")
	public void the_project_manager_creates_an_activity() throws Exception {

		try {
			softwarehuset.createAct(activityName, projectId, pmId);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the system creates an activity with a consecutive number")
	public void the_system_creates_an_activity_with_a_consecutive_number() {
		assertTrue(softwarehuset.getActivitiesFromActivityList(projectId).size() > 0);

	}

	@Given("provides the ID {string} for a project, which has not been created")
	public void providesTheIDForAProjectWhichHasNotBeenCreated(String projectId) {
		this.projectId = projectId;
	}

	@Given("provides a name {string} for the activity, which already exists")
	public void providesANameForTheActivityWhichAlreadyExists(String activityName) throws Exception {
		softwarehuset.createAct(activityName, projectId, pmId);
		this.activityName = activityName;
	}

	@Given("provides a no name for the activity")
	public void providesANoNameForTheActivity() {
		this.activityName = "";
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

}
