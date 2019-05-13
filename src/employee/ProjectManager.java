package employee;

import java.util.ArrayList;

import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Activity;
import project.Project;

public class ProjectManager extends Employee{
	
	private ArrayList<String> projects = new ArrayList<>();
		
	public ProjectManager(String employeeID) {
		super(employeeID);
	}


	public void createActivity(String projectID, String activityName, int expectedWorkload, Project p,Softwarehuset softwarehuset, String pmId, int startweek, int endWeek, int startYear, int endYear) throws Exception {
		p.addActivityToActivityList(activityName, expectedWorkload, projectID, startweek, endWeek, startYear, endYear);
	}
	
	public void addProjectToList(String projectId) {
		projects.add(projectId);
	}
	
	public ArrayList<String> getProjectList(){
		return projects;
	}
	
	public void assignEmpToActivity(Employee emp, Activity act) throws OperationNotAllowedException {
	
		emp.addActivitytoActivityList(act);
	}
}
