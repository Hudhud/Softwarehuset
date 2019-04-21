package tests;

import static org.junit.Assert.assertTrue;

import java.util.List;

import ceo.CEO;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import employee.Employee;
import exceptions.ErrorMessageHolder;
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
		employee = employeeList.get(0);
	}

	@Given("the CEO provides his id {string}")
	public void theCEOProvidesHisId(String ceoId) {
		this.ceoId = ceoId;
	}

	@Given("provides the project id {string}")
	public void providesTheProjectId(String projectId) throws Exception {

		softwarehuset.addProjectToProjectList(projectId, employee);
		this.projectId = projectId;
	}

	@Given("the employee with the ID {string} exists")
	public void theEmployeeWithTheIDExists(String employeeId) {
		empId = employee.getEmployeeID();
		assertTrue(employeeList.contains(softwarehuset.searchForEmployeeById(employeeId)));
	}

	@When("the CEO chooses an employee with an ID {string} to be a project manager for the project with the ID {string}")
	public void theCEOChoosesAnEmployeeWithAnIDToBeAProjectManagerForTheProjectWithTheID(String employeeId,
			String projectId) throws Exception {

		ceo = new CEO(ceoId);
		ceo.choosePM(empId, this.projectId, softwarehuset);

	}

	@Then("the system makes the employee a project manager")
	public void theSystemMakesTheEmployeeAProjectManager() {
		assertTrue(softwarehuset.searchForEmployeeById(empId).getIsEmployeePM());
	
	}

//	@Given("the employee with the ID {string} does not exist")
//	public void theEmployeeWithTheIDDoesNotExist(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("that a wrong CEO id is provided")
//	public void thatAWrongCEOIdIsProvided() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}

}
