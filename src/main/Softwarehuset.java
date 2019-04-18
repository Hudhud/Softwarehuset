package main;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

import employee.Employee;
import exceptions.OperationNotAllowedException;
import project.Activity;
import project.Project;

public class Softwarehuset {
	private ArrayList<Project> projectList = new ArrayList<Project>();
//	private Scanner console = new Scanner(System.in);
//	private String str = console.nextLine();
	private String id;
	private Project p;
	private static Employee employee;
	private static ArrayList<Employee> employeeList = new ArrayList<Employee>();

	public static String employeeIdGenerator() {
		String alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
		Random rand = new Random();
		int idLength = rand.nextInt(4 - 1) + 1;
		StringBuilder sb = new StringBuilder(idLength);
		for (int i = 0; i < idLength; i++) {
			sb.append(alphabet.charAt(rand.nextInt(alphabet.length())));
		}
		return sb.toString();
	}

	public String projectIdGenerator() {
		int id;
		String lastId;
		String idStringFormat = null;
		String year = Integer.toString(Calendar.getInstance().get(Calendar.YEAR));
		if (projectList.size() == 0) {
			id = 1;
			idStringFormat = String.format("%06d", id);
		} else {
			lastId = projectList.get(projectList.size() - 1).getId();
			int idIntFormat = Integer.parseInt(lastId) + 1;
			idStringFormat = String.format("%06d", idIntFormat);
		}
		String projectID = year + idStringFormat;

		return projectID;
	}

	public Project createP(String projectName, Employee employee) throws Exception {
		id = projectIdGenerator();
		return employee.createProj(projectName, id);
	}

	public void addProjectToProjectList(String projectName, Employee employee) throws Exception {
		projectList.add(createP(projectName, employee));
	}

	public ArrayList<Project> getProjectsFromProjectList() {
		return projectList;
	}

	public Project searchForProjectByName(String projectName) {

		for (Project project : projectList) {
			if (project.getProjectName().equals(projectName)) {
				p = project;
			}

		}
		return p;
	}

	public Project searchForProjectById(String projectId) {

		for (Project project : projectList) {
			if (project.getId().equals(projectId)) {
				p = project;
			}

		}
		return p;
	}

	public void createAct(String activityName, int projectID) throws Exception {
		if (searchForProjectById(Integer.toString(projectID)) == null)
			throw new OperationNotAllowedException("A project with provided ID does not exist");

		p.addActivityToActivityList(activityName, projectID);
	}

	// er det okay det er af typen Activity, når den ikke skal kende til det
	// direkte?
	public ArrayList<Activity> getActivitiesFromActivityList() {
		return p.getActivities();
	}

	// er det okay det er af returtypen Activity, når den ikke skal kende til det
	// direkte?
	public Activity searchForActivity(String activityName) {
		return p.searchForActivity(activityName);
	}

	public List<Employee> generateEmployees() {
		// We assume there are 50 employees.
		for (int i = 0; i < 50; i++) {
			employee = new Employee();
			employeeList.add(employee);
		}
		// Generate 50 id's for the employees.
		ArrayList<String> generatedIds = new ArrayList<String>();
		while (generatedIds.size() < 50) {
			String id = employeeIdGenerator();
			if (!generatedIds.contains(id)) {
				generatedIds.add(id);
			}
		}
		// Assign the id's to the employees.
		for (int i = 0; i < 50; i++) {
			employeeList.get(i).setEmployeeID(generatedIds.get(i));
		}
		return employeeList;
	}

	public static void main(String[] args) {
		Softwarehuset softwarehuset = new Softwarehuset(); 
		softwarehuset.generateEmployees();
	}
}
