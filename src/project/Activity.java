package project;

import exceptions.OperationNotAllowedException;

public class Activity {

	private String activityName;
	private String id;

	public Activity(String activityName) throws Exception {
		
		if (activityName.length() < 1) {
				throw new OperationNotAllowedException("The activity has no name. Please type a name for the activity");
			} 

	this.activityName = activityName;
	
	}
	
	public String getName() {
		return activityName;
	}
}
