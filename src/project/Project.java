package project;

import java.util.ArrayList;
import java.util.Calendar;

import exceptions.OperationNotAllowedException;

public class Project {
	private String projectName;
	private String id;
	private ArrayList<Activity> activityList = new ArrayList<>();
	private String pmId;
//	private int startWeek;
	private int endWeek;
//	private int startYear;
	private int endYear;
//	
	
	public Project(String projectName, String projectID, int endWeek, int endYear) throws Exception {
		Calendar cal = Calendar.getInstance();
		int currentWeek = cal.get(Calendar.WEEK_OF_YEAR);
		int currentYear = cal.get(Calendar.YEAR);
		int weeksInYear = cal.getActualMaximum(Calendar.WEEK_OF_YEAR);
		
		if (projectName.length() < 1) {
			throw new OperationNotAllowedException("The project has no name. Please choose a name for the project");
		} else if (endYear < currentYear) {
			throw new OperationNotAllowedException("Invalid year. The provided year is in the past");
		} else if (endWeek < currentWeek) {
			throw new OperationNotAllowedException("Invalid week. The provided week is in the past");
		} else if (endWeek > weeksInYear) {
			throw new OperationNotAllowedException("Invalid week of year. There are only 52 weeks in a year");
		}

		this.projectName = projectName;
		this.id = projectID;
		this.endWeek = endWeek;
		this.endYear = endYear;
	}

	public String getProjectName() {
		return projectName;
	}

	public String getId() {
		return id;
	}

	private Activity createActivity(String activityName, int expectedWorkload, String projectID, int startWeek, int endWeek, int startYear, int endYear) throws Exception {

		for (int i = 0; i < getActivities().size(); i++) {
			Activity a = getActivities().get(i);
			if (a.getName().equals(activityName)) {
				throw new OperationNotAllowedException("The name already exists");
			}
		}

		if (activityName == null) {
			throw new OperationNotAllowedException("Please type a name for the activity");
		}

		Activity a = new Activity(activityName, expectedWorkload, startWeek, endWeek, startYear, endYear);
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

	public void addActivityToActivityList(String activityName, int expectedWorkload, String projectID, int startWeek, int endWeek, int startYear, int endYear)
			throws Exception {
		Activity a = createActivity(activityName, expectedWorkload, projectID, startWeek, endWeek, startYear, endYear);
		getActivities().add(a);
	}

	public ArrayList<Activity> getActivities() {
		return activityList;
	}

//	public Activity searchForActivity(String activityName) {
//		Activity a = null;
//		for (Activity activity : getActivities()) {
//			if (activity.getName().equals(activityName)) {
//				a = activity;
//			}
//			
//		}
//		return a;		
//	}

	public void setPM(String pmId) {
		this.pmId = pmId;
	}

//	public void setId(String id) {
//		this.id = id;
//	}
	
//	public void setStartWeek(int startWeek) {
//		this.startWeek = startWeek;
//	}
//	
	public int getEndWeek() {
		return endWeek;
	}
//	
//	public void setStartYear(int startYear) {
//		this.startYear = startYear;
//	}
//	
	public int getEndYear() {
		return endYear;
	}

}
