package employee;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Project;

public class ProjectManager extends Employee{
		
	public ProjectManager(String employeeID) {
		super(employeeID);
	}


	public void createActivity(String projectID, String activityName, int expectedWorkload, Project p,Softwarehuset softwarehuset) throws Exception {
		if (softwarehuset.searchForProjectById(projectID) == null)
			throw new OperationNotAllowedException("A project with provided ID does not exist");
		
		p.addActivityToActivityList(activityName, expectedWorkload, projectID);
	}
	
	
	public void assignEmpToActivity(Employee emp) throws OperationNotAllowedException {
		if (emp.getActivityAmount() > 20) {
			throw new OperationNotAllowedException("The employee is already assigned to 20 activities");
		}
		emp.increaseActivityAmount();
	}
}
