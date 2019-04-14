package tests;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProjectManagerSteps {
		
	//from create-a-new-activity.feature
	
	@Given("that the project manager provides the ID {int} for a project")
	public void that_the_project_manager_provides_the_ID_for_a_project(Integer int1) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("the project manager creates an activity")
	public void the_project_manager_creates_an_activity() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("the system creates an activity with a consecutive number")
	public void the_system_creates_an_activity_with_a_consecutive_number() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("that the project manager provides the ID of a project, which has not been created")
	public void that_the_project_manager_provides_the_ID_of_a_project_which_has_not_been_created() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


	
	// from assign-an-employee-to-activity.feature
	@Given("that the employee with ID {string} is vacant")
	public void that_the_employee_with_ID_is_vacant(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("the project manager is signed in")
	public void the_project_manager_is_signed_in() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("the project manager wants to add an employee to an activity")
	public void the_project_manager_wants_to_add_an_employee_to_an_activity() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("the employee is assigned to the activity")
	public void the_employee_is_assigned_to_the_activity() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("that the employee with ID {string} is not vacant")
	public void that_the_employee_with_ID_is_not_vacant(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("the project manager gets an error {string}")
	public void the_project_manager_gets_an_error(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("that the employee with ID {string} is assigned to {int} activities in one week")
	public void that_the_employee_with_ID_is_assigned_to_activities_in_one_week(String string, Integer int1) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("there are no permanent activities included")
	public void there_are_no_permanent_activities_included() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("the project manager wants to assign the employee to another activity in the same week")
	public void the_project_manager_wants_to_assign_the_employee_to_another_activity_in_the_same_week() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("the project manager gets the error {string}")
	public void the_project_manager_gets_the_error(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}
}
