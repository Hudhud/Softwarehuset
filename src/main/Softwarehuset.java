package main;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Random;
import ceo.CEO;
import cucumber.api.java.ca.Cal;
import employee.Employee;
import employee.PermanentActivity;
import employee.ProjectManager;
import exceptions.OperationNotAllowedException;
import project.Activity;
import project.ActivityMaxChecker;
import project.Project;
import time.DateServer;

public class Softwarehuset {
	private ArrayList<Project> projectList = new ArrayList<Project>();
	private DateServer dateServer;
	private static Employee employee;
	private static ProjectManager projectManager;
	private ActivityMaxChecker activityMaxChecker = new ActivityMaxChecker();
	private static ArrayList<Employee> employeeList = new ArrayList<Employee>();
	private static ArrayList<ProjectManager> projectManagerList = new ArrayList<ProjectManager>();

	private static String employeeIdGenerator() {
		String alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
		Random rand = new Random();
		int idLength = rand.nextInt(4 - 1) + 1;
		StringBuilder sb = new StringBuilder(idLength);
		for (int i = 0; i < idLength; i++) {
			sb.append(alphabet.charAt(rand.nextInt(alphabet.length())));
		}
		return sb.toString();
	}

	private String projectIdGenerator() {
		int id;
		String lastId;
		String idStringFormat = null;
		String year = Integer.toString(getDate().get(Calendar.YEAR));
		if (getProjectsFromProjectList().size() == 0) {
			id = 1;
			idStringFormat = year + String.format("%06d", id);
		} else {
			lastId = getProjectsFromProjectList().get(getProjectsFromProjectList().size() - 1).getId();
			int idIntFormat = Integer.parseInt(lastId) + 1;
			idStringFormat = String.format("%06d", idIntFormat);
		}
		String projectID = idStringFormat;

		return projectID;
	}

	private Project createP(String projectName, Employee employee, int endWeek, int endYear) throws Exception {
		String id = projectIdGenerator();
		return employee.createProj(projectName, id, endWeek, endYear, this);
	}

	public void addProjectToProjectList(String projectName, Employee employee, int endWeek, int endYear)
			throws Exception {
		getProjectsFromProjectList().add(createP(projectName, employee, endWeek, endYear));

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

		String id;
		Employee e = null;
		for (int i = 0; i < getEmployeeList().size(); i++) {
			id = getEmployeeList().get(i).getEmployeeID();
			if (employeeId.equals(id)) {
				e = getEmployeeList().get(i);
			}
		}
		return e;
	}

	public ProjectManager searchForPMById(String pmId) throws OperationNotAllowedException {
		String id = null;
		ProjectManager pm = null;
		for (int i = 0; i < getProjectManagerList().size(); i++) {
			id = getProjectManagerList().get(i).getEmployeeID();
			if (pmId.equals(id)) {
				pm = getProjectManagerList().get(i);
			}
		}

		if (pm == null) {
			throw new OperationNotAllowedException("Please enter a valid project manager ID");
		}

		return pm;
	}

	public void createAct(String activityName, String projectID, int expectedWorkload, String pmId, int startWeek,
			int endWeek, int startYear, int endYear) throws Exception {

		int currentWeek = getDate().get(Calendar.WEEK_OF_YEAR);
		int currentYear = getDate().get(Calendar.YEAR);
		int weeksInYear = getDate().getActualMaximum(Calendar.WEEK_OF_YEAR);

		if (searchForProjectById(projectID) == null)
			throw new OperationNotAllowedException("A project with provided ID does not exist");

		if ((startWeek > searchForProjectById(projectID).getEndWeek())
				&& (startYear >= searchForProjectById(projectID).getEndYear())) {
			throw new OperationNotAllowedException("Please choose a start week number that is before deadline");
		}
		if ((endWeek > searchForProjectById(projectID).getEndWeek())
				&& (endYear >= searchForProjectById(projectID).getEndYear())) {
			throw new OperationNotAllowedException("Please choose an end week number that is before deadline");
		}

		checkTime(startYear, currentYear, endYear, startWeek, endWeek, currentWeek, weeksInYear);
		projectManager = searchForPMById(pmId);
		projectManager.createActivity(projectID, activityName, expectedWorkload, searchForProjectById(projectID), this,
				projectManager.getEmployeeID(), startWeek, endWeek, startYear, endYear);

		if (getActivitiesFromActivityList(projectID).size() == 1) {
			searchForProjectById(projectID).setStartWeek(startWeek);
			searchForProjectById(projectID).setStartYear(startYear);
		} else if ((startYear < searchForProjectById(projectID).getStartYear())
				|| (startYear == searchForProjectById(projectID).getStartYear()
						&& startWeek < searchForProjectById(projectID).getStartWeek())) {
			searchForProjectById(projectID).setStartWeek(startWeek);
			searchForProjectById(projectID).setStartYear(startYear);
		}
	}

