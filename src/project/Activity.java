package project;

import exceptions.OperationNotAllowedException;


public class Activity   {
	private String activityName;
	private int endWeek, endYear;
	

	public Activity(String activityName, int expectedWorkload, int startWeek, int endWeek, int startYear, int endYear) throws Exception {

		if (expectedWorkload < 1) {
			throw new OperationNotAllowedException("Please enter the expected workload in hours");
		}

		this.activityName = activityName;
		this.endWeek = endWeek;
		this.endYear = endYear;
		
	}
	
	public String getName() {
		return activityName;
	}
	
	public int getEndWeek() {
		return endWeek;
	}
	
	public int getEndYear() {
		return endYear;
	}
}
