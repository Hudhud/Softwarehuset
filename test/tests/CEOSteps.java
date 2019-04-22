package tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import ceo.CEO;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import employee.Employee;
import employee.ProjectManager;
import exceptions.ErrorMessageHolder;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;

public class CEOSteps {
	private String ceoId;
	private Softwarehuset softwarehuset;
	private String projectName;
	private ErrorMessageHolder errorMessageHolder;
	private List<Employee> employeeList;
	private Employee employee;
	private CEO ceo;
	private String projectId;
	private String empId;

	public CEOSteps(Softwarehuset softwarehuset, ErrorMessageHolder errorMessageHolder) {
		this.softwarehuset = softwarehuset;
		this.errorMessageHolder = errorMessageHolder;
		employeeList = softwarehuset.generateEmployees();
	}

	@Given("the CEO provides his id {string}")
	public void theCEOProvidesHisId(String ceoId) {
		employee = employeeList.get(0);
		this.ceoId = ceoId;
	}

	@Given("provides the project id {string} along with the project name {string}")
	public void providesTheProjectIdAlongWithTheProjectName(String projectId, String projectName) throws Exception {

		softwarehuset.addProjectToProjectList(projectName, employee);
		this.projectId = projectId;
	}

	@Given("the employee with the ID {string} exists")
	public void theEmployeeWithTheIDExists(String employeeId) {
		empId = employee.getEmployeeID();
		assertTrue(employeeList.contains(softwarehuset.searchForEmployeeById(empId)));
	}

	@When("the CEO chooses an employee with an ID {string} to be a project manager for the project with the ID {string}")
	public void theCEOChoosesAnEmployeeWithAnIDToBeAProjectManagerForTheProjectWithTheID(String employeeId,
			String projectId) throws Exception {

//		ceo = new CEO(ceoId);

		try {
			softwarehuset.choosePM(empId, ceoId, projectId);
		} catch (OperationNotAllowedException e) {
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

}
