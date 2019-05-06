package employee;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Project;

public class ProjectManager extends Employee{
		
	public ProjectManager(String employeeID) {
		super(employeeID);
	}


	public void createActivity(String projectID, String activityName, int expectedWorkload, Project p,Softwarehuset softwarehuset, String pmId, int startYear, int endYear, int startweek, int endWeek) throws Exception {
		p.addActivityToActivityList(activityName, expectedWorkload, projectID);
	}
	
	
	public void assignEmpToActivity(Employee emp) throws OperationNotAllowedException {
		if (emp.getActivityAmount() > 20) {
			throw new OperationNotAllowedException("The employee is already assigned to 20 activities");
		}
		emp.increaseActivityAmount();
	}
}
