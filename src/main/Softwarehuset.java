package main;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

import ceo.CEO;
import employee.Employee;
import employee.ProjectManager;
import exceptions.OperationNotAllowedException;
import project.Activity;
import project.Project;

public class Softwarehuset {
	private ArrayList<Project> projectList = new ArrayList<Project>();
//	private Scanner console = new Scanner(System.in);
//	private String str = console.nextLine();
	private String id;
//	private Project project;
	private static Employee employee;
	private static ProjectManager projectManager;
	private static ArrayList<Employee> employeeList = new ArrayList<Employee>();
	private static ArrayList<ProjectManager> projectManagerList = new ArrayList<ProjectManager>();

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
		if (getProjectsFromProjectList().size() == 0) {
			id = 1;
			idStringFormat = String.format("%06d", id);
		} else {
			lastId = getProjectsFromProjectList().get(getProjectsFromProjectList().size() - 1).getId();
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
		getProjectsFromProjectList().add(createP(projectName, employee));
	}

	public ArrayList<Project> getProjectsFromProjectList() {
		return projectList;
	}

	public Project searchForProjectByName(String projectName) {
		Project project = null;
		for (Project p : getProjectsFromProjectList()) {
			if (p.getProjectName().equals(projectName)) {
				project = p;
			}

		}
		return project;
	}

	public Project searchForProjectById(String projectId) {

		String id = null;
		Project p = null;
		for (int i = 0; i < getProjectsFromProjectList().size(); i++) {
			id = getProjectsFromProjectList().get(i).getId();
			if (projectId.equals(id)) {
				p = getProjectsFromProjectList().get(i);
			}
		}

		return p;
	}

	public Employee searchForEmployeeById(String employeeId) {

		String id = null;
		Employee e = null;
		for (int i = 0; i < getEmployeeList().size(); i++) {
			id = getEmployeeList().get(i).getEmployeeID();
			if (employeeId.equals(id)) {
				e = getEmployeeList().get(i);
			}
		}

		return e;
	}

	public boolean employeeExists(String employeeId) {
		for (Employee emp : getEmployeeList()) {
			if (emp.getEmployeeID().equals(employeeId)) {
				employee = emp;
				return true;
			}
		}

		return false;
	}

	public void createAct(String activityName, String projectID, String pmId) throws Exception {
		projectManager = new ProjectManager(pmId);
		projectManager.createActivity(projectID, activityName, searchForProjectById(projectID), this);
	}

	public ArrayList<Activity> getActivitiesFromActivityList(String projectId) {
		return searchForProjectById(projectId).getActivities();
	}

	public Activity searchForActivity(String activityName, String projectId) {

		String name = null;
		Activity activity = null;
		for (int i = 0; i < getEmployeeList().size(); i++) {
			name = getActivitiesFromActivityList(projectId).get(i).getName();
			if (activityName.equals(name)) {
				activity = getActivitiesFromActivityList(projectId).get(i);
			}
		}

		return activity;

	}

	public List<Employee> generateEmployees() {
		// We assume there are 50 employees.
		for (int i = 0; i < 50; i++) {
			employee = new Employee();
			getEmployeeList().add(employee);
		}
		employee = null;
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
			getEmployeeList().get(i).setEmployeeID(generatedIds.get(i));
		}
		return getEmployeeList();
	}

	public ArrayList<Employee> getEmployeeList() {
		return employeeList;
	}

	public ArrayList<ProjectManager> getProjectManagerList() {
		return projectManagerList;
	}

	public void choosePM(String employeeId, String ceoId, String projectId) throws OperationNotAllowedException {

		if (ceoId.equals("ceo") && searchForEmployeeById(employeeId) != null) {

			CEO ceo = new CEO(ceoId);
			ceo.choosePM(employeeId, projectId, this);
			getProjectManagerList().add(new ProjectManager(employeeId));
			// getEmployeeList().remove(getEmployeeList().indexOf(searchForEmployeeById(employeeId)));

		} else if (!ceoId.equals("ceo")) {
			throw new OperationNotAllowedException("This operation can only be performed by the CEO");
		} else {
			throw new OperationNotAllowedException("This employee does not exist");
		}

	}

	public void setPM(String pmId, String projectId) {
		searchForProjectById(projectId).setPM(pmId);
	}

	public static void main(String[] args) {
		Softwarehuset softwarehuset = new Softwarehuset();
		softwarehuset.generateEmployees();
		Calendar calendar = new GregorianCalendar(2019,11,4);
		System.out.println(calendar.getTime());
	}

}
