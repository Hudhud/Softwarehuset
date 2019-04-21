package employee;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Project;

public class ProjectManager extends Employee{
	private Softwarehuset softwarehuset;

	
	public ProjectManager(String employeeID) {
		super(employeeID);
	}


	public void createActivity(int projectID, String activityName, Project p) throws Exception {
		if (softwarehuset.searchForProjectById(Integer.toString(projectID)) == null)
			throw new OperationNotAllowedException("A project with provided ID does not exist");

		p.addActivityToActivityList(activityName, projectID);
	}
	
	
	public void AssignEmp() {
		
	}
}
