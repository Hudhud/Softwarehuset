package tests;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import com.sun.xml.internal.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import employee.Employee;
import employee.ProjectManager;
import exceptions.ErrorMessageHolder;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Project;

public class ProjectManagerSteps {
	private Softwarehuset softwarehuset;
	private ErrorMessageHolder errorMessageHolder;
	private String activityName;
	private String pmId;
	private String projectId;
	private Employee employee;
	private int activityListSize;

	public ProjectManagerSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder) throws Exception {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		softwarehuset.generateEmployees();
		employee = softwarehuset.getEmployeeList().get(0);
		softwarehuset.addProjectToProjectList("TestProject2", employee);
		softwarehuset.choosePM(employee.getEmployeeID(), "ceo",	softwarehuset.getProjectsFromProjectList().get(0).getId());
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
		activityListSize = softwarehuset.getActivitiesFromActivityList(projectId).size();
		System.out.println("Size before " + activityListSize);

		try {
			softwarehuset.createAct(activityName, projectId, pmId);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("the system creates an activity with a consecutive number")
	public void the_system_creates_an_activity_with_a_consecutive_number() {
		assertTrue(softwarehuset.getActivitiesFromActivityList(projectId).size() > activityListSize);
		System.out.println("Size after " + softwarehuset.getActivitiesFromActivityList(projectId).size());

	}
}
