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

	public Activity createActivity(String activityName, String projectID) throws Exception {

		for (int i = 0; i < getActivities().size(); i++) {
			Activity a = getActivities().get(i);
			if (a.getName().equals(activityName)) {
				throw new OperationNotAllowedException("The name already exists");
			}
		}
		
		Activity a = new Activity(activityName);
		return a;
	}

//	private String generateActivityID(String projectID) {
//
//		int id;
//		String lastId;
//		String idStringFormat = null;
//
//		if (getActivities().size() == 0) {
//			id = 1;
//			idStringFormat = String.format("%02d", id);
//		} else {
//			lastId = getActivities().get(getActivities().size() - 1).getId();
//			int idIntFormat = Integer.parseInt(lastId) + 1;
//			idStringFormat = String.format("%02d", idIntFormat);
//		}
//		String activityID = projectID + idStringFormat;
//
//		return activityID;
//	}
	
	public void addActivityToActivityList(String activityName, String projectID) throws Exception{
		Activity a = createActivity(activityName, projectID);
		getActivities().add(a);
	}

	public ArrayList<Activity> getActivities() {
		System.out.println("act size "+activityList.size());
		return activityList;
	}

	public Activity searchForActivity(String activityName) {
		Activity a = null;
		for (Activity activity : getActivities()) {
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
