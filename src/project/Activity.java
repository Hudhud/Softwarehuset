package project;

import exceptions.OperationNotAllowedException;


public class Activity   {
	private String activityName;

	public Activity(String activityName, int expectedWorkload) throws Exception {

		if (expectedWorkload < 1) {
			throw new OperationNotAllowedException("Please enter the expected workload in hours");
		}

		this.activityName = activityName;
		
	}
	
	public String getName() {
		return activityName;
	}
}
