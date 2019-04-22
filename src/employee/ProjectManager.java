package employee;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Project;

public class ProjectManager extends Employee{
		
	public ProjectManager(String employeeID) {
		super(employeeID);
	}


	public void createActivity(String projectID, String activityName, Project p,Softwarehuset softwarehuset) throws Exception {
		if (softwarehuset.searchForProjectById(projectID) == null)
			throw new OperationNotAllowedException("A project with provided ID does not exist");
		
		p.addActivityToActivityList(activityName, projectID);
	}
	
	
//	public void AssignEmp() {
//		
//	}
}
