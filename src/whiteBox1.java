import static org.junit.Assert.*;
import java.util.Calendar;
import org.junit.Test;
import employee.Employee;
import employee.ProjectManager;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import time.MockWeekHolder;
public class whiteBox1 {

	private String employeeId, ceoId = "ceo", projectId, projectName = "pjroName";

	private int endWeek, endYear = 2019;
	private Employee employee;
	Softwarehuset sw = new Softwarehuset(); 
	MockWeekHolder mw = new MockWeekHolder(sw);

	@Test
	public void testProjectManegerId() throws Exception {
		sw.generateEmployees();

		endWeek = sw.getDate().get(Calendar.WEEK_OF_YEAR) + 5;

		employee = sw.getEmployeeList().get(0);
		employeeId = employee.getEmployeeID();
		
		sw.addProjectToProjectList(projectName, employee, endWeek, endYear);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		 
		String actual = null;
		
		sw.choosePM(employee.getEmployeeID(), ceoId, projectId);

		String expected = employeeId;

		for (ProjectManager pm : sw.getProjectManagerList()) {

			if (pm.getEmployeeID() == employeeId) {
				actual = pm.getEmployeeID();
			}
		}
		assertTrue(employee.getIsEmployeePM());
	}
	
	@Test
	public void testWithWrongCEOid() throws Exception {
		sw.generateEmployees();

		endWeek = sw.getDate().get(Calendar.WEEK_OF_YEAR) + 5;

		employee = sw.getEmployeeList().get(0);
		employeeId = employee.getEmployeeID();
		
		sw.addProjectToProjectList(projectName, employee, endWeek, endYear);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		 		
		sw.choosePM(employee.getEmployeeID(), ceoId, projectId);

		try{
			sw.choosePM(sw.getEmployeeList().get(0).getEmployeeID(), "ABC", projectId);
		} catch(OperationNotAllowedException e) {
			assertEquals("This operation can only be performed by the CEO", e.getMessage());
		} 
	}
	@Test
	public void testEmplyeeDoesntExist() throws Exception {
		sw.generateEmployees();

		endWeek = sw.getDate().get(Calendar.WEEK_OF_YEAR) + 5;

		employee = sw.getEmployeeList().get(0);
		employeeId = employee.getEmployeeID();
		
		sw.addProjectToProjectList(projectName, employee, endWeek, endYear);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		 		
		sw.choosePM(employee.getEmployeeID(), ceoId, projectId);

		try{
			sw.choosePM("ABCDE", "ceo", sw.getProjectsFromProjectList().get(0).getId());
		} catch(OperationNotAllowedException e) {
			assertEquals("This employee does not exist", e.getMessage());
		} 
	}
	@Test
	public void testDeadlinePassed() throws Exception {
		sw.generateEmployees();

		endWeek = sw.getDate().get(Calendar.WEEK_OF_YEAR) + 5;
		employee = sw.getEmployeeList().get(0);
		sw.addProjectToProjectList(projectName, employee, endWeek, endYear);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();

	try{
		employeeId =sw.getEmployeeList().get(0).getEmployeeID();
		sw.addProjectToProjectList(projectName, employee, 51, 2019);
		mw.advancedDateByWeeks(2);
		sw.choosePM(employeeId, "ceo",sw.getProjectsFromProjectList().get(0).getId());
	} catch(OperationNotAllowedException e) {
		assertEquals("The deadline for this project has passed", e.getMessage());
		}
	}
}