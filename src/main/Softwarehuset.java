package main;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Scanner;
import project.Project;


public class Softwarehuset {
	private ArrayList<Project> projectList = new  ArrayList<Project>();
//	private Scanner console = new Scanner(System.in);
//	private String str = console.nextLine();
	private String id;
	private Project p;
			
	public String projectIdGenerator() {
		int id;
		String lastId;
		String idStringFormat = null;
		String year = Integer.toString(Calendar.getInstance().get(Calendar.YEAR));
		if(projectList.size() == 0) {
			id = 1;
			idStringFormat = String.format("%06d", id);
		} else {
			lastId = projectList.get(projectList.size()-1).getId();
			int idIntFormat = Integer.parseInt(lastId)+1;
			idStringFormat = String.format("%06d", idIntFormat);
		}
		System.out.println("id " + year+idStringFormat);
		return year+idStringFormat;
	}
	
	public Project createP(String projectName) throws Exception {
		id = projectIdGenerator();
		p = new Project(projectName, id);
		return p;
	}
	
	public void addProjectToProjectlist(String projectName) throws Exception{
		this.p = createP(projectName);
		projectList.add(this.p);
	}
	
	public ArrayList<Project> getProjectsFromProjectList() {
		return projectList;
	}
	
	public Project searchForProject(String projectName) {

		for (Project project : projectList) {
			if (project.getProjectName().equals(projectName)) {
				p = project;
			}
			
		}
		return p;
	}
}
