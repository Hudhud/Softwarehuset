package whiteBoxTests;

// Amjed

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import employee.Employee;
import exceptions.OperationNotAllowedException;
import main.Softwarehuset;
import time.MockWeekHolder;

public class whiteBox3 {
	private String  projectId, pmId, projectName = "pjroName";
	Softwarehuset sw = new Softwarehuset(); 
	MockWeekHolder mw = new MockWeekHolder(sw);
	private int endWeek = 50, endYear = 2020;
	private Employee employee;
	
	@Test
	public void testProjectDoesntExist() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);

		sw.addProjectToProjectList(projectName, employee, endWeek, endYear);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
		try{
		sw.createAct("Tatatatat", "", 8,pmId, 4, endWeek, 2019, endYear);
		} catch(OperationNotAllowedException e) {
			assertEquals("A project with provided ID does not exist", e.getMessage());
		} 
	}

	@Test
	public void testStartWeekAfterDeadline() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		sw.addProjectToProjectList(projectName, employee, 30, 2019);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
		try{
		sw.createAct("Tatatatat", projectId, 8,pmId, 40, 30, 2020, 2021);
		} catch(OperationNotAllowedException e) {
			assertEquals("Please choose a start week number that is before deadline", e.getMessage());
		} 
	}
	@Test
	public void testEndWeekAfterDeadline() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		sw.addProjectToProjectList(projectName, employee, 30, 2020);

		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
		try{
		sw.createAct("Tatatatat", projectId, 8,pmId, 40, 50, 2019, 2020);
		} catch(OperationNotAllowedException e) {
			assertEquals("Please choose an end week number that is before deadline", e.getMessage());
		} 
	}
	@Test
	public void testUpdateWeeks() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		
		sw.addProjectToProjectList(projectName, employee, 50, 2020);
		
		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
				
		sw.createAct("act1", projectId, 8, pmId, 30, 40, 2020, 2020);
		
		assertTrue(sw.getProjectsFromProjectList().get(0).getStartWeek() == 30 && sw.getProjectsFromProjectList().get(0).getStartYear() ==2020);
		assertTrue(sw.searchForProjectById(projectId).getActivities().size()==1);
	}
	@Test
	public void testUpdateWeeksTo() throws Exception {
		sw.generateEmployees();
		employee = sw.getEmployeeList().get(0);
		
		sw.addProjectToProjectList(projectName, employee, 50, 2022);
		
		projectId =  sw.getProjectsFromProjectList().get(0).getId();
		
		sw.choosePM(employee.getEmployeeID(), "ceo", projectId);
		
		pmId =sw.getProjectManagerList().get(0).getEmployeeID();
		System.out.println("jj" + sw.getProjectsFromProjectList().get(0));		
		sw.createAct("act1", projectId, 8, pmId, 30, 40, 2020, 2020);
		
		assertTrue(2019 < sw.getProjectsFromProjectList().get(0).getStartYear());
		assertTrue(2020 == sw.getProjectsFromProjectList().get(0).getStartYear() && 20 < sw.getProjectsFromProjectList().get(0).getStartWeek() );

	}
}