package main;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Scanner;

import exceptions.OperationNotAllowedException;
import project.Activity;
import project.Project;

public class Softwarehuset {
	private ArrayList<Project> projectList = new ArrayList<Project>();
//	private Scanner console = new Scanner(System.in);
//	private String str = console.nextLine();
	private String id;
	private Project p;

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

	public Project createP(String projectName) throws Exception {
		id = projectIdGenerator();
		p = new Project(projectName, id);
		return p;
	}

	public void addProjectToProjectList(String projectName) throws Exception {
		this.p = createP(projectName);
		projectList.add(this.p);
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
}
