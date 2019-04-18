package employee;
import java.util.ArrayList;
import java.util.Date;

import project.Project;

public class Employee {
	
	private String employeeID;
	private boolean isEmployeePM;
	private boolean isSignedIn;
	private boolean vacant;
	
	// This empty constructor is necessary, because sometimes we need it in some methods. 
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
	
	public boolean getIsSignedIn() {
		return isSignedIn;
	}
	
	public void setIsSignedIn(boolean isSignedIn) {
		this.isSignedIn = isSignedIn; 
	}
	
	public void setIsEmployeeVacant(boolean vacant) {
		this.vacant = vacant;
	}
	
	public boolean isEmployeeVacant() {
		return vacant;
	}
	
//	public boolean checkEmployeeId(String employeeID) {
//		return allEmployeeIDs.contains(employeeID);
//	}
	
	public Project createProj(String name, String id) throws Exception {
		Project p = new Project(name, id);
		return p;
	}
}
