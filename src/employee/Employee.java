package employee;

import java.util.ArrayList;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import project.Project;

public class Employee {

	private String employeeID;
	private boolean isEmployeePM = false;
	//private boolean vacant;
	private ArrayList<PermanentActivity> permanentActivityList = new ArrayList<PermanentActivity>();
	private int activityCounter;
	private ArrayList<ActivityWorkingHours> activityWorkingHoursList = new ArrayList<>();

	// This empty constructor is necessary, because sometimes we need it in some
	// methods.
	public Employee() {
	}

	public Employee(String employeeID) {
		this.employeeID = employeeID;
	}

	public String getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(String employeeID) {
		this.employeeID = employeeID;
	}

	public boolean getIsEmployeePM() {
		return isEmployeePM;
	}

	public void setIsEmployeePM(boolean isEmployeePM) {
		this.isEmployeePM = isEmployeePM;
	}

//	public void setIsEmployeeVacant(boolean vacant) {
//		this.vacant = vacant;
//	}
//
//	public boolean isEmployeeVacant() {
//		return vacant;
//	}

	public Project createProj(String name, String id, int endWeek, int endYear, Softwarehuset softwarehuset) throws Exception {
		Project p = new Project(name, id, endWeek, endYear, softwarehuset);
		return p;
	}

	public void createPermanentActivity(int startWeek, int endWeek, int startYear, int endYear) throws OperationNotAllowedException {
		
		PermanentActivity permanentActivity = new PermanentActivity(startWeek, endWeek, startYear, endYear);
		permanentActivityList.add(permanentActivity);
	}

	public ArrayList<PermanentActivity> getPermanentActivityList() {
		return permanentActivityList;
	}

	public void increaseActivityAmount() {
		activityCounter++;
	}

	public int getActivityAmount() {
//		System.out.println(activityCounter);
		return activityCounter;
	}
	
	public void registerWorkingHours(String activityName, double workingHours) throws OperationNotAllowedException {
		ActivityWorkingHours awh = new ActivityWorkingHours(activityName, workingHours);
		getActivityWorkingHoursList().add(awh);
	}

	public ArrayList<ActivityWorkingHours> getActivityWorkingHoursList() {
		return activityWorkingHoursList;
	}


}