	public ArrayList<Activity> getActivitiesFromActivityList(String projectId) {
		return searchForProjectById(projectId).getActivities();
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

	public void choosePM(String employeeId, String ceoId, String projectId) throws Exception {

		int currentWeek = getDate().get(Calendar.WEEK_OF_YEAR);
		int currentYear = getDate().get(Calendar.YEAR);
		int projectEndYear = searchForProjectById(projectId).getEndYear();
		int projectEndWeek = searchForProjectById(projectId).getEndWeek();

		if ((currentYear > projectEndYear) || (currentYear == projectEndYear && currentWeek > projectEndWeek)) {
			throw new Exception("The deadline for this project has passed");
		}

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

	public void createPermanentActivity(int startWeek, int endWeek, int startYear, int endYear, Employee employee)
			throws OperationNotAllowedException {

		int currentWeek = getDate().get(Calendar.WEEK_OF_YEAR);
		int currentYear = getDate().get(Calendar.YEAR);
		int weeksInYear = getDate().getActualMaximum(Calendar.WEEK_OF_YEAR);

		if (!getEmployeeList().contains(employee)) {
			throw new OperationNotAllowedException("Invalid ID");
		}

		checkTime(startYear, currentYear, endYear, startWeek, endWeek, currentWeek, weeksInYear);
		
		for (Activity act : employee.getActivityList()) {

			availabilityCheck(startYear, endYear, startWeek, 
					endWeek, act.getStartYear(), act.getEndYear(), 
					act.getStartWeek(), act.getEndWeek(), "The deadline for this activity has passed. You cannot assign an employee to it" );
		}
		
		employee.createPermanentActivity(startWeek, endWeek, startYear, endYear);

	}

	public ArrayList<PermanentActivity> getEmployeePermanentActivities(Employee employee) {
		return employee.getPermanentActivityList();
	}

	public void assignEmployeeToActivity(Employee employee, ProjectManager pm, String activityName)
			throws OperationNotAllowedException {

		Activity act = null;
		for (Project project : getProjectsFromProjectList()) {
			for (Activity activity : project.getActivities()) {
				if (activityName.equals(activity.getName())) {
					act = activity;
				}

			}
		}

		if ((act.getEndYear() == getDate().get(Calendar.YEAR)
				&& act.getEndWeek() < getDate().get(Calendar.WEEK_OF_YEAR))
				|| act.getEndYear() < getDate().get(Calendar.YEAR)) {
			throw new OperationNotAllowedException(
					"The deadline for this activity has passed. You cannot assign an employee to it");
		}

		pm.assignEmpToActivity(employee, act);

		if (activityMaxChecker.checker(employee.getActivityList())) {
			employee.getActivityList().remove(act);
			throw new OperationNotAllowedException("The employee is already assigned to 20 activities");
		}

		for (PermanentActivity pActivity : employee.getPermanentActivityList()) {

			availabilityCheck(act.getStartYear(), act.getEndYear(), act.getStartWeek(), 
					act.getEndWeek(), pActivity.getStartYear(), pActivity.getEndYear(), 
					pActivity.getStartWeek(), pActivity.getEndWeek(), "Employee is not vacant");
		}
	}

	public void registerWorkingTime(String activityName, String workingHours, Employee employee)
			throws OperationNotAllowedException {
		double workingHoursD;

		int currentWeek = getDate().get(Calendar.WEEK_OF_YEAR);
		int currentYear = getDate().get(Calendar.YEAR);

		if (!getEmployeeList().contains(employee)) {
			throw new OperationNotAllowedException("Invalid ID");
		}

		if (workingHours == null) {
			throw new OperationNotAllowedException("Invalid working hours");
		}

		try {
			workingHoursD = Double.parseDouble(workingHours);
		} catch (Exception e) {
			throw new OperationNotAllowedException("Not a number. Please provide a number value");
		}

		if (workingHoursD <= 0.0) {
			throw new OperationNotAllowedException("Invalid working hours");
		}

		for (int i = 0; i < getProjectsFromProjectList().size(); i++) {
			Project p = getProjectsFromProjectList().get(i);
			for (int j = 0; j < p.getActivities().size(); j++) {
				Activity act = p.getActivities().get(j);
				if (act.getName() == activityName) {
					if ((act.getEndYear() < currentYear)
							|| (act.getEndWeek() < currentWeek && act.getEndYear() == currentYear)) {
						throw new OperationNotAllowedException(
								"Activity deadline is exceeded. You cannot register time on this activity");
					}
				}

				if (!act.getName().equals(activityName)) {
					throw new OperationNotAllowedException("Unknown activity name");
				}
			}
		}

		employee.registerWorkingHours(activityName, workingHoursD);
	}

	public void setDateServer(DateServer dateServer) {
		this.dateServer = dateServer;
	}

	public Calendar getDate() {
		return dateServer.getDate();
	}

	public void checkTime(int startYear, int currentYear, int endYear, int startWeek, int endWeek, int currentWeek,
			int weeksInYear) throws OperationNotAllowedException {
		if (startYear < currentYear) {
			throw new OperationNotAllowedException("Invalid time. The time can not be in the past");
		}
		if (endYear < startYear) {
			throw new OperationNotAllowedException("End year must be after start year");
		}
		if ((startYear == endYear) && (startWeek > endWeek)) {
			throw new OperationNotAllowedException("Start week must be before end week");
		}
		if ((startYear == endYear) && (startWeek < currentWeek)) {
			throw new OperationNotAllowedException("Start week can't be in the past");
		}
		if ((startWeek > weeksInYear) || (endWeek > weeksInYear)) {
			throw new OperationNotAllowedException("Invalid week of year");
		}
	}

	public void availabilityCheck(int startYear1, int endYear1, int startWeek1, int endWeek1, int startYear2, int endYear2, int startWeek2, int endWeek2, String errorMessage) throws OperationNotAllowedException {
				
		if (startYear1 < endYear2 && endYear1 > endYear2) {
			
			throw new OperationNotAllowedException(errorMessage);
		} else if ((startYear1 == endYear2 && endYear1 == endYear2)
				&& (startWeek1 <= endWeek2 && endWeek1 >= startWeek2)) {
			throw new OperationNotAllowedException(errorMessage);
		}
	}

	public static void main(String[] args) {

	}

}
