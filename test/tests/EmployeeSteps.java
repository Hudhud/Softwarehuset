package tests;

import static org.hamcrest.CoreMatchers.*;

import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertThat;

//import static org.junit.Assert.assertThat;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import exceptions.ErrorMessageHolder;
import exceptions.OperationNotAllowedException;
import project.Project;

public class EmployeeSteps {
	Project p; 
	String projectName;
	private ErrorMessageHolder errorMessageHolder;
	
	// from create-a-new-project.feature
	
	@Given("that a name for the project is provided")
	public void thatANameForTheProjectIsProvided() {
		projectName = null;
	}

	@When("a new project is created")
	public void a_new_project_is_created() throws Exception {
		
		try {
			p = new Project(projectName);
		} catch (OperationNotAllowedException e) {
			System.out.println(e.getMessage());
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	
	@Then("the system creates a project with the provided name {string} and a consecutive number.")
	public void theSystemCreatesAProjectWithTheProvidedNameAndAConsecutiveNumber(String projectName) {
		assertEquals(projectName, p.getProjectName());
	}


//	@Given("that a name {string} for the project is not provided")
//	public void thatANameForTheProjectIsNotProvided(String projectName) {
//		System.out.println("dada "+ this.projectName);
//		this.projectName = projectName;
//	}
	
	@Then("the system provides an error message {string}")
	public void theSystemProvidesAnErrorMessage(String errorMessage) throws Exception {
		System.out.println(errorMessageHolder.getErrorMessage());
		assertThat(errorMessageHolder.getErrorMessage(),is(equalTo(errorMessage)));
	}
	
//	
//	//from create-a-permanent-activity.feature
//	
//	@Given("that employee  with ID {string} provides information about the time period of the permanent activity")
//	public void that_employee_with_ID_provides_information_about_the_time_period_of_the_permanent_activity(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("the employee creates a permanent activity")
//	public void the_employee_creates_a_permanent_activity() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Then("the permanent activity is created")
//	public void the_permanent_activity_is_created() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("that employee with ID {string} does not provide any information about the time period of the permanent activity")
//	public void that_employee_with_ID_does_not_provide_any_information_about_the_time_period_of_the_permanent_activity(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Then("the employee gets an error {string}")
//	public void the_employee_gets_an_error(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//	
//	//from register-working-time.feature
//	
//	@Given("that the employee with ID {string} is signed in")
//	public void that_the_employee_with_ID_is_signed_in(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("the employee provides information about his\\/her working time")
//	public void the_employee_provides_information_about_his_her_working_time() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("the employee wants to register his\\/her working time for an activity with ID {int}")
//	public void the_employee_wants_to_register_his_her_working_time_for_an_activity_with_ID(Integer int1) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Then("the employee has registered his\\/her working time")
//	public void the_employee_has_registered_his_her_working_time() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@Given("that the employee with ID {string} is not signed in")
//	public void that_the_employee_with_ID_is_not_signed_in(String string) {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}
//
//	@When("the employee signs in with a wrong ID")
//	public void the_employee_signs_in_with_a_wrong_ID() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}


}