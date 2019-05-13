package whiteBoxTests;

// Hadi

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import time.MockWeekHolder;
import employee.Employee;

public class whiteBox4 {
	Softwarehuset sw = new Softwarehuset(); 
	MockWeekHolder mw = new MockWeekHolder(sw);
	private Employee employee;
	String projectName, projectId, pmId;

	@Test
	public void testEmployeeDoesntExist() throws OperationNotAllowedException {

		try{
			sw.registerWorkingTime("act1", "8", null);
		} catch(OperationNotAllowedException e) {
			assertEquals("Invalid ID", e.getMessage());
		} 
	}
	@Test
	public void testInvalidWorkingHours() throws OperationNotAllowedException {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		try{
			sw.registerWorkingTime("act1",null,employee);
		} catch(OperationNotAllowedException e) {
			assertEquals("Invalid working hours", e.getMessage());
		} 
	}
	@Test
	public void testNotNumber() throws OperationNotAllowedException {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		try{
			sw.registerWorkingTime("act1","aaa",employee);
		} catch(OperationNotAllowedException e) {
			assertEquals("Not a number. Please provide a number value", e.getMessage());
		} 
	}
	@Test
	public void testNegativWorkingHours() throws OperationNotAllowedException {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		try{
			sw.registerWorkingTime("act1","-2",employee);
		} catch(OperationNotAllowedException e) {
			assertEquals("Invalid working hours", e.getMessage());
		} 
	}
	@Test
	public void testActivityDeadlineExceede() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		
		sw.addProjectToProjectList("ProjName", employee, 50, 2020);
		
		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
				
		sw.createAct("act1", projectId, 8, pmId, 30,34, 2019, 2019);
		mw.advancedDateByWeeks(50);
		
		try{
			sw.registerWorkingTime("act1","8",employee);
		} catch(OperationNotAllowedException e) {
			assertEquals("Activity deadline is exceeded. You cannot register time on this activity", e.getMessage());
		}
	}	
	
	@Test
	public void testUnknowActName() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		
		sw.addProjectToProjectList("ProjName", employee, 50, 2020);
		
		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
				
		sw.createAct("act1", projectId, 8, pmId, 30,34, 2020, 2020);
		
		try{
			sw.registerWorkingTime("act2","8",employee);
		} catch(OperationNotAllowedException e) {
			assertEquals("Unknown activity name", e.getMessage());
		}
	}
}