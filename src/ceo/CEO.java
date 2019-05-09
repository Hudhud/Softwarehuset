package ceo;

import employee.Employee;
import main.Softwarehuset;

public class CEO {
	//private String id = "ceo";

	public CEO(String id) {
		//this.id = id;
	}
	
	public void choosePM(String employeeId, String projectId,Softwarehuset softwarehuset)  {	
		Employee employee = softwarehuset.getEmployeeList().get(softwarehuset.getEmployeeList()
				.indexOf(softwarehuset.searchForEmployeeById(employeeId)));
		employee.setIsEmployeePM(true);
		softwarehuset.setPM(employeeId, projectId);
	}
	
	
}
