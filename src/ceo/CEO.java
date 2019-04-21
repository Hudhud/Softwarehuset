package ceo;

import employee.Employee;
import main.Softwarehuset;

public class CEO {
	//private String id = "ceo";

	public CEO(String id) {
		//this.id = id;
	}
	
	public void choosePM(String employeeId, String projectId) {
		Softwarehuset softwarehuset = new Softwarehuset();
		Employee employee = softwarehuset.getEmployeeList().get(Softwarehuset.getEmployeeList()
				.indexOf(softwarehuset.searchForEmployeeById(employeeId)));
		employee.setIsEmployeePM(true);
		softwarehuset.setPM(employeeId);
	}
	
	
}
