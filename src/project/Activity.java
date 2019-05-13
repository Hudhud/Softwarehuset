package project;

// Amjed

import exceptions.OperationNotAllowedException;


public class Activity   {
	private String activityName;
	private int startWeek, startYear, endWeek, endYear;
	

	public Activity(String activityName, int expectedWorkload, int startWeek, int endWeek, int startYear, int endYear) throws Exception {

		if (expectedWorkload < 1) {
			throw new OperationNotAllowedException("Please enter the expected workload in hours");
		}

		this.activityName = activityName;
		this.endWeek = endWeek;
		this.endYear = endYear;
		this.startWeek = startWeek;
		this.startYear = startYear;
		
	}
	
	public String getName() {
		return activityName;
	}
	
	public int getStartWeek() {
		return startWeek;
	}
	
	public int getStartYear() {
		return startYear;
	}
	
	public int getEndWeek() {
		return endWeek;
	}
	
	public int getEndYear() {
		return endYear;
	}
}
