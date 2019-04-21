package project;

import java.util.ArrayList;
import java.util.Calendar;

import exceptions.OperationNotAllowedException;

public class Project{
	private String projectName;
	private String id;
	private ArrayList<Activity> activityList = new ArrayList<>();
	private String pmId;

	public Project(String projectName, String projectID) throws Exception {
		if (projectName.length() < 1) {
			throw new OperationNotAllowedException("The project has no name. Please choose a name for the project");
		}

		this.projectName = projectName;
		this.id = projectID;

	}

	public String getProjectName() {
		return projectName;
	}

	public String getId() {
		return id;
	}

	public Activity createActivity(String activityName, int projectID) throws Exception {

		Activity a = new Activity(activityName, generateActivityID(projectID));
		return a;
	}

	private String generateActivityID(int projectID) {

		int id;
		String lastId;
		String idStringFormat = null;

		if (activityList.size() == 0) {
			id = 1;
			idStringFormat = String.format("%02d", id);
		} else {
			lastId = activityList.get(activityList.size() - 1).getId();
			int idIntFormat = Integer.parseInt(lastId) + 1;
			idStringFormat = String.format("%02d", idIntFormat);
		}
		String activityID = projectID + idStringFormat;

		return activityID;
	}
	
	public void addActivityToActivityList(String activityName, int projectID) throws Exception{
		Activity a = createActivity(activityName, projectID);
		activityList.add(a);
	}

	public ArrayList<Activity> getActivities() {
		return activityList;
	}

	public Activity searchForActivity(String activityName) {
		Activity a = null;
		for (Activity activity : activityList) {
			if (activity.getName().equals(activityName)) {
				a = activity;
			}
			
		}
		return a;		
	}

	public void setPM(String pmId) {
		this.pmId = pmId;
	} 


//	public void setId(String id) {
//		this.id = id;
//	}

}
