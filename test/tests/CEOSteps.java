package tests;

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

public class CEOSteps {
	private String ceoId;
	private Softwarehuset softwarehuset;
	private ErrorMessageHolder errorMessageHolder;
	private List<Employee> employeeList;
	private Employee employee;
	private String empId;
	private String projectId;
	private MockWeekHolder mockWeekHolder;

	public CEOSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder, MockWeekHolder mockWeekHolder) {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		employeeList = softwarehuset.generateEmployees();
		this.mockWeekHolder = mockWeekHolder;
	}

	@Given("the CEO provides the project id {string} along with the project name {string}")
	public void providesTheProjectIdAlongWithTheProjectName(String projectId, String projectName) throws Exception {
		this.ceoId = "ceo"; 
		softwarehuset.addProjectToProjectList(projectName, employeeList.get(1), 50, 2019);
		this.projectId = projectId;
	}

	@Given("the employee with the ID {string} exists")
	public void theEmployeeWithTheIDExists(String employeeId) {
		employee = employeeList.get(0);
		empId = employee.getEmployeeID();
		assertTrue(employeeList.contains(softwarehuset.searchForEmployeeById(empId)));
	}

	@When("the CEO chooses an employee with an ID {string} to be a project manager for the project with the ID {string}")
	public void theCEOChoosesAnEmployeeWithAnIDToBeAProjectManagerForTheProjectWithTheID(String employeeId,
			String projectId) throws Exception {

		try {
			softwarehuset.choosePM(empId, ceoId, this.projectId);
		} catch (Exception e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}

	}

	@Then("the system makes the employee a project manager")
	public void theSystemMakesTheEmployeeAProjectManager() {
		assertTrue(softwarehuset.searchForEmployeeById(empId).getIsEmployeePM());
	}

	@Given("the employee with the ID {string} does not exist")
	public void theEmployeeWithTheIDDoesNotExist(String employeeId) {
		empId = employeeId;
		assertTrue(!employeeList.contains(softwarehuset.searchForEmployeeById(empId)));
	}

	@Given("that a wrong CEO id {string} is provided")
	public void thatAWrongCEOIdIsProvided(String id) {
		employee = employeeList.get(0);
		ceoId = id;
	}
	
	@Given("the fake CEO provides the project id {string} along with the project name {string}")
	public void theFakeCEOProvidesTheProjectIdAlongWithTheProjectName(String projectId, String projectName) throws Exception { 
		softwarehuset.addProjectToProjectList(projectName, employeeList.get(1), 50, 2019);
		this.projectId = projectId;
	}
	
	@Given("the CEO provides the project id {string} along with the project name {string} whose deadline has passed")
	public void theCEOProvidesTheProjectIdAlongWithTheProjectNameWhoseDeadlineHasPassed(String projectId, String projectName) throws Exception {
		this.ceoId = "ceo"; 
		softwarehuset.addProjectToProjectList(projectName, employeeList.get(1), 30, 2019);
		this.projectId = projectId;
		mockWeekHolder.advancedDateByWeeks(30);
	}

	
}
