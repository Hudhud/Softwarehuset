package project;

import exceptions.OperationNotAllowedException;

public class Activity {

	private String activityName;
	private String id;

	public Activity(String activityName) throws Exception {
		
		/* Der mangler et scenarie til hvis der ikke angives et navn til en aktivitet */
		if (activityName.length() < 1) {
				throw new OperationNotAllowedException("The activity has no name. Please choose a name for the activity");
			} 

	this.activityName = activityName;
	
	}
	
	public String getName() {
		return activityName;
	}
}
